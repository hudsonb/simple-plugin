import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const getStyles = (theme: any) => ({
  paper: {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
    ':hover': {
      backgroundColor: theme.palette.action.hover,
      transform: 'translateY(-2px)',
      transition: 'all 0.3s ease-in-out',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: 32,
  },
  text: {
    fontSize: 14,
    color: theme.palette.text.secondary,
  },
  value: {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.primary,
  },
});

export const InfoPanel = () => {
  const theme = {
    spacing: (factor: number) => `${0.25 * factor}rem`,
    shape: { borderRadius: 4 },
    palette: {
      background: { paper: '#fff', default: '#f5f5f5' },
      action: { hover: '#e0e0e0' },
      primary: { main: '#3f51b5' },
      text: { secondary: '#757575', primary: '#212121' },
    },
  };
  const styles = getStyles(theme);

  const infoItems = [
    { icon: <InfoIcon className={classes.icon} />, label: 'Total Items', value: '42' },
    { icon: <TrendingUpIcon className={classes.icon} />, label: 'Active', value: '38' },
    { icon: <CheckCircleIcon className={classes.icon} />, label: 'Completed', value: '4' },
  ];

  return (
    <Paper style={styles.paper}>
      <Typography variant="h6" gutterBottom>
        Information Panel
      </Typography>
      <Grid container spacing={2}>
        {infoItems.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div style={styles.infoItem}>
              {React.cloneElement(item.icon, { style: styles.icon })}
              <div>
                <Typography style={styles.text}>{item.label}</Typography>
                <Typography style={styles.value}>{item.value}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
