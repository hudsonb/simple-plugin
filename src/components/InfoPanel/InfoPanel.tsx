import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const InfoPanel = () => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const paperStyle = {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  };
  const iconStyle = {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: 32,
  };
  const textStyle = {
    fontSize: 14,
    color: theme.palette.text.secondary,
  };
  const valueStyle = {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.primary,
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: theme.spacing(2),
                borderRadius: theme.shape.borderRadius,
                backgroundColor:
                  hoveredIndex === index
                    ? theme.palette.action.hover
                    : theme.palette.background.default,
                transform: hoveredIndex === index ? 'translateY(-2px)' : 'none',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
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
