import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";


export default function About(){

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button variant="link">About us</Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}