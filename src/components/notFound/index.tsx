import React from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { images } from '../../utils/imageImports';
import theme from '../../providers/theme/index';

const { margin, fonts } = theme;

const notFoundDesc = 'Sorry, the page you are looking for does not exist.'
const notFoundRedirect = 'You can always go back to the'
const notFoundTitle = '404 - Not Found'

const useStyles = makeStyles(() =>
    createStyles({
        notFoundContainer: {
            boxSizing: 'border-box',
            minHeight: 'calc(100vh - 160px)',
            a: {
                textDecoration: 'none',
            },
        },
        errorContainer: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            width: '50%',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)',
        },
        logo: {
            width: '20%',
            margin: 'auto',
        },
        error: {
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontLarge,
            fontWeight: 'bold',
            margin: margin.marginLarge,
        },
        errorMsg: {
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontMedium,
            marginBottom: margin.marginLarge,
        },
        link: {
            fontFamily: fonts.fontFamily,
            fontSize: fonts.fontMedium,
        }
    }),
)

const NotFound: React.FunctionComponent = React.memo(() => {
    const classes = useStyles();
    return (
        <div className={classes.notFoundContainer}>
            <div className={classes.errorContainer}>
                <img src={images.logo} alt="pl" className={classes.logo} />
                <div className={classes.error}>{notFoundTitle}</div>
                <div className={classes.errorMsg}>{notFoundDesc}</div>
                <div className={classes.errorMsg}>
                    {notFoundRedirect}
                    <Link to="/">
                        <span className={classes.link}>{` homepage`}</span>
                    </Link>
          .
        </div>
            </div>
        </div>
    );
});

export default NotFound
