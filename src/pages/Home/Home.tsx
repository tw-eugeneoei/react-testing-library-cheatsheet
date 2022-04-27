import { Grid } from "@mui/material";
import { InputLinks } from "./Links/InputLinks";
import { DropdownLinks } from "./Links/DropdownLinks";

const Home = () => {
    return (
        <Grid container spacing={3} component={"ul"}>
            <InputLinks />
            <DropdownLinks />
        </Grid>
    );
};

export { Home };
