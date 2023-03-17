import { Component, OnInit } from "@angular/core";
import { ChartOptions, ChartType, ChartDataSets } from "chart.js";
import { Label } from "ng2-charts";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      xAxes: [{}],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            callback: function(label, index, labels) {
              return label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            }
          }
        }
      ]
    },
    tooltips: {
      enabled: true,
      intersect: true,
      titleFontSize: 20,
      callbacks: {
        label: function(tooltipItem:any, data:any) {
          var dataset = data.datasets[tooltipItem.datasetIndex];
          var currentValue = dataset.data[tooltipItem.index];
          return currentValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
    },
    plugins: {
      datalabels: {
        anchor: "end",
        align: "end"
      }
    }
  };
  public barChartLabels: any;
  public barChartType: ChartType = "bar";
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartData:any;

  constructor() {}

  ngOnInit() {
    this.barChartData = [
      { data: [4900], label: "A1", backgroundColor: "rgba(180, 0, 0, 1)" },
      { data: [5500], label: "A2", backgroundColor: "rgba(33, 81, 255, 1)" },
      { data: [4800], label: "A3", backgroundColor: "rgba(255, 166, 0, 1)" }
    ];

    this.barChartLabels = ["A1", "A2", "A3"];
  }

}
