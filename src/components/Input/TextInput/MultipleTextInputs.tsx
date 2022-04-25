import { Grid, TextField } from "@mui/material";

const MultipleTextInputs = () => {
    return (
        <Grid container>
            <Grid item xs={12}>
                <TextField label="Email" variant="outlined" value={"apple"} />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Password"
                    variant="outlined"
                    value={"apple"}
                />
            </Grid>
        </Grid>
    );
};

export { MultipleTextInputs };
