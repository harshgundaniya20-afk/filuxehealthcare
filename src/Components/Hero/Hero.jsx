import styles from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

function Hero() {
	const navigate = useNavigate();

	return (
		<section className={styles.hero}>
			<div className={styles.content}>
				<h1>
					Trusted Pharmaceutical <span>Company</span>
				</h1>

				<p>
					Delivering certified medicines and healthcare products to pharmacies,
					hospitals, and institutions across Gujarat.
				</p>

				<div className={styles.points}>
					<div>✔ WHO-GMP Certified</div>
					<div>✔ 500+ Product Portfolio</div>
					<div>✔ Fast Nationwide Distribution</div>
					<div>✔ Dedicated B2B Support</div>
				</div>

				<div className={styles.buttons}>
					<button
						className={styles.primaryBtn}
						onClick={() => navigate("/products")}>
						View Products
					</button>

					<button
						className={styles.secondaryBtn}
						onClick={() => navigate("/contact")}>
						Request a Quote
					</button>
				</div>
			</div>
		</section>
	);
}

export default Hero;
