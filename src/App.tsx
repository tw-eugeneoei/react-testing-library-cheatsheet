import { Grid } from "@mui/material";
import { MultipleCheckboxInputs } from "./components/Input/CheckboxInput/MultipleCheckboxInputs";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <MultipleCheckboxInputs />
            </Grid>
        </Grid>
    );
}

export default App;
