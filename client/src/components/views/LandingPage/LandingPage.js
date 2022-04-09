import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/MainHeader';
import authAxios from '../../../lib/refreshToken';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch } from 'react-redux';
import { searchKeyword } from '../../../_actions/user_action';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function LandingPage(props) {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [name, setName] = useState(null);
  const [keyword, setKeyword] = useState(null);
  const onKeywordHandler = e => {
    setKeyword(e.currentTarget.value);
  };
  const onSearchHandler = e => {
    console.log(keyword);
    e.preventDefault();
    const body = {
      keyword: keyword,
    };
    if (keyword) {
      dispatch(searchKeyword(body)).then(response => {
        if (response.payload.message.isSuccess) {
          navigate('/organization');
        }
      });
    }
  };
  const testItem = [
    {
      cname: '단국대학교 죽전캠퍼스',
      place: '경기도',
    },
    {
      cname: '서울대학교',
      place: '서울',
    },
  ];
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  const [expanded, setExpanded] = useState(false);
  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  useEffect(
    () =>
      async function () {
        const { profile } = await authAxios.get('/users/profile');
        console.log('h');
        if (profile.isSuccess) {
          setName(profile.name);
        }
      },
    [],
  );
  return (
    <>
      <Header />
      <div style={{ textAlign: 'center', fontWeight: 700, fontSize: 20, margin: '50px 0 20px 0' }}>조직/기관명을 검색하세요</div>
      <form onSubmit={onSearchHandler}>
        <Stack style={{ flexDirection: 'row', margin: '0 auto' }} spacing={2} sx={{ width: 330 }}>
          <Autocomplete
            style={{ width: 'inherit' }}
            id="free-solo-demo"
            freeSolo
            options={testItem.map(option => option.cname)}
            onChange={(e, newValue) => {
              setKeyword(newValue);
            }}
            renderInput={params => <TextField {...params} onChange={onKeywordHandler} label="Search.." />}
          />
          <button style={{ margin: '0 auto' }}>
            <SearchIcon style={{ display: 'inline-block' }} />
          </button>
        </Stack>
      </form>
      <Box style={{ width: 900, margin: '30px auto' }} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>대여 승인 신청</div>{' '}
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 산학협력단</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    노트북
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: 44043 <br />
                    대여 기간: 2022-04-10 ~ 2022-04-17
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>용인시청</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    용인시청 스터디룸
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: R203 <br />
                    대여 기간: 2022-04-12 12:30 ~ 2022-04-12 17:30
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 총학생회</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    우산
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: CWE2045 <br />
                    대여 기간: 2022-04-12 ~ 2022-04-14
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>대여중(반납 예정)</div>{' '}
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 산학협력단</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    노트북
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: 44043 <br />
                    대여 기간: 2022-04-10 ~ 2022-04-17
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>용인시청</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    용인시청 스터디룸
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: R203 <br />
                    대여 기간: 2022-04-12 12:30 ~ 2022-04-12 17:30
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 총학생회</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    우산
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: CWE2045 <br />
                    대여 기간: 2022-04-12 ~ 2022-04-14
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ margin: '20px auto', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>반납 완료</div>{' '}
            <div>
              <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 산학협력단</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    노트북
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: 44043 <br />
                    대여 기간: 2022-04-10 ~ 2022-04-17
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>용인시청</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    용인시청 스터디룸
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: R203 <br />
                    대여 기간: 2022-04-12 12:30 ~ 2022-04-12 17:30
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                  <Typography sx={{ fontWeight: 'bold', flexShrink: 0 }}>단국대학교 총학생회</Typography>
                  <Typography style={{ margin: '0 auto' }} sx={{ color: 'text.secondary' }}>
                    우산
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    제품 코드: CWE2045 <br />
                    대여 기간: 2022-04-12 ~ 2022-04-14
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
