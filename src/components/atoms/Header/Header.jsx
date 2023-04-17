
import { Container, Content } from './style'

export const Header = (props) => {
  return (
    <Container>
      <Content>
        {props.children}
      </Content>
    </Container>
  )
}
