
import { ChangeEvent, useEffect, useState } from "react"
import { Movie } from "./types/Movie"
import  styles from './Movies.module.css'
import { Footer } from "./components/Footer"



const App = ()=>{
  const [movies, setMovies] = useState<Movie[]>([])
  const [loading, setLoading] = useState(false)

  
  
  useEffect(()=>{
    loadMovies()
  },[])
  
  const loadMovies = ()=>{
    setLoading(true)
    fetch('https://api.b7web.com.br/cinema/')
      .then(data => data.json())
      .then((json) => {
        setMovies(json)
        setLoading(false)
      })
      .catch(e=> {
        console.error(e)
        setMovies([])
        setLoading(false)

      })
        
  }
  
  //function with async await
  // const loadMovies = async ()=>{
  //   setLoading(true)
  //   let response = await fetch('https://api.b7web.com.br/cinema/')
  //   let json = await response.json()
  //   setLoading(false)
  //   setMovies(json) 
  // }

  return(
    <div >
      
      {loading &&
      <>
        <div className="flex justify-center text-xl white text-white">Carregando...</div>
        <div className="flex justify-center items-center  ">
          <div className="spinner-border animate-spin  inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden  ">........</span>
          </div>
        </div>
      </>
        
      }

      {!loading && movies.length > 0 &&
        <>

          
          <section className={styles.total}><div>
             HOJE NOS CINEMAS    <br /><span className="text-xs inline-block py-1 px-2.5 leading-none text-end whitespace-nowrap align-baseline font-bold bg-stone-50 w-auto text-black rounded">Total: {movies.length} filmes</span> 
             <p className={styles.pop}></p>
          </div>
          
          </section>
          <div className={styles.grid} >
            {movies.map((item,index)=>(
              <div className={styles.item}>
                <div className={styles.box}>
                  <a target="_blank" className={styles.link} href={`https://www.youtube.com/results?search_query=trailer+${item.titulo}`} >   
                  <img className="p-2 rounded-sm" src={item.avatar} alt="" />
                  
                    </a>
                    <span className={styles.sub}>clique aqui para o trailer!</span>
                    
                </div>
                <div className={styles.text}> <a className={styles.title}  target="_blank" href={`https://www.google.com/search?q=${item.titulo}+tickets`}> {item.titulo}</a> 
                  <span className={styles.tooltip}>clique aqui para ver horarios e cinemas</span>
                </div>
              </div>
              ))}
          </div>
          <Footer/>
        </>
      }
      {!loading && movies.length === 0 &&
        <div className={styles.try}>Tente mais tarde novamente!</div>
      }
      
    </div>
  )
}


export default App

// https://api.b7web.com.br/cinema
