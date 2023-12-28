import React, { useState, useEffect, useMemo } from "react";
import { TableContainer, Paper, Typography, Table } from "@mui/material";
import PokemonTableHeader from "./PokemonTableHeader";
import PokemonTableRow from "./PokemonTableRow";
import PokemonTablePagination from "./PokemonTablePagination";
import { calculatePower } from "../../utils/pokemonUtils";
import TextInput from "../Elements/TextInput";
import "../../styles/pokemonTable.css";
import { LuSearch } from "react-icons/lu";
import { TbHeartBolt } from "react-icons/tb";

const PokemonTable = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [searchName, setSearchName] = useState("");
  const [searchThreshold, setSearchThreshold] = useState("");
  const [minPower, setMinPower] = useState(0);
  const [maxPower, setMaxPower] = useState(0);

  // Fetch data from the pokemon.json file
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/pokemon.json");
        const data = await response.json();
        setPokemonData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Filter data based on search criteria
  const filteredData = useMemo(() => {
    // Use the pokemonData array and filter it based on search criteria
    return pokemonData.filter((pokemon) => {
      // Calculate the power of the current Pokemon using the calculatePower function
      const power = calculatePower(pokemon);

      // Check if the Pokemon passes both search conditions:
      // 1. Search by Name: Case-insensitive search if the name includes the searchName
      // 2. Search by Threshold: Check if the power is greater than or equal to the searchThreshold
      return (
        (searchName === "" ||
          pokemon.name.toLowerCase().includes(searchName.toLowerCase())) &&
        (searchThreshold === "" || power >= parseInt(searchThreshold, 10))
      );
    });
  }, [pokemonData, searchName, searchThreshold]);

  // Calculate Min and Max power for the current page
  useEffect(() => {
    const startIdx = currentPage * pageSize;
    const endIdx = startIdx + pageSize;
    const currentPageData = filteredData.slice(startIdx, endIdx);

    if (currentPageData.length > 0) {
      const powers = currentPageData.map(calculatePower);
      setMinPower(Math.min(...powers));
      setMaxPower(Math.max(...powers));
    } else {
      setMinPower(0);
      setMaxPower(0);
    }
  }, [currentPage, pageSize, filteredData]);

  return (
    <div>
      <div className="container">
        <div className="input-container">
          <TextInput
            label={
              <span>
                <LuSearch /> Search
              </span>
            }
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
          <TextInput
            label={
              <span>
                <TbHeartBolt /> Power threshold
              </span>
            }
            value={searchThreshold}
            onChange={(e) => setSearchThreshold(e.target.value)}
          />
        </div>
        <Typography variant="body2">Min Power: {minPower}</Typography>
        <Typography variant="body2">Max Power: {maxPower}</Typography>
      </div>
      <TableContainer className="table-container" component={Paper}>
        <Table>
          <PokemonTableHeader />
          <PokemonTableRow
            pokemonData={filteredData.slice(
              currentPage * pageSize,
              (currentPage + 1) * pageSize
            )}
          />
        </Table>
      </TableContainer>

      <PokemonTablePagination
        count={filteredData.length}
        rowsPerPage={pageSize}
        page={currentPage}
        onPageChange={(event, newPage) => setCurrentPage(newPage)}
        onRowsPerPageChange={(event) =>
          setPageSize(parseInt(event.target.value, 10))
        }
      />
    </div>
  );
};

export default PokemonTable;
