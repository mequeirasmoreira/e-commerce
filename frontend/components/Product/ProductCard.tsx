"use client";

import { Product } from "@/types/product";
import { Heart, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(product.isFavorite);
  const [isHovered, setIsHovered] = useState(false);

  const variant = product.variants[0]; // Por enquanto usando apenas a primeira variante
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const lowStock = variant.sizes.some(size => size.stock > 0 && size.stock <= 3);
  const availableSizes = variant.sizes.filter(size => size.stock > 0);

  return (
    <div
      className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tags e Badges */}
      <div className="absolute top-3 left-3 z-10">
        {discount > 0 ? (
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-red-500 opacity-90 blur-[2px]"></div>
            <span className="relative bg-red-500 text-white px-3 py-1.5 text-sm font-medium rounded-sm">
              {discount}% OFF
            </span>
          </div>
        ) : product.isNew ? (
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-emerald-500 opacity-90 blur-[2px]"></div>
            <span className="relative bg-emerald-500 text-white px-3 py-1.5 text-sm font-medium rounded-sm">
              Novo
            </span>
          </div>
        ) : lowStock ? (
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-amber-500 opacity-90 blur-[2px]"></div>
            <span className="relative bg-amber-500 text-white px-3 py-1.5 text-sm font-medium rounded-sm">
              Últimas peças
            </span>
          </div>
        ) : null}
      </div>

      {/* Botão Favoritar */}
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
      >
        <Heart
          className={`w-5 h-5 ${
            isFavorite ? "fill-red-500 text-red-500" : "text-neutral-400"
          }`}
        />
      </button>

      {/* Container da Imagem */}
      <div 
        className="relative aspect-[3/4] bg-neutral-50"
        onMouseEnter={() => {
          const nextIndex = (currentImageIndex + 1) % variant.images.length;
          setCurrentImageIndex(nextIndex);
        }}
        onMouseLeave={() => setCurrentImageIndex(0)}
      >
        <Image
          src={`/${variant.images[currentImageIndex]}`}
          alt={`${product.name} - ${variant.color}`}
          fill
          className="object-cover transition-all duration-300"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          priority
        />
        
        {/* Miniaturas */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {variant.images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all hover:scale-150 ${
                currentImageIndex === index 
                  ? "bg-black scale-150" 
                  : "bg-white/70 hover:bg-white"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="p-4">
        {/* Brand */}
        <p className="text-sm text-neutral-500 mb-1">{product.brand}</p>
        
        {/* Nome */}
        <h3 className="font-medium text-neutral-900 mb-2">{product.name}</h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-neutral-600">
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>

        {/* Preços */}
        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-lg font-medium">
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-neutral-400 line-through">
              {product.originalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          )}
        </div>

        {/* Tamanhos */}
        <div className="flex flex-wrap gap-1 mb-4">
          {availableSizes.map(({ size }) => (
            <span
              key={size}
              className="px-2 py-1 text-xs border border-neutral-200 rounded"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Botão Adicionar ao Carrinho */}
        <button 
          className={`w-full bg-black text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <ShoppingCart className="w-4 h-4" />
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
}
