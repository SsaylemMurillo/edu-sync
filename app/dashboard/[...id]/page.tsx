'use client';

import React from 'react';
import LayoutHome from '../layout';  // Ajusta la ruta según la ubicación real del archivo layout.tsx

const DashboardPage = ({params}) => {
  const userId = params.id;

  return (
      <div className='justify-start pl-10 pt-10'>Home of {userId} - Edusync</div>
  );
};

export default DashboardPage;
