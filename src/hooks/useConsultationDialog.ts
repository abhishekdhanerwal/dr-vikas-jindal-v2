import { useState } from "react";

export const useConsultationDialog = () => {
    const [openConsultationDialog, setOpenConsultationDialog] = useState(false);
    const handleOpenConsultationDialog = () => setOpenConsultationDialog(true);
    const handleCloseConsultationDialog = () => setOpenConsultationDialog(false);
    
    return {
        openConsultationDialog,
        handleOpenConsultationDialog,
        handleCloseConsultationDialog
    }
}