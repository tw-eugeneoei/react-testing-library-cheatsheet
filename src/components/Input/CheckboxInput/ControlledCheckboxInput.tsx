import React, { useState } from "react";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const ControlledCheckboxInput = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    };

    return (
        <FormGroup>
            <FormControlLabel
                control={
                    <Checkbox checked={isChecked} onChange={handleChange} />
                }
                label="Controlled Checkbox"
            />
        </FormGroup>
    );
};

export { ControlledCheckboxInput };
