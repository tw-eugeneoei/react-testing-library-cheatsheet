import { Grid } from "@mui/material";
import { MultipleHtmlSelect } from "./components/Dropdown/HtmlSelect//MultipleHtmlSelect";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            <Grid item xs={12}>
                <MultipleHtmlSelect />
            </Grid>
        </Grid>
    );
}

export default App;
