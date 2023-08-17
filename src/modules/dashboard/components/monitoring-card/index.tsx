import React, { useEffect, useState } from "react";
import { CurrentTemperature, CurrentTemperatureWrapper, HumidityPicture, ImageWrapper, MonitoredVariableData, MonitoredVariableWrapper, MonitoringCardWrapper, TodayDescriptionMessage, TodayDescriptionWrapper, TodayStatus } from "./styles";
import { makeTemperatureIcon } from "../../utils/make-temperature-icon";
import { useWeather } from "../../hooks/useWeather";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import imgPath from  '../../../../assets/humidity.png'


export const MonitoringCardComponent: React.FC = () => {
    const [currentTemperature, setCurrentTemperature] = useState(0);
    const [currentHumidity, setCurrentHumidity] = useState(0);

    const { temperatureData, humidityData } = useWeather();

    useEffect(() => {
        setCurrentTemperature(temperatureData?.values[temperatureData.values.length - 1]);
        setCurrentHumidity(humidityData?.values[humidityData.values.length - 1]);

    }, [humidityData ?.values, temperatureData?.values])


    const handleFormatedDate = () => {
        const result = format(new Date(), "d 'de' MMMM yyyy", {
            locale: ptBR
        })

        return result
    }


    return (<MonitoringCardWrapper>
        <TodayStatus>
            {makeTemperatureIcon(currentTemperature)}

            <TodayDescriptionWrapper>
                <TodayDescriptionMessage>Hoje</TodayDescriptionMessage>
                <TodayDescriptionMessage>{handleFormatedDate()}</TodayDescriptionMessage>
            </TodayDescriptionWrapper>
            <CurrentTemperatureWrapper>
                <CurrentTemperature>{currentTemperature} ºC</CurrentTemperature>
            </CurrentTemperatureWrapper>

            <MonitoredVariableWrapper>
                <ImageWrapper>
                    <HumidityPicture src={imgPath} />
                </ImageWrapper>
                <MonitoredVariableData>
                {currentHumidity}% 
                </MonitoredVariableData>
            </MonitoredVariableWrapper>


        </TodayStatus>
    </MonitoringCardWrapper>)
}