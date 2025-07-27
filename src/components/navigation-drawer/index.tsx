import React, { Fragment } from 'react';
import Image from "next/image";

import { useRouter, usePathname, useSearchParams } from 'next/navigation';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import css from './index.module.css';
import { NAVIGATION } from '@/content/navigation';
import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import { useFonts } from '@/hooks/useFonts';

interface Props {
  open: boolean;
  onClose: () => void;
}

const NavigationDrawer = ({ open, onClose }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const {
    robotoBold,
    playpenSans,
  } = useFonts();

  const goToPage = (path: string) => {
    router.push(path)
  }

  const selectedPath = query.get('type') ? `/${pathname.split('/')[1]}` : pathname ?? "";

  return (
    <Drawer open={open} onClose={onClose} anchor='right' classes={{paper: css.drawer}}>
      <Box sx={{width: 275, mt: 2, position: 'relative', height: 'calc(100vh - 16px)', paddingX: '10px' }} role="presentation" onClick={onClose}>
        <div className={css.logoTitle}>
          <div>
          <Image className={css.logo} alt='logo' width={48} height={40} src={'/logo.png'} />
          </div>
          <div className={css.title}>
            <span className={robotoBold.className}>Dr. Vikas Jindal</span>
            <span className={playpenSans.className}>Gastroenterologist</span>
          </div>
        </div>
        <List
          sx={{ width: '100%', maxWidth: 360}}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          {NAVIGATION.map(({  label, route }) => (<Fragment key={route}><ListItemButton classes={{root : `${selectedPath === route ? css.activeNavItem : (route === "/" && !selectedPath) ? css.activeNavItem : ''} `}} onClick={() => goToPage(route)}>
            {/* <ListItemIcon className={`${selectedPath === route ? css.activeNavItemIcon : (route === "/" && !selectedPath) ? css.activeNavItemIcon : ''} `}>
              {navIcon}
            </ListItemIcon> */}
            <ListItemText primary={label} />
          </ListItemButton>
          </Fragment>))}
        </List>
        <Button className={css.bookingBtn} fullWidth startIcon={<CallIcon />} variant="contained">Book Consultation</Button>
        <Divider className={css.divider} />
        <div className={css.socialMediaContainer}>
          <FacebookIcon style={{ color: '#316FF6' }} />
          <InstagramIcon style={{ color: '#962fbf' }} />
          <TwitterIcon style={{ color: '#1DA1F2' }} />
        </div>
      </Box>
    </Drawer>
  );
};

export default NavigationDrawer;