import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography, ButtonBase, Button } from '@material-ui/core';
import { Car } from '../../interface'
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
        },
        image: {
            width: 128,
            height: 128,
        },
        img: {
            margin: 'auto',
            display: 'block',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        button: {
            color: '#EA7528'
        },
        heading: {
            fontSize: fonts.fontMedium,
            fontWeight: 'bold'
        },
    }),
);

const GridItem: React.FC<PropType> = (props: PropType) => {
    const classes = useStyles();
    const { car } = props
    const history = useHistory();
    const viewCarDetails = () => history.push({
        pathname: `/carDetails/${car.stockNumber}`,
        state: { carDetails: car }
    })

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={car.pictureUrl} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography className={classes.heading} align="left" gutterBottom variant="subtitle1">
                                    {car.manufacturerName} {car.modelName}
                                </Typography>
                                <Typography align="left" variant="body2" gutterBottom>
                                    Stock # {car.stockNumber} - {car.mileage.number} {car.mileage.unit} - {car.fuelType} - {car.color}
                                </Typography>
                                <Typography className={classes.button} align="left" variant="body2" style={{ cursor: 'pointer' }}>
                                    <Button className={classes.button}
                                        variant="text"
                                        onClick={viewCarDetails}>View Details</Button>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}

interface PropType {
    car: Car
}

export default GridItem;