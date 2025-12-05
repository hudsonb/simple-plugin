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
    <Paper className={classes.paper}>
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
              backgroundColor: '#f5f5f5',
            }}
          >
            <ListItemIcon style={{ minWidth: 40 }}>
              <FiberManualRecordIcon
                style={{
                  fontSize: 12,
                  ...getIconStyle(item.status),
                }}
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
