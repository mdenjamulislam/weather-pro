import axios from "axios";
import { useEffect, useState } from "react";
import Tempareture from "./components/Tempareature/Tempareture";
import Details from "./components/Details/Details";
import Forecast from "./components/Forecast/Forecast";

const App = () => {
  const [data, setData] = useState(null);

  const apiKey = '920ecab985bf4d2c8e443125231212';
  const baseUrl = 'http://api.weatherapi.com/v1';
  const currentCountry = 'Bangladesh';
  const apiEndpoint = 'https://api.weatherapi.com/v1/current.json';


  useEffect(() => {
    fetch(`${apiEndpoint}?key=${apiKey}&q=${currentCountry}&aqi=no`)
      .then(res => res.json())
      .then(data => setData(data));

  }, []);

  return (
    <div className="w-full h-screen bg-[url(../public/bg.jpg)] bg-no-repeat bg-cover bg-center">
      <div className="container">
        <Tempareture data={data}></Tempareture>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-8 mt-5 md:mt-8">
          <Details data={data}></Details>
          <Forecast 
          apiKey={apiKey}
          baseUrl={baseUrl}
          currentCountry={currentCountry}
          ></Forecast>
        </div>
      </div>
    </div>
  );
};

export default App;
