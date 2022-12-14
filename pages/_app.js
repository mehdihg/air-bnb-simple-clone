import '../styles/globals.css'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import ProgressBar from "@badrap/bar-of-progress";
import { Router } from 'next/router';
const progress = new ProgressBar({
  delay:100,
  size:4,
  color:'#FE595E',
  
});
Router.events.on('routeChangeStart',progress.start)
Router.events.on('routeChangeComplete',progress.finish)
Router.events.on('routeChangeError',progress.finish)
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
