import React from 'react';

const PrintPdfButton = () => {
  const handleGeneratePDF = () => {

    // Adiciona uma classe para escurecer os elementos antes de imprimir
    document.body.classList.add('dark-print');

    window.print();

    // Remove a classe depois que a impressão é concluída
    document.body.classList.remove('dark-print');
  };

  return (
    <button className='button is-success is-small' onClick={handleGeneratePDF}>Generate PDF</button>
  );
};

export default PrintPdfButton;
