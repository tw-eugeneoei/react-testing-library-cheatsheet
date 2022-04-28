/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import tablist from "./assets/tablist.png";
import tab from "./assets/tab.png";
import tabpanel from "./assets/tabpanel.png";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}

const image = css`
    width: 100%;
`;

const RoleTablistTabTabPanel = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <p>
                This example is taken from Material UI. Original example can be
                found{" "}
                <a
                    href="https://mui.com/material-ui/react-tabs/#basic-tabs"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                .
            </p>
            <hr></hr>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Tabpanel One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                This is tabpanel content One
            </TabPanel>
            <TabPanel value={value} index={1}>
                This is tabpanel content Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                This is tabpanel content Three
            </TabPanel>
            <hr></hr>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={tablist} alt="tablist-role" css={image} />
                        <figcaption>Image 1: "tablist" role</figcaption>
                    </figure>
                </Grid>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={tab} alt="tab-role" css={image} />
                        <figcaption>Image 2: "tab" role</figcaption>
                    </figure>
                </Grid>
            </Grid>
            <p>
                Inspecting the elements, the <code>&lt;Tabs&gt;</code> and
                <code>&lt;Tab&gt;</code> components are assigned the roles{" "}
                <b>"tablist"</b> and <b>"tab"</b> respectively. Also, the{" "}
                <code>&lt;Tab&gt;</code> component is actually a native{" "}
                <code>&lt;button&gt;</code> with an assgned role of <b>"tab"</b>
                . The inherent "button" role on the native HTML{" "}
                <code>&lt;button&gt;</code> element is overwritten. Therefore,
                in this example, getting all the buttons through{" "}
                <code>&lt;screen.getAllByRole("button")&gt;</code> will give
                "TestingLibraryElementError: Unable to find an accessible
                element with the role 'button'" error.
            </p>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={tabpanel} alt="tabpanel-role" css={image} />
                        <figcaption>Image 3: "tabpanel" role</figcaption>
                    </figure>
                </Grid>
            </Grid>
            <p>
                And the contents in <code>&lt;TabPanel&gt;</code>
                component is assigned the role <b>"tabpanel"</b>.
            </p>
            <p>
                In Bootsrap, a smiliar set up applies. See{" "}
                <a
                    href="https://getbootstrap.com/docs/5.1/components/navs-tabs/#javascript-behavior"
                    target="_blank"
                    rel="noreferrer"
                >
                    this
                </a>{" "}
                example.
            </p>
            <p>
                Note that, depending on the CSS framework, the elements may be
                labelled differently.
            </p>
        </Box>
    );
};

export { RoleTablistTabTabPanel };
