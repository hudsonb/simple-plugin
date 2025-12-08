import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Header, Page, Content } from '@backstage/core-components';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { StatusList } from '../StatusList/StatusList';

const getStyles = (theme: any) => ({
  container: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  gridContainer: {
    marginTop: theme.spacing(2),
  },
  section: {
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.default,
  },
});

export const ExampleComponent = () => {
  const theme = {
    spacing: (factor: number) => `${0.25 * factor}rem`,
    shape: { borderRadius: 4 },
    palette: { background: { default: '#f5f5f5' } },
  };
  const styles = getStyles(theme);

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
