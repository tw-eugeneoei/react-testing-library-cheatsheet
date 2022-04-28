import { Grid } from "@mui/material";

const RoleTable = () => {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <table>
                    <caption>Table One</caption>
                    <thead>
                        <tr>
                            <th>Month</th>
                            <th>Savings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>January</td>
                            <td>$100</td>
                        </tr>
                        <tr>
                            <td>February</td>
                            <td>$80</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Sum</td>
                            <td>$180</td>
                        </tr>
                    </tfoot>
                </table>
            </Grid>
            <Grid item xs={12}>
                <table>
                    <caption>Table Two</caption>
                    <tbody>
                        <tr>
                            <th scope="rowgroup" rowSpan={3}>
                                Group1
                            </th>
                            <th scope="row">Header1</th>
                            <td>Test1</td>
                        </tr>
                        <tr>
                            <th scope="row">Header2</th>
                            <td>Test2</td>
                        </tr>
                        <tr>
                            <th scope="row">Header3</th>
                            <td>Test3</td>
                        </tr>
                    </tbody>
                </table>
            </Grid>
        </Grid>
    );
};

export { RoleTable };
