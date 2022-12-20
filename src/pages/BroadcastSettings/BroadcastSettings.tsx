import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import SaveIcon from '@mui/icons-material/Save';

import TwitcastingIntegrate from './components/TwitcastingIntegrate';

const BroadcastSettings: React.FC = () => {
    const { t } = useTranslation();
    return (
        <Box>
            <TwitcastingIntegrate />
            <Tooltip title={t('broadcast-settings.save')}>
                <IconButton>
                    <SaveIcon />
                </IconButton>
            </Tooltip>
        </Box>
    );
};

export default BroadcastSettings;
