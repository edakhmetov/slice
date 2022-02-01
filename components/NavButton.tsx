import React from 'react';
import styles from '../styles/Button.module.css';

type NavButtonProps = {
  type: "button" | "submit",
  className: string,
  children?: React.ReactNode;
  onClick?: () => void
}

const NavButton = React.forwardRef<HTMLButtonElement, NavButtonProps>(({children, className, onClick, type}, ref) => {
  return (
    <button 
    onClick={onClick} type={type} className={className} ref={ref}>
      {children}
    </button>
  )
})

export default NavButton;