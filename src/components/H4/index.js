import { styled } from '../../utils'


export const styles = (t) => ({
  fontSize: t.h4FontSize,
  fontWeight: t.h4FontWeight,
  marginBottom: t.h4MarginBottom,
  marginTop: 0,
})


export default styled.h4((p, t) => styles(t))
