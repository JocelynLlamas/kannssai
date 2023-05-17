import * as React from 'react';
import './Fotos.css'
import alaskaImg from '../../assets/photos/alaska.jpg';
import asadaImg from '../../assets/photos/asada.jpg';
import calleImg from '../../assets/photos/calle.jpg';
import cieloImg from '../../assets/photos/cielo.jpeg';
import elevadorImg from '../../assets/photos/elevador.jpg';
import filtroImg from '../../assets/photos/filtro.jpg';
import massiImg from '../../assets/photos/massi.jpg';
import muerteImg from '../../assets/photos/muerte.jpg';
import parqueImg from '../../assets/photos/parque.jpg';
import uniImg from '../../assets/photos/uni.jpg';
// ****** material UI******
import { useTheme } from '@mui/material/styles';
import { Box, MobileStepper, Paper, Typography, Button } from '@mui/material';
// ****** material UI******
// ****** Icons UI******
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// ****** Icons UI******
// ****** Swipeable views******
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
// ****** Swipeable views******


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: 'Viaje a Alaska',
        imgPath:alaskaImg,
    },
    {
        label: 'Carne Asada en tu casa',
        imgPath:asadaImg,
    },
    {
        label: 'Cuando tomamos fotos por Balcones',
        imgPath:calleImg,
    },
    {
        label: 'Picnic de colores en el parque',
        imgPath:cieloImg,
    },
    {
        label: 'Cuando dijiste que era la Play4 jajaja',
        imgPath:elevadorImg,
    },
    {
        label: 'Rayandola',
        imgPath:filtroImg,
    },
    {
        label: 'Viaje a Alaska con Massi',
        imgPath:massiImg,
    },
    {
        label: 'Ida al parque',
        imgPath:parqueImg,
    },
    {
        label: 'Regreso a clases',
        imgPath:uniImg,
    },
    {
        label: 'Cuando moriste UnU',
        imgPath:muerteImg,
    },
    
];

export const Fotos = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <section className="Fotos" id="Fotos">
            <Box sx={{ maxWidth: "50%", flexGrow: 1 }} >
                <Paper
                    square
                    elevation={0}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        height: 50,
                        pl: 2,
                        bgcolor: 'background.default',
                    }}
                >
                    <Typography>{images[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                >
                    {images.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <Box
                                    component="img"
                                    sx={{
                                        height: '100%',
                                        display: 'block',
                                        maxWidth: '100%',
                                        overflow: 'hidden',
                                        width: '100%',
                                        objectFit: 'fill',
                                    }}
                                    src={step.imgPath}
                                    alt={step.label}
                                />
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                        <Button
                            size="small"
                            onClick={handleNext}
                            disabled={activeStep === maxSteps - 1}
                        >
                            Next
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowLeft />
                            ) : (
                                <KeyboardArrowRight />
                            )}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? (
                                <KeyboardArrowRight />
                            ) : (
                                <KeyboardArrowLeft />
                            )}
                            Back
                        </Button>
                    }
                />
            </Box>
        </section>
    );
}