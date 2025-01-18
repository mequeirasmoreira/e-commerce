/**
 * Animações
 * 
 * Este arquivo contém as animações padrão utilizadas na aplicação.
 * As animações são sutis e focadas em melhorar a experiência do usuário.
 */

export const animations = {
  // Transições
  transitions: {
    default: 'all 0.2s ease-in-out',
    slow: 'all 0.3s ease-in-out',
    fast: 'all 0.1s ease-in-out',
  },

  // Keyframes
  keyframes: {
    fadeIn: {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    slideIn: {
      from: {
        transform: 'translateY(20px)',
        opacity: 0,
      },
      to: {
        transform: 'translateY(0)',
        opacity: 1,
      },
    },
    pulse: {
      '0%': {
        transform: 'scale(1)',
      },
      '50%': {
        transform: 'scale(1.05)',
      },
      '100%': {
        transform: 'scale(1)',
      },
    },
  },

  // Animações Pré-definidas
  variants: {
    fadeIn: {
      animation: 'fadeIn 0.3s ease-in-out',
    },
    slideIn: {
      animation: 'slideIn 0.3s ease-in-out',
    },
    pulse: {
      animation: 'pulse 2s infinite',
    },
  },

  // Animações de Página
  page: {
    enter: {
      animation: 'fadeIn 0.3s ease-in-out',
    },
    exit: {
      animation: 'fadeOut 0.2s ease-in-out',
    },
  },

  // Animações de Loading
  loading: {
    spinner: {
      animation: 'rotate 1s linear infinite',
    },
    shimmer: {
      animation: 'shimmer 1.5s infinite linear',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
    },
  },
}
