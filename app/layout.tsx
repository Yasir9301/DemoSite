'use client';
import '@/styles/globals.css';
import { MantineProvider } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';


import React from 'react';
import { RecoilRoot } from 'recoil';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>DEMO APP</title>
      </head>
      <MantineProvider withNormalizeCSS withGlobalStyles>
        <NotificationsProvider>
          <RecoilRoot>
            <body>{children}</body>
          </RecoilRoot>
        </NotificationsProvider>
      </MantineProvider>
    </html>
  );
}
