import React from 'react'

interface IProps {
  children: React.ReactNode
}

export default function Main({ children }: IProps) {
  return <div className="main">{children}</div>
}

// const Container = styled.main`
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   height: calc(100% - 48px);
//   justify-content: center;
//   width: 100%;
// `
