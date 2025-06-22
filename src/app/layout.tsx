'use client'

import React, { useEffect, useState } from "react"
import { Layout, ThemeSwitch } from "@stellar/design-system"
import ConnectAccount from "@/components/ConnectAccount"
import { SidebarMenu } from "@/components/SidebarMenu"
import { NotificationProvider } from "@/providers/NotificationProvider"
import { WalletProvider } from "@/providers/WalletProvider"
import '@stellar/design-system/build/styles.min.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("sds-theme-dark")
    const isLightMode = document.documentElement.classList.contains("sds-theme-light")

    if (isDarkMode) setTheme("dark")
    else if (isLightMode) setTheme("light")
    else {
      document.documentElement.classList.add("sds-theme-light")
      setTheme("light")
    }
  }, [])

  return (
    <main>
      <NotificationProvider>
        <WalletProvider>
          <Layout.Header
            projectId="VIRECA"
            projectTitle="VIRECA"
            contentRight={
              <>
                <ConnectAccount />
                <ThemeSwitch />
              </>
            }
          />

          <Layout.Content>
            <div
              style={{
                display: "flex",
                backgroundColor:
                  theme === "light" ? "var(--sds-canvas-default)" : "var(--sds-canvas-inverse)",
                color: theme === "light" ? "var(--sds-clr-lilac-09)" : "#fff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "left",
                height: "100%", // opsiyonel
              }}
            >
              <SidebarMenu theme={theme} />

              <div
                style={{
                  flexGrow: 1,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                {children}
              </div>
            </div>
          </Layout.Content>

          <Layout.Footer>
            <span
              style={{
                textAlign: "center",
                display: "block",
                fontSize: "18px",
                fontWeight: "bold",
                color: "var(--sds-clr-mint-12)",
              }}
            >
              {new Date().getFullYear()} VIRECA.{" "}
              <a
                href="https://kozadao.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--sds-clr-mint-12)",
                  textDecoration: "none",
                }}
              >
                KOZA DAO
              </a>{" "}
              was here.
            </span>
          </Layout.Footer>
        </WalletProvider>
      </NotificationProvider>
    </main>
  )
}
