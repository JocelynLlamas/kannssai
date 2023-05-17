import { useState, useRef, React } from 'react';
import '../Player/Player.css'
import music from '../../assets/music/mananitas.mp3';
import cover from '../../assets/cover1.jpeg';
// ****** material UI******
import { useTheme } from '@mui/material/styles';
import { IconButton, Box, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
// ****** material UI******
// ****** Icons UI******
import { PlayCircleOutline, PauseCircleOutline } from '@mui/icons-material';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// ****** Icons UI******

export const Player = () => {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(music);
    const theme = useTheme();

    const handlePlayPause = () => {
        const audioElement = audioRef.current;
        if (isPlaying) {
            audioElement.pause();
        } else {
            audioElement.play().catch(error => {
                console.log(error);
            });
        }
        setIsPlaying(!isPlaying);
    };

    const handleCanPlayThrough = () => {
        const audioElement = audioRef.current;
        if (isPlaying) {
            audioElement.play().catch(error => {
                console.log(error);
            });
        }
    };

    return (
        <Container maxWidth="md" className='playerContainer'> 
            <Card sx={{ display: 'flex', width: '100%' }} className='play'>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Las Mañanitas
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            Travis Scott
                        </Typography>
                    </CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                        {isPlaying ? (
                            <IconButton onClick={handlePlayPause}>
                                <PauseIcon fontSize="large" />
                            </IconButton>
                        ) : (
                            <IconButton onClick={handlePlayPause}>
                                <PlayArrowIcon fontSize="large" sx={{ height: 38, width: 38 }} />
                            </IconButton>
                        )}
                        {/* <span>{isPlaying ? 'Playing' : 'Paused'}</span> */}
                        <audio ref={audioRef} onCanPlayThrough={handleCanPlayThrough}>
                            <source src={music} type="audio/mpeg" />
                        </audio>
                    </Box>
                </Box>
                <CardMedia
                    component="img"
                    sx={{ width:'100%' }}
                    image={cover}
                    alt="Live from space album cover"
                />
            </Card>
        </Container>


    );
}
