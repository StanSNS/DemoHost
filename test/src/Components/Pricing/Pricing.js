import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from '@mui/material';
import "./Pricing.css"
import {useState} from "react";


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const dummyData = [
    {
        title: 'Card 1',
        image: require('./pandasHSK.jpg'),
        description: 'Description for Card 1',
    },
    {
        title: 'Card 2',
        image: require('./pandasHSK.jpg'),
        description: 'Description for Card 2',
    },
    {
        title: 'Card 3',
        image: require('./pandasHSK.jpg'),
        description: 'Description for Card 3',
    },
    {
        title: 'Card 4',
        image: require('./pandasHSK.jpg'),
        description: 'Description for Card 4',
    },
    {
        title: 'Card 5',
        image: require('./pandasHSK.jpg'),
        description: 'Description for Card 5',
    },
    {
        title: 'Card 6',
        image: require('./pandasHSK.jpg'),
        description: 'Description for Card 6',
    },
];

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export default function PricingCards() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <h1 className="text-center mt-5">Pricing</h1>


            <div className="container">
                <Grid container spacing={3} center>
                    {dummyData.map((data, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <div className="about-card-container mt-4 customMargin ">
                                <div className="about-card">

                                    <div className="about-front-content">

                                        <div className="text-center mt-2">
                                            <p>HSK Level 1</p>
                                        </div>


                                        <div>
                                            <CardMedia component="img" height="180" image={data.image}
                                                       alt={data.title}/>
                                        </div>


                                    </div>


                                    <div className="about-content">
                                        <p className="about-heading">{data.title}</p>

                                        <p>{data.description}</p>

                                        <button className="InfoCardButton InfoCardButtontype1" onClick={handleOpen}>
                                            Click me
                                        </button>


                                    </div>


                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            Text in a modal
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                        </Typography>
                    </Box>
                </Fade>
            </Modal>

        </>

    );
}
