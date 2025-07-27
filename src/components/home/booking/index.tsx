import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

import css from "./index.module.css"
import { useFonts } from '@/hooks/useFonts';

export const Booking = () => {
    const { montserrat, roboto } = useFonts();
    return (
        <div className={css.bookingContainer}>
            <h1 className={montserrat.className}>Ready to Take Control of Your Digestive Health?</h1>
            <h3 className={roboto.className}>Don't let digestive issues affect your quality of life. Schedule a consultation today.</h3>
            <Button startIcon={<CallIcon />} variant="contained">Book Consultation</Button>
        </div>
    )
}