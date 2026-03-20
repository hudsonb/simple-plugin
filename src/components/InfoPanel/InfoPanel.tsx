import React from 'react';
import { Paper, Typography, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const InfoPanel = () => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const infoItems = [
    { Icon: InfoIcon, label: 'Total Items', value: '42' },
    { Icon: TrendingUpIcon, label: 'Active', value: '38' },
    { Icon: CheckCircleIcon, label: 'Completed', value: '4' },
  ];

  const paperStyle: React.CSSProperties = {
    padding: theme.spacing(3),
    marginBottom: theme.spacing(2),
    backgroundColor: theme.palette.background.paper,
  };

  const iconStyle: React.CSSProperties = {
    marginRight: theme.spacing(2),
    color: theme.palette.primary.main,
    fontSize: 32,
  };

  const textStyle: React.CSSProperties = {
    fontSize: 14,
    color: theme.palette.text.secondary,
  };

  const valueStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 600,
    color: theme.palette.text.primary,
  };

  const getInfoItemStyle = (isHovered: boolean): React.CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: isHovered ? theme.palette.action.hover : theme.palette.background.default,
    transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
    transition: 'all 0.3s ease-in-out',
  });

  return (
    <Paper style={paperStyle}>
      <Typography variant="h6" gutterBottom>
        Information Panel
      </Typography>
      <Grid container spacing={2}>
        {infoItems.map((item, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <div
              style={getInfoItemStyle(hoveredIndex === index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <item.Icon style={iconStyle} />
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
