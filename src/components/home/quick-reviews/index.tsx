import { useFonts } from "@/hooks/useFonts";
import css from  "./index.module.css";

export const QuickReview = () => {
          const { montserrat,
            robotoBold,
            roboto,
            zillaSlab } = useFonts();
            
    return (
        <section className={css.testimonialSection}>
            <div className={css.testimonialContainer}>
                <div className={css.testimonialHeader}>
                    <h2 className={montserrat.className}>What Our Patients Say</h2>
                    <p className={roboto.className}>Real experiences from successful treatments</p>
                </div>

                <div className={css.testimonialGrid}>
                    <div className={css.testimonialCard}>
                        <div className={css.stars}>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>"Dr. Jindal's expertise in transplant hepatology gave me hope. His thorough evaluation and care plan were exceptional."</p>
                        <div className={css.name}>Rajesh Kumar</div>
                    </div>
                    <div className={css.testimonialCard}>
                        <div className={css.stars}>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>"The advanced EUS procedure was performed flawlessly. Dr. Jindal's skill and precision are remarkable."</p>
                        <div className={css.name}>Priya Sharma</div>
                    </div>
                    <div className={css.testimonialCard}>
                        <div className={css.stars}>
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        <p>"Complex ERCP procedure handled with expertise. Recovery was smooth and results were excellent."</p>
                        <div className={`${roboto.className} ${css.name}`}>Amit Singh</div>
                    </div>
                </div>

                <div className={css.testimonialButton}>
                    <a href="/testimonials">
                        <button>Read More Success Stories</button>
                    </a>
                </div>
            </div>
        </section>
    )
}