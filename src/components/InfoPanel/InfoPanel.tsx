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
  const infoItems = [
    { icon: <InfoIcon style={iconStyle} />, label: 'Total Items', value: '42' },
    { icon: <TrendingUpIcon style={iconStyle} />, label: 'Active', value: '38' },
    { icon: <CheckCircleIcon style={iconStyle} />, label: 'Completed', value: '4' },
  ];

  return (
    <Paper style={paperStyle}>
      <Typography variant="h6" gutterBottom>
        Information Panel
      </Typography>
      <Grid container spacing={2}>
        {infoItems.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div style={infoItemStyle}>
              {item.icon}
              <div>
                <Typography style={textStyle}>{item.label}</Typography>
                <Typography style={valueStyle}>{item.value}</Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
