import React from 'react';
import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import { tryAuthorization } from '../../../comments/twitcasting/client';

const LoginInfo: React.FC = () => {
    const { t } = useTranslation();

    const [isAuthorized, setIsAuthorized] = React.useState(false);

    return (
        <Box>
            <Card>
                <CardContent>
                    <Typography
                        align="center"
                        variant="h6"
                        component="div"
                        color={isAuthorized ? 'primary' : 'textSecondary'}
                    >
                        {isAuthorized
                            ? t('broadcast-settings.twitcasting.authorized')
                            : t('broadcast-settings.twitcasting.unauthorized')}
                    </Typography>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={async () => {
                            // await tryAuthorization(clientId, clientSecret);
                        }}
                    >
                        {!isAuthorized
                            ? t('broadcast-settings.twitcasting.login')
                            : t('broadcast-settings.twitcasting.logout')}
                        {isAuthorized ? <LogoutIcon /> : <LoginIcon />}
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

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
            <LoginInfo />
            <FormHelperText>
                {t('broadcast-settings.twitcasting.label')}
            </FormHelperText>
            <FormControl fullWidth>
                <TextField
                    label={t('broadcast-settings.twitcasting.client-id')}
                    onChange={handleChangeClientId}
                />
                <TextField
                    label={t('broadcast-settings.twitcasting.client-secret')}
                    onChange={handleChangeClientSecret}
                />
            </FormControl>
        </Box>
    );
};

export default TwitcastingIntegrate;
