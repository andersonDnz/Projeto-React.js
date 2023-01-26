import styles from "../WebSiteRedesign/styles.css";

import {
  AiFillBell,
  AiOutlineMore,
  AiFillLayout,
  AiOutlinePaperClip,
} from "react-icons/ai";

function Website() {
  return (
    <main>
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
      <form>
        <h2>Today</h2>
        <section className="input1">
          <input 
            type="radio"
            id="vazio" 
            name="vazio" 
            value="vazio" />
          <label>Update About page Header </label>
        </section>

        <h2>Working in Progress</h2>
        <section className="input2">
          <input 
            type="radio" 
            id="vazio" 
            name="vazio" 
            value="vazio" />
          <label>About Page wordings </label>
        </section>

        <section className="input3">
          <div className="inp">
            <input 
              type="radio" 
              id="vazio" 
              name="vazio" 
              value="vazio" />
            <label> New landing layout</label>
          </div>
          <span className="icons">
            <AiFillLayout />
            <AiOutlinePaperClip />
          </span>
        </section>

        <h2>Backlog</h2>
        <section className="input4">
          <input 
            type="radio" 
            id="vazio" 
            name="vazio" 
            value="vazio" />
          <label>Update global iconset </label>
        </section>

        <section className="input5">
          <div className="inp">
            <input
              type="radio" 
              id="vazio" 
              name="vazio" 
              value="vazio" />
            <label>
              New landing (ink +49) number in global footers & navi{" "}
            </label>
          </div>
          <span className="icons">
            <AiFillLayout />
          </span>
        </section>

        <section className="input6">
          <input 
          type="radio" 
          id="vazio" 
          name="vazio" 
          value="vazio" />
          <label>New case study thumbnails</label>
        </section>
      </form>
    </main>
  );
}

export default Website;
