/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Box,
    Grid,
} from "@mui/material";
import radiogroup from "./assets/radiogroup.png";

const image = css`
    width: 100%;
`;

const RoleRadioGroup = () => {
    return (
        <Box>
            <p>
                This example below is taken from Material UI. Original example
                can be found{" "}
                <a
                    href="https://mui.com/material-ui/react-radio-button/#radio-group"
                    target="_blank"
                    rel="noreferrer"
                >
                    here
                </a>
                .
            </p>
            <hr></hr>
            <FormControl>
                <FormLabel id="radio-buttons-group-label">Grade</FormLabel>
                <RadioGroup
                    aria-labelledby="radio-buttons-group-label"
                    defaultValue="consultant"
                    name="radio-buttons-group"
                >
                    <FormControlLabel
                        value="consultant"
                        control={<Radio />}
                        label="Consultant"
                    />
                    <FormControlLabel
                        value="senior consultant"
                        control={<Radio />}
                        label="Senior Consultant"
                    />
                    <FormControlLabel
                        value="principal consultant"
                        control={<Radio />}
                        label="Principal Consultant"
                    />
                </RadioGroup>
            </FormControl>
            <hr></hr>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <figure>
                        <img src={radiogroup} alt="tabpanel-role" css={image} />
                        <figcaption>Image 1: "radiogroup" role</figcaption>
                    </figure>
                </Grid>
            </Grid>
            <p>
                Inspecting the elements, the <code>&lt;RadioGroup&gt;</code>{" "}
                Material UI component is a HTML <code>&lt;div&gt;</code> element
                role <b>"radiogroup"</b>.
            </p>
        </Box>
    );
};

export { RoleRadioGroup };
