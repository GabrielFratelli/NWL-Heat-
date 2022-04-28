import { api } from '../../services/api'

import styles from "./styles.module.scss";

export function MessageList() {
useEffect(() => {}, [])
}

import logoImg from "../../assets/logo.svg";
import { useEffect } from 'react';

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/GabrielFratelli.png"
                alt="Gabriel Fratelli"
              />
            </div>
            <span>Gabriel Fratelli</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/GabrielFratelli.png"
                alt="Gabriel Fratelli"
              />
            </div>
            <span>Gabriel Fratelli</span>
          </div>
        </li>

        <li className={styles.message}>
          <p className={styles.messageContent}>
            Não vejo a hora de começar esse evento, com certeza vai ser o melhor
            de todos os tempos, vamooo pra cima! 🔥🔥
          </p>
          <div className={styles.messageUser}>
            <div className={styles.userImage}>
              <img
                src="https://github.com/GabrielFratelli.png"
                alt="Gabriel Fratelli"
              />
            </div>
            <span>Gabriel Fratelli</span>
          </div>
        </li>

      </ul>
    </div>
  );
}