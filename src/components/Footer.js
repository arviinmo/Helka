import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}>
        <a
          href="https://arvin.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Personal website
        </a>{' '}
        &bull;{' '}
        <a
          href="https://github.com/arviinmo"
          target="_blank"
          rel="noopener noreferrer"
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.linkedin.com/in/arvinmostafaei/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </a>
      </footer>
    );
  }
}

export default Footer;
