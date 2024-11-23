import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { User } from "lucide-react";

const Header = () => {
    return ( 
        <Card>
            <CardContent>
                <div className="items-center content-center flex justify-between">
                    <Image alt="logo" src="/next.svg" width={120} height={18}/>
                    <Button>
                        <User /> Login 
                    </Button>
                </div>
            </CardContent>
        </Card>
     );
}
 
export default Header;