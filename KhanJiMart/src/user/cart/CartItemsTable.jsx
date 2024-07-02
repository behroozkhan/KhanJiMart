import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CartList } from '../../Product/product';



const CartItemsTable = () => {
  return (
    <TableContainer sx={{width: '78%',margin:'auto',marginTop:'3rem'}}>
      <Table >
        <TableHead >
          <TableRow >
            <TableCell sx={{width: '20%'}}>Product</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Quanitity</TableCell>
            <TableCell align="right">Subtotal</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CartList.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{display:'flex', alignItems:'center', gap:'1rem'}}>
                    <img className='w-[50px]' src={row.img} alt="" 
                    />
                    <span>{row.text}</span>
              </TableCell>
              <TableCell align="right">{row.priceActual}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.subTotal}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}



export default CartItemsTable;
