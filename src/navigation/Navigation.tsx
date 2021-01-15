import React, { useEffect, useRef } from "react"
import ways from 'ways';
import AboutPage from '../components/pages/about'
import IndexPage from '../components/pages/index'

export default function Layout() {

  const aboutRef = useRef();
  const indexRef = useRef();

  const transitionIn = (page) => {
    if (page.current) {
      return page.current.transitionIn;
    }
    return () => {
      console.log("Could not find page")
    }
  }

  const transitionOut = (page) => {
    if (page.current) {
      return page.current.transitionOut;
    }
    return () => {
      console.log("Could not find page")
    }
  }

  useEffect(() => {
    ways.flow('run+destroy'); // run before, destroy after
    ways.use(ways.addressbar);

    ways('/', transitionIn(indexRef), transitionOut(indexRef));
    ways('/about', transitionIn(aboutRef), transitionOut(aboutRef));
    ways.go(ways.pathname());
  }, [])

  return (
    <>
      <AboutPage ref={aboutRef}></AboutPage>
      <IndexPage ref={indexRef}></IndexPage>
    </>
  )
}
