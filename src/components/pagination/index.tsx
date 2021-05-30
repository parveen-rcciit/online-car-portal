
import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        paginationContainer: {
            width: '100% !important',
            margin: '8px 24px',
        },
        paper: {
            padding: '12px',
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
    }),
);

const PaginationContainer: React.FC<PropType> = (props: PropType) => {
    const classes = useStyles();
    const { currentPage, totalPageCount } = props

    const pageChangeHandler = (event: any) => {
        const target = event.currentTarget.innerText.toLowerCase()
        let pageNumber = 0
        if (target === 'first') {
            pageNumber = 1
        } else if (target === 'previous' && currentPage > 1) {
            pageNumber = currentPage - 1
        } else if (target === 'next' && currentPage < totalPageCount) {
            pageNumber = currentPage + 1
        } else if (target === 'last') {
            pageNumber = totalPageCount
        } else {
            pageNumber = currentPage
        }
        props.onPageChange(pageNumber)
    };

    return (

        <Grid
            container
            className={classes.paginationContainer}
            justify="center"
            alignItems="center"
            spacing={1}>
            <Grid item >
                <Button className={classes.button}
                    variant="text"
                    value="First"
                    onClick={pageChangeHandler} >First</Button>
            </Grid>
            <Grid item >
                <Button className={classes.button}
                    variant="text"
                    onClick={pageChangeHandler}>Previous</Button>
            </Grid>
            <Grid item >
                <Typography>Page {currentPage} of {totalPageCount}</Typography>
            </Grid>
            <Grid item >
                <Button className={classes.button}
                    variant="text"
                    onClick={pageChangeHandler}>Next</Button>
            </Grid>
            <Grid item >
                <Button className={classes.button}
                    variant="text"
                    onClick={pageChangeHandler}>Last</Button>
            </Grid>
        </Grid>
    );
}

interface PropType {
    currentPage: number;
    totalPageCount: number;
    onPageChange: (value: number) => void;
}
export default PaginationContainer;