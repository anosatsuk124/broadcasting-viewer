import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAtom } from 'jotai';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import TTSConfigs from './voicevox/components/TTSConfigs';
import { TTSProvider } from '../../states/types';
import { TTSSettingsProviderAtom } from '../../states/settings';

const getEntries = (provider: TTSProvider) => {
    const { t } = useTranslation();

    switch (provider) {
        case TTSProvider.VOICEVOX:
            return [[t('tts-settings.tts.label'), <TTSConfigs />]];
        case TTSProvider.BOUYOMICHAN:
            return [[t('tts-settings.tts.label'), <Box />]];
        default:
            return [];
    }
};

interface BottomSettingsProps {
    provider: TTSProvider;
}

const BottomSettings = () => {
    const [entryNumber, setEntryNumber] = React.useState(0);

    const [ttsSettingsProvider] = useAtom(TTSSettingsProviderAtom);

    const entries = getEntries(ttsSettingsProvider as TTSProvider);

    const handleChangeBottomNavigation = (
        event: React.SyntheticEvent,
        newValue: number
    ) => {
        setEntryNumber(newValue);
    };

    return (
        <Box>
            {entries[entryNumber][1]}
            <BottomNavigation
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                showLabels
                value={entryNumber}
                onChange={handleChangeBottomNavigation}
            >
                <BottomNavigationAction
                    key={entryNumber}
                    label={entries[entryNumber][0]}
                />
            </BottomNavigation>
        </Box>
    );
};

export default BottomSettings;
