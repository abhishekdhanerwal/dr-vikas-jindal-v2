import Image from 'next/image';

import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import TaskAltIcon from '@mui/icons-material/TaskAlt';

import css from "./page.module.css";

const services = [
    {
        title: "Upper Endoscopy (EGD)",
        category: "Diagnostic Procedures",
        duration: "30-45 minutes",
        description:
            "Comprehensive examination of the upper digestive tract including esophagus, stomach, and duodenum.",
        features: [
            "High-definition imaging",
            "Minimal discomfort with sedation",
            "Same-day results",
            "Biopsy capability",
        ],
        conditions: ["GERD", "Ulcers", "Swallowing difficulties", "Unexplained abdominal pain"],
        image: "/placeholder.svg",
    },
    {
        title: "Colonoscopy",
        category: "Screening & Diagnostic",
        duration: "45-60 minutes",
        description:
            "Complete examination of the colon and rectum for early detection and prevention of colorectal cancer.",
        features: [
            "Advanced colonoscope technology",
            "Polyp removal during procedure",
            "Comfortable sedation options",
            "Detailed imaging and documentation",
        ],
        conditions: ["Colorectal cancer screening", "IBD monitoring", "Bleeding", "Changes in bowel habits"],
        image: "/placeholder.svg",
    },
    {
        title: "Liver Disease Management",
        category: "Specialized Treatment",
        duration: "Ongoing care",
        description: "Comprehensive care for all liver conditions including hepatitis, fatty liver, and cirrhosis.",
        features: [
            "Advanced liver function testing",
            "Fibroscan for liver stiffness",
            "Personalized treatment plans",
            "Regular monitoring protocols",
        ],
        conditions: ["Hepatitis B & C", "Fatty liver disease", "Cirrhosis", "Liver cancer"],
        image: "/placeholder.svg",
    },
    {
        title: "IBD Treatment",
        category: "Chronic Disease Management",
        duration: "Long-term care",
        description:
            "Specialized treatment for Inflammatory Bowel Disease including Crohn's disease and ulcerative colitis.",
        features: [
            "Biologic therapy options",
            "Nutritional counseling",
            "Flare management protocols",
            "Quality of life optimization",
        ],
        conditions: ["Crohn's disease", "Ulcerative colitis", "Indeterminate colitis"],
        image: "/placeholder.svg",
    },
    {
        title: "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
        category: "Advanced Procedures",
        duration: "60-90 minutes",
        description: "Advanced procedure for diagnosing and treating bile duct and pancreatic disorders.",
        features: [
            "Therapeutic interventions",
            "Stone removal capability",
            "Stent placement",
            "Specialized expertise required",
        ],
        conditions: ["Bile duct stones", "Pancreatic disorders", "Jaundice", "Biliary strictures"],
        image: "/placeholder.svg",
    },
    {
        title: "Acid Reflux Treatment",
        category: "Common Conditions",
        duration: "Varies",
        description:
            "Comprehensive treatment for GERD and acid reflux with both medical and lifestyle interventions.",
        features: [
            "pH monitoring studies",
            "Medication optimization",
            "Lifestyle modification guidance",
            "Surgical referral when needed",
        ],
        conditions: ["GERD", "Heartburn", "Barrett's esophagus", "Hiatal hernia"],
        image: "/placeholder.svg",
    },
];

export default function ServicesPage() {
    return (
        <div className={css.pageWrapper}>
            <section className={css.heroSection}>
                <div className={css.heroContent}>
                    <h1 className={css.heroTitle}>Comprehensive Gastroenterology Services</h1>
                    <p className={css.heroSubtitle}>
                        State-of-the-art diagnostic and treatment services for all digestive health conditions. Our advanced facility
                        offers the latest in gastroenterology care with a patient-first approach.
                    </p>
                    <div className={css.heroButtons}>
                        <button className={css.primaryButton}>Schedule Consultation</button>
                        <button className={css.outlineButton}>Download Service Guide</button>
                    </div>
                </div>
            </section>

            <section className={css.servicesSection}>
                {services.map((service, index) => (
                    <div key={index} className={css.serviceCard}>
                        <div className={css.serviceImageWrapper}>
                            <Image
                                src={service.image}
                                alt={service.title}
                                layout="fill"
                                objectFit="cover"
                                className={css.serviceImage}
                            />
                            <div className={css.categoryBadge}>{service.category}</div>
                        </div>
                        <div className={css.serviceContent}>
                            <div className={css.serviceHeader}>
                                <h3>{service.title}</h3>
                                <span className={css.duration}>{service.duration}</span>
                            </div>
                            <p className={css.description}>{service.description}</p>
                            <div className={css.featuresConditions}>
                                <div>
                                    <h4>Key Features</h4>
                                    <ul>
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>✔ {feature}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4>Treats Conditions</h4>
                                    <div className={css.conditionsList}>
                                        {service.conditions.map((condition, idx) => (
                                            <span key={idx} className={css.conditionBadge}>{condition}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button className={css.secondaryButton}>Learn More & Book →</button>
                        </div>
                    </div>
                ))}
            </section>

            <section className={css.whySection}>
                <div className={css.whyContainer}>
                    <div className={css.whyHeader}>
                        <h2>Why Choose Our Services</h2>
                        <p>Experience the most comprehensive and compassionate care tailored to your digestive health.</p>
                    </div>
                    <div className={css.whyGrid}>
                        <div className={css.benefitCard}>
                            <div className={css.benefitIcon}>💼</div>
                            <h3 className={css.benefitTitle}>Experienced Doctors</h3>
                            <p className={css.benefitText}>Our specialists bring years of clinical experience and research-backed care.</p>
                        </div>
                        <div className={css.benefitCard}>
                            <div className={css.benefitIcon}>⚙️</div>
                            <h3 className={css.benefitTitle}>Advanced Equipment</h3>
                            <p className={css.benefitText}>State-of-the-art technology ensures accurate diagnostics and treatment.</p>
                        </div>
                        <div className={css.benefitCard}>
                            <div className={css.benefitIcon}>❤️</div>
                            <h3 className={css.benefitTitle}>Personalized Care</h3>
                            <p className={css.benefitText}>Tailored treatment plans that cater to your unique health needs.</p>
                        </div>
                        <div className={css.benefitCard}>
                            <div className={css.benefitIcon}>📍</div>
                            <h3 className={css.benefitTitle}>Convenient Location</h3>
                            <p className={css.benefitText}>Centrally located with easy access for your regular checkups.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={css.prepSection}>
                <div className={css.prepContainer}>
                    <div className={css.prepHeader}>
                        <h2>Preparation Guidelines</h2>
                        <p>Follow these simple instructions to ensure your procedure goes smoothly.</p>
                    </div>
                    <div className={css.prepGrid}>
                        <div className={css.prepGridBox}>
                            <h3 className={css.benefitTitle}><LooksOneIcon className={css.benefitTitle1} />Before the Procedure</h3>
                            <ul className={css.prepList}>
                                <li><TaskAltIcon />Follow fasting instructions carefully</li>
                                <li><TaskAltIcon />Inform us about all medications</li>
                                <li><TaskAltIcon />Arrange for someone to drive you home</li>
                                <li><TaskAltIcon />Complete pre-procedure questionnaire</li>
                            </ul>
                        </div>
                        <div className={css.prepGridBox}>
                            <h3 className={css.benefitTitle}><LooksTwoIcon className={css.benefitTitle2} />Day of the Procedure</h3>
                            <ul className={css.prepList}>
                                <li><TaskAltIcon />Rest and recover in our comfortable facility</li>
                                <li><TaskAltIcon />Receive detailed post-procedure instructions</li>
                                <li><TaskAltIcon />Schedule follow-up appointment if needed</li>
                                <li><TaskAltIcon />24/7 support for any concerns</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={css.ctaSection}>
                <div className="container">
                    <h2 className={css.ctaHeader}>Ready to Schedule Your Service?</h2>
                    <p className={css.ctaText}>
                        {`Don't wait to address your digestive health concerns. Our expert team is here to help you feel better.`}
                    </p>
                    <div className={css.ctaButtons}>
                        <button className={css.primaryButton}>Book Appointment</button>
                        <button className={css.outlineButton}>Call: +91-98765-43210</button>
                        {/* <button className="btnPrimary">
                            Book Appointment
                        </button>
                        <button className="btnOutline">
                            Call: +91-98765-43210
                        </button> */}
                    </div>
                </div>
            </section>

        </div>
    );
}