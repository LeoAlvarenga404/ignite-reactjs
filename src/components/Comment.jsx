import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

export function Comment({ content, onDeleteComment }) {

  const [like, setLike] = useState(0)

  function handleGiveLike(){
    setLike(like + 1)
  }


  function handleDeleteComment() {
    console.log('deletar')

    onDeleteComment(content)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/LeoAlvarenga404.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Prado</strong>
              <time title='26 de fevereiro as 20:29' dateTime='2022-05-11 20:29'>Cerca de 1h atrás </time>

            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p className={styles.content}>{content}</p>
        </div>
        <footer>
          <button onClick={handleGiveLike}>
            <ThumbsUp/>
            Aplaudir <span>{like}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}