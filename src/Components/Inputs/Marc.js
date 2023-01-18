import styles from '../Inputs/Marc.module.css';


import { AiOutlineSmile, AiFillLayout, AiOutlinePaperClip } from 'react-icons/ai';

const avatar = ( props )=> {
       return <div> 
            <p > {props.img} </p>
       </div>;
};


function Marc() {

    return (
            <form>
            <div className={styles.marc}>
                
                <input type="radio" id="vazio" name="vazio" value="vazio"/>
                <label>Update About page Header {avatar.img=<AiOutlineSmile/>}</label>
            </div>
            <div className={styles.marc}>
                <input type="radio" id="vazio" name="vazio" value="vazio" />
                <label>About Page wordings {avatar.img=<AiOutlineSmile/>}</label>
            </div>
            <div className={styles.new_land}>
                <input type="radio" id="vazio" name="vazio" value="vazio" />
                <label>New landing layout {avatar.img=<AiOutlineSmile/>}</label>
                <br/>
                <AiFillLayout/>
                <AiOutlinePaperClip/>    
            </div>
            <div className={styles.marc}>
                
                <input type="radio" id="vazio" name="vazio" value="vazio"/>
                <label>Update global iconset {avatar.img=<AiOutlineSmile/>}</label>
            </div>

            <div className={styles.marc}>
                <input type="radio" id="vazio" name="vazio" value="vazio" />
                <label>New landing ink +49 number in global footers & navi {avatar.img=<AiOutlineSmile/>}</label>
            </div>
            <div className={styles.new_land}>
                <input type="radio" id="vazio" name="vazio" value="vazio" />
                <label>New case study thumbnails {avatar.img=<AiOutlineSmile/>}</label>    
            </div>
            
            </form>
       
    );
};

export default Marc;