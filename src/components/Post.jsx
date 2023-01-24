import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
    return (
    <article className={styles.post}>
        <header className={styles.hdr}>
            <div className={styles.author}>
                <Avatar src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
                <div className={styles.authorInfo}>
                    <strong>Igor Reis</strong>
                    <span>Solution Cloud Architect </span>
                </div>
            </div>

            <time title="07 de Dezembro de 2022"dateTime="2022-12-07 20:00:00">Publicado há 1h</time>
        </header>

        <div className={styles.content}>
            <p>Fala galera!</p> 
            <p>Acabei de subir mais um evento no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare.</p>
            <p><a href="">jaine.design/doctorcare</a></p>
            <p>
                <a href="">#nlw</a>{' '}
                <a href="">#rocketseat</a>{' '}
                <a href="">#igorreis</a>
            </p>    
        </div>

        <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            
            <textarea
                placeholder="Deixe um comentário"
            />
            <footer>
                <button type="submit">Publicar</button>
            </footer>    
        </form>

            <div className={styles.commentList}>   
                <Comment />
                <Comment />
                <Comment />
            </div>
            
    </article>
    )
}