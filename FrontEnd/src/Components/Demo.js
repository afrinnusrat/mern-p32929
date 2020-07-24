import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import { useOvermind } from "../Others/OvermindHelper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NodeFetchHelper } from "../Others/NodeFetchHelper";

const Demo = () => {
    const { state, actions } = useOvermind()
    const [data, setData] = useState();

    return (
        <Grid style={{ padding: 48 }} container direction='column' justify='center' alignItems='center'
            alignContent='center'>
            <Typography>{state.counter}</Typography>
            <Grid container direction='row' alignItems='center' alignContent='center' justify='center'>
                <Button style={{ margin: 8 }} color='primary' variant='contained' onClick={() => {
                    actions.increase(1)
                }}>+</Button>
                <Button style={{ margin: 8 }} color='primary' variant='contained' onClick={() => {
                    actions.increase(-1)
                }}>-</Button>
            </Grid>

            <Button variant='contained' color='primary' onClick={() => {
                console.log("Window: " + window.location);
                NodeFetchHelper.get("http://localhost:5000/users/", null, null, (status, json) => {
                    console.log(status);
                    console.log(json);
                    setData(json);
                })
            }}>GET DATA FROM SERVER</Button>

            <Typography style={{ margin: 40 }}>
                {JSON.stringify(data)}
            </Typography>

        </Grid>
    );
};

export default Demo;
