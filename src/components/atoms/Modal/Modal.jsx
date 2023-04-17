import { Portal } from 'solid-js/web'
import { Show } from 'solid-js'

import { styled } from 'solid-styled-components'

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Content = styled('div')`
  width: 100%;
  maxWidth: 576px;
  background: var(--background);
  padding: 3rem;
  position: relative;
  border-radius: 5px;
`

export const Modal = (props) => {
  const closeInOverlay = (event) => {
    event.stopImmediatePropagation()

    if (event.target.id === 'overlay') { props.onClose() }
  }

  return (
    <Show when={props.isOpen}>
      <Portal mount={document.getElementById('modal')}>
        <Root onClick={closeInOverlay} id="overlay">
          <Content>
            {props.children}
          </Content>
        </Root>
      </Portal>
    </Show>
  )
}
