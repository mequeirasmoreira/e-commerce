/**
 * Estilos Base dos Componentes
 * 
 * Este arquivo contém os estilos base para os componentes principais da aplicação.
 * Utilizamos uma abordagem consistente para manter a identidade visual do e-commerce.
 */

import { theme } from './theme'
import { tokens } from './tokens'

export const components = {
  // Botões
  button: {
    base: {
      padding: `${theme.spacing[3]} ${theme.spacing[6]}`,
      borderRadius: theme.borderRadius.base,
      fontSize: theme.typography.sizes.base,
      fontWeight: theme.typography.weights.medium,
      transition: 'all 0.2s ease-in-out',
    },
    variants: {
      primary: {
        background: theme.colors.accent.primary,
        color: theme.colors.neutral[50],
        '&:hover': {
          transform: tokens.interaction.hover.scale,
          boxShadow: tokens.interaction.hover.shadow,
        },
      },
      secondary: {
        background: theme.colors.neutral[200],
        color: theme.colors.neutral[800],
        '&:hover': {
          background: theme.colors.neutral[300],
        },
      },
      outline: {
        background: 'transparent',
        border: `2px solid ${theme.colors.accent.primary}`,
        color: theme.colors.accent.primary,
      },
    },
  },

  // Cards de Produto
  productCard: {
    container: {
      ...tokens.interface.card,
      overflow: 'hidden',
      transition: 'all 0.2s ease-in-out',
      '&:hover': {
        transform: tokens.interaction.hover.scale,
        boxShadow: tokens.interaction.hover.shadow,
      },
    },
    image: {
      aspectRatio: '3/4',
      objectFit: 'cover',
    },
    content: {
      padding: theme.spacing[4],
    },
  },

  // Inputs
  input: {
    base: {
      width: '100%',
      padding: theme.spacing[3],
      borderRadius: theme.borderRadius.base,
      border: `1px solid ${theme.colors.neutral[300]}`,
      fontSize: theme.typography.sizes.base,
      transition: 'all 0.2s ease-in-out',
      '&:focus': {
        outline: 'none',
        borderColor: theme.colors.accent.primary,
        boxShadow: `0 0 0 2px ${theme.colors.accent.primary}25`,
      },
    },
  },

  // Badges
  badge: {
    base: {
      padding: `${theme.spacing[1]} ${theme.spacing[2]}`,
      borderRadius: theme.borderRadius.full,
      fontSize: theme.typography.sizes.xs,
      fontWeight: theme.typography.weights.medium,
    },
    variants: {
      sale: {
        background: theme.colors.accent.error,
        color: theme.colors.neutral[50],
      },
      new: {
        background: theme.colors.accent.primary,
        color: theme.colors.neutral[50],
      },
      outOfStock: {
        background: theme.colors.neutral[200],
        color: theme.colors.neutral[600],
      },
    },
  },

  // Navigation
  nav: {
    link: {
      color: theme.colors.neutral[600],
      fontSize: theme.typography.sizes.base,
      fontWeight: theme.typography.weights.medium,
      transition: 'color 0.2s ease-in-out',
      '&:hover': {
        color: theme.colors.neutral[900],
      },
      '&.active': {
        color: theme.colors.accent.primary,
      },
    },
  },
}
