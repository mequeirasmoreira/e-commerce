/**
 * Mixins
 * 
 * Este arquivo contém mixins reutilizáveis para estilização consistente
 * em toda a aplicação.
 */

import { theme } from './theme'

export const mixins = {
  // Flexbox
  flexCenter: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBetween: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column',
  },

  // Grid
  grid: {
    display: 'grid',
    gridGap: theme.spacing[4],
  },
  gridColumns: (columns: number) => ({
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
  }),

  // Texto
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  lineClamp: (lines: number) => ({
    display: '-webkit-box',
    '-webkit-line-clamp': lines,
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
  }),

  // Container
  container: {
    width: '100%',
    maxWidth: '1440px',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: theme.spacing[4],
    paddingRight: theme.spacing[4],
  },

  // Responsividade
  responsive: {
    mobile: `@media (max-width: ${theme.breakpoints.md})`,
    tablet: `@media (min-width: ${theme.breakpoints.md}) and (max-width: ${theme.breakpoints.lg})`,
    desktop: `@media (min-width: ${theme.breakpoints.lg})`,
  },

  // Efeitos
  glassmorphism: {
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  },
  boxShadow: {
    boxShadow: theme.shadows.md,
  },

  // Acessibilidade
  visuallyHidden: {
    position: 'absolute',
    width: '1px',
    height: '1px',
    padding: '0',
    margin: '-1px',
    overflow: 'hidden',
    clip: 'rect(0, 0, 0, 0)',
    whiteSpace: 'nowrap',
    border: '0',
  },
}
