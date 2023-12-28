import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { calculatePower } from "../../utils/pokemonUtils";

const PokemonTableRow = ({ pokemonData }) => {
  return (
    <>
      {pokemonData.map((pokemon) => (
        <TableRow key={pokemon.id}>
          <TableCell>{pokemon.id}</TableCell>
          <TableCell align="center">{pokemon.name}</TableCell>
          <TableCell align="center">{pokemon.type.join(", ")}</TableCell>
          <TableCell align="center">{pokemon.hp}</TableCell>
          <TableCell align="center">{pokemon.attack}</TableCell>
          <TableCell align="center">{pokemon.defense}</TableCell>
          <TableCell align="center">{pokemon.special_attack}</TableCell>
          <TableCell align="center">{pokemon.special_defense}</TableCell>
          <TableCell align="center">{pokemon.speed}</TableCell>
          <TableCell align="center">{calculatePower(pokemon)}</TableCell>
        </TableRow>
      ))}
    </>
  );
};

export default PokemonTableRow;
