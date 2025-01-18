import React from 'react';

interface ColorBoxProps {
  color: string;
  name: string;
  hex: string;
}

const ColorBox: React.FC<ColorBoxProps> = ({ color, name, hex }) => (
  <div className="group relative">
    <div className="absolute -inset-2 bg-gradient-to-r from-accent-primary/10 to-accent-secondary/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
    <div className="relative space-y-2">
      <div 
        className="w-full h-32 rounded-lg shadow-lg transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl"
        style={{ backgroundColor: hex }}
      />
      <div className="p-2">
        <p className="font-secondary font-medium text-neutral-800">{name}</p>
        <p className="font-secondary text-sm text-neutral-500 font-mono">{hex}</p>
      </div>
    </div>
  </div>
);

export const ColorPalette: React.FC = () => {
  const neutralColors = [
    { name: 'Neutral 50', hex: '#fafafa' },
    { name: 'Neutral 200', hex: '#e5e5e5' },
    { name: 'Neutral 500', hex: '#737373' },
    { name: 'Neutral 800', hex: '#262626' },
    { name: 'Neutral 900', hex: '#171717' },
  ];

  const accentColors = [
    { name: 'Primary', hex: '#FF4B4B' },
    { name: 'Secondary', hex: '#4A90E2' },
    { name: 'Success', hex: '#2ECC71' },
    { name: 'Warning', hex: '#F1C40F' },
    { name: 'Error', hex: '#E74C3C' },
  ];

  return (
    <div className="space-y-16">
      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-neutral-200/50 to-neutral-300/50 rounded-2xl blur-2xl opacity-50" />
        <div className="relative">
          <h3 className="font-primary text-2xl mb-8 text-neutral-800">Cores Neutras</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {neutralColors.map((color) => (
              <ColorBox key={color.name} {...color} color={color.hex} />
            ))}
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 bg-gradient-to-r from-accent-primary/5 to-accent-secondary/5 rounded-2xl blur-2xl opacity-50" />
        <div className="relative">
          <h3 className="font-primary text-2xl mb-8 text-neutral-800">Cores de Destaque</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {accentColors.map((color) => (
              <ColorBox key={color.name} {...color} color={color.hex} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
