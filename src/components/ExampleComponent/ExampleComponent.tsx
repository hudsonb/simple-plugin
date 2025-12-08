import React from 'react';
import { Grid, Container } from '@material-ui/core';
import { Header, Page, Content } from '@backstage/core-components';
import { WelcomeCard } from '../WelcomeCard/WelcomeCard';
import { InfoPanel } from '../InfoPanel/InfoPanel';
import { StatusList } from '../StatusList/StatusList';

const containerStyle = {
  paddingTop: '24px',
  paddingBottom: '24px',
};

const gridContainerStyle = {
  marginTop: '16px',
};

const sectionStyle = {
  padding: '16px',
  borderRadius: '4px',
  backgroundColor: '#f5f5f5',
};

export const ExampleComponent = () => {

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
