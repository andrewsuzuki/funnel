import { padding } from '../../mixins'


const navbarItemStyles = {
  flexGrow: 0,
  flexShrink: 0,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  ...padding('0.5rem', '0.75rem'),

  fontSize: '1rem',
  lineHeight: 1.5,
}

export default navbarItemStyles
