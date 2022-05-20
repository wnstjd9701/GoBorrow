const chartData = {
  type: 'area',
  height: 90,
  options: {
    chart: {
      id: 'support-chart',
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: 'Ticket ',
      },
      marker: {
        show: false,
      },
    },
  },
  series: [
    {
      data: [0, 5, 3, 15, 20, 10, 22],
    },
  ],
};

export default chartData;
