import { formatISO } from 'date-fns';
import { WeatherChart } from '../models/temperature';
import { WeatherRequest } from '../models/weather-request';

export const parseTemperatureRequest = (
    databaseDemand: WeatherRequest,
): WeatherChart => {
    let max = 0;
    let min = 100;

    const currentData = databaseDemand?.measurements?.map(ele => {
        if(ele.temperature > max) max = ele.temperature;
        if(ele.temperature < min) min = ele.temperature;

        return ele.temperature;
    });

    const valueFormatters = databaseDemand?.measurements?.map(ele => {
        return formatISO(new Date(ele?.date));
    });


    return {
        values: currentData,
        valueFormatters,
        max,
        min
    };
};
