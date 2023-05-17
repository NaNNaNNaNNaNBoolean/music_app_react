import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {ShowSongs} from '../components';

const Songlist = () => {
    const navigate = useNavigate();
    return (
        <>
            <ShowSongs />
            <button onClick={() => navigate("/About")}>Back</button>
        </>
    )
}

export default Songlist;
