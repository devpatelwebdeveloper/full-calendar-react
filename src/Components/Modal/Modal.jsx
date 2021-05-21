import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import styles from "./Modal.module.scss";

export default function CalendarModal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      <div className={styles.modal} />
      <div className={styles.modalContent}>
        <div className={styles.closeButton} onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="#6B6C72"
              d="M13.432 11.984l5.3-5.285a1 1 0 10-1.412-1.416l-5.3 5.285-5.285-5.3a1 1 0 10-1.416 1.411l5.285 5.3L5.3 17.265a1 1 0 101.412 1.416l5.3-5.285L17.3 18.7a1 1 0 101.416-1.412l-5.284-5.304z"
            />
          </svg>
        </div>
        {children}
      </div>
    </>,
    document.body
  );
}
