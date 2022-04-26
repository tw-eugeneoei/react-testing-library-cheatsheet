import { Grid } from "@mui/material";
import { MultipleControlledRadioInputs } from "./components/Input/RadioInput/MultipleControlledRadioInputs";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <MultipleControlledRadioInputs />
            </Grid>
        </Grid>
    );
}

export default App;
