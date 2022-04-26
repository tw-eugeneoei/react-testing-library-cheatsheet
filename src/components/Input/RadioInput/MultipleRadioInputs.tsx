import {
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";

const MultipleRadioInputs = () => {
    return (
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
    );
};

export { MultipleRadioInputs };
