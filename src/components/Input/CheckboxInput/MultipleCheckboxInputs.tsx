import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";

const MultipleCheckboxInputs = () => {
    return (
        <>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox defaultChecked={true} />}
                    label="Subscribe"
                />
                <FormControlLabel
                    control={<Checkbox defaultChecked={true} />}
                    label="I agree"
                />
            </FormGroup>
        </>
    );
};

export { MultipleCheckboxInputs };
