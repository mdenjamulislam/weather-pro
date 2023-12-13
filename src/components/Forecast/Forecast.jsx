import axios from "axios";
import { useEffect, useState } from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Forecast = ({ apiKey, baseUrl, currentCountry }) => {
    const [forecastData, setForecastData] = useState([null]);
    const endPoint = '/forecast.json';
    const apiEndpoint = baseUrl + endPoint;

    useEffect(() => {
        const fetchWeatherForecast = async () => {
            try {
                const response = await axios.get(`${apiEndpoint}?key=${apiKey}&q=${currentCountry}&aqi=no`);
                setForecastData(response.data);
            } catch (error) {
                console.error("Error fetching weather forecast: ", error);
            }
        };
        fetchWeatherForecast();
    }, [apiKey, apiEndpoint, currentCountry]);

    let { forecast } = forecastData;
    let forecastday;

    if (forecastData && forecastData.forecast) {
        ({ forecast } = forecastData);
        ({ forecastday } = forecast);
    }
    console.log(forecastday);

    let chartData = [];
    if (forecastday && Array.isArray(forecastday)) {
        forecastday.map(datas => (
            chartData = datas.hour.map(data => {
                let hour = data.time.split(' ')[1].split(':')[0];
                return {
                    time: hour,
                    temp_c: data.temp_c,
                    temp_f: data.temp_f,
                };
            })
        ));
    }
    // parseInt(phone.slug.split('-')[1])

    console.log(chartData);


    return (
        <div>
            <h2 className="text-xl md:text-2xl font-bold pb-3 text-white">24 Hours weather forecast</h2>
            <div className="p-4 md:p-6 border border-gray-400 rounded-xl bg-glass">
                <LineChart width={600} height={250} data={chartData}>
                    <XAxis dataKey="time"></XAxis>
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="temp_c" stroke="#fff"></Line>
                    <Line type="monotone" dataKey="temp_f" stroke="#43Dc"></Line>
                </LineChart>
            </div>
        </div>
    );
};

export default Forecast;



