import React from "react";
import { TableHead, TableRow, TableCell } from "@mui/material";

const PokemonTableHeader = () => {
  return (
    <TableHead>
      <TableRow sx={{ background: "#EDF3F8" }}>
        <TableCell>ID</TableCell>
        <TableCell align="center">Name</TableCell>
        <TableCell align="center">Type</TableCell>
        <TableCell align="center">HP</TableCell>
        <TableCell align="center">Attack</TableCell>
        <TableCell align="center">Defense</TableCell>
        <TableCell align="center">Special Attack</TableCell>
        <TableCell align="center">Special Defense</TableCell>
        <TableCell align="center">Speed</TableCell>
        <TableCell align="center">Power</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default PokemonTableHeader;
