import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Grid} from '@mui/material';
import Container from "@mui/material/Container";
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
export default function PricingCards() {
    return (
        <>
            <h1 className="text-center ">Pricing</h1>

            <Container className="mt-5"  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Grid container spacing={2}>
                    {dummyData.map((data, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={data.image}
                                        alt={data.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {data.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {data.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>

    );
}