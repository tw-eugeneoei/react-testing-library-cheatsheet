/** @jsxImportSource @emotion/react */
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { PATHS } from "../../../constants/paths";
import { nestedList } from "../../../styles/customStyles";

const DropdownLinks = () => {
    return (
        <Grid item xs={12} component={"li"}>
            <h2>Dropdown</h2>
            <Grid item xs={12} component={"ul"}>
                <Grid item component={"li"}>
                    <h4>
                        Native HTML <code>select</code> element
                    </h4>
                    <Grid item xs={12} component={"ul"}>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.dropdown.native.single}>
                                Single native <code>select</code> element
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.dropdown.native.multiple}>
                                Multiple native <code>select</code> element
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item component={"li"}>
                    <h4>
                        Material UI <code>Select</code> component
                    </h4>
                    <Grid item xs={12} component={"ul"}>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.dropdown.materialUi.single}>
                                Single Material UI <code>Select</code> component
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.dropdown.materialUi.multiple}>
                                Multiple Material UI <code>Select</code>{" "}
                                component
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { DropdownLinks };
