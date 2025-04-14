"use client"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Left - Logo */}
        <div className="text-xl font-bold text-primary">KartGen</div>

        {/* Right - Nav and CTA */}
        <div className="flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList className="space-x-4">
              <NavigationMenuItem>
                <Button variant="link">Home</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">Products</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">About</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="link">Contact</Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  )
}
