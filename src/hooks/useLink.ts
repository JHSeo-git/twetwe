type LinkType = {
  type: 'Internal' | 'External'
  href: string
}

export default function useLink(href: string): LinkType {
  const isExternal = !href.startsWith('/')

  return {
    type: isExternal ? 'External' : 'Internal',
    href,
  }
}
