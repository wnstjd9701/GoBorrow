const now = new Date();

const chartData = {
  type: 'area',
  height: 95,
  options: {
    chart: {
      id: 'rental-Chart',
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
      width: 1.3,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: true,
      },
      y: {
        title: 'Ticket ',
      },
      marker: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 6).toLocaleDateString(),
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 5).toLocaleDateString(),
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 4).toLocaleDateString(),
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 3).toLocaleDateString(),
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 2).toLocaleDateString(),
        new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).toLocaleDateString(),
        new Date(now.getFullYear(), now.getMonth(), now.getDate()).toLocaleDateString(),
      ],
    },
  },
  series: [
    {
      name: 'Number of Rentals : ',
      data: [0, 5, 3, 15, 20, 10, 22],
    },
  ],
};

export default chartData;
