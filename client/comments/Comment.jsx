/**
 * @flow
 */

import React from 'react';

import type {CommentProps} from './types';

import {SubText, Text} from 'shared/Text';

import css from './Comment.scss';


type Props = {};

export class Comment extends React.PureComponent<Props & CommentProps, void> {
  render() {
    return (
      <div className={css.root}>
        <div className={css.metadata}>
          <SubText>{this.props.authorId}</SubText>
          <SubText>{new Date(this.props.createdAt).toLocaleString()}</SubText>
        </div>
        <div className={css.comment}>
          {this.props.videoTimestamp && (
            <Text>
              <div className={css.timestamp}>
                {this.props.videoTimestamp}
              </div>
            </Text>
          )}
          <Text>{this.props.comment}</Text>
        </div>
      </div>
    );
  }
}
