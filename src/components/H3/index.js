import { styled } from '../../utils'


export const styles = (t) => ({
  fontSize: t.h3FontSize,
  fontWeight: t.h3FontWeight,
  marginBottom: t.h3MarginBottom,
  marginTop: 0,
})


export default styled.h3((p, t) => styles(t))
