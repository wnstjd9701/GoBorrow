import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Public/Header/MainHeader';
import Footer from '../../Public/Footer/Footer';
import Sidebar from '../MainPage/SideBar/Sidebar';
import { SET_MENU } from '../../../../_actions/action_type';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Button, CardContent, Divider, Grid, Menu, MenuItem, Typography, Box, useMediaQuery, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import Pagination from '@mui/material/Pagination';

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
      marginLeft: -260,
      width: '100%',
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '16px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: '16px',
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

    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      placeContent: 'center',
    },
  }),
}));

const Title = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center !important',
    textAlign: 'center',
  },
}));

const DivButton = styled('div')(({ theme }) => ({
  fontSize: '0.875rem',
  color: '#d32f2f',
  minWidth: '64px',
  display: 'inline-block',
  lineHeight: '1.75',
  textAlign: 'center',
}));

const DivOverButton = styled('div')(({ theme }) => ({
  fontSize: '0.875rem',
  color: 'blue',
  minWidth: '64px',
  display: 'inline-block',
  lineHeight: '1.75',
  textAlign: 'center',
}));

function RentalHistoryPage() {
  const theme = useTheme();
  const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
  const matchDownSm = useMediaQuery(theme.breakpoints.down('md'));
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [detailEl, setDetailEl] = useState(null);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const leftDrawerOpened = useSelector(state => state.customization.opened);

  const handleLeftDrawerToggle = () => {
    dispatch({ type: SET_MENU, opened: !leftDrawerOpened });
  };

  const handleSetDetailEl = e => {
    setDetailEl(e.currentTarget.id);
  };

  const handleCloseDetailEl = e => {
    setDetailEl(null);
  };

  useEffect(() => {
    dispatch({ type: SET_MENU, opened: !matchDownMd });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchDownMd]);

  return (
    <>
      <>
        <Header org="1" />
        <Box sx={{ display: 'flex' }}>
          <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
          <Main theme={theme} open={leftDrawerOpened} sx={{ flexGrow: 1 }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Grid container alignContent="center" justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h5">완료된 대여 현황</Typography>
                    </Grid>
                    <Grid item>
                      <MoreHorizOutlinedIcon
                        fontSize="small"
                        sx={{
                          color: theme.palette.primary[200],
                          cursor: 'pointer',
                        }}
                        aria-controls="menu-popular-card"
                        aria-haspopup="true"
                        onClick={handleClick}
                      />
                      <Menu
                        id="menu-popular-card"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        variant="selectedMenu"
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                          vertical: 'top',
                          horizontal: 'right',
                        }}
                      >
                        <MenuItem onClick={handleClose}> Today</MenuItem>
                        <MenuItem onClick={handleClose}> This Month</MenuItem>
                        <MenuItem onClick={handleClose}> This Year </MenuItem>
                      </Menu>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction="column">
                    <Grid item>
                      <Title container alignItems="center" spacing={4}>
                        <Grid item textAlign="center" minWidth={140}>
                          <Typography variant="subtitle1" color="inherit">
                            우산
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            UR1022
                          </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center">
                              <Typography variant="subtitle1" color="inherit">
                                32194747 최지윤
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-06-08 ~ 2022-06-15
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  backgroundColor: 'black',
                                  color: theme.palette.success.light,
                                  marginLeft: 1.875,
                                }}
                              >
                                <CheckBoxRoundedIcon fontSize="medium" color="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Title item sx={{ float: 'right', flexGrow: 2, textAlign: 'right' }}>
                          <div>
                            <Button id="6" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container direction="column">
                    <Grid item>
                      <Title container alignItems="center" spacing={4}>
                        <Grid item textAlign="center" minWidth={140}>
                          <Typography variant="subtitle1" color="inherit">
                            우산
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            UR1023
                          </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center">
                              <Typography variant="subtitle1" color="inherit">
                                32194747 최지윤
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-05-22 ~ 2022-05-23
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  backgroundColor: 'black',
                                  color: theme.palette.success.light,
                                  marginLeft: 1.875,
                                }}
                              >
                                <CheckBoxRoundedIcon fontSize="medium" color="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Title item sx={{ float: 'right', flexGrow: 2, textAlign: 'right' }}>
                          <div>
                            <Button id="6" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container direction="column">
                    <Grid item>
                      <Title container alignItems="center" spacing={4}>
                        <Grid item textAlign="center" minWidth={140}>
                          <Typography variant="subtitle1" color="inherit">
                            아이패드
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            IP4255
                          </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center">
                              <Typography variant="subtitle1" color="inherit">
                                32174727 최한윤
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-05-22 ~ 2022-05-29
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  backgroundColor: 'black',
                                  color: theme.palette.success.light,
                                  marginLeft: 1.875,
                                }}
                              >
                                <CheckBoxRoundedIcon fontSize="medium" color="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Title item sx={{ float: 'right', flexGrow: 2, textAlign: 'right' }}>
                          <div>
                            <Button id="6" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container direction="column">
                    <Grid item>
                      <Title container alignItems="center" spacing={4}>
                        <Grid item textAlign="center" minWidth={140}>
                          <Typography variant="subtitle1" color="inherit">
                            자전거
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            BK7777
                          </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center">
                              <Typography variant="subtitle1" color="inherit">
                                32194747 최지윤
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-05-24 ~ 2022-05-28
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  backgroundColor: 'black',
                                  color: theme.palette.success.light,
                                  marginLeft: 1.875,
                                }}
                              >
                                <CheckBoxRoundedIcon fontSize="medium" color="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Title item sx={{ float: 'right', flexGrow: 2, textAlign: 'right' }}>
                          <div>
                            <Button id="6" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container direction="column">
                    <Grid item>
                      <Title container alignItems="center" spacing={4}>
                        <Grid item textAlign="center" minWidth={140}>
                          <Typography variant="subtitle1" color="inherit">
                            노트북
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            NB1004
                          </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center">
                              <Typography variant="subtitle1" color="inherit">
                                32162956 윤준성
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-05-22 ~ 2022-05-25
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  backgroundColor: 'black',
                                  color: theme.palette.error.light,
                                  marginLeft: 1.875,
                                }}
                              >
                                <CheckBoxRoundedIcon fontSize="medium" color="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Title item sx={{ float: 'right', flexGrow: 2, textAlign: 'right' }}>
                          <div>
                            <Button id="6" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container direction="column">
                    <Grid item>
                      <Title container alignItems="center" spacing={4}>
                        <Grid item textAlign="center" minWidth={140}>
                          <Typography variant="subtitle1" color="inherit">
                            노트북
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            NB1004
                          </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center">
                              <Typography variant="subtitle1" color="inherit">
                                32162956 윤준성
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-06-02 ~ 2022-06-04
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  backgroundColor: 'black',
                                  color: theme.palette.success.light,
                                  marginLeft: 1.875,
                                }}
                              >
                                <CheckBoxRoundedIcon fontSize="medium" color="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Title item sx={{ float: 'right', flexGrow: 2, textAlign: 'right' }}>
                          <div>
                            <Button id="6" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                  </Grid>
                  <Divider sx={{ my: 1.5 }} />
                  <Grid container direction="column">
                    <Grid item>
                      <Title container alignItems="center" spacing={4}>
                        <Grid item textAlign="center" minWidth={140}>
                          <Typography variant="subtitle1" color="inherit">
                            노트북
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                            NB1005
                          </Typography>
                        </Grid>
                        <Grid item textAlign="center">
                          <Grid container alignItems="center" justifyContent="center">
                            <Grid item textAlign="center">
                              <Typography variant="subtitle1" color="inherit">
                                32173058 이성준
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-06-01 ~ 2022-06-23
                              </Typography>
                            </Grid>
                            <Grid item>
                              <Avatar
                                variant="rounded"
                                sx={{
                                  width: 16,
                                  height: 16,
                                  backgroundColor: 'black',
                                  color: theme.palette.error.light,
                                  marginLeft: 1.875,
                                }}
                              >
                                <CheckBoxRoundedIcon fontSize="medium" color="inherit" />
                              </Avatar>
                            </Grid>
                          </Grid>
                        </Grid>
                        <Title item sx={{ float: 'right', flexGrow: 2, textAlign: 'right' }}>
                          <div>
                            <Button id="7" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <div style={{ margin: '5px' }}>
              <Pagination style={{ justifyContent: 'center' }} count={5} shape="rounded" />
            </div>
          </Main>
          {detailEl ? (
            <Card sx={{ maxWidth: 345, flexShrink: 1.5 }}>
              <CardMedia
                component="img"
                image="https://s3.ap-northeast-2.amazonaws.com/img.castlejun-2.shop/%ED%95%99%EC%83%9D%EC%A6%9D.jpg"
                alt="authImage"
              />
              <CardContent>
                <Typography variant="subtitle2" color="black">
                  <div style={{ margin: '5px' }}>
                    <b>이름: </b>최지윤
                  </div>
                  <div style={{ margin: '5px' }}>
                    <b>학번: </b>32194747
                  </div>
                  <div style={{ margin: '5px' }}>
                    <b>기간: </b>2022-06-08 ~ 2022-06-15
                  </div>
                  <div style={{ margin: '5px' }}>
                    <b>반납일자: </b>2022-06-15
                  </div>
                  <div style={{ margin: '5px' }}>
                    <b>반납시간: </b>17:30
                  </div>
                  <div style={{ margin: '5px' }}>
                    <b>연락처: </b>010-5530-0651
                  </div>
                </Typography>
              </CardContent>
              <div style={{ textAlign: 'center' }}>
                <Button size="small" color="error" variant="contained" onClick={handleCloseDetailEl}>
                  <b>닫기</b>
                </Button>
              </div>
            </Card>
          ) : null}
        </Box>
        <Footer />
      </>
    </>
  );
}

RentalHistoryPage.propTypes = {
  isLoading: PropTypes.bool,
};

export default RentalHistoryPage;
