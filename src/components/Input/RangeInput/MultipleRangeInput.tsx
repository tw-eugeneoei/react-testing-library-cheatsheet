import { Grid } from "@mui/material";
import { useState } from "react";

const MultipleRangeInput = () => {
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);

    const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("height change");
    };

    const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("weight change");
    };

    return (
        <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
                <label htmlFor="height">Height</label>
                <input
                    id="height"
                    type="range"
                    value={height}
                    min={0}
                    max={10}
                    onChange={handleHeightChange}
                />
            </Grid>
            <Grid item xs={12}>
                <label htmlFor="weight">Weight</label>
                <input
                    id="weight"
                    type="range"
                    value={weight}
                    min={0}
                    max={10}
                    onChange={handleWeightChange}
                />
            </Grid>
        </Grid>
    );
};

export { MultipleRangeInput };
