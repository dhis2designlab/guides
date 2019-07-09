import React from 'react'
import styled from 'styled-components'
import { shadowDark } from '../constants/colors'
import { Icon } from '../components'

const FloatingButton = styled.button`
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 100;
    background: linear-gradient(180deg, #1565c0, #0650a3);
    border: none;
    border-radius: 50%;
    box-shadow: 0 0 3px 0 ${shadowDark};
    height: 48px;
    width: 48px;
    outline: none;
    &:focus,
    &:hover {
        background: linear-gradient(180deg, #054fa3, #034793);
    }
    &:active {
        background: linear-gradient(180deg, #003e84, #002f63);
    }
`

export const SidebarButton = ({ icon, onClick }) => (
    <FloatingButton onClick={onClick}>
        <Icon icon={icon} />
    </FloatingButton>
)
