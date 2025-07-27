import GroupIcon from '@mui/icons-material/Group';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styles from './page.module.css';
import { Button, Card, CardContent, Pagination } from '@mui/material';
import { Star } from '@mui/icons-material';

export default function Testimonials() {
  const stats = [
    { number: "5000+", label: "Happy Patients", icon: <GroupIcon /> },
    { number: "98%", label: "Success Rate", icon: <MilitaryTechIcon /> },
    { number: "4.9/5", label: "Average Rating", icon: <StarIcon /> },
    { number: "15+", label: "Years Experience", icon: <FavoriteIcon /> },
  ];

  const reviews = [
    {
      name: "Rajesh Kumar",
      avatar: "RK",
      rating: 5,
      date: "2 weeks ago",
      review:
        "Excellent treatment by Dr. Vikas Jindal. His expertise in liver diseases is remarkable. The ERCP procedure was performed flawlessly and recovery was smooth. Highly recommend for any gastroenterology issues.",
      verified: true,
      googleProfile: "Local Guide • 127 reviews",
    },
    {
      name: "Priya Sharma",
      avatar: "PS",
      rating: 5,
      date: "1 month ago",
      review:
        "Dr. Jindal is an exceptional gastroenterologist. His approach is very patient-friendly and he explains everything clearly. The endoscopy procedure was comfortable and results were accurate.",
      verified: true,
      googleProfile: "45 reviews",
    },
    {
      name: "Amit Singh",
      avatar: "AS",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Outstanding experience with Dr. Vikas Jindal. His knowledge in hepatology is impressive. The treatment plan for my liver condition was comprehensive and effective. Thank you doctor!",
      verified: true,
      googleProfile: "Local Guide • 89 reviews",
    },
    {
      name: "Sunita Gupta",
      avatar: "SG",
      rating: 5,
      date: "1 week ago",
      review:
        "Best gastroenterologist in Delhi! Dr. Jindal's treatment for my GERD was very effective. His clinic is well-equipped and staff is professional. Completely satisfied with the care received.",
      verified: true,
      googleProfile: "23 reviews",
    },
    {
      name: "Vikram Mehta",
      avatar: "VM",
      rating: 5,
      date: "2 months ago",
      review:
        "Dr. Jindal performed my colonoscopy with great skill. The procedure was painless and he found and removed polyps that could have been problematic. Excellent preventive care approach.",
      verified: true,
      googleProfile: "Local Guide • 156 reviews",
    },
    {
      name: "Meera Jain",
      avatar: "MJ",
      rating: 5,
      date: "3 weeks ago",
      review:
        "Highly skilled doctor with modern equipment. Dr. Jindal's treatment for my IBD has been life-changing. His personalized approach and follow-up care is exceptional. Strongly recommended!",
      verified: true,
      googleProfile: "67 reviews",
    },
  ]

  return (
    <div className={styles.wrapper}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>What Our Patients Say</h1>
            <p className={styles.description}>
              Real stories from real patients who have experienced exceptional care and successful treatment outcomes.
              Your health and satisfaction are our top priorities.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                  <div className={styles.statIcon}>{stat.icon}</div>
                  <div className={styles.statNumber}>{stat.number}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <span className={styles.googleInitial}>G</span>
          </div>
          <h2 className={styles.reviewTitle}>Google Business Reviews</h2>
        </div>
        <p className={styles.subtext}>Verified reviews from our Google Business profile</p>

        <div className={styles.summaryCard}>
          <div className={styles.ratingBlock}>
            <div className={styles.ratingValue}>4.9</div>
            <div className={styles.stars}>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={styles.starIcon} />
              ))}
            </div>
            <div className={styles.summaryLabel}>Google Rating</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryNumber}>500+</div>
            <div className={styles.summaryLabel}>Total Reviews</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.summaryItem}>
            <div className={styles.summaryNumber}>98%</div>
            <div className={styles.summaryLabel}>5-Star Reviews</div>
          </div>
        </div>

        <div className={styles.grid}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.reviewCard}>
              <div className={styles.cardContent}>
                <div className={styles.reviewHeader}>
                  <div className={styles.reviewerInfo}>
                    <div className={styles.avatar}>{review.avatar}</div>
                    <div>
                      <div className={styles.reviewerDetails}>{review.googleProfile}</div>
                    </div>
                  </div>
                  <div className={styles.reviewDate}>
                    <div className={styles.googleLogoSmall}>G</div>
                    {review.date}
                  </div>
                </div>

                <div className={styles.ratingRow}>
                  <div className={styles.starGroup}>
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className={styles.starIconSmall} />
                    ))}
                  </div>
                  <span className={styles.reviewDateSmall}>{review.date}</span>
                </div>

                <p className={styles.reviewText}>"{review.review}"</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination count={10} color="primary" />
        </div>

        <div className={styles.ctaCard}>
          <div className={styles.ctaHeader}>
            <div className={styles.ctaLogo}>G</div>
            <div className={styles.ctaInfo}>
              <h3 className={styles.ctaTitle}>Dr. Vikas Jindal - Gastroenterologist</h3>
              <div className={styles.ctaStars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={styles.starIconSmall} />
                ))}
                <span className={styles.reviewCount}>4.9 • 500+ Google reviews</span>
              </div>
            </div>
          </div>
          <p className={styles.ctaText}>
            Read more reviews and find our location, hours, and contact information on our Google Business profile.
          </p>
          <div className={styles.ctaButtons}>
            <Button className={styles.ctaPrimary}>
              <span className="mr-2">📍</span>View on Google Maps
            </Button>
            <Button variant="outlined" className={styles.ctaSecondary}>
              <span className="mr-2">✍️</span>Write a Review
            </Button>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}