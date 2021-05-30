import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core'
import { NormalButton } from '../../common/button'
import { readFavCar, saveFavCar } from '../../utils/saveFavouriteCarToLocalStorage';
import { Car } from '../../interface'
import theme from '../../providers/theme/index';

const { fonts } = theme;

const carDetailsText = 'This car is currently available and can be delivered as soon as tomorrow morning. Please be aware that delivery times shown in this page are not definitive and may change due to bad weather conditions.'
const saveFavouriteText = 'If you like this car, click the button and save it in your collection of favourite items.'

const useStyles = makeStyles(() =>
    createStyles({
        carDetailsContainer: {
            boxSizing: 'border-box',
            minHeight: 'calc(100vh - 160px)'
        },
        imageContainer: {
            height: '300px',
            display: 'flex',
            padding: '24px',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        imageFullwidth: {

        },
        detailsWrapper: {
            width: '800px',
            margin: 'auto',
            marginTop: '24px'
        },
        textSection: {
            boxSizing: 'border-box',
            marginRight: '24px'
        },
        title: {
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontLarge,
            fontWeight: 'bold',
            marginBottom: '24px',
        },
        specification: {
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontMedium,
            marginBottom: '24px',
        },
        description: {
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontSmall,
            marginBottom: '24px',
            lineHeight: '24px',
        },
        favouriteSection: {
            boxSizing: 'border-box',
            height: '100%',
            marginleft: '24px',
            padding: '12px',
            border: '1px solid #EDEDED'
        },
        favouriteItem: {
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontSmall,
            lineHeight: '24px',
        },
        button: {
            float: 'right'
        }

    }),
);

const CarDetail: React.FC = () => {

    const classes = useStyles()
    const { state: { carDetails } } = useLocation<LocationState>()
    const isFavourite = readFavCar(carDetails.stockNumber);
    const [favourite, setFavourite] = useState<Boolean>(isFavourite)
    const saveFavourite = () => {
        const { stockNumber } = carDetails;
        const isFavourite = saveFavCar(stockNumber);
        setFavourite(isFavourite)
    };
    return (
        <div className={classes.carDetailsContainer}>
            <div className={classes.imageContainer}>
                <img src={carDetails.pictureUrl} alt="pl" className={classes.imageFullwidth} />
            </div>
            <Grid container
                spacing={0}
                justify="space-between"
                className={classes.detailsWrapper}>
                <Grid item xs={6} className={classes.textSection}>
                    <Typography className={classes.title}>
                        {carDetails.manufacturerName} {carDetails.modelName}
                    </Typography>
                    <Typography className={classes.specification}>
                        Stock # {carDetails.stockNumber} - {carDetails.mileage.number} {carDetails.mileage.unit} - {carDetails.fuelType} - {carDetails.color}
                    </Typography>
                    <Typography className={classes.description}>{carDetailsText}</Typography>
                </Grid>
                <Grid item xs={5} className={classes.favouriteSection}>
                    <Typography className={classes.favouriteItem}>{saveFavouriteText}</Typography>
                    <NormalButton className={classes.button} onClick={saveFavourite}>{favourite ? 'Saved' : 'Save'}</NormalButton>
                </Grid>
            </Grid>
        </div>
    )
}
interface LocationState {
    from: { pathname: string };
    carDetails: Car;
}

export default CarDetail