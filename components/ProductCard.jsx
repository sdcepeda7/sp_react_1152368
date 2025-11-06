import Image from "next/image";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function ProductCard({ product }) {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <div className="relative w-full aspect-square overflow-hidden rounded-t-xl">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            className="object-contain p-4"
          />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pt-4">
        <CardTitle className="line-clamp-2 text-base mb-2">
          {product.title}
        </CardTitle>
        <p className="text-muted-foreground text-sm line-clamp-2">
          {product.category}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-4">
        <span className="text-2xl font-bold">
          ${product.price.toFixed(2)}
        </span>
      </CardFooter>
    </Card>
  );
}

