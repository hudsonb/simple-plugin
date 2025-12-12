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
  const styles = {
    paper: {
      padding: '16px',
      marginBottom: '16px',
    },
    list: {
      width: '100%',
    },
    listItem: {
      borderRadius: '4px',
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#f5f5f5',
      },
    },
    listItemIcon: {
      minWidth: '40px',
    },
    statusIcon: {
      fontSize: '12px',
    },
    activeIcon: {
      color: '#4caf50',
    },
    pendingIcon: {
      color: '#ff9800',
    },
    errorIcon: {
      color: '#f44336',
    },
    chip: {
      marginLeft: 'auto',
      fontWeight: 500,
    },
    activeChip: {
      backgroundColor: '#a5d6a7',
      color: '#ffffff',
    },
    pendingChip: {
      backgroundColor: '#ffcc80',
      color: '#ffffff',
    },
    errorChip: {
      backgroundColor: '#ef9a9a',
      color: '#ffffff',
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
    <Paper style={styles.paper}>
      <Typography variant="h6" gutterBottom>
        Service Status
      </Typography>
      <List style={styles.list}>
        {statusItems.map((item, index) => (
          <ListItem key={index} style={styles.listItem}>
            <ListItemIcon style={styles.listItemIcon}>
              <FiberManualRecordIcon
                style={{ ...styles.statusIcon, ...styles[`${item.status}Icon`] }}
              />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              secondary={item.description}
            />
            <Chip
              label={item.status}
              size="small"
              style={{ ...styles.chip, ...styles[`${item.status}Chip`] }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
