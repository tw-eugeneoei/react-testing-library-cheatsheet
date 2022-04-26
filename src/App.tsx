import { Grid } from "@mui/material";
import { MaterialUiSelect } from "./components/Dropdown/MaterialUiSelect/MaterialUiSelect";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <MaterialUiSelect />
            </Grid>
        </Grid>
    );
}

export default App;
