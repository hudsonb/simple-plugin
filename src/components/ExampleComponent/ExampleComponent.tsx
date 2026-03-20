import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Header, Page, Content } from '@backstage/core-components';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { StatusList } from '../StatusList/StatusList';

export const ExampleComponent = () => {
  const theme = useTheme();

  return (
    <Page themeId="tool">
      <Header title="Simple Plugin" subtitle="A demonstration plugin with MUI styles" />
      <Content>
        <Container
          maxWidth="lg"
          style={{
            paddingTop: theme.spacing(3),
            paddingBottom: theme.spacing(3),
          }}
        >
          <Grid container spacing={3} style={{ marginTop: theme.spacing(2) }}>
            <Grid item xs={12}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={12}>
              <InfoPanel />
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  padding: theme.spacing(2),
                  borderRadius: theme.shape.borderRadius,
                  backgroundColor: theme.palette.background.default,
                }}
              >
                <StatusList />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Content>
    </Page>
  );
};
