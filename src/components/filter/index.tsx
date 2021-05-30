import React, { useState, useEffect } from 'react';
import { Manufacturer } from '../../interface'
import getAllColor from '../../services/color'
import getAllManufacturer from '../../services/manufacturer'
import Select from '../../common/select/index';
import { NormalButton } from '../../common/button'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(() =>
    createStyles({
        filterContainer: {
            border: '1px solid lightgray',
            margin: '8px',
            padding: '24px',
        },
        filterButton: {
            width: '128px',
            height: '32px',
            marginTop: '12px',
            left: '45%',
        }
    }),
);
const colorLabel = 'Color'
const manufacturerLabel = 'Manufacturer'

const Filter: React.FC<PropType> = (props: PropType) => {
    const classes = useStyles();

    const [carValue, setCarValue] = useState('')
    const [manufacturerValue, setManufacturerValue] = useState('')
    const [colorOptions, setColorOptions] = useState<{ name: string; value: string }[]>([]);
    const [manufacturerOptions, setManufacturerOptions] = useState<{ name: string; value: string }[]>([]);
    const [carError, setCarError] = useState<string>('')
    const [manufacturerError, setManufacturerError] = useState<string>('')

    useEffect(() => {
        getAllColor()
            .then((res: string[]) => {
                const colorList = res.map((color) => ({ name: color, value: color }));
                colorList.unshift({name: 'All car colors', value: ''})
                setColorOptions(colorList)
            })
            .catch(err => setCarError(err.message))
        getAllManufacturer()
            .then((res: Manufacturer[]) => {
                const manufacturerList = res.map(({ name }) => ({ name: name, value: name }));
                manufacturerList.unshift({name: 'All manufacturers', value: ''})
                setManufacturerOptions(manufacturerList)
            })
            .catch(err => setManufacturerError(err.message))

    }, [])

    const onCarChange = (selectedOption: { name: string; value: string }) => {
        setCarValue(selectedOption.value);
        props.onCarSelect(selectedOption.value);
    };

    const onManufacturerChange = (selectedOption: { name: string; value: string }) => {
        setManufacturerValue(selectedOption.value);
        props.onManufacturerSelect(selectedOption.value);
    };

    return (
            <Grid 
                container
                direction="column"
                className={classes.filterContainer}
                spacing={2}>
                <Grid item>
                    <Select
                        label={colorLabel}
                        options={colorOptions}
                        value={carValue}
                        onChange={onCarChange}>
                    </Select>
                </Grid>
                <Grid item>
                    <Select
                        label={manufacturerLabel}
                        options={manufacturerOptions}
                        value={manufacturerValue}
                        onChange={onManufacturerChange}>
                    </Select>
                </Grid>
                <Grid item>
                    <NormalButton className={classes.filterButton}
                        variant='contained'
                        onClick={props.fetchCarList}>
                        Filter
                </NormalButton>
                </Grid>
            </Grid>
    )
}

interface PropType {
    onCarSelect: (value: string) => void;
    onManufacturerSelect: (value: string) => void;
    fetchCarList: () => void;
}

export default Filter