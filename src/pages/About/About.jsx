import styles from "./About.module.css";

function About() {
	return (
		<>
			{/* HERO */}
			<section className={styles.hero}>
				<h1>About FILUXE Healthcare</h1>
				<p>
					Delivering trusted pharmaceutical solutions with a commitment to
					quality, innovation, and patient well-being.
				</p>
			</section>

			{/* COMPANY OVERVIEW */}
			<section className={styles.overview}>
				<h2>Who We Are</h2>

				<p>
					FILUXE Healthcare is a growing pharmaceutical company focused on
					developing and delivering high-quality healthcare products. Our goal
					is to improve patient outcomes by ensuring safe, reliable, and
					effective medicines that meet strict quality standards.
				</p>

				<p>
					We work closely with healthcare professionals and partners to provide
					pharmaceutical solutions that are both innovative and accessible. Our
					commitment to excellence drives every step of our manufacturing and
					distribution process.
				</p>
			</section>

			{/* MISSION & VISION */}
			<section className={styles.missionVision}>
				<div className={styles.card}>
					<h3>Our Mission</h3>
					<p>
						To provide safe, effective, and affordable healthcare solutions
						while maintaining the highest quality standards.
					</p>
				</div>

				<div className={styles.card}>
					<h3>Our Vision</h3>
					<p>
						"To enhance quality of life by making effective, affordable, and
						reliable medicines accessible to all.”
					</p>
					<p>"Committed to Better Health, Trusted for Quality."</p>
				</div>
			</section>

			{/* CORE VALUES */}
			<section className={styles.values}>
				<h2>Our Core Values</h2>

				<div className={styles.valuesGrid}>
					<div className={styles.valueCard}>
						<h4>Quality</h4>
						<p>Maintaining the highest pharmaceutical standards.</p>
					</div>

					<div className={styles.valueCard}>
						<h4>Integrity</h4>
						<p>Operating with transparency and ethical practices.</p>
					</div>

					<div className={styles.valueCard}>
						<h4>Innovation</h4>
						<p>Continuous improvement through research.</p>
					</div>

					<div className={styles.valueCard}>
						<h4>Commitment</h4>
						<p>Dedicated to improving healthcare outcomes.</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default About;
