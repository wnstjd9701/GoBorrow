import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import { Card, Grid, Typography } from '@mui/material';
import Chart from 'react-apexcharts';
import chartData from './Product-Stock-Chart';

const BajajAreaChartCard = () => {
  const theme = useTheme();

  return (
    <>
      <Grid sx={{ bgcolor: 'lightblue' }}>
        <Grid container sx={{ p: 2, color: '#fff' }}>
          <Grid item xs={12}>
            <Grid container alignItems="center" justifyContent="space-between">
              <Grid item>
                <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
                  일일 대여 현황
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" sx={{ color: 'success.main' }}>
                  +12
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Chart {...chartData} />
      </Grid>
    </>
  );
};

export default BajajAreaChartCard;
