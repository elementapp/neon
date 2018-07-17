/**
 * @flow
 */

import React from 'react';

import css from './Text.scss';


type Props = {};

export const SubText = (props: Props) => <div className={css.subtext} {...props} />;
export const Title = (props: Props) => <div className={css.title} {...props} />;
export const Text = (props: Props) => <div className={css.text} {...props} />;
