import axios from "axios";
import { useEffect, useState } from "react";
import { LineChart, ResponsiveContainer, XAxis } from "recharts";

const Forecast = ({ apiKey, baseUrl, currentCountry }) => {
    const [forecastData, setForecastData] = useState(null);
    const endPoint = '/forecast.json';
    const apiEndpoint = baseUrl + endPoint;

    useEffect(() => {
        const fetchWeatherForecast  = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}?key=${apiKey}&q=${currentCountry}&aqi=no`);
                setForecastData(response.data);
            } catch (error) {
                console.error("Error fetching weather forecast: ", error);
            }
        };
        fetchWeatherForecast();
    },[ apiKey, apiEndpoint, currentCountry ]);

    console.log(forecastData);

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return (
        <div>
            <h2 className="text-xl md:text-2xl font-bold pb-3 text-white">5-day weather forecast</h2>
            <div className="p-4 md:p-6 border border-gray-400 rounded-xl bg-glass">
                
            </div>
        </div>
    );
};

export default Forecast;