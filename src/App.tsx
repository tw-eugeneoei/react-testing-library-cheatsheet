import { Grid } from "@mui/material";
import { RadioInput } from "./components/Input/RadioInput/RadioInput";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <RadioInput />
            </Grid>
        </Grid>
    );
}

export default App;
