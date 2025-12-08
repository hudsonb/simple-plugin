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

const getStyles = (theme: any) => ({
  paper: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  list: {
    width: '100%',
  },
  listItem: {
    borderRadius: theme.shape.borderRadius,
    marginBottom: theme.spacing(1),
    ':hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  listItemIcon: {
    minWidth: 40,
  },
  statusIcon: {
    fontSize: 12,
  },
  activeIcon: {
    color: theme.palette.success.main,
  },
  pendingIcon: {
    color: theme.palette.warning.main,
  },
  errorIcon: {
    color: theme.palette.error.main,
  },
  chip: {
    marginLeft: 'auto',
    fontWeight: 500,
  },
  activeChip: {
    backgroundColor: theme.palette.success.light,
    color: theme.palette.success.contrastText,
  },
  pendingChip: {
    backgroundColor: theme.palette.warning.light,
    color: theme.palette.warning.contrastText,
  },
  errorChip: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText,
  },
});

interface StatusItem {
  name: string;
  status: 'active' | 'pending' | 'error';
  description: string;
}

export const StatusList = () => {
  const theme = {
    spacing: (factor: number) => `${0.25 * factor}rem`,
    shape: { borderRadius: 4 },
    palette: {
      action: { hover: '#f5f5f5' },
      success: { main: '#4caf50', light: '#81c784', contrastText: '#fff' },
      warning: { main: '#ff9800', light: '#ffb74d', contrastText: '#fff' },
      error: { main: '#f44336', light: '#e57373', contrastText: '#fff' },
    },
  };
  const styles = getStyles(theme);

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
