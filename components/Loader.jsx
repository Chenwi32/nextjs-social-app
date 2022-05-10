import styles from './componentStyles/Loader.module.css'
const Loader = ({ show }) => {
    return show ? <div className={styles.loader}></div> : null;
}

export default Loader;