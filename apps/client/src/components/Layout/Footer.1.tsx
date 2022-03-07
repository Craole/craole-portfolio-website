// import Link from 'next/link';
import { Facebook, GitHub, Twitter, YouTube } from '@/components/Icons'
import { Link, LinkExternal, Paths } from '@/helpers'
import { useCurrentPath } from '@/hooks'
import { PageProps } from '@/interfaces'
import classNames from 'classnames'
import React from 'react'
import Styles from './styles.module.css'

export default function Footer({ children, meta }: PageProps) {
  return (
    <footer className={Styles.footer}>
      <nav className={Styles.footer_nav_site} aria-label="primary navigation">
        <NavLink href={Paths.home} label="Home" />
        <NavLink href={Paths.portfolio} label="Work" />
        <NavLink href={Paths.about} label="About" />
        <NavLink href={Paths.contact} label="Contact" />
      </nav>
      <div className={Styles.footer_seperator1}></div>
      <nav className={Styles.footer_nav_social} aria-label="social media links">
        <LinkExternal
          href={Paths.external.github}
          title="GitHub"
          className={Styles.footer_github}
        >
          <GitHub />
        </LinkExternal>
        <LinkExternal
          href={Paths.external.linkedin}
          title="LinkedIn"
          className={Styles.footer_linkedin}
        >
          <Facebook />
        </LinkExternal>
        <LinkExternal
          href={Paths.external.instagram}
          title="Instagram"
          className={Styles.footer_instagram}
        >
          <GitHub />
        </LinkExternal>
        <LinkExternal
          href={Paths.external.upwork}
          title="Upwork"
          className={Styles.footer_upwork}
        >
          <GitHub />
        </LinkExternal>
        <LinkExternal
          href={Paths.external.youtube}
          title="YouTube"
          className={Styles.footer_youtube}
        >
          <YouTube />
        </LinkExternal>
        <LinkExternal
          href={Paths.external.twitter}
          title="Twitter"
          className={Styles.footer_twitter}
        >
          <Twitter />
        </LinkExternal>
      </nav>
      <div className={Styles.footer_seperator2}></div>
      <div className={Styles.footer_branding}>
        <Link href="/">
          <a>Craole</a>
        </Link>
        <div>
          <small>© Craole {new Date().getFullYear()} </small>
          {/* <p>© 2022, Craole</p> */}
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

function NavLink({ label, href }: { label: string; href: string }) {
  const currentPath = useCurrentPath()

  return (
    <Link
      href={href}
      className={classNames({
        [Styles.active]: currentPath === href,
      })}
    >
      {label}
    </Link>
  )
}
