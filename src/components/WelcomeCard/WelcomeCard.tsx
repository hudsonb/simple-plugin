import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const cardStyle = {
  marginBottom: 16,
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
};

const titleStyle = {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 8,
};

const subtitleStyle = {
  fontSize: 16,
  opacity: 0.9,
};

export const WelcomeCard = () => {

  return (
    <Card style={cardStyle}>
      <CardContent>
        <Typography style={titleStyle}>
          Welcome to Simple Plugin
        </Typography>
        <Typography style={subtitleStyle}>
          This is a demonstration of a Backstage frontend plugin with multiple
          components using MUI makeStyles.
        </Typography>
      </CardContent>
    </Card>
  );
};
