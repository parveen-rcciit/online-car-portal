import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        footer: {
            boxSizing: 'border-box',
            borderTop: '1px solid #ededed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80px',
        },
        title: {
            flexGrow: 1,
        }
    });

const Footer: React.FC = React.memo(() => {
    const classes = useStyles();
    return <div className={classes.footer}>&copy; AUTO1 Group 2018</div>;
});

export default Footer