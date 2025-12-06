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

  const getIconStyle = (status: string) => {
    switch (status) {
      case 'active':
        return { color: '#4caf50' };
      case 'pending':
        return { color: '#ff9800' };
      case 'error':
        return { color: '#f44336' };
      default:
        return {};
    }
  };

  const getChipStyle = (status: string) => {
    switch (status) {
      case 'active':
        return { backgroundColor: '#a5d6a7', color: '#fff' };
      case 'pending':
        return { backgroundColor: '#ffe082', color: '#fff' };
      case 'error':
        return { backgroundColor: '#ef9a9a', color: '#fff' };
      default:
        return {};
    }
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
          <ListItem key={index} style={listItemStyle}>
            <ListItemIcon style={listItemIconStyle}>
              <FiberManualRecordIcon
                style={{ ...statusIconStyle, ...getIconStyle(item.status) }}
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              secondary={item.description}
            />
            <Chip
              label={item.status}
              size="small"
              style={{ ...chipStyle, ...getChipStyle(item.status) }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
