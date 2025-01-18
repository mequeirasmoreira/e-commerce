import React from 'react';

export const Typography: React.FC = () => {
  const headings = [
    { size: '4xl', text: 'Sou Latina', className: 'text-4xl text-neutral-800' },
    { size: '3xl', text: 'Moda com Personalidade', className: 'text-3xl text-neutral-800' },
    { size: '2xl', text: 'Estilo Autêntico', className: 'text-2xl text-neutral-800' },
    { size: 'xl', text: 'Design Contemporâneo', className: 'text-xl text-neutral-800' },
  ];

  const bodyText = [
    { weight: 'Light', className: 'font-light text-neutral-800' },
    { weight: 'Regular', className: 'font-normal text-neutral-800' },
    { weight: 'Medium', className: 'font-medium text-neutral-800' },
    { weight: 'Semibold', className: 'font-semibold text-neutral-800' },
    { weight: 'Bold', className: 'font-bold text-neutral-800' },
  ];

  return (
    <section className="space-y-12">
      <div>
        <h3 className="font-primary text-2xl mb-6 text-neutral-800">Títulos - Playfair Display</h3>
        <div className="space-y-6">
          {headings.map((heading) => (
            <div key={heading.size} className="space-y-2">
              <p className="font-secondary text-sm text-neutral-500">Tamanho: {heading.size}</p>
              <h4 className={`font-primary ${heading.className}`}>{heading.text}</h4>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-primary text-2xl mb-6 text-neutral-800">Texto - Montserrat</h3>
        <div className="space-y-6">
          {bodyText.map((text) => (
            <div key={text.weight} className="space-y-2">
              <p className="font-secondary text-sm text-neutral-500">{text.weight}</p>
              <p className={`font-secondary ${text.className} text-lg`}>
                A moda é uma forma de expressão que transcende as tendências.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
