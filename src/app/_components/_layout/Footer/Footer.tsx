import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles["footer"]}>
			<p>Footer</p>
			<p>A project by Richie Davis.</p>
			<ul>
				<li>
					<h6>Products</h6>
					<ul>
						<li>Posts</li>
						<li>Comments</li>
					</ul>
				</li>
				<li>
					<h6>Docs</h6>
					<ul>
						<li>Introduction</li>
						<li>Pumpkin Spice</li>
					</ul>
				</li>
				<li>
					<h6>Our Company</h6>
					<ul>
						<li>About</li>
						<li>Our Mission</li>
						<li>Join Us!</li>
					</ul>
				</li>
			</ul>
		</footer>
	);
}
