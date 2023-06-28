import React, { useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom';

const Home = ({movie}) => {
  
  let [inputtext,setInputtext] = useState()
  let m = movie.find(ele => ele.title == inputtext)

  const onInputText = (e) => {
    setInputtext(e.target.value)
  }

  let handleOnKeyEnter = (e) => {
    if(e.key == 'Enter'){
      window.location.assign(`http://localhost:3000/${m?.id}`)
    }
  }

  return (
    <>
      <div className="home__container">
        <a href='/'>movie gallery</a>
        <form action="">
          <input type="text" onChange={onInputText} onKeyDown={handleOnKeyEnter} name={localStorage.getItem('name')}/>
        </form>
        <div className="movie__grid">
        {movie.map((ele,index) => {
          // 문제상황) TypeError: Cannot read property 'map' of undefined
          //https://devbirdfeet.tistory.com/47
          // console.log(ele)
            return (
              <Link to={`/${ele.id}`}>
                <div className='movie__item' key={index}>
                  <img src={ele.large_cover_image} alt="" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home