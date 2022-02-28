import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import axios from "axios"
import { useState, useEffect } from 'react';


export const apiurl = "https://6216675e7428a1d2a366e2a7.mockapi.io/userlist"

export default function BasicTable() {
    const history = useHistory()
    const [finalData, setfinalData] = useState([]);
    const userDataReq = () => {
        axios.get(`${apiurl}`)
            .then((value) => setfinalData(value.data))
            .catch()
    }

    const deleteUser = (id) => {
        axios({ url: `${apiurl}/${id}`, method: "DELETE" })
            .then(() => userDataReq())
    }
    useEffect(userDataReq, [])

    return (
        <div>
            <div id="table">
                <div id="top">
                    <h3>User List Dashboard</h3>
                    <div className="links">
                        <Link href="/">Home</Link>
                        <Link href="/adduser">Add user</Link>
                    </div>
                </div>
            </div>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="centre">Name</TableCell>
                            <TableCell align="justify">Email id</TableCell>
                            <TableCell align="justify">Roll no</TableCell>
                            <TableCell align="justify">Location</TableCell>
                            <TableCell align="justify">Edit User</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody >
                        {finalData.map(({ id, name, emailid, rollno, location }) => (
                            <TableRow
                                key={id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {name}
                                </TableCell>
                                <TableCell align="justify">{emailid}</TableCell>
                                <TableCell align="justify">{rollno}</TableCell>
                                <TableCell align="justify">{location} </TableCell>
                                <TableCell align="justify">
                                    <IconButton onClick={()=>{history.push(`/edituser/${id}`)}}
                                        color="primary" aria-label="editbutton">
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton onClick={() => deleteUser(id)}
                                        color='error' aria-label="deletebutton">
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
}

