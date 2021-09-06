import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode;
};
function Button({ children }: ButtonProps): JSX.Element {
  return <button className={classes.button}>{children}</button>;
}

export default Button;
