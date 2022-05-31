const mult = (a: number, b: number): number => {
    return a * b;
};

// with type inference
const mult1 = (a: number, b: number) => {
    return a * b;
};

// possible bug if we rely on type inference
const mult2 = (a: number, b: number) => {
    a * b;
};

// use destructuring and typescript

const Forecast = {
    date: Date,
    weather: "sunny"
}

const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date)
    console.log(forecast.weather)
}

// destructuring
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date)
    console.log(weather)
}