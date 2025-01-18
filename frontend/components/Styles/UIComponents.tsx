import React from 'react';

export const UIComponents: React.FC = () => {
  return (
    <section className="space-y-12">
      <div>
        <h3 className="font-primary text-2xl mb-6 text-neutral-800">Botões</h3>
        <div className="flex flex-wrap gap-4">
          <button className="bg-accent-primary text-white px-6 py-3 rounded transition-all hover:scale-105">
            Primário
          </button>
          <button className="bg-neutral-200 text-neutral-800 px-6 py-3 rounded transition-all hover:bg-neutral-300">
            Secundário
          </button>
          <button className="border-2 border-accent-primary text-accent-primary px-6 py-3 rounded transition-all hover:bg-accent-primary hover:text-white">
            Outline
          </button>
        </div>
      </div>

      <div>
        <h3 className="font-primary text-2xl mb-6 text-neutral-800">Badges</h3>
        <div className="flex flex-wrap gap-4">
          <span className="bg-accent-error text-white px-3 py-1 rounded-full text-xs font-secondary">
            Sale
          </span>
          <span className="bg-accent-primary text-white px-3 py-1 rounded-full text-xs font-secondary">
            Novo
          </span>
          <span className="bg-neutral-200 text-neutral-600 px-3 py-1 rounded-full text-xs font-secondary">
            Esgotado
          </span>
        </div>
      </div>

      <div>
        <h3 className="font-primary text-2xl mb-6 text-neutral-800">Inputs</h3>
        <div className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Nome completo"
            className="w-full px-4 py-3 rounded border border-neutral-300 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/25 transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded border border-neutral-300 focus:outline-none focus:border-accent-primary focus:ring-2 focus:ring-accent-primary/25 transition-all"
          />
        </div>
      </div>

      <div>
        <h3 className="font-primary text-2xl mb-6 text-neutral-800">Card de Produto</h3>
        <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-all">
          <div className="h-64 bg-neutral-200"></div>
          <div className="p-4">
            <h4 className="font-primary text-xl mb-2">Vestido Floral</h4>
            <p className="font-secondary text-neutral-600 mb-4">Elegante vestido com estampa floral</p>
            <div className="flex justify-between items-center">
              <span className="font-secondary font-medium text-lg">R$ 299,90</span>
              <button className="bg-accent-primary text-white px-4 py-2 rounded hover:scale-105 transition-all">
                Comprar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
