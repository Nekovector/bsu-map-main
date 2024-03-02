import React from "react";

import "../../custom-bootstrap-coloring.scss";
import css from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div>
        <p className={css.footerTitle}>Интерактивная карта БГУ</p>
        <p className={css.footerText}>&copy; 2023 Белорусский государственный университет</p>
      </div>
    </footer>
  );
}