import React from 'react';
import { Grid, Container } from '@material-ui/core';
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
                  backgroundColor: '#fafafa', // background.default
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
