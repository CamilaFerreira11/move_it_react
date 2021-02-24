import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/camilaferreira11.png" alt="Camila Ferreira" />
      <div>
        <strong>Camila Ferreira</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 0
        </p>
      </div>
    </div>
  );
}
