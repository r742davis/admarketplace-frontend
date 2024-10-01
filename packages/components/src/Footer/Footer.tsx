import Link from "next/link";
import styles from "./Footer.module.scss";

export default function Footer() {
	return (
		<footer className={styles["footer"]}>
			<h2 className={styles["heading"]}>postr</h2>
			<p className={styles["subheading"]}>A project by Richie Davis.</p>
			<ul className={styles["list"]}>
				<li className={styles["list__category"]}>
					<h6>Products</h6>
					<ul className={styles["list__sublist"]}>
						<Link href='/posts'>
							<li>Posts</li>
						</Link>
						<Link href='/comments'>
							<li>Comments</li>
						</Link>
					</ul>
				</li>
				<li className={styles["list__category"]}>
					<h6>Docs</h6>
					<ul className={styles["list__sublist"]}>
						<Link href='/introduction'>
							<li>Introduction</li>
						</Link>
						<Link href='/pumpkin-spice'>
							<li>Pumpkin Spice</li>
						</Link>
					</ul>
				</li>
				<li className={styles["list__category"]}>
					<h6>Our Company</h6>
					<ul className={styles["list__sublist"]}>
						<Link href='/about'>
							<li>About</li>
						</Link>
						<Link href='/our-mission'>
							<li>Our Mission</li>
						</Link>
						<Link href='/careers'>
							<li>Join Us!</li>
						</Link>
					</ul>
				</li>
			</ul>
		</footer>
	);
}
