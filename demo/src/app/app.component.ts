import { Component, ViewChild } from '@angular/core';
import { LegendChartComponent } from '@colap-dev/ngx-britecharts/dist';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  private firstBarChartData = [{ "name": "A", "value": 0.08167 }, { "name": "B", "value": 0.01492 }, { "name": "C", "value": 0.02782 }, { "name": "D", "value": 0.04253 }, { "name": "E", "value": 0.12702 }, { "name": "F", "value": 0.02288 }, { "name": "G", "value": 0.02015 }, { "name": "H", "value": 0.06094 }, { "name": "I", "value": 0.06966 }, { "name": "J", "value": 0.00153 }, { "name": "K", "value": 0.00772 }, { "name": "L", "value": 0.04025 }, { "name": "M", "value": 0.02406 }, { "name": "N", "value": 0.06749 }, { "name": "O", "value": 0.07507 }, { "name": "P", "value": 0.01929 }, { "name": "Q", "value": 0.00095 }, { "name": "R", "value": 0.05987 }, { "name": "S", "value": 0.06327 }, { "name": "T", "value": 0.09056 }, { "name": "U", "value": 0.02758 }, { "name": "V", "value": 0.00978 }, { "name": "W", "value": 0.0236 }, { "name": "X", "value": 0.0015 }, { "name": "Y", "value": 0.01974 }, { "name": "Z", "value": 0.00074 }];
  private firstBarChartConfig = {
    properties: {
      height: 500,
      usePercentage: true,
      isAnimated: true,
      horizontal: false,
      percentageAxisToMaxRatio: 1.3,
      numberFormat: '%'
    },
    colors: {
      //colorSchema: 'britechartsColorSchema',
      customSchema: ["#17becf ", "#bcbd22 ", "#7f7f7f ", "#e377c2 ", "#8c564b ", "#9467bd ", "#d62728 ", "#2ca02c ", "#ff7f0e ", "#1f77b4 "],
    },
    click: this.onBarChartClick,
    tooltip: {
      show: true,
      useDefaultEvents: true
    }
  };

  @ViewChild('legendChart') legendChart: LegendChartComponent;

  private onBarChartClick($ev) {
    console.log($ev);
  }
}
