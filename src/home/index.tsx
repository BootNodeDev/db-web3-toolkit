// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-restricted-imports
import React from 'react'
import { styled } from 'styled-components'

import {
  ContainerPadding,
  Header as BaseHeader,
  InnerContainer,
  Logo,
  Main,
  Wrapper as BaseWrapper,
} from 'db-ui-toolkit'
import { createRoot } from 'react-dom/client'

import { GlobalStyles } from './GlobalStyles'
import HashDemo from './demo/HashDemo'

const Wrapper = styled(BaseWrapper)`
  row-gap: 32px;
`

const Header = styled(BaseHeader)`
  height: 48px;
  margin-top: 48px;
`

const Inner = styled(InnerContainer)`
  ${ContainerPadding}
`

const InnerHeader = styled(Inner)`
  justify-content: space-between;
`

const InnerMain = styled(Inner)`
  --inner-main-vertical-padding: 32px;

  flex-direction: column;
  padding-bottom: var(--inner-main-vertical-padding);
  padding-top: var(--inner-main-vertical-padding);
  row-gap: 50px;
`

/**
 * Demo preview of the components
 */
const App = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Header>
          <InnerHeader>
            <Logo />
          </InnerHeader>
        </Header>
        <Main>
          <InnerMain>
            <HashDemo />
            {/* Put more demos here */}
          </InnerMain>
        </Main>
      </Wrapper>
    </>
  )
}

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
