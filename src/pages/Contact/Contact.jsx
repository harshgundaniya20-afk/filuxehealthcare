import styles from "./Contact.module.css";

function Contact() {
	const contacts = [
		{
			name: "Vijay Gundaniya",
			phone: "+91 85111 00833",
		},
		{
			name: "Kishan Dave",
			phone: "+91 95861 31549",
		},
		{
			name: "Mayank Bhatt",
			phone: "+91 99254 64834",
		},
	];

	return (
		<div className={styles.container}>
			{/* HERO */}
			<section className={styles.hero}>
				<h1>Contact Us</h1>
				<p>Connect with our team for business and support</p>
			</section>

			{/* CONTACT CARDS */}
			<div className={styles.wrapper}>
				{contacts.map((person, index) => (
					<div key={index} className={styles.card}>
						<h3>{person.name}</h3>

						<a href={`tel:${person.phone}`} className={styles.phone}>
							📞 {person.phone}
						</a>
					</div>
				))}
			</div>

			{/* EXTRA INFO */}
			<div className={styles.extra}>
				<h2>General Contact</h2>

				<p>
					✉ Email:{" "}
					<a href="mailto:filuxehealtcare2025@gmail.com">
						filuxehealtcare2025@gmail.com
					</a>
				</p>

				<p>📍 Location: Rajkot, Gujarat, India</p>
				<p>🕒 Working Hours: Mon - Sat (9:00 AM – 7:00 PM)</p>
				<p>🚚 Distribution available across Gujarat and nearby regions</p>
				<p>📦 Bulk supply for pharmacies, hospitals & institutions</p>
			</div>
		</div>
	);
}

export default Contact;
