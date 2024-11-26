import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const Popular = () => {
    return ( 
        <div className="p-10 flex flex-col items-center">
        <><h1 className="text-xl font-bold">Populares</h1>
        <Carousel className="w-5/6 p-4">
  <CarouselContent>
    {Array.from({ length: 6 }).map((_, index) => (
      <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
        <div className="p-1">
          <Card>
            <CardContent className="flex flex-col items-start p-4 space-y-4">
              {/* Imagem */}
              <div className="w-full">
                <img
                  src={`/image-${index + 1}.jpg`} // Substitua pelo caminho da imagem real
                  alt={`Image ${index + 1}`}
                  className="w-full h-40 object-cover rounded-md"
                />
              </div>
              {/* Título */}
              <h2 className="text-lg font-semibold">Título {index + 1}</h2>
              {/* Endereço */}
              <p className="text-sm text-gray-500">
                Endereço do Item {index + 1}, Rua XYZ, Cidade
              </p>
              {/* Botão */}
              <Button variant="bord">
                Ver mais
              </Button>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel></>
        </div>
     );
}
 
export default Popular;