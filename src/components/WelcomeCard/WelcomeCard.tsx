import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

export const WelcomeCard = () => {
  const styles = {
    card: {
      marginBottom: '16px',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: '3px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    subtitle: {
      fontSize: '16px',
      opacity: 0.9,
    },
  };

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
