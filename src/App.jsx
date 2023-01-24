import {Header} from './components/Header';
import {Post} from './components/Post';
import {Sidebar} from './components/Sidebar';
import styles from './App.module.css';
import './global.css';


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Igor" 
            content="Arquiteto de Soluções Cloud"
            title="Melhor do mundo"
          />
          <Post
            author="Rafaela"
            content="Analista de Dados Senior"
            title="Mais Linda"
          />
        </main>
      </div>  
    </div>
  )
}