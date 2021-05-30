import React from 'react';
import { Car } from '../../interface'
import GridItem from '../../common/productItem'
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        button: {
            color: '#EA7528'
        }
    }),
);

const CarList: React.FC<PropType> = (props: PropType) => {

    const classes = useStyles();

    const { carList } = props

    return (
            <Grid container
                direction="column"
                spacing={1}>
                {carList.length ?
                    carList?.map((car: Car) => (<GridItem key={car.modelName} car={car}></GridItem>))
                    : <div>No Cars to display</div>}
            </Grid>
    )
}

interface PropType {
    carList: Car[]
}

export default CarList