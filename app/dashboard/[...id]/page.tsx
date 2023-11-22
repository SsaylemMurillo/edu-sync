'use client';

import React from 'react';

const DashboardPage = ({params}) => {

  // Hacer consulta firebase del user y traer el nombre y rol y wea asi conchetumae

  const userId = params.id;

  return (
      <div className='justify-start pl-10 pt-10'>Home of {userId} - Edusync</div>
  );
};

export default DashboardPage;
