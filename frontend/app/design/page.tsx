import React from 'react';
import { ColorPalette } from '@/components/Styles/ColorPalette';
import { Typography } from '@/components/Styles/Typography';
import { UIComponents } from '@/components/Styles/UIComponents';

export default function DesignSystem() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      {/* Hero Section com gradiente e overlay */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        <div className="relative py-32 lg:py-40">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-primary text-7xl md:text-8xl lg:text-9xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white">
                Sou Latina
              </h1>
              <p className="font-secondary text-xl md:text-2xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                Design System que celebra a autenticidade e a elegância da moda latina contemporânea
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content com layout mais dinâmico */}
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto space-y-32">
          {/* Introdução com design moderno */}
          <section className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-2xl blur-3xl" />
            <div className="relative bg-white/50 backdrop-blur-xl rounded-2xl p-8 md:p-12">
              <p className="font-secondary text-neutral-600 text-xl leading-relaxed">
                Nossa identidade visual combina elegância com acessibilidade, 
                utilizando uma paleta de cores neutras complementada por tons vibrantes 
                estrategicamente posicionados. Cada elemento foi cuidadosamente projetado 
                para criar uma experiência de compra envolvente e memorável.
              </p>
            </div>
          </section>

          {/* Cores com cards flutuantes */}
          <section className="relative">
            <div className="sticky top-0 z-10 bg-gradient-to-b from-neutral-50 pb-8">
              <h2 className="font-primary text-5xl mb-2 text-neutral-800">Cores</h2>
              <div className="h-1 w-24 bg-accent-primary rounded-full" />
            </div>
            <ColorPalette />
          </section>

          {/* Tipografia com scroll suave */}
          <section className="relative">
            <div className="sticky top-0 z-10 bg-gradient-to-b from-neutral-50 pb-8">
              <h2 className="font-primary text-5xl mb-2 text-neutral-800">Tipografia</h2>
              <div className="h-1 w-24 bg-accent-primary rounded-full" />
            </div>
            <Typography />
          </section>

          {/* Componentes com grid moderno */}
          <section className="relative">
            <div className="sticky top-0 z-10 bg-gradient-to-b from-neutral-50 pb-8">
              <h2 className="font-primary text-5xl mb-2 text-neutral-800">Componentes</h2>
              <div className="h-1 w-24 bg-accent-primary rounded-full" />
            </div>
            <UIComponents />
          </section>
        </div>
      </div>

      {/* Footer moderno com gradiente */}
      <footer className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900" />
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />
        <div className="relative py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="font-primary text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-white">
              Sou Latina
            </p>
            <p className="font-secondary text-neutral-400">
              Design System &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
