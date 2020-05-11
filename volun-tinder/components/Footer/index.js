import React from 'react';
import css from './footer.module.css';

function Footer() {
  return (
    <div className={css.footer}>
      <p id={css.text}>With love from</p>
      <img id={css.logoFooter} src="/VOLT_192.png" alt="logo" />
    </div>
  );
}

export default Footer;
