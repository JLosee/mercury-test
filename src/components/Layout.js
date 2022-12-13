import { Grid, Container } from '@mui/material';

const Layout = ({ children }) => {
    return (
        <Container sx={{mt: 5, mb: 3}}>
            <Grid
                container
                spacing={0}
                direction="column"
                style={{ maxWidth: 980, margin: '0 auto' }}
            >
                {children}
            </Grid>
        </Container>
    );
}

export default Layout;