import { styled } from '@stitches.js'
import endpoints from '@/pageEndPoints.json'
import ReplacedTexts from '@/components/primitives/ReplacedTexts'
import Panel from '@/components/common/Panel'
import NextLink from '@/components/common/NextLink'

const HeroTexts = ['TWE TWE', '퉤 퉤', '잊어버리지 않기 위한', '나만의 📦']

function Home() {
  return (
    <Container>
      <Box>
        <HeroWrap>
          <Content>
            <ReplacedTexts texts={HeroTexts} />
          </Content>
        </HeroWrap>
        {/* TODO: twe lists with ordering, filtering, searching... */}
        <Panel
          css={{
            pt: '$5',
          }}
        >
          <List>
            {endpoints.routes.map((route, idx) => (
              <ListItem key={idx}>
                <NextLink
                  css={{
                    textDecoration: 'none',
                    color: '$blue10',
                    fontWeight: 'bold',
                    br: '$2',
                    border: '1px solid $colors$mauve10',
                    display: 'block',
                    width: '100%',
                    p: '$2',
                    transition: 'all .2s ease',

                    '@hover': {
                      '&:hover': {
                        color: '$blue11',
                        border: '1px solid $colors$mauve11',
                        bs: '$interactiveShadow2',
                        bc: '$mauve2',
                      },
                    },
                  }}
                  href={route.path}
                >
                  {route.name}
                </NextLink>
              </ListItem>
            ))}
          </List>
        </Panel>
      </Box>
    </Container>
  )
}

const Container = styled('section', {
  height: '100%',
  display: 'flex',
})

const Box = styled('div', {
  width: '100%',
})

const HeroWrap = styled('div', {
  backgroundImage:
    'linear-gradient(90deg, $colors$purple7 0%, $colors$crimson7 100%);',
})

const Content = styled('h1', {
  m: 0,
  minHeight: '200px',
  color: '$hiContrast',

  display: 'flex',
  jc: 'center',
  ai: 'center',
})

const List = styled('ul', {
  p: 0,
  m: 0,
  listStyle: 'none',

  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

const ListItem = styled('li', {})

export default Home
