import { Grid } from "@mui/material";
import { HtmlSelect } from "./components/Dropdown/HtmlSelect//HtmlSelect";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <HtmlSelect />
            </Grid>
        </Grid>
    );
}

export default App;
