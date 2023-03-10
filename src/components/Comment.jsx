import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Comment () {
    return (
        <div classaName={styles.comment}>
            <Avatar hasBorder={false} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt=""/>
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}> 
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Igor Reis</strong>
                            <time title="11 de Maio as 8:13h" datetime="2022-05-11">Cerca de 1h atrás</time>
                        </div>
                        <button title="Deletar comentário"> 
                            <Trash size={20}/>
                        </button>
                    </header>
                    <p>Muito bom, parabéns!!</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}