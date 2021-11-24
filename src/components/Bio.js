import React from 'react';
import profilePic from '../assets/profile2.jpeg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Arvin Mostafaei`}
          style={{
            marginRight: rhythm(1),
            marginBottom: rhythm(1),
            width: rhythm(6),
            height: rhythm(6),
            borderRadius: '50%',
          }}
        />
        <p style={{ 
          maxWidth: 410,
          marginTop: rhythm(2),
          fontSize: rhythm(0.7)
        }}>
          Personal blog by{' '}
          <a href="https://Arvin.me">Arvin Mostafaei</a>.{' '}
          I&nbsp;explain with words and code.
        </p>
      </div>
    );
  }
}

export default Bio;
