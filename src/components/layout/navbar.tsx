"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { cn } from "@/lib/utils";

// ---------------------------------------------
// Data
// ---------------------------------------------

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ---------------------------------------------
// Helpers
// ---------------------------------------------

function isRouteActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

// ---------------------------------------------
// Brand Logo
// ---------------------------------------------

function BrandLogo() {
  const [logoFailed, setLogoFailed] = useState(false);

  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Zoheer Saad — Home">
      {!logoFailed ? (
        <Image
          src="/MyLogo.png"
          alt="Zoheer Saad logo"
          width={60}
          height={40}
          className="rounded-xl"
          priority
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-sm font-bold text-primary-foreground shadow-sm">
          Z
        </div>
      )}

      <div className="flex flex-col leading-tight">
        <span className="text-base font-semibold tracking-tight text-foreground">
          Zoheer Saad
        </span>
        <span className="hidden text-xs text-muted-foreground sm:block">
          Fullstack Systems
        </span>
      </div>
    </Link>
  );
}

// ---------------------------------------------
// Availability Badge
// ---------------------------------------------

function AvailabilityBadge() {
  return (
    <div className="hidden items-center gap-2 rounded-full border border-border bg-background/50 px-3 py-1.5 lg:flex">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
      </span>
      <span className="text-xs font-medium text-muted-foreground">
        Available for work
      </span>
    </div>
  );
}

// ---------------------------------------------
// Desktop Nav Link
// ---------------------------------------------

function NavLink({
  href,
  label,
  isActive,
  onClick,
}: {
  href: string;
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        isActive
          ? "bg-primary/10 text-primary"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      {label}
    </Link>
  );
}

// ---------------------------------------------
// Mobile Menu
// ---------------------------------------------

function MobileMenu({
  isOpen,
  pathname,
  onLinkClick,
}: {
  isOpen: boolean;
  pathname: string;
  onLinkClick: () => void;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-col gap-1 px-6 py-4"
          >
            {navItems.map((item) => {
              const active = isRouteActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onLinkClick}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-xs font-medium text-muted-foreground">
                Available for work
              </span>
            </div>

            <Button asChild className="mt-3 w-full rounded-full">
              <Link href="/contact" onClick={onLinkClick}>
                Hire Me
              </Link>
            </Button>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ---------------------------------------------
// Navbar
// ---------------------------------------------

export function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <BrandLogo />

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              label={item.label}
              isActive={isRouteActive(pathname, item.href)}
            />
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <AvailabilityBadge />
          <ModeToggle />

          <Button asChild className="hidden rounded-full px-5 md:inline-flex">
            <Link href="/contact">Hire Me</Link>
          </Button>

          <button
            type="button"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <MobileMenu
        isOpen={isMobileOpen}
        pathname={pathname}
        onLinkClick={closeMobileMenu}
      />
    </header>
  );
}
