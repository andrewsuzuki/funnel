import { styled } from '../../utils'


export const styles = (t) => ({
  fontSize: t.h2FontSize,
  fontWeight: t.h2FontWeight,
  marginBottom: t.h2MarginBottom,
  marginTop: 0,
})


export default styled.h2((p, t) => styles(t))
