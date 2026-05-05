import styles from "./Gallery.module.css";

import clowfy from "../../assets/clowfy.jpeg";
import fizole from "../../assets/fizole.jpeg";
import gloX from "../../assets/glo-x.jpeg";

function Gallery() {
	const images = [
		{ src: clowfy, name: "Clowfy" },
		{ src: fizole, name: "Fizole" },
		{ src: gloX, name: "Glo-X" },
	];

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Our Products</h1>
			<p className={styles.subtitle}>A glimpse of our healthcare solutions</p>

			<div className={styles.grid}>
				{images.map((item, index) => (
					<div key={index} className={styles.card}>
						<img src={item.src} alt={item.name} />
						<div className={styles.overlay}>
							<h3>{item.name}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Gallery;
