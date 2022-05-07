import {ButtonHTMLAttributes} from 'react';
import styled from "styled-components"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;


export function Button(props: ButtonProps) {
  return (
  <DefaultButton {... props} />
  )
}

export const DefaultButton = styled.button`
    margin-top: 64px;
      height: 50px;
      border-radius: 8px;
      font-weight: 500;
      background: #825afd;
      color: #fff;

      display:flex;
      justify-content: center;
      align-items: center;

      cursor:pointer;
      border: 0;
      transition: filter 0.2s;
      img {
        margin-right: 8px;
      }
      &:not(:disabled):hover{
        filter:brightness(0.9);
      }
      &:disabled {
          opacity: 0.6;
          cursor: not-allowed;
      }
`