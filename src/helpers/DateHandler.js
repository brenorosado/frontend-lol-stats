const formatTime = (TimeInSeconds) => {
    const secs = Math.round(TimeInSeconds);
    const hours = Math.floor(secs / (60 * 60));

    const divisor_for_minutes = secs % (60 * 60);
    const minutes = Math.floor(divisor_for_minutes / 60);

    const divisor_for_seconds = divisor_for_minutes % 60;
    const seconds = Math.ceil(divisor_for_seconds);

    return `${hours ? `${hours}h ` : ''}${minutes}m ${seconds}s`;
};


const calculateGameEndDate = (DateInMiliseconds) => {
    const data = new Date(DateInMiliseconds);
    const [weekDay, month, monthDay, year] = data.toString().split(' ');

    return `${monthDay}/${month}/${year}`;
};

export { formatTime, calculateGameEndDate };