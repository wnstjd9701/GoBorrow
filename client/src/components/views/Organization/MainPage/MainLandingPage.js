import Header from '../../Public/Header/MainHeader';
import Footer from '../../Public/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { SET_MENU } from '../../../../_actions/action_type';
import { styled, useTheme } from '@mui/material/styles';
import { Box, useMediaQuery } from '@mui/material';
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
    width: '100%',
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
  const leftDrawerOpened = useSelector(state => state.customization.opened);
  const dispatch = useDispatch();
  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  useEffect(() => {
    dispatch({ type: SET_MENU, opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  return (
    <>
      <Header org="1" />
      <Box sx={{ display: 'flex', flexGrow: '2' }}>
        <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
        <Main theme={theme} open={leftDrawerOpened}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid sx={{ padding: '20px', backgroundColor: 'rgb(227, 242, 253)' }} container>
                <Grid item xs={12} md={7}>
                  <RecentRequest />
                </Grid>
                <Grid item xs={12} md={5}>
                  <ProductStock />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Main>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;
