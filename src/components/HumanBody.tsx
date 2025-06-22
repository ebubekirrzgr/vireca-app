'use client'

import React, { useState } from 'react'
import { Layout } from '@stellar/design-system'
import HumanPNG from '@/../public/images/body.png'
import Image from 'next/image'

export const HumanBody = () => {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <>
      
      <Layout.Content>
        <div style={{ position: 'relative', width: '300px', margin: "15px" }}>
          <Image
            src={HumanPNG}
            alt="Human"
            style={{ width: '100%', display: 'block' , height: '300px' }}
          />

          {/* Head */}
          <button
            onClick={() => console.log('Navigate to Head')}
            onMouseEnter={() => setHovered('head')}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              top: '1px',
              left: '130px',
              width: '40px',
              height: '50px',
              background:
                hovered === 'head' ? 'rgba(255, 0, 0, 0.3)' : 'transparent',
              border: '2px solid red',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            title="Head"
          />

          {/* Torso */}
          <button
            onClick={() => console.log('Navigate to Torso')}
            onMouseEnter={() => setHovered('torso')}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              top: '50px',
              left: '125px',
              width: '50px',
              height: '100px',
              background:
                hovered === 'torso' ? 'rgba(0, 128, 0, 0.3)' : 'transparent',
              border: '4px solid green',
              borderRadius: '10px',
              cursor: 'pointer',
            }}
            title="Torso"
          />

          {/* Left Arm */}
          <button
            onClick={() => console.log('Left Arm Clicked')}
            onMouseEnter={() => setHovered('left-arm')}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              top: '140px',
              left: '85px',
              width: '25px',
              height: '35px',
              background:
                hovered === 'left-arm'
                  ? 'rgba(0, 0, 255, 0.3)'
                  : 'transparent',
              border: '2px solid blue',
              cursor: 'pointer',
            }}
            title="Left Arm"
          />

          {/* Right Arm */}
          <button
            onClick={() => console.log('Right Arm clicked')}
            onMouseEnter={() => setHovered('right-arm')}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              top: '140px',
              left: '190px',
              width: '25px',
              height: '35px',
              background:
                hovered === 'right-arm'
                  ? 'rgba(0, 0, 255, 0.3)'
                  : 'transparent',
              border: '2px solid blue',
              cursor: 'pointer',
            }}
            title="Right Arm"
          />

          {/* Legs */}
          <button
            onClick={() => console.log('Navigate to Legs')}
            onMouseEnter={() => setHovered('legs')}
            onMouseLeave={() => setHovered(null)}
            style={{
              position: 'absolute',
              top: '160px',
              left: '115px',
              width: '65px',
              height: '135px',
              background:
                hovered === 'legs'
                  ? 'rgba(128, 0, 128, 0.3)'
                  : 'transparent',
              border: '2px solid purple',
              cursor: 'pointer',
            }}
            title="Legs"
          />
        </div>
      </Layout.Content>
    </>
  )
}
