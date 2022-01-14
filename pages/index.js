import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Alert from '../components/alert';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hey, I'm Ben! I'm a software engineer at <Alert type="error">W.W. Grainger</Alert> 
          learning <Alert type="success">React and NextJS</Alert>.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}