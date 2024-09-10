"use client";

import { useState, useRef, useEffect } from "react";
import cn from "classnames";
import { NavigationMenu } from "@/components";
import { SCROLL_DEBOUNCE_DELAY } from "@/lib";
import styles from "./Header.module.scss";

export default function Header() {
	const [isScrolled, setIsScrolled] = useState(false);
	const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (scrollTimeout.current) {
				clearTimeout(scrollTimeout.current);
			}

			scrollTimeout.current = setTimeout(() => {
				const scrollPosition = window.scrollY;
				setIsScrolled(scrollPosition > 50);
			}, SCROLL_DEBOUNCE_DELAY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (scrollTimeout.current) {
				clearTimeout(scrollTimeout.current);
			}
		};
	}, []);

	return (
		<header
			className={cn(styles["header"], {
				[styles["is-scrolled"]]: isScrolled,
			})}>
			<h1>postr</h1>
			<NavigationMenu />
		</header>
	);
}
