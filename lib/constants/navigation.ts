export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Activities", href: "/activities" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];
