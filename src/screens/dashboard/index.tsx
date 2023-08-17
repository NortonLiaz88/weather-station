import React from "react";
import { MainDashComponent } from "../../modules/dashboard/components/main";
import { WeatherProvider } from "../../modules/dashboard/hooks/useWeather";


export const DashboardScreen: React.FC = () => {
    return (
        <WeatherProvider>
            <MainDashComponent />
        </WeatherProvider>
    )
}