import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Header, Page, Content } from '@backstage/core-components';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { StatusList } from '../StatusList/StatusList';

export const ExampleComponent = () => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  };

  const gridContainerStyle: React.CSSProperties = {
    marginTop: theme.spacing(2),
  };

  const sectionStyle: React.CSSProperties = {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
  };

  return (
    <Page themeId="tool">
      <Header title="Simple Plugin" subtitle="A demonstration plugin with MUI styles" />
      <Content>
        <Container maxWidth="lg" style={containerStyle}>
          <Grid container spacing={3} style={gridContainerStyle}>
            <Grid item xs={12}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={12}>
              <InfoPanel />
            </Grid>
            <Grid item xs={12}>
              <div style={sectionStyle}>
                <StatusList />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Content>
    </Page>
  );
};
