import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

export default function InteractiveList({ item, delFromTempAr }) {

    return (
        <Box  sx={{ flexGrow: 1, maxWidth: 752 }}>

            <Grid  container spacing={0}>
                <Grid className='mx-auto' item xs={12} md={7}>
                    <Demo >
                        <List >

                            <ListItem className='mapBoxBack'
                                secondaryAction={
                                    <IconButton onClick={() => delFromTempAr(item)} edge="end" aria-label="delete">
                                        <DeleteIcon className='text-black' />
                                    </IconButton>
                                }
                            >
                                <ListItemAvatar>
                                    <Avatar className='bg-info'>
                                        <AccountCircleIcon className='fs-1' />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary={<Primary item={item} />}
                                    secondary={<Secondary item={item} />}
                                />
                            </ListItem>

                        </List>
                    </Demo>
                </Grid>
            </Grid >

        </Box >
    );
}

function Primary({ item }) {
    return (
        <>
            <h4 className='text-capitalize bg-success badge w-100 mx-auto fs-6'>{item.donateId.fullName}</h4>
            <h5 className='text-center'>{item.donateId.rangePeople} people</h5>
        </>
    )
}

function Secondary({ item }) {
    return (
        <>
            <span className='w-100 badge bg-info fs-6'>{item.city}</span>
        </>
    )
}