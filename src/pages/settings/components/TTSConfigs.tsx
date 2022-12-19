import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormHelperText } from '@mui/material';

import { getVoicevoxSpeakers, Speaker } from '../../../tts/voicevox/client';

const SelectingSpeakers: React.FC = () => {
    const { t } = useTranslation();

    const [speaker, setSpeaker] = React.useState('');
    const [speakerItems, setSpeakerItems] = React.useState([] as JSX.Element[]);

    const handleChange = (event: SelectChangeEvent) => {
        setSpeaker(event.target.value as string);
    };

    const [speakers, setSpeakers] = React.useState([] as Speaker[]);

    React.useEffect(() => {
        (async () => {
            const speakers = await getVoicevoxSpeakers();
            setSpeakers(speakers);
        })();

        const speakerItems: JSX.Element[] = [];

        speakers.map((speaker) => {
            speaker.styles.map((style) => {
                speakerItems.push(
                    <MenuItem key={style.id} value={style.id}>
                        {speaker.name} ({style.name})
                    </MenuItem>
                );
            });
        });

        setSpeakerItems(speakerItems);
    });

    return (
        <Box>
            <FormHelperText>
                {t('settings.tts.voicevox.selecting-speakers')}
            </FormHelperText>
            <FormControl fullWidth>
                <Select value={speaker} onChange={handleChange}>
                    {speakerItems}
                </Select>
            </FormControl>
        </Box>
    );
};

const TTSConfigs: React.FC = () => {
    return (
        <Box>
            <SelectingSpeakers />
        </Box>
    );
};

export default TTSConfigs;
