import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.scss";

export default function Modal({ open, children, onClose }) {
  const ref = useRef();
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={styles.modal} ref={ref} />
      <div className={styles.modalContent}>
        <div className={styles.closeButton} onClick={onClose}>
          X
        </div>
        {children}
      </div>
    </>,
    document.body
  );
}
