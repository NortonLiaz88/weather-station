import { Cloud, Cold, SevereCold, Sun } from "../components/icons/styles"

export const makeTemperatureIcon = (temperature: number) => {
    if(temperature <= 12) {
        return <SevereCold/>
    }
    if(temperature > 12 && temperature <= 20)  {
        return <Cold/>
    }
    if(temperature > 20 && temperature < 29)  {
        return <Cloud/>
    } else {
        return <Sun/>
    }
 }