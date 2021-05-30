import React, { useState, useEffect } from 'react';
import { withStyles, createStyles, makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import theme from '../../providers/theme/index';

const { colors, fonts } = theme;
const useStyles = makeStyles({
    highlight: {
        '& .MuiSelect-root': {
            backgroundColor: colors.orange
        }
    }
});

export const StyledSelect = withStyles(() =>
    createStyles({
        root: {
            //color: colors.text.input,
            fontSize: fonts.fontMedium,
            backgroundColor: colors.white,
            textAlign: 'left'
        },
        outlined: {
            paddingTop: '8px',
            paddingBottom: '8px'
        }
    })
)(Select);
export const StyledLabel = withStyles(() =>
    createStyles({
        root: {
            fontSize: fonts.fontMedium,
            paddingTop: '24px',
            textAlign: 'left'
        }
    })
)(InputLabel);
export const StyledMenuItem = withStyles(() =>
    createStyles({
        root: {
            '&:hover': {
                backgroundColor: colors.orange,
                color: colors.white
            },
            '&:active': {
                backgroundColor: colors.orange,
                color: colors.white
            }
        },
        selected: {
            backgroundColor: colors.orange+' !important',
            color: colors.white
        }
    })
)(MenuItem);
const StyledListSubheader = withStyles(() =>
    createStyles({
        root: {
            fontWeight: 300,
            fontSize: fonts.fontMedium,
            position: 'relative',
            textTransform: 'uppercase',
            lineHeight: 3
        }
    })
)(ListSubheader);

const SelectInput: React.FC<PropType> = (props: PropType) => {
    const classes = useStyles();
    const [value, setValue] = useState(props.value || '');
    const [options, setOptions] = useState<React.ReactElement[]>([]);
    useEffect(() => {
        setValue(props.value || '');
    }, [props.value]);
    useEffect(() => {
        const newOptions: React.ReactElement[] = [];
        if (props.groups && props.groups.length) {
            props.groups.forEach(group => {
                newOptions.push(
                    <StyledListSubheader
                        key={`select-group-${group}`}
                        onClick={ev => {
                            ev.preventDefault();
                        }}>
                        {group}
                    </StyledListSubheader>
                );
                props.options
                    .filter(option => option.group === group)
                    .forEach(option => {
                        newOptions.push(
                            <StyledMenuItem
                                key={`${option.value}-${option.name}`}
                                value={option.value}>
                                {option.name}
                            </StyledMenuItem>
                        );
                    });
            });
        } else {
            props.options.forEach(option => {
                newOptions.push(
                    <StyledMenuItem
                        key={`${option.value}-${option.name}`}
                        value={option.value}>
                        {option.name}
                    </StyledMenuItem>
                );
            });
        }
        setOptions(newOptions);
    }, [props.options, props.groups]);
    const onChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        if (!props.disableInternalUpdate) {
            setValue(event.target.value as string);
        }
        const selectedOption = props.options.find(
            option => option.value === (event.target.value as string)
        );
        props.onChange(selectedOption || { name: '', value: '' });
    };
    return (
        <React.Fragment>
            {!props.hideLabel ? (
                <StyledLabel
                    shrink
                    htmlFor={`${props.label.split(' ').join('-')}-select`}>
                    {props.label}
                </StyledLabel>
            ) : (
                undefined
            )}
            <StyledSelect
                id={`${props.label.split(' ').join('-')}-select`}
                data-testid={`${props.label.split(' ').join('-')}-select`}
                displayEmpty
                onChange={onChange}
                fullWidth={true}
                value={value}
                variant='outlined'
                disabled={props.disabled}
                className={props.highlight ? classes.highlight : undefined}
                MenuProps={{
                    getContentAnchorEl: null,
                    anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left'
                    },
                    PaperProps: {
                        style: { maxHeight: '400px' }
                    }
                }}>
                {options.map(option => option)}
            </StyledSelect>
        </React.Fragment>
    );
};
interface PropType {
    label: string;
    hideLabel?: boolean;
    groups?: string[];
    options: { name: string; value: string; group?: string }[];
    value?: string;
    onChange: (selectedOption: { name: string; value: string }) => void;
    disabled?: boolean;
    highlight?: boolean;
    disableInternalUpdate?: boolean;
}

export default SelectInput;

export type SelectOption = { name: string; value: string };
