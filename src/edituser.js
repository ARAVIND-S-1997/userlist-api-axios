import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { apiurl } from "./userlist"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Edit user

export function Edituser() {
    const [userDetails, setuserDetails] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        axios({ url: `${apiurl}/${id}`, method: "GET" })
            .then((value) => setuserDetails(value.data))
    }, [id])
    return userDetails ? <UpdateUser userDetails={userDetails} /> : "";
}

// update form component

function UpdateUser({ userDetails }) {
    const [name, setname] = useState(userDetails.name);
    const [emailid, setemailid] = useState(userDetails.emailid);
    const [rollno, setrollno] = useState(userDetails.rollno);
    const [location, setlocation] = useState(userDetails.location);
    const history = useHistory()
    const { id } = useParams()
    const updateReq = () => {
        const userdetails = {
            name,
            emailid,
            rollno,
            location
        }
        axios({ url: `${apiurl}/${id}`, method: "PUT", data: userdetails })
    }
    return (
        <div>
            <div id="table">
                <div id="top">
                    <h3>User List Dashboard</h3>
                </div>
            </div>
            <div>
                <Button onClick={() => { history.goBack(); }} variant="outlined" startIcon={< KeyboardBackspaceIcon />} />
            </div>
            <div className='inputfieldcontainer'>
                <TextField className='inputfields' value={name} onChange={(event) => setname(event.target.value)} label="Enter the Name" id="Name" variant="filled" />
                <TextField className='inputfields' value={emailid} onChange={(event) => setemailid(event.target.value)} label="Enter the Email id" id="Email id" variant="filled" />
                <TextField className='inputfields' value={rollno} onChange={(event) => setrollno(event.target.value)} label="Enter the Roll Number" id="Roll Number" variant="filled" />
                <TextField className='inputfields' value={location} onChange={(event) => setlocation(event.target.value)} label="Enter the Location" id="location" variant="filled" />
                <Button onClick={updateReq} variant="contained">save</Button>
            </div>
        </div>
    )
}