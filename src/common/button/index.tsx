import Button from '@material-ui/core/Button';
import { createStyles, withStyles } from '@material-ui/core/styles';
import theme from '../../providers/theme/index';

const { colors } = theme;

export const NormalButton = withStyles(() =>
    createStyles({
        root: {
            backgroundColor: colors.orange,
            color: colors.white,
            '&:hover': {
                backgroundColor: colors.orange
            },
            '&:active': {
                backgroundColor: colors.orange
            }
        }
    })
)(Button);




