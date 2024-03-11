import styles from "./Totalscore.module.css";

const Totalscore = ({score}) => {
    return (
        <>
            <div>
                <h1 className={styles.score} >{score}</h1>
                <p className={styles.total_score} > Total  Score </p>
            </div>
        </>
    )
}

export default Totalscore
