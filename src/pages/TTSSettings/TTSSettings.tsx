import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import BottomSettings from './BottomSettings';
import { TTSProvider } from './types';

const TTSSettings: React.FC = () => {
    const { t } = useTranslation();

    const [provider, setProvider] = React.useState(TTSProvider.VOICEVOX);

    const handleChange = (event: React.SyntheticEvent, newId: string) => {
        const v: TTSProvider = parseInt(newId);
        setProvider(v);
    };

    return (
        <Box>
            <FormControl>
                <FormLabel>{t('tts-settings.tts.provider')}</FormLabel>
                <RadioGroup defaultValue={0} onChange={handleChange}>
                    <FormControlLabel
                        value={TTSProvider.VOICEVOX}
                        control={<Radio />}
                        label={t('tts-settings.tts.voicevox.label')}
                    />
                    <FormControlLabel
                        value={TTSProvider.BOUYOMI}
                        control={<Radio />}
                        label={t('tts-settings.tts.bouyomi.label')}
                    />
                </RadioGroup>
            </FormControl>
            <BottomSettings provider={provider} />
        </Box>
    );
};

export default TTSSettings;
