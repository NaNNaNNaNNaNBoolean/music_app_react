import React from 'react';
import { useNavigate} from 'react-router-dom';
import {ShowSongs} from '../components';

const Songlist = () => {
    const navigate = useNavigate();
    return (
        <>
            <ShowSongs />
            <button onClick={() => navigate("/Albums")}>Back</button>
        </>
    )
}

export default Songlist;
