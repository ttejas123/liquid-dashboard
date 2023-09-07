import { AreaChart } from './Graph/AreaChart';
import { BarChart } from './Graph/BarChart';
import { DoughnutChart } from './Graph/DoughnutChart';
import Line from './Graph/Line';
import { RadarChart } from './Graph/RedarChart';

export const GraphCompoentRegistory = {
  line_chart: Line,
  bar_chart: BarChart,
  area_chart: AreaChart,
  doughnut_chart: DoughnutChart,
  radar_chart: RadarChart
};