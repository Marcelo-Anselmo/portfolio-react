import styles from './Skills.module.css'
import javascript from '../../images/Skill/JS.svg'
import html from '../../images/Skill/Html.svg'
import css from '../../images/Skill/Css.svg'
import react from '../../images/Skill/React.svg'
import ts from '../../images/Skill/Ts.svg'

function Skills() {
  return (
    <>
      <div className={styles.skill} id="Skills">
        <h1>Habilidades</h1>
        <p>
          Conheça um pouco das minhas principais habilidades e conhecimentos.
        </p>
        <div>
          <img src={javascript} />
          <img src={html} />
          <img src={css} />
          <img src={react} />
          <img src={ts} />
        </div>
      </div>
    </>
  );
}

export default Skills;
