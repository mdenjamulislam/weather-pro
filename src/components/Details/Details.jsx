

const Details = ({data}) => {
    let current, location;
    if (data) {
        ({current, location} = data);
    }

    // Destructure of current
    let feelslike_c, feelslike_f, humidity, uv, vis_miles, wind_mph, pressure_mb;

    if (current) {
        ({feelslike_c, feelslike_f, humidity, uv, vis_miles, wind_mph, pressure_mb} = current);
    }
    return (
        <div>
            <h2 className="text-xl md:text-2xl font-bold pb-3 text-white">Weather details</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 p-4 md:p-6 border border-gray-400 rounded-xl bg-glass">
            <div className="flex flex-col gap-3 items-center justify-center p-5 rounded-xl" data-theme="night">
                <h3 className="text-lg font-medium">Feels Like</h3>
                <p className="text-xl font-medium">{feelslike_c}<sup>o</sup></p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-5 rounded-xl" data-theme="night">
                <h3 className="text-lg font-medium">ENE wind</h3>
                <p className="text-xl font-medium">{wind_mph} <span>mi/h</span></p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-5 rounded-xl" data-theme="night">
                <h3 className="text-lg font-medium">Humidity</h3>
                <p className="text-xl font-medium">{humidity} <span>%</span></p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-5 rounded-xl" data-theme="night">
                <h3 className="text-lg font-medium">UV</h3>
                <p className="text-xl font-medium">{uv} <span>%</span></p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-5 rounded-xl" data-theme="night">
                <h3 className="text-lg font-medium">Visibiliyt</h3>
                <p className="text-xl font-medium">{vis_miles} <span>mi</span></p>
            </div>
            <div className="flex flex-col gap-3 items-center justify-center p-5 rounded-xl" data-theme="night">
                <h3 className="text-lg font-medium">Pressure</h3>
                <p className="text-xl font-medium">{pressure_mb} <span>hPa</span></p>
            </div>
        </div>
        </div>
    );
};

export default Details;