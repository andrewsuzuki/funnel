import { loadFont } from '../utils'


export const iconFontFace = loadFont({
  fontFamily: 'FontAwesome',
  // NOTE IE9 compat -- doesn't work with glamor? needs separate src instead of csv urls
  // src: 'url(\'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0\')',
  src: [
    'url(\'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\') format(\'embedded-opentype\')',
    'url(\'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0\') format(\'woff2\')',
    'url(\'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0\') format(\'woff\')',
    'url(\'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0\') format(\'truetype\')',
    'url(\'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\') format(\'svg\')',
  ],
  fontWeight: 'normal',
  fontStyle: 'normal',
})