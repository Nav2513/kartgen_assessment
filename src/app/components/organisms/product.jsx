import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";


export default function Products(){

    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Button variant="link">Products</Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}