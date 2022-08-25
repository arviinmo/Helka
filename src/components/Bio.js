import React from 'react';
import profilePic from '../assets/pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          marginBottom: rhythm(2),
          flexDirection: 'column',
        }}
      >
        <img
          src={profilePic}
          alt={`Arvin Mostafaei`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: rhythm(0),
            width: rhythm(8),
            height: rhythm(8),
            borderRadius: '50%',
            margin: 'auto',
            justifycontent: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        />
        <p
          style={{
            maxWidth: 410,
            justifycontent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            margin: 'auto',
            fontSize: rhythm(0.8),
            marginTop: rhythm(1),
            marginBottom: rhythm(2.5),
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Personal blog by{' '}
          <a href="https://arvin.vercel.app" target="_blank">
            Arvin Mostafaei
          </a>
          . I&nbsp;explain with words and code.
        </p>
      </div>
    );
  }
}

export default Bio;
