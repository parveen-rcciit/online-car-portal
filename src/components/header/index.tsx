import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { images } from '../../utils/imageImports';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
            border: '1px solid lightgray',
        },
        appBar: {
            height: '80px',
            backgroundColor: '#FFFFFF',
            color: '#4A4A4A'
        },
        menuButton: {
            marginRight: '12px',
        },
        title: {
            flexGrow: 1,
        },
        logo: {
            height: '45px',
            paddingTop: '12px',
        },
    }),
);

const Header: React.FC = () => {
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                    <img src={images.logo} alt="Auto1" className={classes.logo} />
                    </Typography>
                    <Button color="inherit">Purchase</Button>
                    <Button color="inherit">My Orders</Button>
                    <Button color="inherit">Sell</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
}

export default Header