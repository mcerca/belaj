import styles from './Header.module.css';

export const Header = () => {
  return (
    <section className={styles.header}>
      <div className="container">
        <div
          className={`flex align-items-center space-between ${styles.headerContent}`}
        >
          <h1>BelaJ</h1>

          <nav>
            <ul>
              <li>
                <a href="">item-1</a>
              </li>
              <li>
                <a href="">item-2</a>
              </li>
              <li>
                <a href="">item-3</a>
              </li>
              <li>
                <a href="">item-4</a>
              </li>
              <li>
                <a href="">item-5</a>
              </li>
              <li>
                <a href="">item-6</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};
