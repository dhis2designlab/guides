import React from 'react'
//import { node, oneOfType, arrayOf } from 'prop-types'
import { Title } from '../../styles'
import { BodyStyle, Container, Main, Sidebar } from './style'

export const Layout = ({ children }) => (
    <>
        <BodyStyle />
        <Title>DHIS2 design lab</Title>
        <Container>
            <Sidebar>
                <p>I'm a sidebar!</p>
            </Sidebar>
            <Main>{children}</Main>
        </Container>
    </>
)

/*Layout.propTypes = {
    children: oneOfType([node, arrayOf(node)])
}*/
