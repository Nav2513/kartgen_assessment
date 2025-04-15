import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";


export default function Home(){

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button variant="link">Home</Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}