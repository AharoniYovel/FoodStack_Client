import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link, useNavigate } from 'react-router-dom';
import { GiSelfLove } from 'react-icons/gi';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TOKEN_NAME } from '../services/apiService';
import { toast } from 'react-toastify';
import LogoutIcon from '@mui/icons-material/Logout';

import "./header_footer.css";





const pages = [
    {
        name: 'Add New Path',
        url: '/volunteer/addNewPathToVol'
    },
    {
        name: 'My Paths',
        url: '/volunteer/allPaths'
    },
];
const settings = [{ name: "Login", url: '/login' }];


const HeaderMUIclient = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    React.useEffect(() => {

        ifLogIn();

    }, [settings])

    const nav = useNavigate();

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

    const ifLogIn = async () => {
        if (localStorage[TOKEN_NAME]) {
            settings.push({ name: "Profile", url: '/volunteer' });
        }
    }


    const onLogOut = async () => {
        let name = localStorage["Name"];
        localStorage.removeItem(TOKEN_NAME);
        localStorage.removeItem("Name");
        nav("/login");
        toast.dark(`Log out, see you soon ${name}!`);
    }

    return (
        <AppBar position="static">
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
                        <Link className='m-2 logoSite col-md-2 col-6 display-6' to='/'>FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} /></Link>
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
                                <MenuItem key={i} onClick={handleCloseNavMenu}>
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
                        <Link className='m-2 logoSite col-md-2 col-6' to='/'>FOOD STACK<GiSelfLove style={{ color: 'rgba(255, 0, 115, 0.989)' }} className='display-6' /></Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {/* {pages.map((page) => (
                            <Button
                                key={page.name}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page.name}
                            </Button>
                        ))} */}
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
                                    <Link className='text-decoration-none text-black' to={setting.url}>
                                        <Typography textAlign="center">{setting.name}</Typography>
                                    </Link>
                                </MenuItem>
                            ))}
                        </Menu>

                        {localStorage[TOKEN_NAME] ?
                            <LogoutIcon titleAccess="Logout" style={{ cursor: 'pointer' }} onClick={onLogOut} className='ms-4 cor text-danger' />
                            :
                            null
                        }

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default HeaderMUIclient;
