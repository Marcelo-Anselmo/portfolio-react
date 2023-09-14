import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <ul>
          <li>
            <a href="https://www.instagram.com/marcelo_oliveer/" target="blank">
              <FaInstagram size={30} />
            </a>
          </li>
          <li>
            <a href="https://github.com/Marcelo-Anselmo" target="blank">
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcelo-anselmo-41587b280/"
              target="blank">
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
        <p>marcelo.anseldev@hotmail.com</p>
        <p>Marcelo Anselmo © 2023</p>
      </div>
    </>
  );
}

export default Footer;
