import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

import TwitcastingIntegrate from './components/TwitcastingIntegrate';

const BroadcastSettings: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <TwitcastingIntegrate />
        </Box>
    );
};

export default BroadcastSettings;
