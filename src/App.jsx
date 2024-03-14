import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';



const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/LeoAlvarenga404.png',
      name: 'Leonardo Prado',
      role: 'namorado da luanny   '
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
    },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-02-29 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educador @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋'},
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻',
    },
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-02-28 19:50:00')
  },

];

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return(
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              /> 
            )
          })}
        </main>
      </div>
      
    </div>
  )
}


