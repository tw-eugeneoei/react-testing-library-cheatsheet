import { Grid } from "@mui/material";
import { MultipleRadioInputs } from "./components/Input/RadioInput/MultipleRadioInputs";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <MultipleRadioInputs />
            </Grid>
        </Grid>
    );
}

export default App;
