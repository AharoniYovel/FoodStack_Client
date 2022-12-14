import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import volunteerImg from '../../helpers/img/volunteer.jpg'
import { Link } from 'react-router-dom';


export default function MultiActionAreaCardForVol() {
    return (
        <Card className='shadow-lg rounded-5' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={volunteerImg}
                    alt="green iguana"
                />
                <CardContent className='CardContent'>
                    <Typography className='text-center' gutterBottom variant="h5" component="div">
                        <p>HAVE A PASSION FOR HELPING PEOPLE?</p>
                        Want to be part of our drivers family?
                    </Typography>
                    <Typography className='text-center text-capitalize' variant="body2" color="text.secondary">
                        We are a non-profit organization who delivers a food to donates every week
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className='CardContent'>
                <Button className='mx-auto' size="large" >
                    <Link className='text-decoration-none badge bg-warning text-black fs-6' to='/registration'>Click here</Link>
                </Button>
            </CardActions>

        </Card>
    );
}
