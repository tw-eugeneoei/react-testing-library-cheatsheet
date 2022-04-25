import React, { useState } from "react";
import { TextField } from "@mui/material";

const ControlledTextInput = () => {
    const [value, setValue] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <TextField
            label="Controlled Text Input Element"
            variant="outlined"
            value={value}
            onChange={handleChange}
        />
    );
};

export { ControlledTextInput };
