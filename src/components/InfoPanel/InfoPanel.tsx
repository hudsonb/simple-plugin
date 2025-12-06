import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
export const InfoPanel = () => {
  const infoItems = [
    {
      icon: <InfoIcon style={{ marginRight: 16, color: '#3f51b5', fontSize: 32 }} />,
      label: 'Total Items',
      value: '42',
    },
    {
      icon: <TrendingUpIcon style={{ marginRight: 16, color: '#3f51b5', fontSize: 32 }} />,
      label: 'Active',
      value: '38',
    },
    {
      icon: <CheckCircleIcon style={{ marginRight: 16, color: '#3f51b5', fontSize: 32 }} />,
      label: 'Completed',
      value: '4',
    },
  ];

  return (
    <Paper
      style={{
        padding: 24,
        marginBottom: 16,
        backgroundColor: '#ffffff', // background.paper
      }}
    >
      <Typography variant="h6" gutterBottom>
        Information Panel
      </Typography>
      <Grid container spacing={2}>
        {infoItems.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: 16,
                borderRadius: 4,
                backgroundColor: '#fafafa', // background.default
                '&:hover': {
                  backgroundColor: '#f5f5f5', // action.hover
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s ease-in-out',
                },
              }}
            >
              {item.icon}
              <div>
                <Typography style={{ fontSize: 14, color: '#757575' }}>
                  {item.label}
                </Typography>
                <Typography style={{ fontSize: 18, fontWeight: 600, color: '#212121' }}>
                  {item.value}
                </Typography>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};
