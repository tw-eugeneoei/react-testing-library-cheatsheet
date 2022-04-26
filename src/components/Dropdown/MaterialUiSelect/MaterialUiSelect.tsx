/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";

const labelStyles = css`
    background-color: white;
`;

const MaterialUiSelect = () => {
    const [value, setValue] = useState<string>("Apple");

    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value);
    };

    return (
        <FormControl>
            <InputLabel css={labelStyles}>Fruits</InputLabel>
            <Select value={value} onChange={handleChange}>
                <MenuItem value={"Apple"}>Apple</MenuItem>
                <MenuItem value={"Orange"}>Orange</MenuItem>
                <MenuItem value={"Pear"}>Pear</MenuItem>
            </Select>
        </FormControl>
    );
};

export { MaterialUiSelect };
