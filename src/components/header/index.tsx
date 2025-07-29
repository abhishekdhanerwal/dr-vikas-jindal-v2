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
import { useConsultationDialog } from "@/hooks/useConsultationDialog";
import ConsultationDialog from "../consultation-dialog";

export const Header = () => {
    const { 
        roboto,
        zillaSlab
     } = useFonts();
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');
    const matchesSmallScreen = useMediaQuery('(max-width: 820px)');

    const router = useRouter();
    const pathname = usePathname();
    const { openConsultationDialog, handleCloseConsultationDialog, handleOpenConsultationDialog } = useConsultationDialog();

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

    const logoDimensions = {
        width: 64,
        height: 54
    }

    if (matchesSmallScreen) {
        logoDimensions.width = 54;
        logoDimensions.height = 48;
    }

    if (matchesMobileScreen) {
        logoDimensions.width = 48;
        logoDimensions.height = 40;
    }
    return (
        <header className={css.header}>
            <div className={css.headerContent}>
                <div className={css.logoTitle}>
                    <Image onClick={() => goToRoute("/")} className={css.logo} alt='logo' width={logoDimensions.width} height={logoDimensions.height} src={'/logo.png'} />
                    <span className={`${zillaSlab.className} ${css.title}`} onClick={() => goToRoute("/")}>Dr. Vikas Jindal</span>
                </div>
                {matchesMobileScreen ? <MenuIcon onClick={showDrawer} /> :
                    <>
                        <nav>
                            <ul className={`${css.listContainer} ${roboto.className}`}>
                                {NAVIGATION.map(item => <li key={item.route} className={item.route === pathname ? css.activeRoute : ""} onClick={() => goToRoute(item.route)}>{item.label}</li>)}
                                <li className={css.navAppointmentBtn} onClick={handleOpenConsultationDialog} >{matchesSmallScreen ? <EditCalendarIcon /> : 'Book Appointment'}</li>
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
            <ConsultationDialog
                isOpen={openConsultationDialog}
                handleClose={handleCloseConsultationDialog}
            />
        </header>
    )
}