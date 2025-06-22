'use client';

import React, { useRef } from 'react';
import daikon from 'daikon';

export default function DicomDaikonViewer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const buffer = await file.arrayBuffer();
    const data = new DataView(buffer);
    const image = daikon.Series.parseImage(data);

    if (!image) {
      alert('Invalid DICOM file.');
      return;
    }

    const pixels = image.getInterpretedData();
    const width = image.getCols();
    const height = image.getRows();

    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const imageData = ctx.createImageData(width, height);

    for (let i = 0; i < pixels.length; i++) {
      const value = pixels[i];
      imageData.data[i * 4 + 0] = value; // R
      imageData.data[i * 4 + 1] = value; // G
      imageData.data[i * 4 + 2] = value; // B
      imageData.data[i * 4 + 3] = 255;   // A
    }

    ctx.putImageData(imageData, 0, 0);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Upload DICOM (.dcm) File</h2>
      <input type="file" accept=".dcm" onChange={handleFileChange} />
      <div style={{ marginTop: '1rem' }}>
        <canvas ref={canvasRef} style={{ border: '1px solid #ccc' }} />
      </div>
    </div>
  );
}
