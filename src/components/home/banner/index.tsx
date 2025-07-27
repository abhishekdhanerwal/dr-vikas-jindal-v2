import { Button, Chip } from '@mui/material';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import CallIcon from '@mui/icons-material/Call';
import LocationPinIcon from '@mui/icons-material/LocationPin';

import { useFonts } from '@/hooks/useFonts';

import css from "./index.module.css";
import Image from 'next/image'

export const Banner = () => {
      const { montserrat,
        robotoBold,
        roboto,
        zillaSlab } = useFonts();

    return (
        <section className={css.banner}>
        <div className={css.infoSection}>
          <Chip className={css.chip} avatar={<WorkspacePremiumIcon className={css.chipIcon} />} label="Leading Gastroenterologist in Delhi" />
          <h1 className={`${montserrat.className} ${css.heading1}`} >Expert Care for Your</h1>
          <h1 className={`${montserrat.className}  ${css.heading2}`} >Digestive Health</h1>
          <p className={`${zillaSlab.className} ${css.description}`}>Dr. Vikas Jindal brings over 15 years of specialized experience in advanced gastroenterology, transplant hepatology, and therapeutic endoscopy from AIIMS New Delhi.</p>
          <div className={css.btnGroup}>
            <Button startIcon={<CallIcon />} variant="contained">Book Consultation</Button>
            <Button startIcon={<LocationPinIcon />} variant="outlined">Get Directions</Button>
          </div>
          <div className={css.extraWidgets}>
            {[{value: '15+', label: 'Years Experience', type: 'bannerCardPurple'},
              {value: '30K+', label: 'Procedures Done', type: 'bannerCardOrange'},
              {value: '100%', label: 'Success Rate', type: 'bannerCardPink'},
            ].map(item => <div key={item.value} className={`${css.bannerCard} ${css[item.type]}`}>
              <div className={css.bannerCardContent}>
                <span className={`${robotoBold.className} ${css.bannerCardTitle}`}>{item.value}</span>
                <span className={`${roboto.className} ${css.bannerCardDescription}`}>{item.label}</span>
              </div>
            </div>)}
          </div>
        </div>
        <div className={css.imgSection}>
          <div className={css.imgContainer} style={{width: '40%'}}>
            <Image alt='' objectFit="fill" fill src="/images/v1.jpg" /> 
          </div>
        </div>
      </section>
    )
}