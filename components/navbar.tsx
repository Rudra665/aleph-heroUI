"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import clsx from "clsx";
import { link as linkStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import { useModalStore } from "@/store/modalStore";
import { useState } from "react";

export const Navbar = () => {
  const openModal = useModalStore((s: any) => s.openModal);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <HeroUINavbar
        maxWidth="xl"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
        className="fixed top-0 z-50 bg-background/80 backdrop-blur-lg py-6 shadow-md">
        {/* Left: Logo */}
        <NavbarContent className="basis-1/5" justify="start">
          <NavbarBrand as="li" className="gap-3 max-w-fit ">
            <NextLink
              href="/"
              className="flex justify-start items-center gap-1 py-2">
              <Logo width={150} height={150} />
            </NextLink>
          </NavbarBrand>
        </NavbarContent>

        {/* Right: NavItems + Book Demo (desktop only) */}
        <NavbarContent className="hidden lg:flex gap-6" justify="end">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                href={item.href}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium hover:text-red-500"
                )}>
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}

          <NavbarItem>
            <Button
              onPress={openModal}
              className="bg-red-600 text-white px-6"
              radius="md">
              Book Demo
            </Button>
          </NavbarItem>

          <NavbarItem>
            <ThemeSwitch />
          </NavbarItem>
        </NavbarContent>

        {/* Mobile: Theme + Hamburger */}
        <NavbarContent className="flex lg:hidden" justify="end">
          <ThemeSwitch />
          <NavbarMenuToggle />
        </NavbarContent>

        {/* Mobile Menu Items */}
        <NavbarMenu>
          <div className="mt-24 flex flex-col gap-4">
            {siteConfig.navItems.map((item) => (
              <NavbarMenuItem key={item.href}>
                <NextLink
                  href={item.href}
                  className="text-lg text-foreground"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            ))}
            <NavbarMenuItem>
              <Button
                onPress={() => {
                  setIsMenuOpen(false);
                  openModal();
                }}
                className="text-white w-full bg-red-500">
                Book Demo
              </Button>
            </NavbarMenuItem>
          </div>
        </NavbarMenu>
      </HeroUINavbar>
    </>
  );
};
