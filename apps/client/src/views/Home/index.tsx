import {
  BlueRounded,
  ButtonAppBar,
  Layout,
  MediaCard,
  RedRounded,
  TestButton,
} from '@/components'
import { Button } from '@mui/material'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <Head>
        <title>CRAOLE | Home</title>
      </Head>
      <ButtonAppBar />
      <MediaCard />
      <BlueRounded />
      <RedRounded />
      <TestButton />
      <article className="prose lg:prose-xl">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
        <div className="grid-rows-1 grid-cols-3 justify-center">
          <Button variant="text" className="px-4 py-2 rounded-md text-base">
            Text
          </Button>
          <Button variant="contained" className="bg-blue-700 m-2">
            Contained
          </Button>
          <Button variant="outlined">Outlined</Button>
        </div>
      </article>
    </>
  )
}

Home.getLayout = function getLayout(page: typeof Home) {
  return <Layout>{page}</Layout>
}

export default Home
