/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, Box, Switch } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

const root = css`
    text-align: center;
`;

const box = css`
    height: 100%;
`;

const border = css`
    border: 1px solid gray;
    height: 100%;
`;

const heading = css`
    overflow-wrap: anywhere;
`;

const inputSpinButton = css`
    ::-webkit-inner-spin-button,
    ::-webkit-outer-spin-button {
        opacity: 1;
    }
`;

type WrapperProps = {
    children: ReactNode;
};

const Wrapper = (props: WrapperProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} xl={3}>
            <Box p={2} css={box}>
                <Box css={border}>{props.children}</Box>
            </Box>
        </Grid>
    );
};

const Roles = () => {
    return (
        <Grid container spacing={2} css={root}>
            <Grid item xs={12}>
                <Box>
                    <h1>
                        Getting elements by its <b>role</b>
                    </h1>
                </Box>
            </Grid>
            <Wrapper>
                <h3>"button"</h3>
                <p>
                    <code>&lt;input type="button"&gt;</code>
                </p>
                <button>Button</button>
            </Wrapper>
            <Wrapper>
                <h3>"checkbox"</h3>
                <p>
                    <code>&lt;input type="checkbox"&gt;</code>
                </p>
                <label htmlFor="checkbox">Checkbox</label>
                <input id="checkbox" type="checkbox" />
            </Wrapper>
            <Wrapper>
                <h3>"grid", "gridcell"</h3>
                <Box m={2}>
                    <p>
                        No native HTML elements with these roles. These roles
                        can be assigned when you are trying to recreate
                        something like Excel.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"link"</h3>
                <p>
                    <code>&lt;a&gt;</code>
                </p>
                <a href="https://www.channelnewsasia.com/">This is a link</a>
            </Wrapper>
            <Wrapper>
                <h3>"menuitem"</h3>
                <p>TODO</p>
            </Wrapper>
            <Wrapper>
                <h3 css={heading}>"menuitemcheckbox"</h3>
                <p>TODO</p>
            </Wrapper>
            <Wrapper>
                <h3 css={heading}>"menuitemradio"</h3>
                <p>TODO</p>
            </Wrapper>
            <Wrapper>
                <h3>
                    <div>"combobox"</div>
                    <div>
                        <code>&lt;select&gt;</code>
                    </div>
                    <p>&</p>
                    <div>"option"</div>
                    <div>
                        <code>&lt;option&gt;</code>
                    </div>
                </h3>
                <select>
                    <option>Apple</option>
                    <option>Orange</option>
                    <option>Pear</option>
                </select>
                <p>Both are used in conjunction with each other.</p>
            </Wrapper>
            <Wrapper>
                <h3>"progress"</h3>
                <p>
                    <code>&lt;progress&gt;</code>
                </p>
                <progress value="75" max="100" />
            </Wrapper>
            <Wrapper>
                <h3>"radio"</h3>
                <p>
                    <code>&lt;input type="radio"&gt;</code>
                </p>
                <input type="radio" />
            </Wrapper>
            <Wrapper>
                <h3>"radiogroup"</h3>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned to a
                        wrapper element to group radio buttons together.
                    </p>
                    <p>
                        See <Link to="/roles/radiogroup">this</Link> sample code
                        taken from Material UI.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"scrollbar"</h3>
                <p>No matching native element</p>
            </Wrapper>
            <Wrapper>
                <h3>"searchbox"</h3>
                <p>
                    <code>&lt;input type="search"&gt;</code>
                </p>
                <input type="search" />
            </Wrapper>
            <Wrapper>
                <h3>"separator"</h3>
                <p>
                    <code>&lt;hr/&gt;</code> or{" "}
                    <code>&lt;hr&gt;&lt;hr/&gt;</code>
                </p>
                <hr />
            </Wrapper>
            <Wrapper>
                <h3>"slider"</h3>
                <p>
                    <code>&lt;input type="range"&gt;</code>
                </p>
                <input type="range" />
            </Wrapper>
            <Wrapper>
                <h3>"spinbutton"</h3>
                <p>
                    <code>&lt;input type="number"&gt;</code>
                </p>
                <input type="number" css={inputSpinButton} />
            </Wrapper>
            <Wrapper>
                <h3>"switch"</h3>
                <p>
                    <code>&lt;Switch role="switch" /&gt;</code>
                </p>
                <Switch role="switch" />
                <Box m={2}>
                    <p>
                        There is no native "switch" element. Switches we know of
                        in Material UI (inspect switch in{" "}
                        <a
                            href="https://mui.com/material-ui/react-switch/#basic-switches"
                            target="_blank"
                            rel="noreferrer"
                        >
                            this
                        </a>{" "}
                        example) and Bootsrap (see in{" "}
                        <a
                            href="https://getbootstrap.com/docs/5.1/forms/checks-radios/#switches"
                            target="_blank"
                            rel="noreferrer"
                        >
                            this
                        </a>{" "}
                        example) for example are actually{" "}
                        <code>&lt;input type="checkbox"&gt;</code> with
                        manipulated CSS.
                    </p>
                    <p>
                        In this example, Material UI <code>&lt;Switch&gt;</code>{" "}
                        component is used and is assigned the "switch" role.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <Box m={2}>
                    <h3>"tablist", "tab" & "tabpanel"</h3>
                    <p>
                        There is no native "tablist", "tab" and "tabpanel"
                        elements. These roles are assigned.
                    </p>
                    <p>
                        See <Link to="/roles/tablist-tab-tabpanel">this</Link>{" "}
                        sample code taken from Material UI.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"textbox"</h3>
                <p>
                    <code>&lt;input type="text"&gt;</code>
                </p>
                <input type="text" />
            </Wrapper>
            <Wrapper>
                <Box m={2}>
                    <h3>"tree", "treeitem" & "group"</h3>
                    <p>
                        There is no native "tree", "treeitem" and "group"
                        elements. These roles are assigned.
                    </p>
                    <p>
                        See <Link to="/roles/tree-treeitem-group">this</Link>{" "}
                        sample code taken from Material UI.
                    </p>
                </Box>
            </Wrapper>
        </Grid>
    );
};

export { Roles };
