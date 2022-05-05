import { Bars } from 'react-loader-spinner';
import styles from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={styles.wrapper}>
      <Bars
        color="#5F9EA0"
        height={50}
        width={50}
        ariaLabel="loading-indicator"
      />
    </div>
  );
};
