
import styles from './NumberSelector.module.css'

const NumberSelector = ({ setSelectedNumber, selectedIdx, setSelectedIdx, error, setError }) => {

const numberArr = [1, 2, 3, 4, 5, 6];
    const numberSelectorHandler = (val) => {
        setSelectedNumber(val);
        setError("");
    }

    return (
        <>
            <div className={styles.box_container} >

                {numberArr.map((val, i) => (
                    <div
                        key={i}
                        className={selectedIdx === i ? styles.box_checked : styles.box}
                        onClick={() => {
                            numberSelectorHandler(val)
                            setSelectedIdx(i);
                        }}>
                        {val}
                    </div>
                ))}
            </div>

            <h2 className={styles.select_number} >Select number</h2>
            <p className={styles.error}>{error}</p>

        </>
    )
}

export default NumberSelector
