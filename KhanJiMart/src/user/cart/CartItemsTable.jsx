import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CartList } from "../../Product/product";
import CartQuantity from "./CartQuantity";
import { RxCross2 } from "react-icons/rx";

const CartItemsTable = () => {
  return (
    <TableContainer sx={{ width: "78%", margin: "auto", marginTop: "3rem" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "20%" }}>Product</TableCell>
            <TableCell
              align="right"
              sx={{ display: { xs: "none", sm: "table-cell" } }}
            >
              Price
            </TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell
              align="right"
              sx={{ display: { xs: "none", sm: "table-cell" } }}
            >
              Subtotal
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CartList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{ display: "flex", alignItems: "center", gap: "1rem",position: 'relative', }}
              >
               <span className="absolute top-[24%] p-1 rounded-full bg-red-500 text-white text-xs font-bold border-2 border-white flex items-center justify-center w-5 h-5">
                  <RxCross2  />
                </span>
                <img className="w-[70px]" src={row.img} alt="" />
                <span >{row.text}</span>
              </TableCell>
              <TableCell
                align="right"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                {row.priceActual}
              </TableCell>
              <TableCell align="right">
                {" "}
                <CartQuantity />
              </TableCell>
              <TableCell
                align="right"
                sx={{ display: { xs: "none", sm: "table-cell" } }}
              >
                {row.subTotal}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartItemsTable;
