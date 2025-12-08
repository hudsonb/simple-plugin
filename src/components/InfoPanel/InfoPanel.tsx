import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const paperStyle = {
  padding: '24px',
  marginBottom: '16px',
  backgroundColor: '#ffffff',
};

const infoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '4px',
  backgroundColor: '#f5f5f5',
  '&:hover': {
    backgroundColor: '#e0e0e0',
    transform: 'translateY(-2px)',
    transition: 'all 0.3s ease-in-out',
  },
};

const iconStyle = {
  marginRight: '16px',
  color: '#3f51b5',
  fontSize: 32,
};

const textStyle = {
  fontSize: 14,
  color: '#757575',
};

const valueStyle = {
  fontSize: 18,
  fontWeight: 600,
  color: '#212121',
};

export const InfoPanel = () => {

  const infoItems = [
    { icon: <InfoIcon className={classes.icon} />, label: 'Total Items', value: '42' },
    { icon: <TrendingUpIcon className={classes.icon} />, label: 'Active', value: '38' },
    { icon: <CheckCircleIcon className={classes.icon} />, label: 'Completed', value: '4' },
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
              {React.cloneElement(item.icon, { style: iconStyle })}
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
