var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DonutChartComponent } from './DonutChart.component';
var DonutChartModule = DonutChartModule_1 = (function () {
    function DonutChartModule() {
    }
    DonutChartModule.forRoot = function () {
        return { ngModule: DonutChartModule_1, providers: [] };
    };
    return DonutChartModule;
}());
DonutChartModule = DonutChartModule_1 = __decorate([
    NgModule({
        declarations: [DonutChartComponent],
        exports: [DonutChartComponent],
        schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }),
    __metadata("design:paramtypes", [])
], DonutChartModule);
export { DonutChartModule };
var DonutChartModule_1;
//# sourceMappingURL=/home/martin/proyectos/ngx-britecharts/src/components/donut-chart/DonutChart.module.js.map