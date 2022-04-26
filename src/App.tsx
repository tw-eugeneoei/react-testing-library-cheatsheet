import { Grid } from "@mui/material";
import { MultipleRadioGroups } from "./components/Input/RadioInput/MultipleRadioGroups";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <MultipleRadioGroups />
            </Grid>
        </Grid>
    );
}

export default App;
