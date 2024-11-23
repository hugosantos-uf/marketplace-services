
import { SearchIcon } from "lucide-react";
import Header from "./components/header";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";

const Home = () => {
  return ( 
    <><Header />
    <div className="p-10 flex flex-col items-center gap-5">
      <h1 className="text-3xl font-bold">Procure o serviço ideal para você</h1>
        <div className="w-1/2 flex gap-3">
          <Input placeholder="O que você procura?" />
          <Button><SearchIcon/></Button>
        </div>
    </div></>

   );
}
 
export default Home;
