import { Post } from './components/Post';
import { Header } from './components/Header';
import './global.css';

import styles from './App.module.css'
import { Sidebar } from './components/Sidebar';

export function App() {
  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
        <Post author="Leonardo Prado" content="Lorem ipsum lavdi rupt sit amet consectetur adipisicing alit. Assumenda Odio aliquam liet factory luxury activie vision."/>

        <Post author="João da Silva" content="Um novo post para preencher conteúdo"/>

        </main>
      </div>
      
    </div>
  )
}


