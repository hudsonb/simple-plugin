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

  const getIconStyle = (status: string) => {
    switch (status) {
      case 'active':
        return { color: theme.palette.success.main };
      case 'pending':
        return { color: theme.palette.warning.main };
      case 'error':
        return { color: theme.palette.error.main };
      default:
        return {};
    }
  };

  const getChipStyle = (status: string) => {
    switch (status) {
      case 'active':
        return {
          backgroundColor: theme.palette.success.light,
          color: theme.palette.success.contrastText,
        };
      case 'pending':
        return {
          backgroundColor: theme.palette.warning.light,
          color: theme.palette.warning.contrastText,
        };
      case 'error':
        return {
          backgroundColor: theme.palette.error.light,
          color: theme.palette.error.contrastText,
        };
      default:
        return {};
    }
  };

  return (
    <Paper style={{ padding: theme.spacing(2), marginBottom: theme.spacing(2) }}>
      <Typography variant="h6" gutterBottom>
        Service Status
      </Typography>
      <List style={{ width: '100%' }}>
        {statusItems.map((item, index) => (
          <ListItem
            key={index}
            style={{
              borderRadius: theme.shape.borderRadius,
              marginBottom: theme.spacing(1),
              backgroundColor:
                hoveredIndex === index ? theme.palette.action.hover : 'transparent',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <ListItemIcon style={{ minWidth: 40 }}>
              <FiberManualRecordIcon
                style={{
                  fontSize: 12,
                  ...getIconStyle(item.status),
                }}
              />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              secondary={item.description}
            />
            <Chip
              label={item.status}
              size="small"
              style={{
                marginLeft: 'auto',
                fontWeight: 500,
                ...getChipStyle(item.status),
              }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
