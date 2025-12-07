import React from 'react';
import { Grid, Container } from '@material-ui/core';
const styles = {
  container: {
    paddingTop: 24,
    paddingBottom: 24,
  },
  gridContainer: {
    marginTop: 16,
  },
  section: {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
  },
};
import { Header, Page, Content } from '@backstage/core-components';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { StatusList } from '../StatusList/StatusList';


export const ExampleComponent = () => {
  return (
    <Page themeId="tool">
      <Header title="Simple Plugin" subtitle="A demonstration plugin with MUI styles" />
      <Content>
        <Container maxWidth="lg" style={styles.container}>
          <Grid container spacing={3} style={styles.gridContainer}>
            <Grid item xs={12}>
              <WelcomeCard />
            </Grid>
            <Grid item xs={12}>
              <InfoPanel />
            </Grid>
            <Grid item xs={12}>
              <div style={styles.section}>
                <StatusList />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Content>
    </Page>
  );
};
