import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const getStyles = (theme: any) => ({
  card: {
    marginBottom: theme.spacing(2),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.9,
  },
});

export const WelcomeCard = () => {
  const theme = {
    spacing: (factor: number) => `${0.25 * factor}rem`,
  };
  const styles = getStyles(theme);

  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography style={styles.title}>
          Welcome to Simple Plugin
        </Typography>
        <Typography style={styles.subtitle}>
          This is a demonstration of a Backstage frontend plugin with multiple
          components using MUI makeStyles.
        </Typography>
      </CardContent>
    </Card>
  );
};
