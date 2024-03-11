
import styles from './RollDice.module.css'

const RollDice = ({currentDice , roll}) => {

  return (
    <>
      <div className={styles.rolldice_container} >
        <img onClick={roll} src={`./images/dice_${currentDice}.png`} alt="Dice image" />
        <p>Click to roll the Dice</p>
      </div>
    </>
  )
}

export default RollDice
