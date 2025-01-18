import { ProductCard } from "@/components/Product/ProductCard";
import { ProductSlider } from "@/components/Product/ProductSlider";
import { mockProducts } from "@/mocks/products";

export default function TesteCard() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Grid de Cards */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">Novidades</h2>
        <p className="text-neutral-500 mb-8">Confira nossos últimos produtos</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Versão Slider */}
      <div className="relative px-4">
        <ProductSlider
          title="Mais Vendidos"
          subtitle="Os produtos que nossos clientes mais amam"
          products={mockProducts}
        />
      </div>
    </div>
  );
}
