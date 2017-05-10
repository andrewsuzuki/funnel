import { styled } from '../../utils'


export const styles = (t) => ({
  fontSize: t.h5FontSize,
  fontWeight: t.h5FontWeight,
  marginBottom: t.h5MarginBottom,
  marginTop: 0,
})


export default styled.h5((p, t) => styles(t))
