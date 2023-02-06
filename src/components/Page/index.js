import React from 'react'
import About from '../About'
import Portfolio from '../Portfolio'
import Contact from '../Contact'
import Resume from '../Resume'
import PageContent from '../PageContent'
import Nav from '../Nav'

function Page({ currentPage }) {

  const showPage = () => {
    switch (currentPage.name) {
      case 'about me':
        return <About />;
      case 'portfolio':
        return <Portfolio />;
      case 'contact':
        return <Contact />;
      case 'resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  return (
    <section>
    <Nav></Nav>
      <PageContent>{showPage()}</PageContent>
    </section>
  );
}
export default Page;