"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from "./mode-toggle";

const navItems = [
  {
    title: "Home",
    href: "/",
    description: "Landing page and introduction to my portfolio.",
  }, 
  // {
  //   title: "Skills",
  //   href: "/skills",
  //   description: "",
  // },
  {
    title: "Projects",
    href: "#projects",
    description: "Showcasing my projects and work experience.",
  },
  {
    title: "Contact",
    href: "#contact",
    description: "Get in touch with me for potential collaborations.",
  },
];

export function Navbar() {
  return (
    <div className="w-full md:w-3/5 flex justify-between border-r border-l p-3">
      <div className="md:w-1/4 flex justify-end  pr-4"  >
        <ModeToggle />
      </div>
      <div className='w-full  flex-1'>

        <NavigationMenu className=' '>
          <NavigationMenuList className='gap-2'>
            {navItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <Link href={item.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {/* <NavigationMenu className=' '>
        <NavigationMenuList className='gap-2'>
          {navItems.map((item, index) => (
            <NavigationMenuItem key={index}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu> */}
    </div>
  );
}

