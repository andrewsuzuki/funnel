/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */

/* eslint-disable quote-props */
export default {
  '*, ::before, ::after': {
    backgroundRepeat: 'no-repeat',
    boxSizing: 'inherit',
  },

  '::before, ::after': {
    textDecoration: 'inherit',
    verticalAlign: 'inherit',
  },

  'html': {
    boxSizing: 'border-box',
    cursor: 'default',
    msTextSizeAdjust: '100%',
    WebkitTextSizeAdjust: '100%',
  },

  'article, aside, footer, header, nav, section': {
    display: 'block',
  },

  'body': {
    margin: 0,
  },

  'h1': {
    fontSize: '2em',
    margin: '0.67em 0',
  },

  'figcaption, figure, main': {
    display: 'block',
  },

  'figure': {
    margin: '1em 40px',
  },

  'hr': {
    boxSizing: 'content-box',
    height: 0,
    overflow: 'visible',
  },

  'nav ol, nav ul': {
    listStyle: 'none',
  },

  'pre': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  'a': {
    backgroundColor: 'transparent',
    WebkitTextDecorationSkip: 'objects',
  },

  'abbr[title]': {
    borderBottom: 'none',
    textDecoration: ['underline', 'underline dotted'],
  },

  // Prevent the duplicate application of `bolder` by the next rule in Safari 6.
  // 'b, strong': {
  //   fontWeight: 'inherit',
  // },

  'b, strong': {
    fontWeight: 'bolder',
  },

  'code, kbd, samp': {
    fontFamily: 'monospace, monospace',
    fontSize: '1em',
  },

  'dfn': {
    fontStyle: 'italic',
  },

  'mark': {
    backgroundColor: '#ffff00',
    color: '#000000',
  },

  'small': {
    fontSize: '80%',
  },

  'sub, sup': {
    fontSize: '75%',
    lineHeight: 0,
    position: 'relative',
    verticalAlign: 'baseline',
  },

  'sub': {
    bottom: '-0.25em',
  },

  'sup': {
    top: '-0.5em',
  },

  '::-moz-selection': {
    backgroundColor: '#b3d4fc',
    color: '#000000',
    textShadow: 'none',
  },

  '::selection': {
    backgroundColor: '#b3d4fc',
    color: '#000000',
    textShadow: 'none',
  },

  'audio, canvas, iframe, img, svg, video': {
    verticalAlign: 'middle',
  },

  'audio, video': {
    display: 'inline-block',
  },

  'audio:not([controls])': {
    display: 'none',
    height: 0,
  },

  'img': {
    borderStyle: 'none',
  },

  'svg': {
    fill: 'currentColor',
  },

  'svg:not(:root)': {
    overflow: 'hidden',
  },

  'table': {
    borderCollapse: 'collapse',
  },

  'button, input, optgroup, select, textarea': {
    margin: 0,
  },

  'button, input, select, textarea': {
    backgroundColor: 'transparent',
    color: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
  },

  'button, input': {
    overflow: 'visible',
  },

  'button, select': {
    textTransform: 'none',
  },

  'button, html [type="button"], [type="reset"], [type="submit"]': {
    WebkitAppearance: 'button',
  },

  'button::-moz-focus-inner, [type="button"]::-moz-focus-inner, [type="reset"]::-moz-focus-inner, [type="submit"]::-moz-focus-inner': {
    borderStyle: 'none',
    padding: 0,
  },

  'button:-moz-focusring, [type="button"]:-moz-focusring, [type="reset"]:-moz-focusring, [type="submit"]:-moz-focusring': {
    outline: '1px dotted ButtonText',
  },

  'legend': {
    boxSizing: 'border-box',
    color: 'inherit',
    display: 'table',
    maxWidth: '100%',
    padding: 0,
    whiteSpace: 'normal',
  },

  'progress': {
    display: 'inline-block',
    verticalAlign: 'baseline',
  },

  'textarea': {
    overflow: 'auto',
    resize: 'vertical',
  },

  '[type="checkbox"], [type="radio"]': {
    boxSizing: 'border-box',
    padding: 0,
  },

  '[type="number"]::-webkit-inner-spin-button, [type="number"]::-webkit-outer-spin-button': {
    height: 'auto',
  },

  '[type="search"]': {
    WebkitAppearance: 'textfield',
    outlineOffset: '-2px',
  },

  '[type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration': {
    WebkitAppearance: 'none',
  },

  '::-webkit-file-upload-button': {
    WebkitAppearance: 'button',
    font: 'inherit',
  },

  'details, menu': {
    display: 'block',
  },

  'summary': {
    display: 'list-item',
  },

  'canvas': {
    display: 'inline-block',
  },

  'template': {
    display: 'none',
  },

  'a, area, button, input, label, select, summary, textarea, [tabindex]': {
    msTouchAction: 'manipulation',
    touchAction: 'manipulation',
  },

  '[hidden]': {
    display: 'none',
  },

  '[aria-busy="true"]': {
    cursor: 'progress',
  },

  '[aria-controls]': {
    cursor: 'pointer',
  },

  '[aria-hidden="false"][hidden]:not(:focus)': {
    clip: 'rect(0, 0, 0, 0)',
    display: 'inherit',
    position: 'absolute',
  },

  '[aria-disabled]': {
    cursor: 'default',
  },
}
/* eslint-enable quote-props */
