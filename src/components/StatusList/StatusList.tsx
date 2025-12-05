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
import { makeStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles(theme => ({
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
    '&:hover': {
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
}));

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

  const activeIconStyle = {
    color: '#4caf50',
  };

  const pendingIconStyle = {
    color: '#ff9800',
  };

  const errorIconStyle = {
    color: '#f44336',
  };

  const chipStyle = {
    marginLeft: 'auto',
    fontWeight: 500,
  };

  const activeChipStyle = {
    backgroundColor: '#a5d6a7',
    color: '#fff',
  };

  const pendingChipStyle = {
    backgroundColor: '#ffe082',
    color: '#fff',
  };

  const errorChipStyle = {
    backgroundColor: '#ef9a9a',
    color: '#fff',
  };

  const getIconStyle = (status: string) => {
    switch (status) {
      case 'active':
        return activeIconStyle;
      case 'pending':
        return pendingIconStyle;
      case 'error':
        return errorIconStyle;
      default:
        return {};
    }
  };

  const getChipStyle = (status: string) => {
    switch (status) {
      case 'active':
        return activeChipStyle;
      case 'pending':
        return pendingChipStyle;
      case 'error':
        return errorChipStyle;
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
              />
            </ListItemIcon>
            <ListItemText primary={item.name} secondary={item.description} />
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
