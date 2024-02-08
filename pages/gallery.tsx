import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config';

export default function MyApp({pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO}/>
      <div>
        <h1>aaa</h1>
        <p>test</p>
        
      </div>
    </>
  )
}