import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Header, Page, Content } from '@backstage/core-components';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { StatusList } from '../StatusList/StatusList';


export const ExampleComponent = () => {

  return (
    <Page themeId="tool">
      <Header title="Simple Plugin" subtitle="A demonstration plugin with MUI styles" />
      <Content>
        <Container
          maxWidth="lg"
          style={{
            paddingTop: 24,
            paddingBottom: 24,
          }}
        >
          <Grid
            container
            spacing={3}
            style={{
              marginTop: 16,
            }}
          >
            <Grid item xs={12}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={12}>
              <InfoPanel />
            </Grid>
            <Grid item xs={12}>
              <div
                style={{
                  padding: 16,
                  borderRadius: 4,
                  backgroundColor: '#f5f5f5',
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
