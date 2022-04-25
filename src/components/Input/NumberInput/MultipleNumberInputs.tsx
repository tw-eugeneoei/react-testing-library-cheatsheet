import { TextField } from "@mui/material";

const MultipleNumberInputs = () => {
    return (
        <>
            <TextField
                label="Contact number"
                type="number"
                variant="outlined"
            />
            <TextField label="Age" type="number" variant="outlined" />
        </>
    );
};

export { MultipleNumberInputs };
