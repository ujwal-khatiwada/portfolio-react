"use client";


import React from 'react'
import Nav from './nav'
import { SessionProvider } from 'next-auth/react'

export function Navbar({session}) {
  return (
    <div>
        <SessionProvider session={session}>
            <Nav />
        </SessionProvider>
    </div>
  )
}