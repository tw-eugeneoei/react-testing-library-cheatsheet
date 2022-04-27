/** @jsxImportSource @emotion/react */
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import { PATHS } from "../../../constants/paths";
import { nestedList } from "../../../styles/customStyles";

const InputLinks = () => {
    return (
        <Grid item xs={12} component={"li"}>
            <h2>Input</h2>
            <Grid item xs={12} component={"ul"}>
                <Grid item component={"li"}>
                    <h4>
                        Checkbox <code>input</code>
                    </h4>
                    <Grid item xs={12} component={"ul"}>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.checkbox.single}>
                                Single checkbox <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.checkbox.multiple}>
                                Multiple checkbox <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.checkbox.controlled}>
                                Controlled checkbox <code>input</code>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item component={"li"}>
                    <h4>
                        Number <code>input</code>
                    </h4>
                    <Grid item xs={12} component={"ul"}>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.number.single}>
                                Single number <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.number.multiple}>
                                Mltiple number <code>input</code>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item component={"li"}>
                    <h4>
                        Radio <code>input</code>
                    </h4>
                    <Grid item xs={12} component={"ul"}>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.radio.single}>
                                Single radio <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.radio.multiple}>
                                Mltiple radio <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.radio.multipleGroups}>
                                Mltiple radio groups
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.radio.multipleControlled}>
                                Mltiple controlled radio <code>input</code>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item component={"li"}>
                    <h4>
                        Text <code>input</code>
                    </h4>
                    <Grid item xs={12} component={"ul"}>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.text.single}>
                                Single text <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.text.multiple}>
                                Mltiple text <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.text.controlled}>
                                Controlled text <code>input</code>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item component={"li"}>
                    <h4>
                        Range <code>input</code>
                    </h4>
                    <Grid item xs={12} component={"ul"}>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.range.single}>
                                Single range <code>input</code>
                            </Link>
                        </Grid>
                        {/* <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.text.multiple}>
                                Mltiple text <code>input</code>
                            </Link>
                        </Grid>
                        <Grid item component={"li"} css={nestedList}>
                            <Link to={PATHS.input.text.controlled}>
                                Controlled text <code>input</code>
                            </Link>
                        </Grid> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export { InputLinks };
