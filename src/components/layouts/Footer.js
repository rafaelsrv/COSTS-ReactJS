import {FaInstagram, FaLinkedin} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    //Footer contendo links.
    return(
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
            
                 <li>
                    <FaInstagram/>   
                 </li>
                 <li>
                    <FaLinkedin/> 
                </li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs</span> &copy; 2022.
            </p>
        </footer>

    )
}
export default Footer