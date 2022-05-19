import Header from '../../Public/Header/MainHeader';
import { useDispatch, useSelector } from 'react-redux';

import { styled, useTheme } from '@mui/material/styles';
import { Container, AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';

import Sidebar from './SideBar/Sidebar';
import React, { useEffect } from 'react';

export default function MainLandingPage() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
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
      <Box sx={{ display: 'flex', marginTop: '-10px', marginLeft: '5px' }}>
        <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
      </Box>
    </>
  );
}
