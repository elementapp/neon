/**
 * @flow
 */

import React from 'react';

import {Button} from 'shared/Button';
import {TextField} from 'shared/TextField';

import css from './CommentsHeader.scss';


export class CommentsHeader extends React.PureComponent<{}, void> {
  render() {
    return (
      <div className={css.root}>
        <div>
          <Button>Sort Comments</Button>
        </div>
        <div>
          <TextField placeholder="Search" />
        </div>
      </div>
    );
  }
}
