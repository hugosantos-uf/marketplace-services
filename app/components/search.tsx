import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
    return ( 
        <section
        className="h-[300px] bg-cover "
        style={{ backgroundImage: "url('/fundosearch.png')" }}
      >
    <div className="p-10 flex flex-col items-center gap-5 ">

      <h1 className="text-3xl font-bold">Procure o serviço ideal para você</h1>
        <div className="w-1/2 flex gap-3">
          <Input placeholder="O que você procura?" />
          <Button><SearchIcon/></Button>
        </div>

    </div>
    </section>
     );
}
 
export default Search;