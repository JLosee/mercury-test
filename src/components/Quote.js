import { Box, Grow, Typography } from '@mui/material';

export const LeftQuote = ({ children }) => {
    return (
        <Grow in>
            <Box>
                <Box sx={{ width: 140, height: 140, opacity: .1, mt: 2, marginLeft: '0px', marginBottom: '-100px', backgroundRepeat: 'no-repeat', backgroundSize: '140px, 140px', backgroundImage: "url('/left-quote.png')" }} />
                <Typography sx={{ mt: 2, ml: 3 }} variant="h4">{children}</Typography>
            </Box>
        </Grow>
    );
}
export const RightQuote = ({ children }) => {
    return (
        <Grow in>
            <Box sx={{ mr: 5, position: 'relative' }}>
                <Box sx={{ width: 140, height: 140, opacity: .1, mt: 2, position: 'absolute', right: -50, top: -30, marginBottom: '-80px', backgroundRepeat: 'no-repeat', backgroundSize: '140px, 140px', backgroundImage: "url('/right-quote.png')" }} />
                <Typography sx={{ mt: 2, textAlign: 'right' }} variant="h4">{children}</Typography>
            </Box>
        </Grow>
    );
}
