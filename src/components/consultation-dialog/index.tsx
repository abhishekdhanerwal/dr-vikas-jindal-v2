import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PeopleIcon from '@mui/icons-material/People';
import styles from "./index.module.css";
import { useFonts } from "@/hooks/useFonts";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const ConsultationDialog: React.FC<Props> = ({
  isOpen,
  handleClose,
}) => {

  const { robotoBold, roboto, exo2 } = useFonts();

  return (
    <Dialog classes={{ paper:  styles.dialog }} open={isOpen} maxWidth="sm" fullWidth>
      <DialogTitle className={styles.headerTitle}>Book Your Consultation</DialogTitle>
      <DialogContent className={styles.dialogContent}>
        {/* WhatsApp Option */}
        <div className={styles.card + " " + styles.whatsappCard}>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle + " " + styles.greenIcon}>
                <WhatsAppIcon className={styles.icon} />
              </div>
              <div>
                <h3 className={`${robotoBold.className} ${styles.cardTitle}`}>WhatsApp Us</h3>
                <p className={`${exo2.className} ${styles.cardDesc}`}>Quick response • Available 24/7</p>
              </div>
            </div>
            <div className={`${roboto.className} ${styles.cardPoints}`}>
              <div><WatchLaterIcon className={styles.pointIconGreen} /> Instant messaging and quick replies</div>
              <div><CalendarMonthIcon className={styles.pointIconGreen} /> Schedule appointments easily</div>
              <div><PeopleIcon className={styles.pointIconGreen} /> Share medical reports and images</div>
            </div>
            <Button fullWidth variant="contained" className={styles.whatsappButton} >
              <WhatsAppIcon className={styles.buttonIcon} /> Chat on WhatsApp
            </Button>
          </div>
        </div>

        {/* Call Option */}
        <div className={styles.card + " " + styles.callCard}>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <div className={styles.iconCircle + " " + styles.orangeIcon}>
                <LocalPhoneIcon className={styles.icon} />
              </div>
              <div>
                <h3 className={`${robotoBold.className} ${styles.cardTitle}`}>Call Us</h3>
                <p className={`${exo2.className} ${styles.cardDesc}`}>Direct consultation • Immediate assistance</p>
              </div>
            </div>
            <div className={`${roboto.className} ${styles.cardPoints}`}>
              <div><WatchLaterIcon className={styles.pointIconOrange} /> Mon-Sat: 9AM-7PM | Sun: 10AM-2PM</div>
              <div><PeopleIcon className={styles.pointIconOrange} /> Speak directly with our team</div>
            </div>
            <Button fullWidth variant="contained" className={styles.callButton} >
              <LocalPhoneIcon className={styles.buttonIcon} /> Call Now
            </Button>
          </div>
        </div>        

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Button onClick={handleClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;