/**
 * Design Tokens
 * 
 * Este arquivo contém os tokens de design que serão utilizados em toda a aplicação.
 * Os tokens são variáveis que representam decisões de design consistentes.
 */

import { theme } from './theme'

export const tokens = {
  // Cores do Produto
  productColors: {
    // Cores para categorias de produtos
    casual: theme.colors.accent.secondary,
    sport: theme.colors.accent.primary,
    formal: theme.colors.neutral[800],
    sale: theme.colors.accent.error,
  },

  // Estados de Interação
  interaction: {
    hover: {
      scale: '1.02',
      transition: 'all 0.2s ease-in-out',
      shadow: theme.shadows.md,
    },
    active: {
      scale: '0.98',
      transition: 'all 0.1s ease-in-out',
    },
    disabled: {
      opacity: '0.5',
      cursor: 'not-allowed',
    },
  },

  // Layout
  layout: {
    maxWidth: '1440px',
    containerPadding: {
      mobile: theme.spacing[4],
      desktop: theme.spacing[8],
    },
    gridGap: {
      mobile: theme.spacing[4],
      desktop: theme.spacing[6],
    },
  },

  // Elementos de Interface
  interface: {
    header: {
      height: '80px',
      background: theme.colors.neutral[50],
      borderBottom: `1px solid ${theme.colors.neutral[200]}`,
    },
    footer: {
      background: theme.colors.neutral[900],
      color: theme.colors.neutral[50],
      padding: `${theme.spacing[12]} 0`,
    },
    card: {
      background: theme.colors.neutral[50],
      border: `1px solid ${theme.colors.neutral[200]}`,
      borderRadius: theme.borderRadius.lg,
      shadow: theme.shadows.sm,
    },
  },

  // Z-index
  zIndex: {
    modal: 1000,
    overlay: 900,
    dropdown: 800,
    header: 700,
    footer: 600,
  },
}
