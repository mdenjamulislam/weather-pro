

const Tempareture = ({data}) => {
    console.log(data);
    let current, location;
    if (data) {
        ({current, location } = data);
    }
    // Destructure of location
    let country, name, localtime;
    if (location) {
        ({country, name, localtime} = location);
    }
    // Destructure of current
    let temp_c, temp_f, condition;
    if (current) {
        ({temp_c, temp_f, condition} = current);
    }
    // Destructure of condition
    let code, text, icon;
    if (condition) {
        ({code, text, icon} = condition);
    }


    // Get Day Name 
    const getDayNameFormDate = (date) => {
        const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const dayIndex = date.getDay();
        return daysOfWeek[dayIndex];
    }
    const currentDate = new Date();
    const dayName = getDayNameFormDate(currentDate);

    return (
        <div className="w-full px-5 md:px-12 lg:px-16 py-5 md:py-10 lg:py-14 border border-gray-400 rounded-xl bg-glass">
            <div className="flex items-end justify-between gap-5">
                <div className="flex flex-col gap-4 md:gap-6">
                    <h2 className="text-lg md:text-2xl lg:text-4xl font-bold">{name}</h2>
                    <div className="flex items-end gap-1">
                        <h3 className="text-3xl md:text-5xl lg:text-7xl font-bold text-orange-500">{temp_c}<sup className="text-xl md:text-3xl lg:text-5xl pl-1">o</sup></h3>
                        <p className="text-xl md:text-3xl">{text}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3 md:gap-5">
                    <div className="text-xl md:text-2xl lg:text-3xl flex gap-3">
                        <p>{dayName} </p> 
                        <p>{temp_f}<sup>o</sup></p> 
                        <p>{temp_c}<sup>o</sup></p>
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl">Air Quality : <span>20 - Good</span></h2>
                </div>
            </div>
        </div>
    );
};

export default Tempareture;

