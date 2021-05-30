import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import theme from '../../providers/theme/index';

const { fonts } = theme;

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            margin: '8px 0',
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontSmall,
        },
        paper: {
            padding: '8px 24px;',
            margin: '0 24px',
            border: '1px solid #EDEDED',
        }
    }),
);

const Loader: React.FC = () => {
    const classes = useStyles()
    const dummy = Array.from(new Array(10).keys())
    return (
        <Grid container
            direction="column"
            spacing={1}>
            {dummy.map(value => (<div key={value} className={classes.root}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item>
                            <Skeleton variant="rect" width={128} height={128} />
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Skeleton variant="text" height={50} />
                                    <Skeleton variant="text" />
                                    <Skeleton variant="text" width="20%" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </div>))}
        </Grid>
    );
}

export default Loader