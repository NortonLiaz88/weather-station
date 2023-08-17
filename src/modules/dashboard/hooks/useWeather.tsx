
import React, {
    createContext,
    useContext,
    useRef,
    useState,
} from 'react';

import { useQuery } from 'react-query';
import { WeatherChart } from '../models/temperature';
import api from '../../../services/api';
import { parseTemperatureRequest } from '../utils/parse-weather-request';
import { parseHumidityRequest } from '../utils/parse-humidity-request ';
import { Device } from '../models/devices';
import { Select } from '../models/select';

interface WeatherContextData {
    isLoading: boolean;
    isLoadingDevices: boolean;
    devicesData: string[];
    currentDevice: string;
    temperatureData: WeatherChart | undefined;
    setTemperatureData: (value: WeatherChart) => void;
    setCurrentDevice: (value: string) => void;
    humidityData: WeatherChart | undefined;
    setHumidityData: (value: WeatherChart) => void;
    getDemandInstance: () => void;
    createDemandMarkLine: () => void;
    temperatureChartRef: React.MutableRefObject<any>;
    humidityChartRef: React.MutableRefObject<any>;

}

interface WeatherProviderProps {
    children: React.ReactNode;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

function WeatherProvider({ children }: WeatherProviderProps) {


    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingDevices, setIsLoadingDevices] = useState(false);
    const [temperatureData, setTemperatureData] = useState<WeatherChart>();
    const [humidityData, setHumidityData] = useState<WeatherChart>();
    const [devicesData, setDevices] = useState<Select[]>([])
    
    const [currentDevice, setCurrentDevice] = useState('0560e0414c5086537ca878be8b4debbf')
    const temperatureChartRef = useRef({} as any);
    const humidityChartRef = useRef({} as any);

    

    const loadDevices = async (): Promise<Device[]> => {
        try {
            const { data } = await api.get(`/devices`);
            console.log('DATA', { data });
            return data;
        } catch (err) {
            // toast(`${err}`, { type: 'error' });
            throw err as Error;
        }
    };

    const loadMeasurements = async ({
        deviceId = currentDevice
    }): Promise<any> => {
        try {
            const params = {
                deviceId
            };
            const { data } = await api.get(`/samples/${deviceId}`);
            console.log('DATA', { data });
            return data;
        } catch (err) {
            // toast(`${err}`, { type: 'error' });
            return err;
        }
    };

    const showDevicesData = async () => {
        try {
            setIsLoadingDevices(true);
            const apiDevicesData = await loadDevices();
            const currentApiSerialNumber = apiDevicesData.map(ele => {
                return {
                    name: ele.serialNumber,
                    value: ele.serialNumber,
                    id: ele._id
                }
            });
            setDevices(currentApiSerialNumber);
            console.log('MY DEVICES',currentApiSerialNumber);
            setIsLoadingDevices(false);
        } catch {
            throw new Error('Error loading devices')
        } finally {
            setIsLoading(false);
        }
    }

    const showDemandData = async () => {
        try {
            setIsLoading(true);
            const apiDemandData = await loadMeasurements({});
            const parsedTemperatureData = parseTemperatureRequest(apiDemandData);
            const parsedHumidityData = parseHumidityRequest(apiDemandData);
            console.log(parsedHumidityData, parsedTemperatureData)

            setTemperatureData(parsedTemperatureData);
            setHumidityData(parsedHumidityData);
        } catch (err) {
            return new Error(err);
            // const message = handleDemandErrors(err as HttpError);
            // toast(`${message}`, { type: 'error' });
        } finally {
            setIsLoading(false);
        }
    };

    const {
        /*   isFetching,
          isLoading: loading,
          isError,
          refetch, */
    } = useQuery(
        [
            'weather-dash',
            currentDevice,
            // period,
            // token,
            // userProfile?.consumerUnit?.id,
            // exportedRange,
        ],
        () => showDemandData(),
        {
            keepPreviousData: true,
            refetchInterval: 1000,
        },
    );


    const {
        /*  isFetching,
         isLoading: loading,
         isError,
         refetch, */
    } = useQuery(
        [
            'device-list',
            // period,
            // token,
            // userProfile?.consumerUnit?.id,
            // exportedRange,
        ],
        () => showDevicesData(),
        {
            keepPreviousData: true,
            refetchInterval: 1000,
        },
    );

    return (
        <WeatherContext.Provider
            value={{
                isLoadingDevices,
                devicesData,
                currentDevice,
                isLoading,
                temperatureData,
                setTemperatureData,
                humidityData,
                setHumidityData,
                setCurrentDevice,
                temperatureChartRef,
                humidityChartRef
            }}>
            {children}
        </WeatherContext.Provider>
    );

}

function useWeather(): WeatherContextData {
    const context = useContext(WeatherContext);
    return context;
}
export { useWeather, WeatherProvider };
