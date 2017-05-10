import { styled } from '../../utils'


export const styles = (t) => ({
  fontSize: t.h6FontSize,
  fontWeight: t.h6FontWeight,
  marginBottom: t.h6MarginBottom,
  marginTop: 0,
})


export default styled.h6((p, t) => styles(t))
