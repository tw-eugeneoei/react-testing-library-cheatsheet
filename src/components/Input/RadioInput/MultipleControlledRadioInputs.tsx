import {
    RadioGroup,
    Radio,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";
import { useState } from "react";

const MultipleControlledRadioInputs = () => {
    const [checkedRadioValue, setCheckedRadioValue] = useState("");

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCheckedRadioValue(e.target.value);
    };

    return (
        <FormControl>
            <FormLabel id="grade-radio-group">Grade</FormLabel>
            <RadioGroup aria-labelledby="grade-radio-group">
                <FormControlLabel
                    value="consultant"
                    control={
                        <Radio
                            onChange={handleRadioChange}
                            checked={checkedRadioValue === "consultant"}
                        />
                    }
                    label="Consultant"
                />
                <FormControlLabel
                    value="senior consultant"
                    control={
                        <Radio
                            onChange={handleRadioChange}
                            checked={checkedRadioValue === "senior consultant"}
                        />
                    }
                    label="Senior Consultant"
                />
            </RadioGroup>
        </FormControl>
    );
};

export { MultipleControlledRadioInputs };
