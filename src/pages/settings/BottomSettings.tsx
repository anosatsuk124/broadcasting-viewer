import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import TTSConfigs from './voicevox/components/TTSConfigs';
import { TTSProvider } from './types';

const getEntries = (provider: TTSProvider) => {
    const { t } = useTranslation();

    switch (provider) {
        case TTSProvider.VOICEVOX:
            return [[t('settings.tts.label'), <TTSConfigs />]];
        case TTSProvider.BOUYOMI:
            return [[t('settings.tts.label'), <Box />]];
        default:
            return [];
    }
};

interface BottomSettingsProps {
    provider: TTSProvider;
}

const BottomSettings = (props: BottomSettingsProps) => {
    const [entryNumber, setEntryNumber] = React.useState(0);

    const entries = getEntries(props.provider);

    const handleChangeBottomNavigation = (
        event: React.SyntheticEvent,
        newValue: number
    ) => {
        setEntryNumber(newValue);
    };

    return (
        <Box>
            {entries.map((entry) => entry[1])}
            <BottomNavigation
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                showLabels
                value={entryNumber}
                onChange={handleChangeBottomNavigation}
            >
                <BottomNavigationAction
                    label={entries.map((entry) => entry[0])}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomSettings;
