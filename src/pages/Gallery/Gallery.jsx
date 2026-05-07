import styles from "./Gallery.module.css";

import img1 from "../../assets/gallary/img1.jpeg";
import img2 from "../../assets/gallary/img2.jpeg";
import img3 from "../../assets/gallary/img3.jpeg";

function Gallery() {
	const images = [
		{ src: img1, name: "Clowfy" },
		{ src: img2, name: "Fizole" },
		{ src: img3, name: "Glo-X" },
	];

	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{images.map((item, index) => (
					<div key={index} className={styles.card}>
						<img src={item.src} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Gallery;
