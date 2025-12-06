export const ExampleComponent = () => {
  const containerStyle = {
    paddingTop: 24,
    paddingBottom: 24,
  };

  const gridContainerStyle = {
    marginTop: 16,
  };

  const sectionStyle = {
    padding: 16,
    borderRadius: 4,
    backgroundColor: '#f5f5f5',
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
