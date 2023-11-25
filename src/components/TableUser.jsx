/* eslint-disable react/prop-types */

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { showFormattedDate, showFormattedTime } from '../utils/fromat-date';
import ButtonAction from './ButtonAction';

const TableUser = ({ users }) => {
    return (
        <TableContainer component={Paper} >
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
                                    <ButtonAction id={user.id} />
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        </TableContainer >
    )
}
export default TableUser