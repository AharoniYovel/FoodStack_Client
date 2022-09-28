import * as React from 'react';
import Box from '@mui/material/Box';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowRight from '@mui/icons-material/ArrowRight';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Home from '@mui/icons-material/Home';
import People from '@mui/icons-material/People';
import { Link } from 'react-router-dom';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import ContrastIcon from '@mui/icons-material/Contrast';
import EditIcon from '@mui/icons-material/Edit';
import { FaWaze } from 'react-icons/fa'




const FireNav = styled(List)({
    '& .MuiListItemButton-root': {
        paddingLeft: 24,
        paddingRight: 24,
    },
    '& .MuiListItemIcon-root': {
        minWidth: 0,
        marginRight: 16,
    },
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
});

export default function CustomizedListForDon({ itemProp, pointProp }) {

    let arrTitleName = ["Role", "Status", "Phone", "Range Of People", "Create_at", "Anonymous"];

    const data = [
        { icon: <FolderSharedOutlinedIcon />, label: `${itemProp.role}` },
        { icon: <QuestionMarkIcon />, label: `${itemProp.status}` },
        { icon: <LocalPhoneOutlinedIcon />, label: `${itemProp.phone}` },
        { icon: <People />, label: `${itemProp.rangePeople}` },
        { icon: <MoreTimeIcon />, label: `${itemProp.create_at}` },
        { icon: <ContrastIcon />, label: `Anonymous? ===> ${itemProp.anonymous ? "Yes" : "No"}` },
    ];

    const [open, setOpen] = React.useState(false);

    return (
        <Box className='justify-content-center' sx={{ display: 'flex' }}>
            <ThemeProvider
                theme={createTheme({
                    components: {
                        MuiListItemButton: {
                            defaultProps: {
                                disableTouchRipple: true,
                            },
                        },
                    },
                    palette: {
                        mode: 'dark',
                        primary: { main: 'rgb(102, 157, 246)' },
                        background: { paper: 'rgb(5, 30, 52)' },
                    },
                })}
            >
                <Paper className='w-100 h-100' elevation={0} sx={{ maxWidth: 256 }}>
                    <FireNav component="nav" disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ fontSize: 20 }}><PersonPinOutlinedIcon /></ListItemIcon>
                            <ListItemText
                                sx={{ my: 0 }}
                                primary={`${itemProp.fullName}`}
                                primaryTypographyProps={{
                                    fontSize: 20,
                                    fontWeight: 'medium',
                                    letterSpacing: 0,
                                }}

                            />

                            {localStorage["NickName"] ?

                                <Link Link className='text-white' to={'/employee/donList/editDon/' + itemProp._id}>
                                    <EditIcon />
                                </Link>
                                :
                                null
                            }

                        </ListItemButton>
                        <Divider />
                        <ListItem component="div" disablePadding>
                            <ListItemButton sx={{ height: 56 }}>
                                <ListItemIcon>
                                    <Home color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary={`${pointProp.city}`}
                                    primaryTypographyProps={{
                                        color: 'primary',
                                        fontWeight: 'medium',
                                        variant: 'body2',
                                    }}
                                />
                            </ListItemButton>



                            <a target='_black' href={`https://www.waze.com/ul?ll=${pointProp.location.lat}%2C${pointProp.location.lng}&navigate=yes&zoom=17`}>
                                <Tooltip title="Navigate">
                                    <IconButton
                                        size="large"
                                        sx={{
                                            '& svg': {
                                                color: 'rgba(255,255,255,0.8)',
                                                transition: '0.2s',
                                                transform: 'translateX(0) rotate(0)',
                                            },
                                            '&:hover, &:focus': {
                                                bgcolor: 'unset',
                                                '& svg:first-of-type': {
                                                    transform: 'translateX(-4px) rotate(-20deg)',
                                                },
                                                '& svg:last-of-type': {
                                                    right: 0,
                                                    opacity: 1,
                                                },
                                            },
                                            '&:after': {
                                                content: '""',
                                                position: 'absolute',
                                                height: '80%',
                                                display: 'block',
                                                left: 0,
                                                width: '1px',
                                                bgcolor: 'divider',
                                            },
                                        }}
                                    >
                                        <FaWaze />
                                        <ArrowRight sx={{ position: 'absolute', right: 4, opacity: 0 }} />
                                    </IconButton>
                                </Tooltip>
                            </a>
                        </ListItem>
                        <Divider />
                        <Box
                            sx={{
                                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                                pb: open ? 2 : 0,
                            }}
                        >
                            <ListItemButton
                                alignItems="flex-start"
                                onClick={() => setOpen(!open)}
                                sx={{
                                    px: 3,
                                    pt: 2.5,
                                    pb: open ? 0 : 2.5,
                                    '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                }}
                            >
                                <ListItemText
                                    primary={`Info Of ${itemProp.fullName} - ID:${itemProp.short_id}`}
                                    primaryTypographyProps={{
                                        fontSize: 15,
                                        fontWeight: 'medium',
                                        lineHeight: '20px',
                                        mb: '2px',
                                    }}


                                    secondary={`Role, Status, Phone, Create_at, RangePeople, Anonymous`}
                                    secondaryTypographyProps={{
                                        noWrap: true,
                                        fontSize: 12,
                                        lineHeight: '16px',
                                        color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                    }}
                                    sx={{ my: 0 }}
                                />
                                <KeyboardArrowDown
                                    sx={{
                                        mr: -1,
                                        opacity: 0,
                                        transform: open ? 'rotate(-180deg)' : 'rotate(0deg)',
                                        transition: '0.2s',
                                    }}
                                />
                            </ListItemButton>
                            {open &&
                                data.map((item, i) => (


                                    item.label === itemProp.phone ?

                                        <a key={item.label} className='text-decoration-none' href={`tel:${itemProp.phone}`}>
                                            <ListItemButton title={arrTitleName[i]}
                                                key={item.label}
                                                sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                            >
                                                <ListItemIcon sx={{
                                                    '& svg': {
                                                        color: 'rgba(255,255,255,0.8)',
                                                        transition: '0.2s',
                                                        transform: 'translateX(0) rotate(0)',
                                                    },
                                                    '&:hover, &:focus': {
                                                        bgcolor: 'unset',
                                                        '& svg:first-of-type': {
                                                            transform: 'translateX(-4px) rotate(-20deg)',
                                                        },
                                                        '& svg:last-of-type': {
                                                            right: 0,
                                                            opacity: 1,
                                                        },
                                                    },
                                                    '&:after': {
                                                        content: '""',
                                                        position: 'absolute',
                                                        height: '80%',
                                                        display: 'block',
                                                        left: 0,
                                                        width: '1px',
                                                        bgcolor: 'divider',
                                                    },
                                                }}>
                                                    {item.icon}
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={item.label}
                                                    primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                                />
                                            </ListItemButton>
                                        </a>

                                        :

                                        <ListItemButton title={arrTitleName[i]}
                                            key={item.label}
                                            sx={{ py: 0, minHeight: 32, color: 'rgba(255,255,255,.8)' }}
                                        >
                                            <ListItemIcon sx={{
                                                '& svg': {
                                                    color: 'rgba(255,255,255,0.8)',
                                                    transition: '0.2s',
                                                    transform: 'translateX(0) rotate(0)',
                                                },
                                                '&:hover, &:focus': {
                                                    bgcolor: 'unset',
                                                    '& svg:first-of-type': {
                                                        transform: 'translateX(-4px) rotate(-20deg)',
                                                    },
                                                    '& svg:last-of-type': {
                                                        right: 0,
                                                        opacity: 1,
                                                    },
                                                },
                                                '&:after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    height: '80%',
                                                    display: 'block',
                                                    left: 0,
                                                    width: '1px',
                                                    bgcolor: 'divider',
                                                },
                                            }}>
                                                {item.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={item.label}
                                                primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                            />
                                        </ListItemButton>
                                ))}
                        </Box>
                    </FireNav>
                </Paper>
            </ThemeProvider>
        </Box >
    );
}
