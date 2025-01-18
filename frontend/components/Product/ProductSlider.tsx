"use client";

import { Product } from "@/types/product";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { ProductCard } from "./ProductCard";

interface ProductSliderProps {
  title: string;
  subtitle?: string;
  products: Product[];
}

export function ProductSlider({ title, subtitle, products }: ProductSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    if (!containerRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    if (!containerRef.current) return;

    const scrollAmount = 280 + 24; // card width + gap
    const currentScroll = containerRef.current.scrollLeft;
    const newScroll = direction === "left" 
      ? currentScroll - scrollAmount 
      : currentScroll + scrollAmount;

    containerRef.current.scrollTo({
      left: newScroll,
      behavior: "smooth"
    });

    // Pequeno delay para atualizar os botões após a animação
    setTimeout(checkScroll, 300);
  }, [checkScroll]);

  return (
    <div className="relative">
      {/* Cabeçalho */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-neutral-900">{title}</h2>
        {subtitle && <p className="text-neutral-500">{subtitle}</p>}
      </div>

      {/* Botões de Navegação */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-5 top-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-neutral-50 transition-all hover:scale-105"
          aria-label="Produtos anteriores"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-5 top-1/2 z-10 p-3 rounded-full bg-white shadow-lg hover:bg-neutral-50 transition-all hover:scale-105"
          aria-label="Próximos produtos"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Container do Slider */}
      <div 
        className="overflow-x-auto scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        ref={containerRef}
        onScroll={checkScroll}
      >
        <div 
          className="flex gap-6 pb-4" 
          style={{ width: "max-content" }}
        >
          {products.map((product) => (
            <div key={product.id} className="w-[280px] flex-shrink-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
