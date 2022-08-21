import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import donateImg from '../../helpers/img/donate.jpg'
import { Link } from 'react-router-dom';


export default function MultiActionAreaCardForDon() {
    return (
        <Card  className='shadow-lg rounded-5' sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={donateImg}
                    alt="green iguana"
                />
                <CardContent className='CardContent' style={{background:''}}>
                    <Typography className='text-center' gutterBottom variant="h5" component="div">
                        <p>NEED HELP FROM OUR ORGANIZATION?</p>
                        Want to be part of our family?
                    </Typography>
                    <Typography className='text-center text-capitalize' variant="body2" color="text.secondary">
                        We are a non-profit organization who delivers a food to donates every week
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions className='CardContent'>
                <Button className='mx-auto' size="large" >
                    <Link className='text-decoration-none badge bg-warning text-black fs-6' to='/registrationDon'>Click here</Link>
                </Button>
            </CardActions>
            
        </Card>
    );
}
