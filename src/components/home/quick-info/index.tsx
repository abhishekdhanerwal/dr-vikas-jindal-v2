"use client";

import CallIcon from '@mui/icons-material/Call';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useMediaQuery } from '@mui/material';

import { useFonts } from '@/hooks/useFonts';

import css from "./index.module.css";

export const QuickInfo = () => {
    const {
        roboto,
    } = useFonts();
    const matchesMobileScreen = useMediaQuery('(max-width: 480px)');


    return (
        <section className={css.contact}>
            <span className={roboto.className}><CallIcon /> {matchesMobileScreen ? '+91-99118-66043' : 'Emergency: +91-99118-66043'}</span>
            {!matchesMobileScreen && <span className={roboto.className}><AccessTimeIcon /> Mon-Sat: 10AM-12PM | 5PM-8PM</span>}
            <span className={roboto.className}><LocationPinIcon /> Mahipalpur, New Delhi</span>
        </section>
    )
}