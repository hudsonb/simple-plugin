import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles(theme => ({
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
    '&:hover': {
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
}));

export const InfoPanel = () => {
  const styles = {
    paper: {
      padding: 24,
      marginBottom: 16,
      backgroundColor: '#ffffff',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      padding: 16,
      borderRadius: 4,
      backgroundColor: '#f5f5f5',
      cursor: 'pointer',
    },
    icon: {
      marginRight: 16,
      color: '#3f51b5',
      fontSize: 32,
    },
    text: {
      fontSize: 14,
      color: '#757575',
    },
    value: {
      fontSize: 18,
      fontWeight: 600,
      color: '#212121',
    },
  };

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
            <div
              style={{
                ...styles.infoItem,
                ':hover': {
                  backgroundColor: '#e0e0e0',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
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
