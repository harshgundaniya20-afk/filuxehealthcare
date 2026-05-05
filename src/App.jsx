import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Quality from "./pages/Quality/Quality";
import Products from "./pages/Products/Products";
import Reviews from "./pages/Reviews/Reviews";
import Contact from "./pages/Contact/Contact";

function App() {
	return (
		<>
			<Navbar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/gallery" element={<Gallery />} />
				<Route path="/quality" element={<Quality />} />
				<Route path="/products" element={<Products />} />
				<Route path="/reviews" element={<Reviews />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
