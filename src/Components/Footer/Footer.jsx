import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{/* LEFT - BRAND */}
				<div className={styles.brand}>
					<h2>FILUXE HEALTHCARE</h2>
					<p>
						Trusted pharmaceutical distributor providing high-quality, certified
						healthcare products across India.
					</p>
				</div>

				{/* MIDDLE - LINKS */}
				<div className={styles.links}>
					<h3>Quick Links</h3>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/products">Products</Link>
						</li>
						<li>
							<Link to="/quality">Quality</Link>
						</li>
						<li>
							<Link to="/gallery">Gallery</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</ul>
				</div>

				{/* RIGHT - CONTACT */}
				<div className={styles.contact}>
					<h3>Contact</h3>
					<p>📍 Rajkot, Gujarat, India</p>
					<p>
						📞 <a>+91 95861 31549</a>
					</p>
					<p>
						📞 <a>+91 99254 64834</a>
					</p>
					<p>
						✉{" "}
						<a href="mailto:filuxehealtcare2025@gmail.com">
							filuxehealtcare2025@gmail.com
						</a>
					</p>

					<div className={styles.actions}>
						<a href="tel:+919586131549">Call</a>
					</div>
				</div>
			</div>

			{/* BOTTOM */}
			<div className={styles.bottom}>
				<p>© 2025 Filuxe Healthcare. All Rights Reserved.</p>
				<p className={styles.note}>
					Supplying medicines only to licensed pharmacies & institutions.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
