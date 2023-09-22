import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'
const RowPost = (props) => {
    const [movies,setMovies] =useState([])
    const [ulrId,setUrlId]=useState('')
    useEffect(() => {
        axios.get(props.url).then (response=>{
            console.log(response.data )
            setMovies(response.data.results)
        })
    },[])
    const opts ={
        height:'390',
        width: '100%',
        playerVars:{
            autoplay:1,
        },
    }
    const handleMovie=(id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }else{
                console.log('trailer not available')
            }
        })
    }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
            {movies.map((obj)=>

        <img onClick={()=>handleMovie(obj.id)} className={props.isSmall? 'smallPoster': 'poster'} alt='poster' src={`${imageUrl+obj.backdrop_path}`} />
            )}

       

        
        </div>
      {ulrId &&  < Youtube opts={opts} videoId={ulrId.key}/> }
    </div>
  )
}

export default RowPost