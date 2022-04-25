import { Grid } from "@mui/material";
import { NumberInput } from "./components/Input/NumberInput/NumberInput";

function App() {
    return (
        <Grid container justifyContent={"center"}>
            {/* <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header> */}
            <Grid item xs={12}>
                <NumberInput />
            </Grid>
        </Grid>
    );
}

export default App;
