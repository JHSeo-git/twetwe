import NextLink from '@/components/common/NextLink'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <NextLink href="/">Home</NextLink>
      <NextLink css={{ ml: '$2' }} href="https://github.com/JHSeo-git">
        github
      </NextLink>
    </div>
  )
}

export default Home
