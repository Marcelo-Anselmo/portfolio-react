import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA';
// import ButtonB from '../elements/ButtonB';

function Presentation() {
  return (
    <>
      <div className={styles.presentation} id="Presenation">
        <h4>
          <strong>Bem-vindo ao meu Portfólio</strong>
        </h4>
        <h1>Olá, eu sou Marcelo Anselmo!</h1>
        <p>
          Sou um apaixonado por tecnologia e soluções inovadoras.Como Product{" "}
          <br />
          Manager, eu tenho o compromisso de resolver problemascomplexos e{" "}
          <br />
          trazer resultados excepcionais para os negócios.Meus projetos já{" "}
          <br />
          geraram milhões de reais em receita anualestou sempre em busca de{" "}
          <br />
          novos desafios para superar.
        </p>
        <ButtonA
          link="https://github.com/Marcelo-Anselmo"
          text="Conecte-se comigo!!"
        />
      </div>
    </>
  );
}

export default Presentation;
