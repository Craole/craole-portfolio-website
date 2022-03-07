import { Layout } from '@/components';
import { BlueRounded, RedRounded, TestButton } from '@/components/Buttons';
import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <title>CRAOLE | Home</title>
      </Head>
      <h1>Home</h1>
      <BlueRounded />
      <RedRounded />
      <TestButton />
      {/* <article className="prose lg:prose-xl"> */}
      <article>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often
          dress up as warm, cheesy loaf for Halloween.
        </p>
        <p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>
      </article>
    </>
  );
};

Home.getLayout = function getLayout(page: typeof Home) {
  return <Layout>{page}</Layout>;
};

export default Home;