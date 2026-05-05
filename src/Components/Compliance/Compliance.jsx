import styles from "./Compliance.module.css";

function Compliance() {
	return (
		<section className={styles.compliance}>
			<div className={styles.container}>
				<h2>Compliance & Certifications</h2>
				<p className={styles.subtitle}>
					We operate under strict regulatory standards ensuring safety, quality,
					and authenticity in pharmaceutical distribution.
				</p>

				<div className={styles.grid}>
					<div className={styles.card}>
						<div className={styles.icon}>📜</div>
						<h3>Drug License</h3>
						<p>Licensed pharmaceutical wholesaler under state regulations.</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>🧾</div>
						<h3>GST Registered</h3>
						<p>Fully compliant with national taxation policies.</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>🏥</div>
						<h3>WHO-GMP Standards</h3>
						<p>Products sourced from certified and approved manufacturers.</p>
					</div>

					<div className={styles.card}>
						<div className={styles.icon}>🔒</div>
						<h3>Quality Assurance</h3>
						<p>Strict quality control and safe distribution practices.</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Compliance;
