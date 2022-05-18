import React, { FC } from 'react';
import './Button.css';

interface ButtonProps {}

const Button: FC<ButtonProps> = () => (
  <div className="Button" data-testid="Button">
    Button Component
  </div>
);

export default Button;
