import { styled } from '../../utils'


export const styles = (t) => ({
  fontFamily: t.headingFontFamily,
  fontSize: t.h1FontSize,
  fontWeight: t.h1FontWeight,
  marginBottom: t.h1MarginBottom,
  marginTop: 0,
})


export default styled.h1((p, t) => styles(t))
