import { useTransitionContext } from "../../utils/hooks/transitionContext";
import { useWeatherContext } from "../../utils/hooks/weatherContext";

const Temperature = () => {
    const transitionContextObject = useTransitionContext();
    const weatherContextObject = useWeatherContext();
    
    const temperatrue = weatherContextObject?.weatherObject?.currentWeather.temperature;
    const weatherName = weatherContextObject?.weatherObject?.currentWeather.weatherName;
    const maxTemperature = weatherContextObject?.weatherObject?.currentWeather.maxTemperature;
    const minTemperature = weatherContextObject?.weatherObject?.currentWeather.minTemperature;
    return ( 
            <div className={`${transitionContextObject?.transition}-animation min-h-[12rem] h-[16rem] flex flex-col justify-center items-center w-full mt-[-26px] minHeight:mt-0 relative  text-white`}>
                <div className="text-8xl font-thin mt-2">{temperatrue ? `${Math.round(temperatrue)}`: ''}<span className="absolute mt-2 text-5xl w-0 inline-block">{temperatrue?'º':''}</span></div>
                <div className="text-xl text-gray-200" >{weatherName}</div>
                <div className="text-lg text-gray-200" >{maxTemperature && minTemperature? `H:${Math.round(maxTemperature)}º L:${Math.round(minTemperature)}º`: ''}</div> 
            </div>
     );
}
 
export default Temperature;