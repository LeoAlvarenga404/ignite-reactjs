import styles from './Post.module.css'

export function Post(){
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/LeoAlvarenga404.png"/>
          <div className={styles.authorInfo}>
            <strong>Leonardo Prado</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='26 de fevereiro as 20:29' dateTime='2022-05-11 20:29'>Publicado há 1h </time>
      </header>

      <div className={styles.content}>
      <p>Fala pessoal 👋</p>

        <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p>
          <a href=""> #uiux </a>
          <a href=""> #userexperience  </a>
          <a href=""> #rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>     
          <button type="submit">Publicar</button>
        </footer>   
      </form>
    </article>  )
}