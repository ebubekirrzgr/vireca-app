'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button, Icon } from '@stellar/design-system'

type SidebarMenuProps = {
  theme: 'light' | 'dark'
}

export function SidebarMenu({ theme }: SidebarMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const bgColor =
    theme === 'dark' ? 'var(--sds-clr-pink-03)' : 'var(--sds-clr-pink-03)'

  return (
    <>
      <Button
        size="sm"
        variant="secondary"
        icon={<Icon.Menu01 />}
        title="Menüyü Aç/Kapat"
        onClick={() => setIsOpen((prev) => !prev)}
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          marginTop: '1rem',
          zIndex: 11,
          position: 'relative',
        }}
      />

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '100px',
            left: 0,
            width: '250px',
            height: '80vh',
            backgroundColor: bgColor,
            borderRight: '1px solid var(--sds-canvas-stroke)',
            zIndex: 5,
            padding: '1rem',
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '1rem' }}>
              <Button
                variant="secondary"
                size="sm"
                isFullWidth
                icon={<Icon.Activity />}
                onClick={() => {
                  router.push('/')
                  setIsOpen(false)
                }}
              >
                Dashboard
              </Button>
            </li>
            <li style={{ marginBottom: '1rem' }}>
              <Button
                variant="secondary"
                size="sm"
                isFullWidth
                icon={<Icon.Drop />}
                onClick={() => {
                  router.push('/blood-analysis')
                  setIsOpen(false)
                }}
              >
                Blood Analysis
              </Button>
            </li>
            <li>
              <Button
                variant="secondary"
                size="sm"
                isFullWidth
                icon={<Icon.LinkBroken02 />}
                onClick={() => {
                  router.push('/allergies')
                  setIsOpen(false)
                }}
              >
                Allergies
              </Button>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
