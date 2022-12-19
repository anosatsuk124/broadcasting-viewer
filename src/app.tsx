import React from 'react';
import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';

import Settings from './pages/settings/Page';
import Comments from './pages/comments/Page';

interface LinkTabProps {
    label: string;
}

const LinkTab = (props: LinkTabProps) => {
    return (
        <Tab
            component="a"
            onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
};

const NavTabs = () => {
    const { t } = useTranslation();

    const [value, setValue] = React.useState(0);

    const [content, setContent] = React.useState(<Comments />);

    const contents = [<Comments />, <Settings />];

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        setContent(contents[newValue]);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Navigation"
                variant="fullWidth"
            >
                <LinkTab label={t('navigation.comments')} />
                <LinkTab label={t('navigation.settings')} />
            </Tabs>
            {content}
        </Box>
    );
};

const App: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <AppBar position="static">
                <Typography component="h1" variant="h4" align="center">
                    {t('app.title')}
                </Typography>
            </AppBar>
            <NavTabs />
        </Box>
    );
};

export default App;
