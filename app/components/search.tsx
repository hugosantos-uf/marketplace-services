import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  return ( 
      <section className="h-[300px] bg-customColor">
          <div className="p-10 flex flex-col items-center gap-5">
              {/* Título com texto branco */}
              <h1 className="text-3xl font-bold text-white">
                  Procure o serviço ideal para você
              </h1>

              {/* Input com fundo transparente e placeholder branco */}
              <div className="w-1/2 flex gap-3">
                  <Input 
                      placeholder="O que você procura?" 
                      className="bg-transparent text-white placeholder-white border-white focus:ring-0 focus:border-white"
                  />
                  <Button><SearchIcon /></Button>
              </div>

              {/* Botões para categorias */}
              <div className="w-1/2 flex gap-3 items-center justify-center">
                  <Button variant="outline">Barbearias</Button>
                  <Button variant="outline">Eletricistas</Button>
                  <Button variant="outline">Jardinagem</Button>
                  <Button variant="outline">Serviços Domésticos</Button>
              </div>
          </div>
      </section>
  );
};

export default Search;
