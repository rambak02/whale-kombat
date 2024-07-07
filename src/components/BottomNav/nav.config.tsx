import AirdropIcon from '../../assets/nav-icons/airdrop.svg?react';
import DiveIcon from '../../assets/nav-icons/dive.svg?react';
import OceanHubIcon from '../../assets/nav-icons/ocean-hub.svg?react';
import QuestsIcon from '../../assets/nav-icons/quests.svg?react';
import ReefIcon from '../../assets/nav-icons/reef.svg?react';
import { constRoutes } from '../../paths';

export const navItems = [
    {
        route: constRoutes.HOME,
        iconComponent: () => <OceanHubIcon />,
        title: 'Ocean',
    },
    {
        route: constRoutes.MINE,
        iconComponent: () => <DiveIcon />,
        title: 'Dive',
    },
    {
        route: constRoutes.FRIENDS,
        iconComponent: () => <ReefIcon />,
        title: 'Reef',
    },
    {
        route: constRoutes.EARN,
        iconComponent: () => <QuestsIcon />,
        title: 'Quests',
    },
    {
        route: constRoutes.AIRDROP,
        iconComponent: () => <AirdropIcon />,
        title: 'Airdrop',
    },
];