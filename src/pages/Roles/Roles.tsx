/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Grid, Box, Switch, Tooltip, IconButton, Alert } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import { RoleDialog } from "./RoleDialog";

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

const image = css`
    width: 100%;
`;

const emoticon = css`
    font-size: 30px;
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
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
    };

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
                    <code>&lt;button&gt;</code> or{" "}
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
                        No native HTML element with these roles. These roles can
                        be assigned when you are trying to recreate something
                        like Excel.
                    </p>
                    <p>
                        Seems to be what{" "}
                        <a
                            href="https://www.ag-grid.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            AG Grid
                        </a>{" "}
                        is doing.
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
                <p css={emoticon}>&#x1F937;</p>
            </Wrapper>
            <Wrapper>
                <h3 css={heading}>"menuitemcheckbox"</h3>
                <p css={emoticon}>&#x1F937;</p>
            </Wrapper>
            <Wrapper>
                <h3 css={heading}>"menuitemradio"</h3>
                <p css={emoticon}>&#x1F937;</p>
            </Wrapper>
            <Wrapper>
                <h3>
                    <div>"combobox"</div>
                    <p>
                        <code>&lt;select&gt;</code>
                    </p>
                    <p>&</p>
                    <div>"option"</div>
                    <p>
                        <code>&lt;option&gt;</code>
                    </p>
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
                <Box>
                    <label htmlFor="search-me">Search me</label>
                    <input id="search-me" type="search" />
                </Box>
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
                        No native HTML element with this role. Switches we know
                        of in Material UI (inspect switch in{" "}
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
                <h3>"tablist", "tab" & "tabpanel"</h3>
                <Box m={2}>
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
                <Box>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" />
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"tree", "treeitem" & "group"</h3>
                <Box m={2}>
                    <p>
                        No native HTML element corresponds to these roles. These
                        are assigned.
                    </p>
                    <p>
                        See <Link to="/roles/tree-treeitem-group">this</Link>{" "}
                        sample code taken from Material UI.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"table"</h3>
                <p>
                    <code>&lt;table&gt;</code>
                </p>
            </Wrapper>
            <Wrapper>
                <h3>"rowgroup"</h3>
                <Box m={2}>
                    <p>
                        Encompases <code>&lt;thead&gt;</code>,{" "}
                        <code>&lt;tbody&gt;</code> and{" "}
                        <code>&lt;tfoot&gt;</code>. Read{" "}
                        <a
                            href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/rowgroup_role#description"
                            target="_blank"
                            rel="noreferrer"
                        >
                            this
                        </a>{" "}
                        section of MDN.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"row"</h3>
                <p>
                    <code>&lt;tr&gt;</code>
                </p>
                <Box m={2}>
                    <p>
                        Its textContent returns a concatenated string of all
                        values in the row separated by spaces.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"rowheader"</h3>
                <p>
                    <code>&lt;th scope="row"&gt;</code>
                </p>
            </Wrapper>
            <Wrapper>
                <h3>"columnheader"</h3>
                <p>
                    <code>&lt;th&gt;</code>
                </p>
            </Wrapper>
            <Wrapper>
                <h3>"cell"</h3>
                <p>
                    <code>&lt;td&gt;</code>
                </p>
            </Wrapper>
            <Wrapper>
                <h3>"figure"</h3>
                <p>
                    <code>&lt;figure&gt;</code>
                </p>
                <figure aria-label="Programmer">
                    <img
                        src="https://img.devrant.com/devrant/rant/r_1973724_9QTSY.jpg"
                        alt="programmer"
                        css={image}
                    />
                    <figcaption>This is a joke</figcaption>
                </figure>
            </Wrapper>
            <Wrapper>
                <h3>"img"</h3>
                <p>
                    <code>&lt;img&gt;</code>
                </p>
                <figure>
                    <img
                        src="https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png"
                        alt="oh that is why"
                        css={image}
                    />
                    <figcaption>Programmers while reviewing code</figcaption>
                </figure>
            </Wrapper>
            <Wrapper>
                <h3>"heading"</h3>
                <Box m={2}>
                    <p>
                        <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code>,{" "}
                        <code>&lt;h3&gt;</code>, <code>&lt;h4&gt;</code>,{" "}
                        <code>&lt;h5&gt;</code>, <code>&lt;h6&gt;</code>
                    </p>
                </Box>
                <h1>heading 1</h1>
                <h2>heading 2</h2>
                <h3>heading 3</h3>
                <h4>heading 4</h4>
                <h5>heading 5</h5>
                <h6>heading 6</h6>
            </Wrapper>
            <Wrapper>
                <h3>"article"</h3>
                <p>
                    <code>&lt;article&gt;</code>
                </p>
                <Box
                    m={2}
                    sx={{
                        border: "1px solid black",
                    }}
                >
                    <article aria-label="Article Name">
                        <p>This is some article.</p>
                    </article>
                </Box>
                <Box m={2}>
                    <p>
                        Give <code>&lt;article&gt;</code> element an
                        "aria-label" or "aria-labelledby" (if title of said
                        article is on UI) attribute allows querying an "article"
                        role by its "name".
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"tooltip"</h3>
                <code>&lt;Tooltip&gt;</code>
                <p>
                    <Tooltip title="Delete">
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                </p>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. In this example,
                        using Material UI's <code>&lt;Tooltip&gt;</code>{" "}
                        component.
                    </p>
                    <p>
                        On hover, a <code>&lt;div role="tooltip"&gt;</code> is
                        added to the DOM. The same applies with Boostrap.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"alert"</h3>
                <code>&lt;Alert&gt;</code>
                <Box m={2}>
                    <Alert severity="error" aria-label="alert-error">
                        This is an error alert ??? check it out!
                    </Alert>
                </Box>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. In this example,
                        using Material UI's <code>&lt;Alert&gt;</code> component
                        where it is a <code>&lt;div&gt;</code> element with the
                        role "alert". The same applies in bootstrap.
                    </p>
                    <p>
                        Give <code>&lt;Alert&gt;</code> component an
                        "aria-label" attribute allows querying an "alert" role
                        by its "name".
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"dialog"</h3>
                <code>&lt;Dialog&gt;</code>
                <Box m={2}>
                    <button onClick={handleOpenDialog}>
                        Click me to open dialog
                    </button>
                </Box>
                <RoleDialog
                    isOpen={isDialogOpen}
                    closeDialog={handleCloseDialog}
                />
                <Box m={2}>
                    <p>
                        No native HTML element with this role. In this example,
                        using Material UI's <code>&lt;Dialog&gt;</code>{" "}
                        component where the role "dialog" is applied to{" "}
                        <code>&lt;div&gt;</code> element containing content.
                        Similar application in Bootstrap
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"navigation"</h3>
                <code>&lt;nav&gt;</code>
                <Box
                    m={2}
                    sx={{
                        border: "1px solid black",
                        padding: "4px",
                    }}
                >
                    <nav>This is a navigation bar</nav>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"form"</h3>
                <code>&lt;form&gt;</code>
                <Box
                    m={2}
                    sx={{
                        borderBottom: "1px solid black",
                    }}
                >
                    <h4 id="login-form">Login form</h4>
                    <form
                        aria-labelledby="login-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <p>
                            <label htmlFor="email">Email: </label>
                            <input id="email" type="text" />
                        </p>
                        <p>
                            <label htmlFor="password">Password: </label>
                            <input id="password" type="password" />
                        </p>
                    </form>
                </Box>
                <Box
                    m={2}
                    sx={{
                        borderBottom: "1px solid black",
                    }}
                >
                    <h4 id="search-page-form">Search page form</h4>
                    <form
                        aria-labelledby="search-page-form"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <p>
                            <label htmlFor="search">Search page: </label>
                            <input id="search" type="search" />
                        </p>
                    </form>
                </Box>
                <Box m={2}>
                    A <code>&lt;form&gt;</code> element needs a name to have the
                    "form" role.
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>
                    <div>"term"</div>
                    <p>
                        <code>&lt;dfn&gt;</code> & <code>&lt;dt&gt;</code>
                    </p>
                    <p>&</p>
                    <div>"definition"</div>
                    <p>
                        <code>&lt;dd&gt;</code>
                    </p>
                </h3>
                <Box
                    m={2}
                    sx={{
                        border: "1px solid black",
                        padding: "4px",
                    }}
                >
                    <p>
                        <dfn aria-label="HTML">HTML</dfn>. Using{" "}
                        <code>&lt;dfn&gt;</code> on text "HTML".
                    </p>
                </Box>
                <Box
                    m={2}
                    sx={{
                        border: "1px solid black",
                        padding: "4px 12px",
                        textAlign: "left",
                    }}
                >
                    {/*
                        <dl> element does not have implicit "list" role
                        https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/pull/807
                    */}
                    {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
                    <dl role="list" aria-label="Drinks list">
                        <dt aria-label="Coffee">Coffee</dt>
                        <dd aria-label="Black hot drink">Black hot drink</dd>
                        <dt aria-label="Milk">Milk</dt>
                        <dd aria-label="White cold drink">White cold drink</dd>
                    </dl>
                </Box>
                <Box m={2}>
                    <p>
                        Provide the "aria-label" attribute and you can query by
                        role using "name".
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>
                    <div>"list"</div>
                    <p>
                        <code>&lt;ul&gt;</code> & <code>&lt;ol&gt;</code>
                    </p>
                    <p>&</p>
                    <div>"listitem"</div>
                    <p>
                        <code>&lt;li&gt;</code>
                    </p>
                </h3>
                <Box
                    m={2}
                    sx={{
                        borderBottom: "1px solid black",
                        textAlign: "left",
                    }}
                >
                    <h3 id="superheroes">Superheroes</h3>
                    <ul aria-labelledby="superheroes">
                        <li>Captain Marvel</li>
                        <li>Spiderman</li>
                        <li>Ironman</li>
                    </ul>
                </Box>
                <Box
                    m={2}
                    sx={{
                        borderBottom: "1px solid black",
                        textAlign: "left",
                    }}
                >
                    <h3 id="fruits">Fruits</h3>
                    <ol aria-labelledby="fruits">
                        <li>Durian</li>
                        <li>Orange</li>
                        <li>Pear</li>
                    </ol>
                </Box>
                <Box m={2}>
                    <p>
                        The "list" role can also be assigned to{" "}
                        <code>&lt;dl&gt;</code> element allow querying by name
                        to query for specific <code>&lt;dl&gt;</code> within UI.
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"paragraph"</h3>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually. Note that <code>&lt;p&gt;</code> element does
                        not have the implicit role "paragraph".
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"presentation"</h3>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually. In Material UI's <code>&lt;Dialog&gt;</code>{" "}
                        component, the "presentation" role is assigned to the
                        wrapping <code>&lt;div&gt;</code> element around the
                        "dialog role".
                    </p>
                </Box>
            </Wrapper>

            <Wrapper>
                <h3>"blockquote"</h3>
                <Box
                    m={2}
                    sx={{
                        border: "1px solid black",
                        padding: "8px",
                    }}
                >
                    <blockquote
                        cite="http://www.worldwildlife.org/who/index.html"
                        role="blockquote"
                    >
                        <p>
                            For 50 years, WWF has been protecting the future of
                            nature. The world's leading conservation
                            organization, WWF works in 100 countries and is
                            supported by 1.2 million members in the United
                            States and close to 5 million globally.
                        </p>
                    </blockquote>
                </Box>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually. Note that <code>&lt;blockquote&gt;</code>{" "}
                        element does not have the implicit role "blockquote".
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"caption"</h3>
                <figure aria-label="Shock image">
                    <img
                        src="https://www.memesmonkey.com/images/memesmonkey/d2/d2ef2de17b077420d0120bd6f4c505f0.jpeg"
                        alt="shock"
                        css={image}
                    />
                    <figcaption role="caption">Shock</figcaption>
                </figure>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually. Note that neither{" "}
                        <code>&lt;caption&gt;</code> nor{" "}
                        <code>&lt;figcaption&gt;</code>
                        elements have the implicit role "caption".
                    </p>
                </Box>
                <Box
                    m={2}
                    sx={{
                        textAlign: "left",
                    }}
                >
                    <p>Ensure element assigned "caption" role is:</p>
                    <ul>
                        <li>
                            a direct child of a figure, table, grid, or treegrid
                        </li>
                        <li>the first child of a table, grid, or treegrid</li>
                        <li>is the first or last child of a figure</li>
                    </ul>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"feed"</h3>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually.
                    </p>
                    <p>
                        Read more about it{" "}
                        <a
                            href="https://www.w3.org/TR/wai-aria-1.2/#feed"
                            target="_blank"
                            rel="noreferrer"
                        >
                            here
                        </a>
                        .
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"strong"</h3>
                <Box
                    m={2}
                    sx={{ border: "1px solid black", padding: "4px 8px" }}
                >
                    <p>
                        <strong role="strong">Important:</strong> Before
                        proceeding, make sure you add plenty of butter.
                    </p>
                </Box>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually. Note that <code>&lt;strong&gt;</code> element
                        does not have the implicit role "strong". Assign the
                        "strong" role to content that is important, serious, or
                        urgent. This is different from "emphasis".
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"emphasis"</h3>
                <Box
                    m={2}
                    sx={{ border: "1px solid black", padding: "4px 8px" }}
                >
                    <p>
                        This is <em role="emphasis">not</em> a drill!
                    </p>
                </Box>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually. Note that <code>&lt;em&gt;</code> element
                        does not have the implicit role "emphasis". Assign the
                        "emphasis" role to stress or emphasise on content. This
                        is different from "strong".
                    </p>
                </Box>
            </Wrapper>
            <Wrapper>
                <h3>"main"</h3>
                <code>&lt;main&gt;</code>
            </Wrapper>
            <Wrapper>
                <h3>"meter"</h3>
                <code>&lt;meter&gt;</code>
                <Box m={2}>
                    <label htmlFor="fuel">Fuel level</label>:&nbsp;
                    <meter
                        id="fuel"
                        min={0}
                        max={100}
                        low={33}
                        high={66}
                        optimum={80}
                        value={90}
                        // eslint-disable-next-line jsx-a11y/role-has-required-aria-props
                        role="meter"
                    >
                        at 50/100
                    </meter>
                </Box>
                <Box m={2}>
                    <p>
                        No native HTML element with this role. Assigned
                        manaually. Note that <code>&lt;meter&gt;</code> element
                        does not have the implicit role "meter". Avoid using
                        "meter" role to indicate progress. Refer to
                        "progressbar" role.
                    </p>
                </Box>
            </Wrapper>
        </Grid>
    );
};

export { Roles };
