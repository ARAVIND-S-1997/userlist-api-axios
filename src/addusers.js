import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { apiurl } from './userlist';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
// Adduser

export function Adduser() {
    const [name, setname] = useState("");
    const [emailid, setemailid] = useState("");
    const [rollno, setrollno] = useState("");
    const [location, setlocation] = useState("");
    const history = useHistory();
    const userDataReq = () => {
        const userValues = {
            name,
            emailid,
            rollno,
            location
        }
        axios({ url: `${apiurl}`, method: "POST", data: userValues })
    }
    return (
        <div>
            <div id="table">
                <div id="top">
                    <h3>User List Dashboard</h3>
                </div>
            </div>
            <div>
            <Button  onClick={() => { history.goBack(); }} variant="outlined" startIcon={< KeyboardBackspaceIcon  />}/>
            </div>
            <div className='inputfieldcontainer'>
                <TextField className='inputfields' onChange={(event) => setname(event.target.value)} label="Enter the Name" id="Name" variant="filled" />
                <TextField className='inputfields' onChange={(event) => setemailid(event.target.value)} label="Enter the Email id" id="Email id" variant="filled" />
                <TextField className='inputfields' onChange={(event) => setrollno(event.target.value)} label="Enter the Roll Number" id="Roll Number" variant="filled" />
                <TextField className='inputfields' onChange={(event) => setlocation(event.target.value)} label="Enter the Location" id="location" variant="filled" />
                <Button onClick={userDataReq} variant="contained">Add user</Button>
            </div>
        </div>
    )
}