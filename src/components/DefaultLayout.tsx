'use client';

import { SbbClock } from '@sbb-esta/lyne-react/clock';
import { SbbFooter } from '@sbb-esta/lyne-react/footer';
import { SbbHeader, SbbHeaderButton } from '@sbb-esta/lyne-react/header';
import { SbbTitle } from '@sbb-esta/lyne-react/title';
import type { ReactNode } from 'react';

export default function DefaultLayout({ children, account }: { children: ReactNode; account: ReactNode }) {
  return (
    <>
      <SbbHeader>
        <SbbHeaderButton iconName="hamburger-menu-small" expandFrom="small">
          Menü
        </SbbHeaderButton>
        <div className="sbb-header-spacer"></div>
        <SbbTitle level="3">nextjs und lyne playground</SbbTitle>
        <div className="sbb-header-spacer"></div>
        {account}
        <div className="sbb-header-spacer-logo"></div>
      </SbbHeader>
      <main>{children}</main>
      <SbbFooter variant="clock-columns">
        <SbbClock />
      </SbbFooter>
    </>
  );
}
