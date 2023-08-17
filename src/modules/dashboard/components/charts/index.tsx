import React from 'react';
import ReactECharts from 'echarts-for-react';
import { ChartCard } from '../chart-card';
interface IBarChartProps {
  title: string;
  options: any;
  loading?: boolean;
  chartRef: any;
}

export const DashboardBarChart: React.FC<IBarChartProps> = ({
  title,
  options,
  loading,
  chartRef,
}: IBarChartProps) => {
  return (
    <ChartCard title={title}>
      <ReactECharts
        ref={chartRef}
        option={options}
        notMerge={true}
        style={{ height: '400px', width: '100%', flex: 1 }}
      />
    </ChartCard>
  );
};
