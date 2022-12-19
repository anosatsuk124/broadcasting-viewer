import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';

import VoicevoxSettings from './voicevox/VoicevoxSettings';

const Settings: React.FC = () => {
    const { t } = useTranslation();

    const [value, setValue] = React.useState(0);

    const contents = [<VoicevoxSettings />];
    const [content, setContent] = React.useState(contents[value]);

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        const v = parseInt(newValue);
        setValue(v);
        setContent(contents[v]);
    };

    return (
        <Box>
            <FormControl>
                <FormLabel>{t('settings.tts.provider')}</FormLabel>
                <RadioGroup defaultValue={0} onChange={handleChange}>
                    <FormControlLabel
                        value={0}
                        control={<Radio />}
                        label={t('settings.tts.voicevox.label')}
                    />
                    <FormControlLabel
                        value={1}
                        control={<Radio />}
                        label={t('settings.tts.bouyomi.label')}
                    />
                </RadioGroup>
            </FormControl>
            {content}
        </Box>
    );
};

export default Settings;
