import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const LoadingElement = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress sx={{ color: "#408d86" }} />
        </Box>
    );
}
export default LoadingElement