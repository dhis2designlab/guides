import React from 'react'
import styled from 'styled-components'
import * as colors from '../constants/colors'
import { Icon } from '../components'

const FloatingButton = styled.button`
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 100;
    background: ${colors.accentDark};
    border: none;
    border-radius: 50%;
    box-shadow: 0px 1px 4px 2px ${colors.shadowDark};
    height: 48px;
    width: 48px;
    outline: none;
    &:hover {
        background: ${colors.accentDarker};
    }
    &:active {
        background: ${colors.accentDarkest};
    }
`

export const SidebarButton = ({ icon, onClick }) => (
    <FloatingButton onClick={onClick}>
        <Icon icon={icon} />
    </FloatingButton>
)
