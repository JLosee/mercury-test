import { useState } from 'react';
import { Button, Fade , Link, Grid, Box, Divider, Typography } from '@mui/material';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize'
import useMediaQuery from '@mui/material/useMediaQuery';
import Layout from './components/Layout'
import { LeftQuote, RightQuote } from './components/Quote'
import Categories from './components/Categories'
import useJoke from './hooks/useJoke';

const buttonStyles = {
  padding: 2,
  borderRadius: 10
};

function App() {
  const [loading, joke, punchline, error, refetch] = useJoke();
  const [showPunchline, setShowPunchline] = useState(false);
  const { width, height } = useWindowSize()
  const matches = useMediaQuery('(min-width:500px)');

  const [cat, setCat] = useState("All");

  const fetchJoke = () => {
    setShowPunchline(false);
    refetch(cat);
  }

  return (
    <Layout>
      <Box sx={{ justifyContent: 'space-between', flexDirection: 'row', display: 'flex' }}>
        <Box>
          <Button color="success" sx={buttonStyles} onClick={fetchJoke} variant="contained">Generate Random Joke</Button>
        </Box>
        {matches && <Box sx={{ mt: 2 }}><Link href="https://github.com/15Dkatz/official_joke_api">API Documentation</Link></Box>}
      </Box>
      <Grid item><Categories cat={cat} setCat={setCat} /></Grid>
      <Divider sx={{ mt: 2 }} />

      {error && <Typography sx={{ mt: 2, textAlign: 'center', mb: 2, color: '#ED4337' }} variant="h6">Error Fetching Joke</Typography>}
      {loading && !error && <Typography sx={{ mt: 2, mb: 2, textAlign: 'center' }} variant="h65">Loading Joke...</Typography>}
      {!loading && <LeftQuote>{joke}</LeftQuote>}
      {!loading && showPunchline && <Confetti
        width={width}
        height={height}
      />}
      <Grid container
        direction="column"
        alignItems="center"
        justifyContent="center">
        <Grid item sx={{ mt: 6, mb: 3 }}>{!loading && (
          <Button
            color="primary"
            sx={buttonStyles}
            onClick={
              () => { setShowPunchline(prevState => !prevState) }} variant="contained">{showPunchline ? "Hide Punchline" : "Show Punchline"}
          </Button>
        )
        }
        </Grid>
      </Grid>

      {!loading && showPunchline && <RightQuote>{punchline}</RightQuote>}

      {!matches && <Box sx={{ textAlign: 'center', mt: 2 }}><Link href="https://github.com/15Dkatz/official_joke_api">API Documentation</Link></Box>}
    </Layout>
  );
}

export default App;
