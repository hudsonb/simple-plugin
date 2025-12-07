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
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


interface StatusItem {
  name: string;
  status: 'active' | 'pending' | 'error';
  description: string;
}

export const StatusList = () => {
  const paperStyle = {
    padding: 16,
    marginBottom: 16,
  };

  const listStyle = {
    width: '100%',
  };

  const listItemStyle = {
    borderRadius: 4,
    marginBottom: 8,
    transition: 'background-color 0.3s',
  };

  const listItemIconStyle = {
    minWidth: 40,
  };

  const statusIconStyle = {
    fontSize: 12,
  };

  const chipStyle = {
    marginLeft: 'auto',
    fontWeight: 500,
  };

  const statusColors = {
    active: {
      icon: '#4caf50',
      chip: {
        backgroundColor: '#a5d6a7',
        color: '#fff',
      },
    },
    pending: {
      icon: '#ff9800',
      chip: {
        backgroundColor: '#ffe082',
        color: '#fff',
      },
    },
    error: {
      icon: '#f44336',
      chip: {
        backgroundColor: '#ef9a9a',
        color: '#fff',
      },
    },
  };

  const statusItems: StatusItem[] = [
    { name: 'Service A', status: 'active', description: 'Running smoothly' },
    { name: 'Service B', status: 'active', description: 'All systems operational' },
    { name: 'Service C', status: 'pending', description: 'Deployment in progress' },
    { name: 'Service D', status: 'active', description: 'Healthy' },
    { name: 'Service E', status: 'error', description: 'Needs attention' },
  ];

  const getIconClass = (status: string) => {
    switch (status) {
      case 'active':
        return classes.activeIcon;
      case 'pending':
        return classes.pendingIcon;
      case 'error':
        return classes.errorIcon;
      default:
        return '';
    }
  };

  const getChipClass = (status: string) => {
    switch (status) {
      case 'active':
        return classes.activeChip;
      case 'pending':
        return classes.pendingChip;
      case 'error':
        return classes.errorChip;
      default:
        return '';
    }
  };

  return (
    <Paper style={paperStyle}>
      <Typography variant="h6" gutterBottom>
        Service Status
      </Typography>
      <List style={listStyle}>
        {statusItems.map((item, index) => (
          <ListItem key={index} style={{ ...listItemStyle, ':hover': { backgroundColor: '#f5f5f5' } }}>
            <ListItemIcon style={listItemIconStyle}>
              <FiberManualRecordIcon
                style={{ ...statusIconStyle, color: statusColors[item.status].icon }}
              />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              secondary={item.description}
            />
            <Chip
              label={item.status}
              size="small"
              style={{ ...chipStyle, ...statusColors[item.status].chip }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
