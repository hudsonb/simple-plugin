import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';

export const WelcomeCard = () => {
  const theme = useTheme();

  return (
    <Card
      style={{
        marginBottom: theme.spacing(2),
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
      }}
    >
      <CardContent>
        <Typography
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: theme.spacing(1),
          }}
        >
          Welcome to Simple Plugin
        </Typography>
        <Typography
          style={{
            fontSize: 16,
            opacity: 0.9,
          }}
        >
          This is a demonstration of a Backstage frontend plugin with multiple
          components using inline styles.
        </Typography>
      </CardContent>
    </Card>
  );
};
