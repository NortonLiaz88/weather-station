import { formatISO } from 'date-fns';
import { WeatherChart } from '../models/temperature';
import { WeatherRequest } from '../models/weather-request';

export const parseHumidityRequest = (
    databaseDemand: WeatherRequest,
): WeatherChart => {
    let max = 0;
    let min = 100;

    const currentData = databaseDemand?.measurements?.map(ele => {
        if(ele.humidity > max) max = ele.humidity;
        if(ele.humidity < min) min = ele.humidity;

        return ele.humidity;
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
