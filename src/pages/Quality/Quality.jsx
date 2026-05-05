import styles from "./Quality.module.css";

function Quality() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Our Quality Commitment</h1>
			<p className={styles.subtitle}>
				We ensure the highest standards in every product we deliver
			</p>

			<div className={styles.section}>
				<div className={styles.card}>
					<h3>✔ Premium Ingredients</h3>
					<p>
						We use only high-quality raw materials to ensure safety,
						effectiveness, and consistency in every product.
					</p>
				</div>

				<div className={styles.card}>
					<h3>✔ Advanced Manufacturing</h3>
					<p>
						Our products are manufactured using modern technology and strict
						quality control processes.
					</p>
				</div>

				<div className={styles.card}>
					<h3>✔ Certified Standards</h3>
					<p>
						We follow industry standards and certifications to maintain trust
						and reliability.
					</p>
				</div>

				<div className={styles.card}>
					<h3>✔ Safety & Testing</h3>
					<p>
						Every product undergoes rigorous testing to ensure it meets safety
						and quality benchmarks.
					</p>
				</div>
			</div>

			<div className={styles.bottom}>
				<h2>Why Choose Us?</h2>
				<p>
					Our commitment to quality ensures that every product we deliver meets
					the expectations of our customers and healthcare standards. We believe
					in building trust through consistency and excellence.
				</p>
			</div>
		</div>
	);
}

export default Quality;
