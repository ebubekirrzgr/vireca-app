'use client'

import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import { Layout, Button, Icon } from '@stellar/design-system'


interface Tool {
  name: string;
  mode: string;
}

interface CornerstoneViewportProps {
  imageIds: string[];
  tools: Tool[];
  defaultTool: string;
  style?: React.CSSProperties;
}

const CornerstoneViewport = dynamic<CornerstoneViewportProps>(
  () => import('react-cornerstone-viewport'),
  { ssr: false }
);

export default function RadiologyViewer() {
  const [imageIds, setImageIds] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    // Örnek: URL'den DICOM yükleme (isteğe bağlı, default görüntü için)
    // const studyUrl = 'wadouri:https://example.com/path/to/dicom.dcm';
    // setImageIds([studyUrl]);
  }, [])

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    const arrayBuffer = await file.arrayBuffer()
    const blob = new Blob([arrayBuffer])
    setImageIds([`wadouri:${URL.createObjectURL(blob)}`])
  }

  return (
    <Layout.Inset>
      <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: 28 }}>Custom Radiology Viewer</h1>
        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept=".dcm"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          <Button
            variant="primary"
            size="sm"
            icon={<Icon.UploadCloud01 />}
            onClick={() => fileInputRef.current?.click()}
          >
            Upload DICOM
          </Button>
        </div>
      </div>

      <div style={{ height: '70vh', border: '1px solid var(--sds-canvas-stroke)', borderRadius: 8 }}>
        {imageIds.length > 0 ? (
          <CornerstoneViewport
            style={{ height: '100%', width: '100%' }}
            imageIds={imageIds}
            tools={[
              { name: 'Wwwc', mode: 'active' },
              { name: 'Pan', mode: 'active' },
              { name: 'Zoom', mode: 'active' },
            ]}
            defaultTool="Wwwc"
          />
        ) : (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            Please upload a DICOM file to view.
          </div>
        )}
      </div>
    </Layout.Inset>
  )
}
