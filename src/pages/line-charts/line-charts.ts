import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import chartJs from 'chart.js';



@Component({
  selector: 'page-line-charts',
  templateUrl: 'line-charts.html',
})
export class LineChartsPage {

  @ViewChild('lineCanvas') lineCanvas;

  lineChart: any;
  ngAfterViewInit() {
 
    setTimeout(() => {
      this.lineChart = this.getLineChart();
 
    }, 250);
  

  }
  constructor(public navCtrl: NavController) {}

  getChart(context, chartType, data, options?) {
    return new chartJs(context, {
      data,
      options,
      type: chartType,
    });
  }
  getLineChart() {
    const options =  {
      scales: {
        yAxes: [{
            id: 'first-y-axis',
            type: 'linear',
            position: 'right'
        }, {
            id: 'second-y-axis',
            type: 'linear'
        }]
    }
  }
  const x = [65, 65, 65, 65, 56, 55, 40]
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#0000FF',
          pointBorderWidth: 2,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: x,
          spanGaps: false,
          yAxisID: 'first-y-axis'

        },
        {
          label: 'My Second dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(175,92,192,0.4)',
          borderColor: 'rgba(31,156,156,1)',
          borderCapStyle: 'butt',
          borderDash: [5, 8],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(31,156,156,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(31,156,156,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [15, 39, 50, 81, 51, 55, 30],
          spanGaps: false,
        }
      ]
    };

    return this.getChart(this.lineCanvas.nativeElement, 'line', data,options);
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad LineChartsPage');
  }

}
