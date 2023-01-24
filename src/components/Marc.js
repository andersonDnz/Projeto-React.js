import styles from './Marc.module.css';


import { AiFillLayout, AiOutlinePaperClip } from 'react-icons/ai';



function Marc() {

       
    return (
            <form >
               <h2>Today</h2> 
            <section className={styles.input1}>
                <input type="radio" id="vazio" name="vazio" value="vazio" />
                <label>Update About page Header </label>
            </section> 

                <h2>Working in Progress</h2>
            <section className={styles.input2}>
                <input  type="radio" id="vazio" name="vazio" value="vazio"/>
                <label>About Page wordings </label>
            </section>

            <section className={styles.input3}>
                <input type="radio" id="vazio" name="vazio" value="vazio"/>
                <label> New landing layout 
                </label> 
                <div className={styles.icones}>
                    <AiFillLayout/>
                    <AiOutlinePaperClip/>   
                </div>    
            </section>

                <h2>Backlog</h2>
            <section className={styles.input4}>
                
                <input type="radio" id="vazio" name="vazio" value="vazio"/>
                <label>Update global iconset </label>
            </section>

            <section className={styles.input5}>
                <input type="radio" id="vazio" name="vazio" value="vazio"/>
                <label>New landing (ink +49) number in global footers & navi </label>
            </section>

            <section className={styles.input6}>
                <input type="radio" id="vazio" name="vazio" value="vazio"/>
                <label>New case study thumbnails</label>    
            </section>
            
            </form>
      
    );
};

export default Marc;