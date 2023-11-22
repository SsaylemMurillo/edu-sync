// layout.tsx
import type { Metadata } from 'next'
import React from 'react';
import SidebarProfesor from "../components/sidebar";
import ClientOnly from '../components/ClientOnly';
export const metadata: Metadata = {
  title: 'EduSync',
  description: 'EduSync App',
};


const LayoutHome = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  return (
    <html lang="en">
      <body>
        <div className='flex h-full w-full'>
          <ClientOnly>
            <SidebarProfesor />
            {children}
          </ClientOnly>
        </div>
      </body>
    </html>
  );
}
export default LayoutHome;