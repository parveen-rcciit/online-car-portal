import React, { useState, useEffect } from 'react';
import { Car, CarMap, CarQuery } from '../../interface'
import getCarList from '../../services/cars'
import Filter from '../../components/filter/index'
import CarList from '../../components/carList/index'
import Loader from '../../components/carList/loader'
import Pagination from '../../components/pagination/index'
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
    createStyles({
        carContainer: {
            margin: '8px 24px',
            padding: '8px',
        },
        headingContainer: {
            margin: '24px'
        },
        lisContainer: {
            padding: '24px !important'
        }
    }),
);

const CarContainer: React.FC = () => {
    const classes = useStyles()
    const [selectedCar, setSelectedCar] = useState<string>('')
    const [selectedManufacturer, setSelectedManufacturer] = useState<string>('')
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [carList, setCars] = useState<Car[]>([]);
    const [totalPageCount, setTotalPageCount] = useState<number>(0)
    const [totalCarsCount, setTotalCarsCount] = useState<number>(0)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string>('')

    useEffect(() => {
        const carQuery: CarQuery = {
            color: selectedCar,
            manufacturer: selectedManufacturer,
            sort: 'acs',
            page: currentPage,
        }
        fetchCarList(carQuery)
    }, [currentPage])

    const onFilter = () => {
        setCurrentPage(1)
        const carQuery: CarQuery = {
            color: selectedCar,
            manufacturer: selectedManufacturer,
            sort: 'acs',
            page: 1,
        }
        fetchCarList(carQuery)
    }

    const fetchCarList = (carQuery: CarQuery) => {
        setIsLoading(true)
        getCarList(carQuery)
            .then((res: CarMap | undefined) => {
                const { cars = [], totalPageCount = 0, totalCarsCount = 0 } = res || {}
                setCars(cars)
                setTotalPageCount(totalPageCount)
                setTotalCarsCount(totalCarsCount)
            })
            .catch(err => setError(err.message))
            .finally(() => setIsLoading(false))
    }
    const productsPerPage = totalPageCount === currentPage ? totalCarsCount - 10 * (totalPageCount - 1) : 10

    return (
        <Grid container spacing={2} className={classes.carContainer}>
            <Grid item xs={3}>
                <Filter
                    onCarSelect={setSelectedCar}
                    onManufacturerSelect={setSelectedManufacturer}
                    fetchCarList={onFilter}>
                </Filter>
            </Grid>
            <Grid item xs={9} className={classes.lisContainer}>
                <div className={classes.headingContainer}>
                    <h2 >Available cars</h2>
                    <h4>Showing {productsPerPage} of {totalCarsCount} results</h4>
                </div>
                {isLoading ? <Loader></Loader> : <CarList carList={carList} ></CarList>}
                <Pagination
                    currentPage={currentPage}
                    totalPageCount={totalPageCount}
                    onPageChange={setCurrentPage}></Pagination>
            </Grid>
        </Grid>
    )
}

export default CarContainer