/**
 * @flow
 */

import React from 'react';

import {CommentSection} from 'comments/CommentSection';
import type {CommentThreadProps} from 'comments/types';
import {Button} from 'shared/Button';
import {Title} from 'shared/Text';

import {VideoPlayer} from './VideoPlayer';

import css from './Video.scss';


type Props = {
  commentThreads: Array<CommentThreadProps>,
};

export class Video extends React.PureComponent<Props, void> {
  render() {
    return (
      <div className={css.video}>
        <div className={css.header}>
          <div />
          <div className={css.title}>
            <Title>Animals</Title>
          </div>
          <Button>Share</Button>
        </div>
        <VideoPlayer />
        <div className={css.divider} />
        <CommentSection commentThreads={this.props.commentThreads} />
      </div>
    );
  }
}
