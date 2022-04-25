import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const MultipleCheckboxInputs = () => {
    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="Subscribe"
                />
                <FormControlLabel
                    control={<Checkbox checked={true} />}
                    label="I agree"
                />
            </FormGroup>
        </>
    );
};

export { MultipleCheckboxInputs };
