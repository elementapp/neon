/**
 * @flow
 */

import React from 'react';

import css from './VideoPlayer.scss';

import Movie from './movie.mp4';


export class VideoPlayer extends React.PureComponent<{}, void> {
  render() {
    return (
      <video className={css.video} controls={true}>
        <source src={Movie} type="video/mp4" />
      </video>
    );
  }
}
