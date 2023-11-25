/* eslint-disable react/prop-types */

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { RiDeleteBinFill, RiEdit2Fill } from "react-icons/ri";
import { BsFillTicketDetailedFill } from "react-icons/bs";
import { useState } from 'react';
import DialogDelete from './DialogDelete';
import { showFormattedDate, showFormattedTime } from '../utils/showFromattedDate';
const TableUser = ({ users }) => {
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <TableContainer component={Paper} >
            <DialogDelete open={open} handleClose={handleClose} />
            <Table sx={{ minWidth: 650 }} aria-label="simple table" className='table-user'>
                <TableHead className="table-user__head">
                    <TableRow>
                        <TableCell>Nama</TableCell>
                        <TableCell >Alamat</TableCell>
                        <TableCell >P/W</TableCell>
                        <TableCell >Tanggal Lahir</TableCell>
                        <TableCell>Tanggal Input</TableCell>
                        <TableCell align='center'>Aksi</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map((user) => (
                            <TableRow
                                key={user.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row" className="table-user__cell" sx={{ borderBottomColor: "#80CBC4" }}>
                                    {user.name}
                                </TableCell>
                                <TableCell sx={{ borderBottomColor: "#80CBC4" }}>{user.address}</TableCell>
                                <TableCell sx={{ borderBottomColor: "#80CBC4" }}>{user.gender === 'p' ? 'Wanita' : 'Pria'}</TableCell>
                                <TableCell sx={{ borderBottomColor: "#80CBC4" }}>{showFormattedDate(user.born_date)}</TableCell>
                                <TableCell sx={{ borderBottomColor: "#80CBC4" }}>{showFormattedDate(user.created_at) + " " + showFormattedTime(user.created_at)}</TableCell>
                                <TableCell align="center" sx={{ borderBottomColor: "#80CBC4" }}>
                                    <button className="btn-view" onClick={() => { alert("mau lihat?") }}><BsFillTicketDetailedFill /></button>
                                    <button className="btn-edit" onClick={() => { alert("mau edit?") }}><RiEdit2Fill /></button>
                                    <button className="btn-delete" onClick={handleClickOpen}><RiDeleteBinFill /></button>
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}
export default TableUser