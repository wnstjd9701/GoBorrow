import Header from '../../Public/Header/MainHeader';
import { useDispatch, useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';
import { Container, AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
import Sidebar from './SideBar/Sidebar';
import RecentRequest from '../Data/DashBoard/RecentData';
import ProductStock from '../Data/DashBoard/ProductStock';
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';

const Main = styled('main', { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  ...theme.typography.mainContent,
  ...(!open && {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.up('md')]: {
      marginLeft: -240,
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
      width: '100%',
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
      width: '100%',
      padding: '16px',
      marginRight: '10px',
    },
  }),
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: '`calc(100% - 260px)`',
    [theme.breakpoints.down('md')]: {
      marginLeft: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '10px',
    },
  }),
}));

const MainLayout = () => {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownSm = useMediaQuery(theme.breakpoints.down('md'));
  const gridStyle = !matchDownSm ? { minWidth: 300 } : { minWidth: 300, maxWidth: '100% !important', flexBasis: '100% !important' };
  const leftDrawerOpened = useSelector(state => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: '@customization/SET_MENU', opened: !leftDrawerOpened });
  };

  useEffect(() => {
    dispatch({ type: '@customization/SET_MENU', opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', flexGrow: '2' }}>
        <CssBaseline />
        <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
        <Main theme={theme} open={leftDrawerOpened}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Grid sx={{ padding: '20px', backgroundColor: 'rgb(227, 242, 253)' }} container justifyContent="space-between" spacing={0}>
                <Grid sx={gridStyle} item xs={6.9}>
                  <RecentRequest />
                </Grid>
                <Grid sx={gridStyle} item xs={4.8}>
                  <ProductStock />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Main>
      </Box>
    </>
  );
};

export default MainLayout;