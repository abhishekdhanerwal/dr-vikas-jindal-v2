import { SERVICES } from '@/content/services';
import { useFonts } from '@/hooks/useFonts';

import css from "./index.module.css";
import React from 'react';

export const Services = () => {
  const { montserrat,
    robotoBold,
    roboto,
    zillaSlab } = useFonts();

  return (
    <section className={css.servicesSection}>
      <div className={css.heading}>
        <h1 className={montserrat.className}>
          Advanced Gastroenterology Services
        </h1>
        <p className={`${zillaSlab.className} ${css.subHeading}`}>
          Cutting-edge procedures and treatments with state-of-the-art technology
        </p>
      </div>

      <div className={css.gridContainer}>
        {SERVICES.map(item => (
          <div key={item.title} className={css.card}>
            <div className={css.cardContent}>
              <div className={css.cardBackground} ></div>
              <div className={`${css.iconBox} ${css[`iconBox${item.id}`]}`} >
                {item.icon}
              </div>
              <div className={`${css.title} ${robotoBold.className}`}>{item.title}</div>
              <p className={`${css.description} ${roboto.className}`}>{item.description}</p>
              {item.procedures.map(proc => <div key={proc} className={`${css.procedureItem} ${roboto.className}`}><div className={css.procedureDot}></div>{proc}</div>)}
              <a href="/services" className={`${css.learnMore} ${roboto.className}`}>Learn More →</a>
            </div>
          </div>))}
      </div>
    </section>
  )
}