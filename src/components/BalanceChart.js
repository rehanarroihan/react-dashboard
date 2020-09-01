import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['16-07-2018', '17-07-2018', '18-07-2018', '19-07-2018', '20-07-2018', '21-07-2018', '22-07-2018', '23-07-2018', '24-07-2018', '25-07-2018', '26-07-2018', '27-07-2018', '28-07-2018', '29-07-2018', '30-07-2018', '31-07-2018'],
  datasets: [{
    label: 'Balance',
    data: [50, 61, 80, 50, 72, 52, 60, 41, 30, 45, 70, 40, 93, 63, 50, 62],
    backgroundColor: 'rgba(63,82,227,.2)',
    borderWidth: 3,
    borderColor: 'rgba(63,82,227,1)',
    pointBorderWidth: 0,
    pointBorderColor: 'transparent',
    pointRadius: 3,
    pointBackgroundColor: 'transparent',
    pointHoverBackgroundColor: 'rgba(63,82,227,1)',
  }]
};

const option = {
  layout: {
    padding: {
      bottom: -1,
      left: -1
    }
  },
  legend: {
    display: false
  },
  scales: {
    yAxes: [{
      gridLines: {
        display: false,
        drawBorder: false,
      },
      ticks: {
        beginAtZero: true,
        display: false
      }
    }],
    xAxes: [{
      gridLines: {
        drawBorder: false,
        display: false,
      },
      ticks: {
        display: false
      }
    }]
  },
};

export default class BalanceChart extends Component {
  render() {
    return (
      <Line id="balance-chart" ref="chart" data={data} options={option} />
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data
    console.log(datasets[0].data);
  }
}