import * as React from 'react';
import './Video.css'
import videoC from '../../assets/video/video.mp4'
// ****** material UI******
import { Box } from '@mui/material';
// ****** material UI******

export const Video = () => {

    return (
        <section className="Video" id="Video">
            <Box sx={{ maxWidth: "50%", minWidth:'50%', flexGrow: 1, display: 'flex', justifyContent:'center', alignItems:'center' }} >
                <video src={videoC} autoPlay loop controls style={{width:'100%'}} ></video>
            </Box>
        </section>
    );
}