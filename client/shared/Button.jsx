/**
 * @flow
 */

import classNames from 'classnames';
import React from 'react';

import css from './Button.scss';


type Props = {
  disabled: boolean,
  loading: boolean,
  primary: boolean,
};

export class Button extends React.PureComponent<Props, void> {
  static defaultProps = {
    disabled: false,
    loading: false,
    primary: true,
  };

  render() {
    const {disabled, loading, primary, ...props} = this.props;
    const classes = classNames(css.button, {
      [css.disabled]: disabled,
      [css.loading]: loading,
      [css.primary]: primary,
    });

    return (
      <button {...props} className={classes} disabled={disabled || loading} />
    );
  }
}
