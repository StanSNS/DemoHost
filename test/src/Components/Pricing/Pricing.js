import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import {Grid} from '@mui/material';
import "./Pricing.css"

const dummyData = [
    {
        title: 'Card 1',
        image: require('./cooking.jpg'),
        description: 'Description for Card 1',
    },
    {
        title: 'Card 2',
        image: require('./cooking.jpg'),
        description: 'Description for Card 2',
    },
    {
        title: 'Card 3',
        image: require('./cooking.jpg'),
        description: 'Description for Card 3',
    },
    {
        title: 'Card 4',
        image: require('./cooking.jpg'),
        description: 'Description for Card 4',
    },
    {
        title: 'Card 5',
        image: require('./cooking.jpg'),
        description: 'Description for Card 5',
    },
    {
        title: 'Card 6',
        image: require('./cooking.jpg'),
        description: 'Description for Card 6',
    },
];
// ... (import statements and other code)

export default function PricingCards() {
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
                                            <p>HSK 1</p>
                                        </div>


                                        <div className="image-container">
                                            <CardMedia component="img" height="180" image={data.image}
                                                       alt={data.title}/>
                                        </div>

                                    </div>


                                    <div className="about-content">
                                        <p className="about-heading">{data.title}</p>
                                        <p>{data.description}</p>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </>

    );
}
