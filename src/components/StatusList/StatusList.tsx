import React from 'react';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
  Chip,
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

interface StatusItem {
  name: string;
  status: 'active' | 'pending' | 'error';
  description: string;
}

export const StatusList = () => {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  const statusItems: StatusItem[] = [
    { name: 'Service A', status: 'active', description: 'Running smoothly' },
    { name: 'Service B', status: 'active', description: 'All systems operational' },
    { name: 'Service C', status: 'pending', description: 'Deployment in progress' },
    { name: 'Service D', status: 'active', description: 'Healthy' },
    { name: 'Service E', status: 'error', description: 'Needs attention' },
  ];

  const paperStyle: React.CSSProperties = {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  };

  const listStyle: React.CSSProperties = {
    width: '100%',
  };

  const listItemIconStyle: React.CSSProperties = {
    minWidth: 40,
  };

  const getListItemStyle = (isHovered: boolean): React.CSSProperties => ({
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    backgroundColor: isHovered ? theme.palette.action.hover : 'transparent',
  });

  const getIconStyle = (status: string): React.CSSProperties => {
    switch (status) {
      case 'active':
        return { fontSize: 12, color: theme.palette.success.main };
      case 'pending':
        return { fontSize: 12, color: theme.palette.warning.main };
      case 'error':
        return { fontSize: 12, color: theme.palette.error.main };
      default:
        return { fontSize: 12 };
    }
  };

  const getChipStyle = (status: string): React.CSSProperties => {
    const baseChipStyle: React.CSSProperties = {
      marginLeft: 'auto',
      fontWeight: 500,
    };

    switch (status) {
      case 'active':
        return {
          ...baseChipStyle,
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.contrastText,
        };
      case 'pending':
        return {
          ...baseChipStyle,
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.contrastText,
        };
      case 'error':
        return {
          ...baseChipStyle,
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.contrastText,
        };
      default:
        return baseChipStyle;
    }
  };

  return (
    <Paper style={paperStyle}>
      <Typography variant="h6" gutterBottom>
        Service Status
      </Typography>
      <List style={listStyle}>
        {statusItems.map((item, index) => (
          <ListItem
            key={index}
            style={getListItemStyle(hoveredIndex === index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ListItemIcon style={listItemIconStyle}>
              <FiberManualRecordIcon style={getIconStyle(item.status)} />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              secondary={item.description}
            />
            <Chip
              label={item.status}
              size="small"
              style={getChipStyle(item.status)}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
