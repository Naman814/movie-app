
import { useEffect, useState } from 'react';
import { Button,Jumbotron} from 'react-bootstrap'
import MovieCard from './MovieCard'
function App() {
// eslint-disable-next-line
 var [movies,setMovies]=useState([])
 var [query,setQuery]=useState()
   
 
    useEffect(()=>{
      fetch('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=c1e7211b25d123b4904fbe4272520058&language=en-US&page=1')
      .then(response => response.json())
      .then((data) => {
          setMovies(data.results)
      })

    },[]);
   

    const handleClick=(e)=>{
        
      e.preventDefault()
      console.log(query)

      fetch('https://api.themoviedb.org/3/search/movie?&api_key=c1e7211b25d123b4904fbe4272520058&query='+query)
      .then(response => response.json())
      .then((data) => {
        console.log(data.results)
       setMovies(data.results)
      })
  
    }
    

  return (
    <div className="container" style={{textAlign:"center" ,  backgroundColor: '#2b2e4a'}}>
    <div className="row-sm">
    <Jumbotron style={{backgroundColor:"#ffab73", border:"solid"}} >
  <h1> <b>Search your movie here !</b></h1>
  <p>
   Application for searching your desired movies.
  </p>
  <div className="input-group">
  <input type="text" className="form-control rounded" value={query}  placeholder="Search"  onChange={(e)=>{setQuery(e.target.value)}} aria-label="Search"
    aria-describedby="search-addon" />
  <Button variant="primary"  onClick={handleClick}>click</Button>{' '}
</div>
</Jumbotron>
</div>

  <div className="row" style={{margin:'auto', paddingLeft:'2.4rem'}}>
     { movies.map((movie)=>{
        return <MovieCard title={movie.title} overview={movie.overview} date={movie.release_date}  vote={movie.vote_average} path={movie.poster_path}/> 
      })
     }
     </div>

</div> 

);}

 


export default App;
