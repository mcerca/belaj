import styles from './Promotion.module.css';

export const Promotion = () => {
  return (
    <section className={styles.pitchBar}>
      <div className={`container ${styles.pitchBarContainer}`}>
        <p>
          <strong>50% OFF</strong> Todos os <strong>Colares</strong>{' '}
          <a href="" title="Venha conferir">
            confira
          </a>
        </p>
      </div>
    </section>
  );
};
