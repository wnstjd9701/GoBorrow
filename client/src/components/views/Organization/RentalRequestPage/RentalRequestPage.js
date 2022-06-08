import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../Public/Header/MainHeader';
import Footer from '../../Public/Footer/Footer';
import Sidebar from '../MainPage/SideBar/Sidebar';
import { styled, useTheme } from '@mui/material/styles';
import { Avatar, Button, CardContent, Divider, Grid, Menu, MenuItem, Typography, Box, useMediaQuery, Card } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { SET_MENU } from '../../../../_actions/action_type';
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
      justifyContent: 'center',
    },
  }),
}));

const Title = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
    textAlign: 'center',
  },
}));

function RentalRequestPage() {
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

  const handleConfirm = e => {
    const id = e.currentTarget.id;
    alert('승인되었습니다');
    document.getElementsByName(id)[0].style.display = 'none';
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
                  <Grid container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h5">신규 대여 요청</Typography>
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
                  <Grid name="1" container direction="column">
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
                            <Button id="1" onClick={handleConfirm}>
                              승인
                            </Button>
                            <Button color="error">거절</Button>
                            <Button id="1" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                  <Grid name="3" container direction="column">
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
                                32173058 이성준
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: 'success.dark' }}>
                                2022-06-22 ~ 2022-06-29
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
                            <Button id="3" onClick={handleConfirm}>
                              승인
                            </Button>
                            <Button color="error">거절</Button>
                            <Button id="3" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                  <Grid name="2" container direction="column">
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
                                2022-06-12 ~ 2022-06-19
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
                            <Button id="2" onClick={handleConfirm}>
                              승인
                            </Button>
                            <Button color="error">거절</Button>
                            <Button id="2" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                  <Grid name="5" container direction="column">
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
                                2022-06-20 ~ 2022-06-23
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
                            <Button id="5" onClick={handleConfirm}>
                              승인
                            </Button>
                            <Button color="error">거절</Button>
                            <Button id="5" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                  <Grid name="4" container direction="column">
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
                                2022-06-24 ~ 2022-06-28
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
                            <Button id="4" onClick={handleConfirm}>
                              승인
                            </Button>
                            <Button color="error">거절</Button>
                            <Button id="4" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                  <Grid name="7" container direction="column">
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
                            <Button id="7" onClick={handleConfirm}>
                              승인
                            </Button>
                            <Button color="error">거절</Button>
                            <Button id="7" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                  <Grid name="6" container direction="column">
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
                                2022-06-12 ~ 2022-06-14
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
                            <Button id="6" onClick={handleConfirm}>
                              승인
                            </Button>
                            <Button color="error">거절</Button>
                            <Button id="6" onClick={handleSetDetailEl} color="success">
                              상세 정보
                            </Button>
                          </div>
                        </Title>
                      </Title>
                    </Grid>
                    <Divider sx={{ my: 1.5 }} />
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <div style={{ margin: '5px' }}>
              <Pagination style={{ justifyContent: 'center' }} count={1} shape="rounded" />
            </div>
          </Main>
          {detailEl ? (
            <Card sx={{ maxWidth: 300, flexShrink: 1.5 }}>
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
                    <b>학번: </b>32174747
                  </div>
                  <div style={{ margin: '5px' }}>
                    <b>기간: </b>2022-06-08 ~ 2022-06-15
                  </div>
                  <div style={{ margin: '5px' }}>
                    <b>대여 시간: </b>17:30
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

RentalRequestPage.propTypes = {
  isLoading: PropTypes.bool,
};

export default RentalRequestPage;
