
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { User } from "lucide-react";

const Header = () => {
    return (
        <Card>
            <CardContent>
                <div className="container mx-auto flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                    {/* Substituindo a imagem por texto estilizado */}
                    <div className="text-xl font-semibold">
          <span className="text-teal-400">My</span>Service
        </div>
                    <Button>
                        <User /> Login
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

 
export default Header;