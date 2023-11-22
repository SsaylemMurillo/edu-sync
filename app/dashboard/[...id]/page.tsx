'use client';

import React from 'react';

const DashboardPage = ({params}) => {
  const userId = params.id;

  return (
      <div className='justify-start pl-10 pt-10'>Home of {userId} - Edusync</div>
  );
};

export default DashboardPage;
