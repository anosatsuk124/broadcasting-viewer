import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import TTSConfigs from './components/TTSConfigs';

const getEntries = () => {
    const { t } = useTranslation();

    return [{ label: t('settings.tts.label'), content: <TTSConfigs /> }];
};

const VoicevoxSettings: React.FC = () => {
    const { t } = useTranslation();

    const [value, setValue] = React.useState(0);

    const entries = getEntries();
    const [entry, setEntry] = React.useState(entries[value].content);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setEntry(entries[newValue].content);
    };

    return (
        <Box>
            {entry}
            <BottomNavigation showLabels value={value} onChange={handleChange}>
                <BottomNavigationAction label={entries[0].label} />
            </BottomNavigation>
        </Box>
    );
};

export default VoicevoxSettings;
