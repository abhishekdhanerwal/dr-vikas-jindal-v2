"use client";
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

import css from "./index.module.css"
import { useFonts } from '@/hooks/useFonts';
import { useConsultationDialog } from '@/hooks/useConsultationDialog';
import ConsultationDialog from '@/components/consultation-dialog';

export const Booking = () => {
    const { montserrat, roboto } = useFonts();
    const { openConsultationDialog, handleCloseConsultationDialog, handleOpenConsultationDialog } = useConsultationDialog();
    
    return (
        <div className={css.bookingContainer}>
            <h1 className={montserrat.className}>Ready to Take Control of Your Digestive Health?</h1>
            <h3 className={roboto.className}>{`Don't let digestive issues affect your quality of life. Schedule a consultation today.`}</h3>
            <Button onClick={handleOpenConsultationDialog} startIcon={<CallIcon />} variant="contained">Book Consultation</Button>
            <ConsultationDialog
                isOpen={openConsultationDialog}
                handleClose={handleCloseConsultationDialog}
            />
        </div>
    )
}