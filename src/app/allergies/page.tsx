'use client'

import React, { useState, useMemo } from 'react'
import { Layout, Table, Input, Button } from '@stellar/design-system'

type Allergy = {
  id: string
  food: string
  result: 'Positive' | 'Negative'
}

const allergiesData: Allergy[] = [
  { id: '1', food: 'Peanuts', result: 'Positive' },
  { id: '2', food: 'Milk', result: 'Negative' },
  { id: '3', food: 'Eggs', result: 'Positive' },
  { id: '4', food: 'Shellfish', result: 'Negative' },
  { id: '5', food: 'Soy', result: 'Positive' },
  { id: '6', food: 'Wheat', result: 'Negative' },
  { id: '7', food: 'Tree Nuts', result: 'Positive' },
  { id: '8', food: 'Fish', result: 'Negative' },
  { id: '9', food: 'Sesame', result: 'Positive' },
  { id: '10', food: 'Gluten', result: 'Negative' },
  { id: '11', food: 'Corn', result: 'Positive' },
  { id: '12', food: 'Strawberries', result: 'Negative' },
  { id: '13', food: 'Tomatoes', result: 'Positive' },
  { id: '14', food: 'Citrus', result: 'Negative' },
  { id: '15', food: 'Chocolate', result: 'Positive' },
  { id: '16', food: 'Beef', result: 'Negative' },
  { id: '17', food: 'Chicken', result: 'Positive' },
  { id: '18', food: 'Pork', result: 'Negative' },
  { id: '19', food: 'Oats', result: 'Positive' },
  { id: '20', food: 'Barley', result: 'Negative' },
  { id: '21', food: 'Rice', result: 'Positive' },
  { id: '22', food: 'Potatoes', result: 'Negative' },
  { id: '23', food: 'Carrots', result: 'Positive' },
  { id: '24', food: 'Onions', result: 'Negative' },
  { id: '25', food: 'Garlic', result: 'Positive' },
  { id: '26', food: 'Peas', result: 'Negative' },
  { id: '27', food: 'Lentils', result: 'Positive' },
  { id: '28', food: 'Chickpeas', result: 'Negative' },
  { id: '29', food: 'Mustard', result: 'Positive' },
  { id: '30', food: 'Celery', result: 'Negative' },
  { id: '31', food: 'Pineapple', result: 'Positive' },
  { id: '32', food: 'Mango', result: 'Negative' },
  { id: '33', food: 'Banana', result: 'Positive' },
  { id: '34', food: 'Apple', result: 'Negative' },
  { id: '35', food: 'Pear', result: 'Positive' },
  { id: '36', food: 'Peach', result: 'Negative' },
  { id: '37', food: 'Plum', result: 'Positive' },
  { id: '38', food: 'Cucumber', result: 'Negative' },
  { id: '39', food: 'Zucchini', result: 'Positive' },
  { id: '40', food: 'Broccoli', result: 'Negative' },
  { id: '41', food: 'Cauliflower', result: 'Positive' },
  { id: '42', food: 'Spinach', result: 'Negative' },
  { id: '43', food: 'Kale', result: 'Positive' },
  { id: '44', food: 'Lettuce', result: 'Negative' },
  { id: '45', food: 'Cabbage', result: 'Positive' },
  { id: '46', food: 'Radish', result: 'Negative' },
  { id: '47', food: 'Beets', result: 'Positive' },
  { id: '48', food: 'Cornflakes', result: 'Negative' },
  { id: '49', food: 'Yogurt', result: 'Positive' },
  { id: '50', food: 'Cheese', result: 'Negative' },
]

export default function AllergiesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showOnlyNegative, setShowOnlyNegative] = useState(false)

  // Filtre ve arama
  const filteredData = useMemo(() => {
    let data = allergiesData

    if (showOnlyNegative) {
      data = data.filter((item) => item.result === 'Negative')
    }

    if (searchTerm.trim() !== '') {
      const lower = searchTerm.toLowerCase()
      data = data.filter((item) => item.food.toLowerCase().includes(lower))
    }

    return data
  }, [searchTerm, showOnlyNegative])

  return (
    <Layout.Inset>
      <h1 style={{ fontSize: 28, marginBottom: 20, textAlign: 'center' }}>
        Allergy Test Results
      </h1>

      <div
        style={{
          marginBottom: '1rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        <Input
          id="search-food"
          fieldSize="md"
          placeholder="Search food name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ minWidth: '200px' }}
        />
        <Button
          size="sm"
          variant={showOnlyNegative ? 'primary' : 'secondary'}
          onClick={() => setShowOnlyNegative((prev) => !prev)}
        >
          {showOnlyNegative ? 'Show All' : 'Show Only Negative'}
        </Button>
      </div>

      <Table
        breakpoint={400}
        pageSize={5}
        columnLabels={[
          { id: 'food', label: 'Food Name' },
          { id: 'result', label: 'Result' },
        ]}
        data={filteredData}
        renderItemRow={(item) => {
          return (
            <>
              <td>{item.food}</td>
              <td
                style={{
                  backgroundColor:
                    item.result === 'Negative' ? 'rgba(255,0,0,0.15)' : 'transparent',
                    paddingRight: '5px',
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
