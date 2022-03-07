import { NextLinkComposedProps } from '@/interfaces'
import { LinkProps as MuiLinkProps } from '@mui/material/Link'
import { LinkProps as NextLinkProps } from 'next/link'

export type LinkProps = {
  activeClassName?: string
  as?: NextLinkProps['as']
  href: NextLinkProps['href']
  noLinkStyle?: boolean
} & Omit<NextLinkComposedProps, 'to' | 'linkAs' | 'href'> &
  Omit<MuiLinkProps, 'href'>
