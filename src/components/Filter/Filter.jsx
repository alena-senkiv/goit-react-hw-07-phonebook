import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import { filter } from 'redux/filterSlice';

export const Filter = () => {
  const value = useSelector(state => state.filter);

  const dispatch = useDispatch();
  return (
    <div className={styles.filter}>
      <label className={styles.filterLabel}>
        Find contacts by name
        <input
          className={styles.filterInput}
          type="text"
          name="filter"
          value={value}
          onChange={e => dispatch(filter(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};
