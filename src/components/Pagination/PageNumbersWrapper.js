import { styled, propTypeHorizontalPosition } from '../../utils'


const pageNumbersPositionToJustifyContentMap = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
}


const PageNumbersWrapper = styled.div(({ position }) => ({
  flexGrow: 1,
  flexShrink: 1,

  display: 'flex',
  alignItems: 'center',
  justifyContent: pageNumbersPositionToJustifyContentMap[position],
  flexWrap: '1',
}))

PageNumbersWrapper.propTypes = {
  position: propTypeHorizontalPosition.isRequired,
}

export default PageNumbersWrapper
