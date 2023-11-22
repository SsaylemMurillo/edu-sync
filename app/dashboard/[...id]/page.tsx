// dashboard/[...id].tsx

import React from 'react';
import LayoutHome from '../layout';  // Ajusta la ruta según la ubicación real del archivo layout.tsx

const DashboardPage = () => {
  return (
    <LayoutHome>
      <div className='justify-start'>Home of - Edusync</div>
    </LayoutHome>
  );
};

export default DashboardPage;
