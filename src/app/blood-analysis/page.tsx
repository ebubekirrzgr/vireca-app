'use client'

import React from 'react'
import { Layout, Table } from '@stellar/design-system'

type BloodTestResult = {
  id: string
  parameter: string
  unit: string
  normalRange: string
  result: number
  normalMin: number
  normalMax: number
}

const testResults: BloodTestResult[] = [
  {
    id: '1',
    parameter: 'WBC',
    unit: '10^3/uL',
    normalRange: '4.0 - 10.5',
    normalMin: 4.0,
    normalMax: 10.5,
    result: 7.2,
  },
  {
    id: '2',
    parameter: 'RBC',
    unit: '10^6/uL',
    normalRange: '4.5 - 6.0',
    normalMin: 4.5,
    normalMax: 6.0,
    result: 4.2, // düşük
  },
  {
    id: '3',
    parameter: 'Hemoglobin',
    unit: 'g/dL',
    normalRange: '13.5 - 17.5',
    normalMin: 13.5,
    normalMax: 17.5,
    result: 18.2, // yüksek
  },
  {
    id: '4',
    parameter: 'Hematocrit',
    unit: '%',
    normalRange: '41 - 53',
    normalMin: 41,
    normalMax: 53,
    result: 45.2,
  },
  {
    id: '5',
    parameter: 'MCV',
    unit: 'fL',
    normalRange: '80 - 96',
    normalMin: 80,
    normalMax: 96,
    result: 102.0, // yüksek
  },
  {
    id: '6',
    parameter: 'MCH',
    unit: 'pg',
    normalRange: '27 - 33',
    normalMin: 27,
    normalMax: 33,
    result: 30.5,
  },
  {
    id: '7',
    parameter: 'Platelets',
    unit: '10^3/uL',
    normalRange: '150 - 450',
    normalMin: 150,
    normalMax: 450,
    result: 500, // yüksek
  },
  {
    id: '8',
    parameter: 'Neutrophils',
    unit: '%',
    normalRange: '40 - 60',
    normalMin: 40,
    normalMax: 60,
    result: 55,
  },
  {
    id: '9',
    parameter: 'Lymphocytes',
    unit: '%',
    normalRange: '20 - 40',
    normalMin: 20,
    normalMax: 40,
    result: 10, // düşük
  },
  {
    id: '10',
    parameter: 'Monocytes',
    unit: '%',
    normalRange: '2 - 8',
    normalMin: 2,
    normalMax: 8,
    result: 4.5,
  },
]

export default function BloodTestPage() {
  return (
    <Layout.Inset>
      <h1 style={{ fontSize: 28, marginBottom: 20, textAlign: 'center' }}>
        Blood Test Results
      </h1>

      <Table
        breakpoint={400}
        pageSize={5}
        columnLabels={[
          { id: 'parameter', label: 'Parameter' },
          { id: 'unit', label: 'Unit' },
          { id: 'normalRange', label: 'Normal Range' },
          { id: 'result', label: 'Result' },
        ]}
        data={testResults}
        renderItemRow={(item) => {
          const isOutOfRange = item.result < item.normalMin || item.result > item.normalMax

          return (
            <>
              {/* Parameter sütunu için stil */}
              <td style={{ backgroundColor: isOutOfRange ? 'rgba(255,0,0,0.1)' : 'transparent' }}>
                {item.parameter}
              </td>
              {/* Unit sütunu için stil */}
              <td style={{ backgroundColor: isOutOfRange ? 'rgba(255,0,0,0.1)' : 'transparent' }}>
                {item.unit}
              </td>
              {/* Normal Range sütunu için stil */}
              <td style={{ backgroundColor: isOutOfRange ? 'rgba(255,0,0,0.1)' : 'transparent' }}>
                {item.normalRange}
              </td>
              {/* Result sütunu için kırmızı yazı ve arka plan stili */}
              <td
                style={{
                  fontWeight: isOutOfRange ? 'bold' : 'normal',
                  backgroundColor: isOutOfRange ? 'rgba(255,0,0,0.1)' : 'transparent',
                  paddingRight:"5px" // Hafif daha belirgin arka plan
                }}
              >
                {item.result}
              </td>
            </>
          )
        }}
      />
    </Layout.Inset>
  )
}