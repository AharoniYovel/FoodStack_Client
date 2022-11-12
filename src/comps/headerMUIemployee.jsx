import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { GiSelfLove } from 'react-icons/gi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import "./header_footer.css";

const pages = [
    {
        name: 'Home',
        url: '/employee'
    },
    {
        name: 'Volunteers list',
        url: '/employee/volList'
    },
    {
        name: 'Donates list',
        url: '/employee/donList'
    },
    {
        name: 'Paths list',
        url: '/employee/pathList'
    }
];

const settings = [
    {
        name: 'Profile',
        url: '/employee'
    },
    {
        name: 'Logout',
        url: '/empLogOut'
    }
];

const HeaderMUIemployee = () => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);


    React.useEffect(() => {

        ifSuperAdmin();

    }, [pages])

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const ifSuperAdmin = async () => {
        if (localStorage['NickName'] === 'superAdmin') {
            return pages.push({ name: 'Employees list', url: '/superAdmin/empsList' });
        }
    }

    return (
        <AppBar position="static" className='bg-info'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link className='m-2 logoSite col-md-2 col-6' to='/'>FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} className='display-6' /></Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >



                            {pages.map((page, i) => (

                                <MenuItem key={i} onClick={handleCloseNavMenu} >
                                    <Link className='text-decoration-none text-black' to={page.url}>
                                        <Typography textAlign="center">{page.name}</Typography>
                                    </Link>
                                </MenuItem>

                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link className='m-2 logoSite col-md-2 col-6' to='/'>FOOD STACK</Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, i) => (

                            <Button className='me-2'
                                key={i}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <Link className='text-decoration-none text-white fw-bolder' to={page.url}>
                                    {page.name}
                                </Link>
                            </Button>

                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <AccountCircleIcon className='fs-1 text-white' />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting, i) => (
                                <MenuItem key={i} onClick={handleCloseUserMenu}>
                                    <Link className={`text-decoration-none ${setting.url === "/empLogOut" ? 'text-danger' : 'text-black'} `} to={setting.url}>
                                        <Typography className='fw-bolder' textAlign="center">{setting.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>


                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
};

export default HeaderMUIemployee;
