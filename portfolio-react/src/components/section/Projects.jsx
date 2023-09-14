import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card';
import bootcampdnc from "../../images/Projects/bootCampdnc.png"
import ccxp from  '../../images/Projects/CCXP.png'
import grprod from "../../images/Projects/Grprod.png";

function Projects() {
  return (
    <>
      <div className={styles.projects} id="Projects">
        <h1>Projetos</h1>
        <Card
          img={ccxp}
          title="ProjetoCCXP"
          techs="Html, Css, Javascript"
          desc="Projeto CCXP - nesse projeto foi desenvolvido uma página de um evento geek, utilizando de novas funcionalidades, como uso de countdown, play de vídeo, seleção de ingressos e muito mais."
          repo="https://github.com/Marcelo-Anselmo/CCXP_Desafio"
          site="https://marcelo-anselmo.github.io/CCXP_Desafio/"
        />
        <Card
          img={bootcampdnc}
          title="Bootcamp - DNC"
          techs="HTML, CSS e JS"
          desc="O Bootcamp consiste em, um site formulário de inscrição para a bootcamp com opções e inputs que são usadas no nosso dia a dia."
          repo="https://github.com/Marcelo-Anselmo/bootCamp_DNC"
          site="https://marcelo-anselmo.github.io/bootCamp_DNC/"
        />
        <Card
          img={grprod}
          title="Gerenciado de Produtos"
          techs="HTML, CSS e JS"
          desc="Esse é um simples gerenciador de produtos, no qual é possível, Adicionar, Cancelar, Deletar, sendo possível o organizar em uma tabela com id, nome e preço do produto."
          repo="https://github.com/Marcelo-Anselmo/Gerenciador_de_Produtos"
          site="https://marcelo-anselmo.github.io/Gerenciador_de_Produtos/"
        />
        <ButtonB
          text="Acesse meu repositório"
          link="https://github.com/Marcelo-Anselmo?tab=repositories"
        />
      </div>
    </>
  );
}

export default Projects
