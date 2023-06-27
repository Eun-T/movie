import React from 'react'
import './movie.css'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const Movie = ({movie}) => {

  let {id} = useParams()
  let data = []


  let movieList = movie.find(ele => ele.id == id)
  // movie.map(ele => {
  //   if(ele.id == id){
  //     console.log(ele)
  //     data.push(
  //       ele.background_image_original,
  //       ele.large_cover_image,
  //       ele.title,
  //       ele.year,
  //       ele.rating,
  //       ele.synopsis
  //     )
  //   }
  // })
  console.log("movie end")


  return (
    <>
      <div className="movie" style={{backgroundImage: `url(${movieList?.background_image_original})`}}>
        <div className="movie__container">
          <div className="movie__left">
            <img src={movieList?.large_cover_image} alt="" />
          </div>
          <div className="movie__right">
            <h1>{movieList?.title}</h1>
            <div className='rate'>
              <span>Year: {movieList?.year}</span>
              <span>Rating: {movieList?.synopsis}</span>
            </div>
            <h3>{data[5]}</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie