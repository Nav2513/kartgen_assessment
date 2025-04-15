import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";


export default function Contact(){

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button variant="link">Contact us</Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}