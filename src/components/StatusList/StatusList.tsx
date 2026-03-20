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
  const classes = useStyles();

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
      <List className={classes.list}>
        {statusItems.map((item, index) => (
          <ListItem key={index} className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <FiberManualRecordIcon
                className={`${classes.statusIcon} ${getIconClass(item.status)}`}
              />
            </ListItemIcon>
            <ListItemText
              primary={item.name}
              secondary={item.description}
            />
            <Chip
              label={item.status}
              size="small"
              className={`${classes.chip} ${getChipClass(item.status)}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};
