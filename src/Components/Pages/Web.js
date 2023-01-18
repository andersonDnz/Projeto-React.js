import styles from '../Pages/Web.module.css';

import { AiFillBell, AiOutlineMore } from 'react-icons/ai';


import Marc from '../Inputs/Marc';




function Web( {img} ) {
    return(
        <div className={styles.web}>
        
        <h1>Website Redesign</h1>
        <div className={styles.not}>
            <AiFillBell/>
            <AiOutlineMore/>
            {img="imagem"}
        </div>   
            <p className={styles.paragrafo}>Um redesign de site é o processo de aprimoramento de um site para melhorar a experiência do usuário e, por conta da diminuição do atrito, engajar mais com os clientes-alvo.</p>
            <Marc/>
        </div>

        
    );
};

export default Web;