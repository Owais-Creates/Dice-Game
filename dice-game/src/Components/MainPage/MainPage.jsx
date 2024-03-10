import styles from "./MainPage.module.css";

const MainPage = ({ toggle }) => {
    return (
        <>
            <div className={styles.container}>

                <div>
                    <img src="/public/images/diced.png" alt="" />
                </div>

                <div>
                    <h1 className={styles.heading}>Dice Game</h1>

                    <button className={styles.primary_btn} onClick={toggle} >Start Game</button>
                </div>

            </div>
        </>
    )
}

export default MainPage
