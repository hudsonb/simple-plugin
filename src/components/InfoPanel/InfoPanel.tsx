import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


export const InfoPanel = () => {
  const paperStyle = {
    padding: 24,
    marginBottom: 16,
    backgroundColor: '#fff', // Assuming default paper background
  };

  const infoItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    borderRadius: 4, // Assuming default border radius
    backgroundColor: '#f5f5f5', // Assuming default background
    transition: 'all 0.3s ease-in-out',
  };

  const iconStyle = {
    marginRight: 16,
    color: '#3f51b5', // Assuming primary main color
    fontSize: 32,
  };

  const textStyle = {
    fontSize: 14,
    color: '#757575', // Assuming text secondary color
  };

  const valueStyle = {
    fontSize: 18,
    fontWeight: 600,
    color: '#212121', // Assuming text primary color
  };

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
