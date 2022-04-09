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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque
                    convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Advanced settings</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Filtering has been entirely disabled for whole web server</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque
                    convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Advanced settings</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Filtering has been entirely disabled for whole web server</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
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
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>General settings</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>I am an accordion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Users</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>You are currently not an owner</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque
                    convallis laoreet laoreet.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Advanced settings</Typography>
                  <Typography sx={{ color: 'text.secondary' }}>Filtering has been entirely disabled for whole web server</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
                  <Typography sx={{ width: '33%', flexShrink: 0 }}>Personal data</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros, vitae egestas augue. Duis vel
                    est augue.
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
