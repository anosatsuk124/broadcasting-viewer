import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { tryAuthorization } from '../../../comments/twitcasting/client';

const TwitcastingIntegrate: React.FC = () => {
    const { t } = useTranslation();
    const [clientId, setClientId] = React.useState('');
    const [clientSecret, setClientSecret] = React.useState('');

    const handleChangeClientId = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setClientId(event.target.value);
    };

    const handleChangeClientSecret = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setClientSecret(event.target.value);
    };

    return (
        <Box>
            <TextField
                label={t('broadcast-settings.twitcasting.client-id')}
                onChange={handleChangeClientId}
            />
            <TextField
                label={t('broadcast-settings.twitcasting.client-secret')}
                onChange={handleChangeClientSecret}
            />
            <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                    await tryAuthorization(clientId, clientSecret);
                }}
            >
                {t('broadcast-settings.twitcasting.authorize')}
            </Button>
        </Box>
    );
};

export default TwitcastingIntegrate;
