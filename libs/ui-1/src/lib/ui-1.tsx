import styles from './ui-1.module.css';

/* eslint-disable-next-line */
export interface Ui1Props {}

export function Ui1(props: Ui1Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Ui1!</h1>
    </div>
  );
}

export default Ui1;
