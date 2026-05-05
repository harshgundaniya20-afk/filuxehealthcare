import { useEffect, useRef } from "react";
import styles from "./WhyChooseUs.module.css";

function WhyChooseUs() {
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					sectionRef.current.classList.add(styles.show);
				}
			},
			{ threshold: 0.2 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section className={styles.why} ref={sectionRef}>
			<h2>Why Choose Us</h2>
			<p className={styles.subtitle}>
				Delivering trust, quality, and reliability in pharmaceutical
				distribution.
			</p>

			<div className={styles.grid}>
				<div className={styles.card}>
					<div className={styles.icon}>✔</div>
					<h3>Certified & Genuine Medicines</h3>
					<p>
						All products sourced from licensed manufacturers with strict quality
						control.
					</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>🚚</div>
					<h3>Nationwide Distribution</h3>
					<p>
						Efficient logistics network ensuring timely and secure delivery.
					</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>💰</div>
					<h3>Competitive Bulk Pricing</h3>
					<p>
						Affordable wholesale pricing tailored for pharmacies and
						institutions.
					</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>📞</div>
					<h3>Dedicated B2B Support</h3>
					<p>
						Professional sales and customer support team for seamless
						operations.
					</p>
				</div>
			</div>
		</section>
	);
}

export default WhyChooseUs;
