import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';

import TwitcastingIntegrate from './components/TwitcastingIntegrate';

const SaveSettings: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Box sx={{ position: 'fixed', bottom: 20, left: 'auto', right: 20 }}>
            <Button variant="contained" color="primary">
                <SaveIcon />
            </Button>
        </Box>
    );
};

const BroadcastSettings: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <TwitcastingIntegrate />
            <SaveSettings />
        </Box>
    );
};

export default BroadcastSettings;
