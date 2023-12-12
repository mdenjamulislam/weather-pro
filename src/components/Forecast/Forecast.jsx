import { LineChart, ResponsiveContainer, XAxis } from "recharts";

const Forecast = ({data}) => {
    let current, location;
    if (data) {
        ({current, location} = data);
    }
    // Destructure of current
    let temp_c, temp_f, condition;
    if (current) {
        ({temp_c, temp_f, condition} = current);
    }

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    return (
        <div>
            <h2 className="text-xl md:text-2xl font-bold pb-3 text-white">5-day weather forecast</h2>
            <div className="p-4 md:p-6 border border-gray-400 rounded-xl bg-glass">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart width={500} height={300} data={temp_c}></LineChart>
                    <XAxis dataKey={daysOfWeek}></XAxis>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Forecast;