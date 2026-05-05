import styles from "./Categories.module.css";

function Categories() {
	return (
		<section className={styles.categories}>
			<h2>Our Product Categories</h2>
			<p className={styles.subtitle}>
				Supplying a wide range of certified pharmaceutical and healthcare
				products.
			</p>

			<div className={styles.grid}>
				<div className={styles.card}>
					<div className={styles.icon}>💊</div>
					<h3>Tablets</h3>
					<p>High-quality bulk tablet supply for pharmacies & hospitals.</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>🧴</div>
					<h3>Syrups</h3>
					<p>Wide range of therapeutic and pediatric syrups.</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>💉</div>
					<h3>Injections</h3>
					<p>Certified injectable medicines for medical institutions.</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>🩺</div>
					<h3>Surgical Supplies</h3>
					<p>Essential surgical and hospital-use products.</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>📦</div>
					<h3>Medical Devices</h3>
					<p>Reliable medical equipment and healthcare tools.</p>
				</div>

				<div className={styles.card}>
					<div className={styles.icon}>🧪</div>
					<h3>Capsules</h3>
					<p>Bulk capsule distribution with assured quality control.</p>
				</div>
			</div>
		</section>
	);
}

export default Categories;
