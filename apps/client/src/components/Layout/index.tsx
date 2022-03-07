import { PageProps } from '@/interfaces'
import React from 'react'
import Footer from './Footer'
import Head from './Head'
import Styles from './styles.module.css'

export default function Layout({ children, meta }: PageProps) {
  return (
    <div className={Styles.page}>
      <Head meta={meta} />
      {/* <Hero /> */}
      <main className={Styles.main}>{children}</main>
      {/* <footer className={Styles.footer_sm}>
        <nav>
          <h1>Footer</h1>
        </nav>
        <h2>Craole</h2>
      </footer> */}
      <Footer />
    </div>
  )
}
