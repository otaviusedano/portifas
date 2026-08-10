/**
 * Typed mirror of the design tokens that need to be consumed from JS/TS
 * (e.g. the animated hero background, JS-driven breakpoint checks).
 * The source of truth for CSS remains `tokens.css`.
 */

export const breakpoints = {
  sm: 480,
  md: 768,
  lg: 1024,
  xl: 1280,
} as const

export const accentColors = {
  green: '#35d6a4',
  greenHi: '#62ecbd',
  teal: '#1fb6c9',
} as const

export type Breakpoint = keyof typeof breakpoints
