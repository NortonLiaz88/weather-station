import { WeatherChart } from "../../models/temperature";

export const optionsChart = (data: WeatherChart) => {
  const newData = data;

  return {
    dataZoom: [
      {
        type: 'slider',
        xAxisIndex: 0,
        filterMode: 'none',
        bottom: 50,
      },
      {
        type: 'inside',
        xAxisIndex: 0,
        filterMode: 'none',
      },
    ],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    xAxis: {
      type: 'category',
      data: newData?.valueFormatters ?? [],
      axisLabel: {
        formatter: function (value: string) {
          let label;
          if (new Date(value).getMinutes() < 10) {
            label =
              new Date(value).getHours() + ':0' + new Date(value).getMinutes();
          } else {
            label =
              new Date(value).getHours() + ':' + new Date(value).getMinutes();
          }
          return label;
        },
      },
    },
    yAxis: {
      boundaryGap: [0, '100%'],
      type: 'value',
      axisLabel: {
        formatter: '{value}॰',
      },
      axisPointer: {
        snap: true,
      },
      name: '',
    },
    series: [
      {
        color: '#459140',
        name: 'Temperatura',
        type: 'line',
        smooth: true,
        stack: 'Ad',
        data: newData?.values ?? [],
        areaStyle: {
        },
      },
    ],
  };
};
