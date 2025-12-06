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

interface StatusItem {
  name: string;
  status: 'active' | 'pending' | 'error';
  description: string;
}

export const StatusList = () => {
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
        return { color: '#4caf50' }; // success.main
      case 'pending':
        return { color: '#ff9800' }; // warning.main
      case 'error':
        return { color: '#f44336' }; // error.main
      default:
        return {};
    }
  };

  const getChipStyle = (status: string) => {
    switch (status) {
      case 'active':
        return { backgroundColor: '#a5d6a7', color: '#ffffff' }; // success.light, success.contrastText
      case 'pending':
        return { backgroundColor: '#ffcc80', color: '#ffffff' }; // warning.light, warning.contrastText
      case 'error':
        return { backgroundColor: '#ef9a9a', color: '#ffffff' }; // error.light, error.contrastText
      default:
        return {};
    }
  };

  return (
    <Paper
      style={{
        padding: 16,
        marginBottom: 16,
      }}
    >
      <Typography variant="h6" gutterBottom>
        Service Status
      </Typography>
      <List style={{ width: '100%' }}>
        {statusItems.map((item, index) => (
          <ListItem
            key={index}
            style={{
              borderRadius: 4,
              marginBottom: 8,
              '&:hover': {
                backgroundColor: '#f5f5f5', // action.hover
              },
            }}
          >
            <ListItemIcon style={{ minWidth: 40 }}>
              <FiberManualRecordIcon
                style={{
                  fontSize: 12,
                  ...getIconStyle(item.status),
                }}
              />
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={item.description} />
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
