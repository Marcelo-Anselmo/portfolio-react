import styles from '../elements/Card.module.css'
import ButtonB from '../elements/ButtonB';


function Card({img, title, techs, desc, repo, site}) {
    return (
      <>
        <div className={styles.card}>
          <a href={site} target='blank'>
            <img src={img} alt='ERROR'/>
          </a>
          <section>
            <h2>{title}</h2>
            <h3><strong>Tecnologias:</strong> {techs} </h3>
            <p>Descrição: {desc} </p>
            <ButtonB text='Acesse o repositório' link={repo} />
          </section>
        </div>
      </>
    );
}

export default Card