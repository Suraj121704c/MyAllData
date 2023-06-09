import styles from "./Greetings.module.css";

//!SECTION --> Module .css make the css only for this file it is not going to overwrite to other file

function Greetings(){
    return <>
    <h1>
      Greetings , Earthlings
    </h1>
    
    {/* !SECTION -- this will give this class a unique className  */}

    <h3 className={styles.App}>
      Hola
    </h3>
    </>
  }

  export default Greetings;