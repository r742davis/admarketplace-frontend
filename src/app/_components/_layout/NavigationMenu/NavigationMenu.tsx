import { forwardRef } from "react";
import Link from "next/link";
import cn from "classnames";
import * as Nav from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import styles from "./NavigationMenu.module.scss";

export default function NavigationMenu() {
	return (
		<Nav.Root className={styles["root"]}>
			<Nav.List className={styles["menu-list"]}>
				<Nav.Item>
					<Nav.Trigger className={styles["trigger"]}>
						Get Started <CaretDownIcon className={styles["caret-down"]} aria-hidden />
					</Nav.Trigger>
					<Nav.Content className={styles["content"]}>
						<ul className={`${styles["list"]} one`}>
							<li>
								<Nav.Link asChild>
									<a className={styles["callout"]} href='/'>
										<svg aria-hidden width='38' height='38' viewBox='0 0 25 25' fill='white'>
											<path d='M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z'></path>
											<path d='M12 0H4V8H12V0Z'></path>
											<path d='M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z'></path>
										</svg>
										<div className={styles["callout-heading"]}>Postr</div>
										<p className={styles["callout-text"]}>Get posting</p>
									</a>
								</Nav.Link>
							</li>

							<ListItem href='/create' title='Create'>
								Create Posts using a best-in-class user experience.
							</ListItem>
							<ListItem href='/posts' title='Post'>
								Beautiful, thought-out designs that focus on your content.
							</ListItem>
							<ListItem href='/posts/1' title='Read'>
								Read excellent and engaging content created by the community.
							</ListItem>
						</ul>
					</Nav.Content>
				</Nav.Item>

				<Nav.Item>
					<Nav.Trigger className={styles["trigger"]}>
						Overview <CaretDownIcon className={styles["caret-down"]} aria-hidden />
					</Nav.Trigger>
					<Nav.Content className={styles["content"]}>
						<ul className={`${styles["list"]} two`}>
							<ListItem title='Introduction' href='/introduction'>
								Build high-quality, accessible design systems and web apps.
							</ListItem>
							<ListItem title='Getting started' href='/getting-started'>
								A quick tutorial to get you up and creating with Postr.
							</ListItem>
							<ListItem title='Themes' href='/themes'>
								Exquisite themes compatible with any design solution.
							</ListItem>
							<ListItem title='Animation' href='/animations'>
								Use silky smooth animations to bring your Post to life.
							</ListItem>
							<ListItem title='Generative AI' href='/ai'>
								Quickly build out Posts in your voice using our robust Gen AI tech.
							</ListItem>
							<ListItem title='New' href='/new'>
								See what Postr has planned for the future.
							</ListItem>
						</ul>
					</Nav.Content>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link className={styles["link"]} href='/about'>
						Our Company
					</Nav.Link>
				</Nav.Item>

				<Nav.Indicator className={styles["indicator"]}>
					<div className={styles["arrow"]} />
				</Nav.Indicator>
			</Nav.List>

			<div className={styles["viewport-position"]}>
				<Nav.Viewport className={styles["viewport"]} />
			</div>
		</Nav.Root>
	);
}

type ListItemProps = {
	href: Pick<Nav.NavigationMenuLinkProps, "href">;
} & Nav.NavigationMenuLinkProps;

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
	({ className, children, title, href, ...props }, forwardedRef) => (
		<li>
			<Nav.Link asChild ref={forwardedRef} {...props}>
				<Link href={href} className={cn(styles["listitem-link"], className)}>
					<div className={styles["listitem-heading"]}>{title}</div>
					<p className={styles["listitem-text"]}>{children}</p>
				</Link>
			</Nav.Link>
		</li>
	)
);

ListItem.displayName = "ListItem";
