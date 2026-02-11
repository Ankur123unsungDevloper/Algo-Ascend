import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Navbar() {
  return (
    <div className="w-full border-b border-gray-800">
      <div className="grid grid-cols-3">
        <img src="../src/assets/logo.png" alt="Logo" className="h-20 w-20 flex ml-12" />
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Schools & Institutions</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Students</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Gallery</NavigationMenuTrigger>
              <NavigationMenuContent>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button
          variant="ghost"
          size="lg"
          className="bg-[#3B82F6] text-white font-medium hover:bg-[#2563EB] hover:text-white self-center justify-self-end mr-12">
          Login
        </Button>
      </div>
    </div>
  )
}