import '../styles/globals.css'
import '../styles/mediaQuaries.css'
import { SkeletonTheme } from 'react-loading-skeleton'

function MyApp({ Component, pageProps }) {
  return (
    <SkeletonTheme baseColor="#F0F2F5" highlightColor="rgba(255,255,255,0.5)">
      <Component {...pageProps} />
    </SkeletonTheme>
  ) 
}

export default MyApp
