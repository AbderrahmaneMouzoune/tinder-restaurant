import React from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>Hello from room layout</h1>
      {children}
    </main>
  )
}
