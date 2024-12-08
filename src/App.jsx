import React from 'react'
import Form from './componenst/Form/Form'
import Home from './componenst/Home/Home'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Nav from './componenst/Nav/Nav'
import Error from './componenst/Error/Error'
import Movies from './componenst/Movies/Movies'
import MovieDetails from './componenst/MovieDetails/MovieDetails'
import PostDetails from './componenst/PostDetails/PostDetails'
import Counter from './componenst/Counter/Counter'
import Search from './componenst/Search/Search'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/:id" element={<PostDetails/>}/>
        <Route path="/form" element={<Form/>}/>
        {/* <Route path="/movies" element={<Movies/>}/> */}
        <Route path="/movies/:id" element={<MovieDetails/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/*" element={<Error/>}/>
        {/* <Route path='/search' element={<Search/>}/> */}
      </Routes>
      </BrowserRouter>
        {/* <Home/>
        <Form/> */}
    </div>
  )
}
