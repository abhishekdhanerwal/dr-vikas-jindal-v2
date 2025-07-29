"use client";

import Image from "next/image";
import { Card, CardContent } from "@mui/material";
import css from "./page.module.css";
import { JSX } from "react";

import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupIcon from '@mui/icons-material/Group';
import { useFonts } from "@/hooks/useFonts";
import { useConsultationDialog } from "@/hooks/useConsultationDialog";
import ConsultationDialog from "@/components/consultation-dialog";

interface Stat {
    icon: JSX.Element;
    number: string;
    label: string;
    description: string;
    gradient: string;
}

export default function About() {

    const {
        montserrat,
        openSans,
        robotoBold,
        roboto,
        exo2,
        playpenSans,
    } = useFonts();
    const { openConsultationDialog, handleCloseConsultationDialog, handleOpenConsultationDialog } = useConsultationDialog();

    const stats: Stat[] = [
        {
            icon: <MonitorHeartIcon className={css.icon} />,
            number: "30,000+",
            label: "Endoscopic Procedures",
            description: "Including complex ERCP, EUS, and therapeutic interventions",
            gradient: "purple",
        },
        {
            icon: <MilitaryTechIcon className={css.icon} />,
            number: "8+",
            label: "Years Expertise",
            description: "Specialized training from AIIMS and PGI Chandigarh",
            gradient: "blue",
        },
        {
            icon: <TrendingUpIcon className={css.icon} />,
            number: "98%",
            label: "Success Rate",
            description: "Exceptional outcomes in complex procedures",
            gradient: "green",
        },
        {
            icon: <FavoriteBorderIcon className={css.icon} />,
            number: "5000+",
            label: "Lives Transformed",
            description: "Patients successfully treated across specialties",
            gradient: "red",
        },
    ];

    const qualifications = [
        {
            icon: <SchoolIcon className={css.iconColorWhite} />,
            title: "DM Gastroenterology",
            institution: "All India Institute of Medical Sciences (AIIMS), New Delhi",
            year: "2017-2020",
            description: "Super-specialization in Gastroenterology and Hepatology",
            gradient: "gradientPurple",
        },
        {
            icon: <EmojiEventsIcon className={css.iconColorWhite} />,
            title: "Senior Resident (Hepatology)",
            institution: "Post Graduate Institute (PGI), Chandigarh",
            year: "2015-2017",
            description: "Academic position specializing in liver diseases",
            gradient: "gradientBlue",
        },
        {
            icon: <SchoolIcon className={css.iconColorWhite} />,
            title: "MD Internal Medicine",
            institution: "PGIMER, RML Hospital, New Delhi",
            year: "2012-2015",
            description: "Postgraduate training in Internal Medicine",
            gradient: "gradientCyan",
        },
        {
            icon: <SchoolIcon className={css.iconColorWhite} />,
            title: "MBBS",
            institution: "VMMC and Safdarjung Hospital, New Delhi",
            year: "2006-2012",
            description: "Medical degree with clinical training",
            gradient: "gradientEmerald",
        },
        {
            icon: <GroupIcon className={css.iconColorWhite} />,
            title: "Clinical Experience",
            institution: "Safdarjung & RML Hospital",
            year: "2012-2015",
            description: "High-volume government hospital training",
            gradient: "gradientGreen",
        },
        {
            icon: <EmojiEventsIcon className={css.iconColorWhite} />,
            title: "Board Certification",
            institution: "National Board of Examinations",
            year: "2020",
            description: "Certified Gastroenterology Specialist",
            gradient: "gradientYellow",
        },
    ];

    const awards = [
        {
            year: "2023",
            award: "Excellence in Gastroenterology",
            organization: "Indian Society of Gastroenterology",
            icon: "🏆",
            gradient: "yellowToOrange",
        },
        {
            year: "2022",
            award: "Best Clinical Outcomes",
            organization: "Fortis Healthcare",
            icon: "⭐",
            gradient: "blueToPurple",
        },
        {
            year: "2021",
            award: "Research Excellence",
            organization: "AIIMS New Delhi",
            icon: "📚",
            gradient: "greenToBlue",
        },
        {
            year: "2020",
            award: "Outstanding Graduate",
            organization: "DM Gastroenterology, AIIMS",
            icon: "🎓",
            gradient: "purpleToPink",
        },
    ]

    return (
        <>
            <section className={css.heroSection}>
                <div className={css.container}>
                    <div className={css.grid}>
                        <div className={css.content}>
                            <h1 className={`${montserrat.className} ${css.title}`}>
                                Meet Dr. Vikas Jindal
                                <span className={css.subtitle}>Your Trusted Gastroenterologist</span>
                            </h1>
                            <p className={`${roboto.className} ${css.description}`}>
                                With over 15 years of dedicated experience in gastroenterology, Dr. Vikas Jindal has been at the forefront of
                                digestive health care in Delhi, combining advanced medical expertise with compassionate patient care.
                            </p>
                            <div className={css.buttonGroup}>
                                <button onClick={handleOpenConsultationDialog} className={css.primaryButton}>Schedule Consultation</button>
                                {/* <button className={css.outlineButton}>Download CV</button> */}
                            </div>
                        </div>

                        <div className={css.imageWrapper}>
                            <div className={css.image}>
                                <Image alt='Dr. Vikas Jindal - Gastroenterologist' className={css.image} src="/images/doctor-self.jpg" objectFit="fill" fill />
                            </div>
                            <div className={css.statBox}>
                                <div className={css.statNumber}>15+</div>
                                <div className={css.statLabel}>Years of Excellence</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={css.clinicalExcellenceSection}>
                <div className={css.container}>
                    <div className={css.clinicalExcellenceHeader}>
                        <h2 className={`${montserrat.className} ${css.clinicalExcellenceTitle}`}>
                            Clinical <span className={css.textGradient}>Excellence</span>
                        </h2>
                        <p className={`${playpenSans.className} ${css.clinicalExcellenceSubtitle}`}>Measurable impact in gastroenterology care</p>
                    </div>

                    <div className={css.cardGrid}>
                        {stats.map((stat, index) => (
                            <div key={index} className={css.card}>
                                <div className={css.cardContent}>
                                    <div className={`${css.bgCircle} ${css[`gradient${stat.gradient}`]}`} />
                                    <div className={`${css.iconBox} ${css[`gradient${stat.gradient}`]}`}>
                                        {stat.icon}
                                    </div>
                                    <div className={`${robotoBold.className} ${css.ceStatNumber}`}>{stat.number}</div>
                                    <h3 className={`${openSans.className} ${css.statLabel}`}>{stat.label}</h3>
                                    <p className={`${roboto.className} ${css.statDescription}`}>{stat.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={css.qualificationSection}>
                <div className={css.container}>
                    <div className={css.clinicalExcellenceHeader}>
                        <h2 className={`${montserrat.className} ${css.clinicalExcellenceTitle}`}>
                            Education & <span className={css.qualificationTextGradient}>Qualifications</span>
                        </h2>
                        <p className={`${playpenSans.className} ${css.clinicalExcellenceSubtitle}`}>{`Premier medical education from India's top institutions`}</p>
                    </div>

                    <div className={css.qualificationGrid}>
                        {qualifications.map((q, i) => (
                            <div key={i} className={css.qualificationCard}>
                                <div className={css.cardContent}>
                                    <div className={`${css.qualificationBgCircle} ${css[q.gradient]}`}></div>
                                    <div className={`${css.qualificationIconBox} ${css[q.gradient]}`}>{q.icon}</div>
                                    <span className={`${robotoBold.className} ${css.year}`}>{q.year}</span>
                                    <h3 className={`${robotoBold.className} ${css.cardTitle}`}>{q.title}</h3>
                                    <p className={`${roboto.className} ${css.institution}`}>{q.institution}</p>
                                    <p className={`${roboto.className} ${css.qualificationDescription}`}>{q.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TODO */}
            {/* <section className={css.qualificationSection}>
                <div className={css.container}>
                    <div className={css.clinicalExcellenceHeader}>
                        <h2 className={`${montserrat.className} ${css.clinicalExcellenceTitle}`}>
                            Professional <span className={css.qualificationTextGradient}>Journey</span>
                        </h2>
                        <p className={`${playpenSans.className} ${css.clinicalExcellenceSubtitle}`}>From premier medical institutions to clinical excellence - a journey of continuous learning and innovation</p>
                    </div>

                    <div className={css.qualificationGrid}>
                        <AboutTimeline />
                    </div>
                </div>
            </section> */}
            {/* <AboutTimeline /> */}
            <section className={css.philosophySection}>
                <div className={css.backgroundOverlay}></div>
                <div className={css.contentWrapper}>
                    <div className={css.innerContent}>
                        <Image alt='treatment philosophy' width={100} height={100} src="/images/heart-philosophy.png" />
                        {/* <FavoriteBorderIcon className={css.heartIcon} /> */}
                        <h2 className={`${playpenSans.className} ${css.heading}`}>Treatment Philosophy</h2>
                        <blockquote className={`${exo2.className} ${css.quote}`}>
                            {`"Every patient deserves the highest standard of care combining cutting-edge medical technology with
                            compassionate human touch. My approach integrates evidence-based medicine with personalized treatment
                            plans, ensuring optimal outcomes while maintaining the dignity and comfort of each individual."`}
                        </blockquote>
                        <div className={css.author}>
                            <div className={`${robotoBold.className} ${css.authorName}`}>Dr. Vikas Jindal</div>
                            <div className={`${roboto.className} ${css.authorDetails}`}>DM Gastroenterology, AIIMS New Delhi</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={css.awardSection}>
                <div className={css.container}>
                    <div className={css.clinicalExcellenceHeader}>
                        <h2 className={`${montserrat.className} ${css.clinicalExcellenceTitle}`}>
                            Awards & <span className={css.highlight}>Recognition</span>
                        </h2>
                        <p className={`${playpenSans.className} ${css.clinicalExcellenceSubtitle}`}>Excellence recognized by peers and institutions</p>
                    </div>

                    <div className={css.cardGrid}>
                        {awards.map((award, index) => (
                            <Card key={index} className={css.awardCard}>
                                <CardContent className={css.cardContent}>
                                    <div className={css.backgroundCircle}></div>
                                    <div className={`${css.awardIconBox} ${css[award.gradient]}`}>{award.icon}</div>
                                    <div className={`${robotoBold.className} ${css.awardYear}`}>{award.year}</div>
                                    <h3 className={`${robotoBold.className} ${css.awardTitle}`}>{award.award}</h3>
                                    <p className={`${roboto.className} ${css.organization}`}>{award.organization}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <ConsultationDialog
                    isOpen={openConsultationDialog}
                    handleClose={handleCloseConsultationDialog}
                />
            </section>
        </>
    )
}