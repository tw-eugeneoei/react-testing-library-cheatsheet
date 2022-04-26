const days = new Array(31).fill(null).map((_, i) => i + 1);
const months = new Array(12).fill(null).map((_, i) => i + 1);
const years = new Array(50).fill(null).map((_, i) => i + 1990);

const MultipleHtmlSelect = () => {
    return (
        <>
            <p>
                <label htmlFor="day">Day</label>
                <select id="day">
                    {days.map((day) => (
                        <option key={day}>{day}</option>
                    ))}
                </select>
            </p>
            <p>
                <label htmlFor="month">Month</label>
                <select id="month">
                    {months.map((month) => (
                        <option key={month}>{month}</option>
                    ))}
                </select>
            </p>
            <p>
                <label htmlFor="year">Year</label>
                <select id="year">
                    {years.map((year) => (
                        <option key={year}>{year}</option>
                    ))}
                </select>
            </p>
        </>
    );
};

export { MultipleHtmlSelect };
