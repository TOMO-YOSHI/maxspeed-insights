import React from 'react';
import { Header } from '../Header';
import { VerticalNav } from '../VerticalNav';
import { Footer } from '../Footer';
import * as Styled from './Layout.styled';

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Styled.Layout>
      <Header />
      <Styled.CotentsGrid>
        <Styled.VerticalNavWrapper>
          <VerticalNav />
        </Styled.VerticalNavWrapper>
        <Styled.Main>
          {children}
        </Styled.Main>
      </Styled.CotentsGrid>
      <Footer />
    </Styled.Layout>
  )
}
