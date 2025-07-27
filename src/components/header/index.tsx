import Image from "next/image";
import { useState } from 'react';

import { useRouter, usePathname } from 'next/navigation';

import { useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

import { useFonts } from '@/hooks/useFonts';


import css from './index.module.css';
import { NAVIGATION } from '@/content/navigation';
import NavigationDrawer from '../navigation-drawer';

export const Header = () => {
    const { 
        roboto,
        zillaSlab
     } = useFonts();
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');

    const router = useRouter();
    const pathname = usePathname();

    const [openSideMenu, setOpenSideMenu] = useState(false);

    const goToRoute = (route: string) => {
        router.push(route)
    };

    const showDrawer = () => {
        setOpenSideMenu(true);
    };
  
    const onCloseDrawer = () => {
        setOpenSideMenu(false);
    };

    return (
        <header className={css.header}>
            <div className={css.headerContent}>
                <div className={css.logoTitle}>
                    <Image className={css.logo} alt='logo' width={matchesMobileScreen ? 48 : 64} height={matchesMobileScreen ? 40 : 54} src={'/logo.png'} />
                    <span className={`${zillaSlab.className} ${css.title}`} onClick={() => goToRoute("/")}>Dr. Vikas Jindal</span>
                </div>
                {matchesMobileScreen ? <MenuIcon onClick={showDrawer} /> :
                    <>
                        <nav>
                            <ul className={`${css.listContainer} ${roboto.className}`}>
                                {NAVIGATION.map(item => <li key={item.route} className={item.route === pathname ? css.activeRoute : ""} onClick={() => goToRoute(item.route)}>{item.label}</li>)}
                                <li className={css.navAppointmentBtn}>{matchesSmallScreen ? <EditCalendarIcon /> : 'Book Appointment'}</li>
                            </ul>
                        </nav>
                        <span className={css.iconGroupHead}>
                            <span className={css.icons}><FacebookIcon /></span>
                            <span className={css.icons}><InstagramIcon /></span>
                            <span className={css.icons}><TwitterIcon /></span>
                        </span>
                    </>}

                <NavigationDrawer open={openSideMenu} onClose={onCloseDrawer} />
            </div>
        </header>
    )
}