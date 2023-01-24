import styles from "../Pages/Website.module.css";

import { AiFillBell, AiOutlineMore } from "react-icons/ai";

import Marc from "../components/Marc";



function Website() {
  return (
    <main className={styles.web}>
      <h1>Website Redesign</h1>
      <div className={styles.icones_web}>
        <AiFillBell />
        <AiOutlineMore />
      </div>
      <p>
        Um redesign de site é o processo de aprimoramento de um site para
        melhorar a experiência do usuário e, por conta da diminuição do atrito,
        engajar mais com os clientes-alvo.
      </p>
      <Marc />
    </main>
  );
}

export default Website;
