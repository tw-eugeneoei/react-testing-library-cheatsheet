import {
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";

const MultipleRadioGroups = () => {
    return (
        <>
            <FormControl>
                <FormLabel id="grade-radio-group">Grade</FormLabel>
                <RadioGroup aria-labelledby="grade-radio-group">
                    <FormControlLabel
                        value="consultant"
                        control={<Radio />}
                        label="Consultant"
                    />
                    <FormControlLabel
                        value="senior consultant"
                        control={<Radio />}
                        label="Senior Consultant"
                    />
                </RadioGroup>
            </FormControl>
            <hr></hr>
            <FormControl>
                <FormLabel id="age-range-radio-group">Age Range</FormLabel>
                <RadioGroup aria-labelledby="age-range-radio-group">
                    <FormControlLabel
                        value="20-40"
                        control={<Radio />}
                        label="20-40"
                    />
                    <FormControlLabel
                        value="40-60"
                        control={<Radio />}
                        label="40-60"
                    />
                </RadioGroup>
            </FormControl>
        </>
    );
};

export { MultipleRadioGroups };
