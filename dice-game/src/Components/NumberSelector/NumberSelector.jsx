
import { useState } from 'react';
import styles from './NumberSelector.module.css'

const NumberSelector = ({setSelectedNumber, selectedNumber}) => {

    const numberArr = [1, 2, 3, 4, 5, 6];
    
    const [selectedIdx, setSelectedIdx] = useState(null);

    return (
        <>
            <div className={styles.box_container} >

                {numberArr.map((val, i) => (
                    <div
                        key={i}
                        className={selectedIdx === i ? styles.box_checked : styles.box}
                        onClick={() => {
                            setSelectedNumber(val);
                            setSelectedIdx(i);
                        }}>
                        {val}
                    </div>
                ))}
            </div>

            <h2 className={styles.select_number} >Select number</h2>
        </>
    )
}

export default NumberSelector
