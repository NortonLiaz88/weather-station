export type WeatherRequest = {
    measurements: WeatherMeasurement[];
};



export type WeatherMeasurement = {
    temperature: number
    humidity: number
    date: Date
}
