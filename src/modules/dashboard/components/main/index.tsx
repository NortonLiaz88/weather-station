import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper, ChartContentTitle, ChartContentWrapper, Header, Wrapper } from "./styles";
import { useWeather } from "../../hooks/useWeather";
import { optionsChart } from "../charts/day-chart";
import { WeatherChart } from "../../models/temperature";
import { DashboardBarChart } from "../charts";
import { optionsHumidityChart } from "../charts/humidity-day-chart";
import { MonitoringCardComponent } from "../monitoring-card";
import { Select } from "../../../../components/select";


export const MainDashComponent: React.FC = () => {
    const { temperatureData, humidityData, temperatureChartRef, humidityChartRef, devicesData, isLoadingDevices, setCurrentDevice, currentDevice } = useWeather();


    const [temperatureConfig, setTemperatureConfig] = useState({} as any);
    const [humidityConfig, setHumidityConfig] = useState({} as any);


    const setupDayChart = useCallback(() => {
        const currentTemperatureConfig = optionsChart(temperatureData as WeatherChart);
        setTemperatureConfig(currentTemperatureConfig);
        const currentHumidityConfig = optionsHumidityChart(humidityData as WeatherChart);
        setHumidityConfig(currentHumidityConfig);
    }, [temperatureData, humidityData]);

    useEffect(() => {
        setupDayChart()
    }, [temperatureData, humidityData, temperatureChartRef, humidityChartRef]);


    return (
        <Wrapper>
            <ChartContentWrapper>
                <Header>
                <ChartContentTitle>Clima</ChartContentTitle>
                <Select
                    value={currentDevice}
                    selectItems={devicesData}
                    label={'Dispositivos'}
                    onChange={e => {
                        setCurrentDevice(e.target.value);
                    }}
                    onBlur={e => {
                        setCurrentDevice(e.target.value);
                    }} />
                </Header>
               
                <CardWrapper>
                    <DashboardBarChart title={"Temperatura"} chartRef={temperatureChartRef} options={temperatureConfig} />
                    <DashboardBarChart title={"Umidade"} chartRef={humidityChartRef} options={humidityConfig} />
                </CardWrapper>

            </ChartContentWrapper>
             <MonitoringCardComponent />

        </Wrapper>
    )
}