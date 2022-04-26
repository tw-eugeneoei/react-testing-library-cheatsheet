/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Grid,
} from "@mui/material";
import { useState } from "react";

const labelStyle = css`
    background-color: white;
`;

const MaterialUiSelect = () => {
    const [value, setValue] = useState<string>("Apple");

    const handleChange = (e: SelectChangeEvent) => {
        setValue(e.target.value);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12} md={3}>
                <FormControl fullWidth>
                    <InputLabel css={labelStyle}>Fruits</InputLabel>
                    <Select value={value} onChange={handleChange}>
                        <MenuItem value={"Apple"}>Apple</MenuItem>
                        <MenuItem value={"Orange"}>Orange</MenuItem>
                        <MenuItem value={"Pear"}>Pear</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
        </Grid>
    );
};

export { MaterialUiSelect };
