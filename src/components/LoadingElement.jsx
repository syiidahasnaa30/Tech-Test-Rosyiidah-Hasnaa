import Box from '@mui/material/Box';
import { LinearProgress } from '@mui/material';

const LoadingElement = () => {
    return (
        <div className='loading-page'>
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
            <p>loading...</p>
        </div>

    );
}
export default LoadingElement