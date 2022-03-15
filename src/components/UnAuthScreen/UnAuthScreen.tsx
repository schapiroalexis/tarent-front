import DrawerContainer from 'components/DrawerContainer';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { unauthorized } from './translations';

const UnAuthScreen = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <DrawerContainer>
      <Box className={classes.mainContainer}>
        <Box className={classes.fuller}></Box>
        <Box className={classes.innerContainer}>
          <Typography variant="h6" gutterBottom>
            {t(unauthorized.headMsg())}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            {t(unauthorized.bodyMsg())}
          </Typography>
        </Box>
        <Box className={classes.fuller}></Box>
      </Box>
    </DrawerContainer>
  );
};

export default UnAuthScreen;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      flexDirection: 'column'
    },
    innerContainer: {
      paddingLeft: theme.spacing(10)
    },
    fuller: {
      height: '20vh'
    }
  })
);
