import Head from 'next/head';
import styles from '../styles/pages/index.module.css';

export default function Welcome(){
    return (
        <div className={styles.container}>
            <Head>
                <title>Início | Move.it</title>
            </Head>
            <h1 className={styles.h1index}><a href="/moveit">MoveIt</a></h1>
            <h1>Seja Bem Vindo ao Gerenciador de Tempo Move-it</h1>
            <h2>Aumente sua Produtividade e Gerencie melhor seu tempo e sua Saúde!</h2>
        </div>
    )
}