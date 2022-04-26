/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Grid,
    NativeSelect,
} from "@mui/material";
import { useState } from "react";

const days = new Array(31).fill(null).map((_, i) => i + 1);
const months = new Array(12).fill(null).map((_, i) => i + 1);
const years = new Array(50).fill(null).map((_, i) => i + 1990);

const labelStyle = css`
    background-color: white;
`;

const MultipleMaterialUiSelect = () => {
    const [day, setDay] = useState<string>("1");
    const [month, setMonth] = useState<string>("1");
    const [year, setYear] = useState<string>("1990");

    const handleSelectChange = (e: SelectChangeEvent) => {
        const name = e.target.name;
        const value = e.target.value;
        if (name === "day") {
            setDay(value);
        }
        if (name === "month") {
            setMonth(value);
        }
    };

    const handleNativeSelectComponentChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setYear(e.target.value);
    };

    return (
        <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                    {/* using default Select component */}
                    <InputLabel id="day" css={labelStyle}>
                        Day
                    </InputLabel>
                    <Select
                        labelId="day"
                        value={day}
                        onChange={handleSelectChange}
                        name="day"
                    >
                        {days.map((day) => (
                            <MenuItem key={day} value={day}>
                                {day}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <br></br>
            <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                    {/* retain Select component's styling but use native select element */}
                    <InputLabel htmlFor="month" css={labelStyle}>
                        Month
                    </InputLabel>
                    <Select
                        id="month"
                        value={month}
                        onChange={handleSelectChange}
                        native
                        name="month"
                    >
                        {months.map((month) => (
                            <option key={month} value={month}>
                                {month}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <br></br>
            <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                    {/* use NativeSelect component */}
                    <InputLabel htmlFor="year" css={labelStyle}>
                        Year
                    </InputLabel>
                    <NativeSelect
                        id="year"
                        value={year}
                        onChange={handleNativeSelectComponentChange}
                        name="year"
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </NativeSelect>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export { MultipleMaterialUiSelect };
