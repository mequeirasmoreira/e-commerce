import { BannerSlider } from "@/components/Banner/BannerSlider";
import { mockBanners } from "@/mocks/banners";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Banner ocupa largura total */}
        <BannerSlider banners={mockBanners} />

        {/* Conteúdo principal com padding */}
        <div className="w-full max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8"></div>
      </main>
    </div>
  );
}
