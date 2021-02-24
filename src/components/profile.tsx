import styles from'../styles/components/Profile.module.css';

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/lyaepso.png" alt='Foto de Eliane'/>
            <div>
                <strong>Eliane Oliveira</strong>
                    <p>
                        <img src="icons/level.svg" alt="level"/>
                        Level 1
                    </p>
            </div>    
        </div>
        
    )
}