import styles from "./Reviews.module.css";

function Reviews() {
	const reviews = [
		{
			name: "Dr. Rajesh Mehta",
			role: "Dermatologist",
			rating: 5,
			text: "Fizole (Sertaconazole Nitrate) has shown consistent results in fungal infections with minimal side effects.",
		},
		{
			name: "Dr. Priya Shah",
			role: "General Physician",
			rating: 4,
			text: "Glo-X combination therapy has been effective in managing acne cases in my clinical practice.",
		},
		{
			name: "Dr. Amit Patel",
			role: "Skin Specialist",
			rating: 5,
			text: "Clowfy (Clobetasol Propionate) delivers reliable therapeutic outcomes when used appropriately.",
		},
		{
			name: "Rakesh Kumar",
			role: "Pharmacist",
			rating: 4,
			text: "Products are well accepted by customers and prescriptions for dermatology range are increasing.",
		},
		{
			name: "Dr. Neha Joshi",
			role: "Cosmetologist",
			rating: 5,
			text: "The formulations align well with current dermatological treatment protocols.",
		},
		{
			name: "Dr. Karan Patel",
			role: "Consultant Physician",
			rating: 4,
			text: "Consistent quality and effective compositions make these products reliable in clinical use.",
		},
		{
			name: "Anita Sharma",
			role: "Pharmacy Owner",
			rating: 4,
			text: "Customer feedback has been positive, especially for antifungal and skin care products.",
		},
		{
			name: "Dr. Vivek Desai",
			role: "Dermatologist",
			rating: 5,
			text: "Therapeutic response and tolerability of products have been satisfactory in most cases.",
		},
	];

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Reviews & Feedback</h1>
			<p className={styles.subtitle}>Trusted by healthcare professionals</p>

			<div className={styles.grid}>
				{reviews.map((rev, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.top}>
							<h3>{rev.name}</h3>
							<span>{rev.role}</span>
						</div>

						<div className={styles.stars}>
							{"★".repeat(rev.rating)}
							{"☆".repeat(5 - rev.rating)}
						</div>

						<p className={styles.text}>{rev.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default Reviews;
