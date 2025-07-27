import { useFonts } from '@/hooks/useFonts';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';


import css from './index.module.css';
import Image from 'next/image';

export const WhyChooseUs = () => {
    const { 
        montserrat,
        openSans,
        robotoBold,
        roboto,
        exo2,
        playpenSans,
        unlock,
        sofadiOne,
        zillaSlab
      } = useFonts();

    return (
        <section className={css.whySection}>
            <div className={css.whyContainer}>
                <div className={css.whyGrid}>
                    <div className={css.whyImageWrapper}>
                        <Image alt='' className={css.image} src="/images/doctor-self.jpg" objectFit="fill" fill />
                        <div className={css.whyImageBg}></div>
                    </div>

                    <div>
                        <h2 className={`${playpenSans.className} ${css.whyHeading}`}>
                            Why Choose <span className={css.textGradientNew}>Dr. Vikas Jindal?</span>
                        </h2>
                        <div className={css.whyItems}>
                            {[
                                {label: 'AIIMS Trained Specialist', description: 'DM Gastroenterology from AIIMS New Delhi with extensive training from PGI Chandigarh', type: 'whyPurple', icon: <WorkspacePremiumIcon />},
                                {label: '30,000+ Procedures', description: 'Vast experience in advanced endoscopic procedures with exceptional success rates', type: 'whyPink', icon: <FavoriteBorderIcon />},
                                {label: 'Patient-Centered Care', description: 'Comprehensive approach combining latest technology with compassionate patient care', type: 'whyOrange', icon: <PeopleOutlineIcon />}
                            ].map(item => (
                                <div key={item.label} className={css.whyItem}>
                                    <div className={`${css.whyIcon} ${css[item.type]}`}>{item.icon}</div>
                                    <div>
                                        <h3 className={`${robotoBold.className} ${css.whyTitle}`}>{item.label}</h3>
                                        <p className={`${roboto.className} ${css.whyDesc}`}>{item.description}</p>
                                    </div>
                                </div> 
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}