import Link from 'next/link';
import styles from './PresentationEspacePro.module.css';
import SimpleWithBabily from './SimpleWithBabily';
import Cards from './Cards';

export default function PresentationEspaceEntreprise() {
  return (
    <>
      <div className={styles.sectionEspace}>
        <section className={styles.sectionPresEspacePro}>
          <h1 className={styles.titlePres}>Vous êtes une entreprise</h1>
          <p className={styles.textPresPro}>
            Vous n'avez pas de crèche entreprise, mais avez à coeur de proposer
            un service de ce type à vos salariés? Babily est l'intermédiaire qui
            facilitera le lien entre parents et crèches de leur choix.
          </p>
          <div className={styles.avionPapier} />
        </section>
        <section className={styles.sectionPresBabily}>
          <div className={styles.presBerceaux}>
            <div className={styles.titleBerceaux}>
              Les berceaux entreprises sont...
            </div>
            <div className={styles.textBabily}>
              <p>
                Un <b>investissement conséquent</b> pour un avantage{' '}
                <b>réservé à un nombre restreint</b>
                de collaborateurs-parents
              </p>
              <hr className={styles.ligneRouge} />
              <p>
                Des <b>places achetées garanties</b>, mais <b>non occupées</b> à
                pleins temps (congés, maladie, ...)
              </p>
            </div>
          </div>
          <div className={styles.presBabily}>
            <div className={styles.titleBabily}>Aujourd'hui avec Babily :</div>
            <div className={styles.textBabily}>
              <p>
                <b>BOptimisez votre investissement !</b>
                <br /> Payez ce dont vos collaborateurs ont besoin
              </p>
              <hr className={styles.plusBleuHorizontal} />
              <hr className={styles.plusBleuVertical} />
              <p>
                Proposez-leur <b>un avantage ajusté à leurs besoins</b>
                (emploi du temps, habitudes de vie, ...)
              </p>
              <hr className={styles.plusBleuHorizontal} />
              <hr className={styles.plusBleuVertical} />
              <p>
                <b>Démocratisez ce privilège</b>, fidélisez le plus grand nombre
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.sectionPres}>
        <SimpleWithBabily pageEntreprise />
        <div className={styles.containerContact}>
          <p className={styles.bien_etre}>Plus de bien être pour tous !</p>
          <Link href="/contact">
            <a className={styles.btn}>Contactez-nous !</a>
          </Link>
          <Cards />
        </div>
      </section>
    </>
  );
}
