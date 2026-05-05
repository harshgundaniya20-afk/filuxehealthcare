import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.jpeg";
import styles from "./Navbar.module.css";

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const navLinks = [
		{ name: "Home", path: "/" },
		{ name: "Products", path: "/products" },
		{ name: "Gallery", path: "/gallery" },
		{ name: "Quality", path: "/quality" },
		{ name: "Reviews", path: "/reviews" },
		{ name: "About Us", path: "/about" },
		{ name: "Contact Us", path: "/contact" },
	];

	return (
		<div className={styles.container}>
			<img src={Logo} alt="Logo" className={styles.logo} />

			{/* Hamburger */}
			<div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
				<div className={styles.bar}></div>
			</div>

			{/* Nav Items */}
			<div className={`${styles.navlist} ${menuOpen ? styles.active : ""}`}>
				{navLinks.map((link) => (
					<NavLink
						key={link.name}
						to={link.path}
						onClick={() => setMenuOpen(false)}
						className={({ isActive }) =>
							isActive
								? `${styles.navItem} ${styles.activeLink}`
								: styles.navItem
						}>
						{link.name}
					</NavLink>
				))}
			</div>
		</div>
	);
}

export default Navbar;
