import React from 'react'
import styled from 'styled-components'
import { code } from '../constants/colors'

const FloatingButton = styled.button`
    position: fixed;
    bottom: 16px;
    right: 16px;
    z-index: 100;
    background: linear-gradient(180deg, #1565c0, #0650a3);
    border: 1px solid #002f63;
    border-radius: 50%;
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

const Icon = ({ icon }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
    >
        <path d={icon} fill="white" />
    </svg>
)

export const SidebarButton = ({ icon, onClick }) => (
    <FloatingButton onClick={onClick}>
        <Icon icon={icon} />
    </FloatingButton>
)
