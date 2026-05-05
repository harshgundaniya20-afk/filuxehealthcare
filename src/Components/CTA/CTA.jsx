import styles from "./CTA.module.css";
import { useNavigate } from "react-router-dom";

function CTA() {
	const navigate = useNavigate();
	return (
		<section className={styles.cta}>
			<div className={styles.container}>
				<h2>Looking for a Reliable Pharmaceutical Wholesale Partner?</h2>
				<p>
					Partner with us for certified medicines, competitive bulk pricing, and
					a trusted nationwide distribution network.
				</p>
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

export default CTA;
