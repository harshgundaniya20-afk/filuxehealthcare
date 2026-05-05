import { useState } from "react";
import styles from "./Products.module.css";
import productsData from "./productsData";

function Products() {
	const categories = Object.keys(productsData);

	// ✅ Default = All Products
	const [activeCategory, setActiveCategory] = useState("all");

	// ✅ Filter Logic
	const products =
		activeCategory === "all"
			? categories.flatMap((cat) => productsData[cat])
			: productsData[activeCategory];

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Our Products</h1>

			<p className={styles.subtitle}>
				High quality pharmaceutical compositions crafted for modern healthcare
				solutions
			</p>

			{/* FILTER BAR */}
			<div className={styles.filterBar}>
				<div className={styles.dropdownWrapper}>
					<select
						className={styles.dropdown}
						value={activeCategory}
						onChange={(e) => setActiveCategory(e.target.value)}>
						<option value="all">All Products</option>

						{categories.map((cat) => (
							<option key={cat} value={cat}>
								{cat.toUpperCase()}
							</option>
						))}
					</select>

					<span className={styles.dropdownIcon}>⌄</span>
				</div>
			</div>

			{/* PRODUCTS GRID */}
			<div className={styles.grid}>
				{products.length > 0 ? (
					products.map((product, index) => (
						<div key={index} className={styles.card}>
							<img src={product.image} alt={product.name} />

							<div className={styles.overlay}>
								<h3>{product.name}</h3>
							</div>
						</div>
					))
				) : (
					<p className={styles.coming}>Coming Soon 🚀</p>
				)}
			</div>
		</div>
	);
}

export default Products;
