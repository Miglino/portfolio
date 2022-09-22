import React from 'react'
import './posts.css'
import Card from '../../components/card/Card'
import Project1 from '../../components/card/cardImg/Img_Project_1.PNG'
import Project2 from '../../components/card/cardImg/Img_Project_2.PNG'
import Project3 from '../../components/card/cardImg/Img_Project_3.png'



const cardsDb = [
  {
    id: 1,
    title: 'Poke App',
    img: Project1,
    itemUno: 'React',
    itemDos: 'Pop-up',
    itemTres: 'Firebase',
    itemCuatro: 'Redux',
    url:'https://fr-poke-app.web.app'
  },
  {
    id: 2,
    title: 'Lista de Tareas',
    img: Project2,
    itemUno: 'React',
    itemDos: 'Email/Password',
    itemTres: 'Firebase',
    itemCuatro: 'Bootstrap',
    url:'https://fir-react-b804a.web.app/'
  },
  {
    id: 3,
    title: 'Coffee Store',
    img: Project3,
    itemUno: 'Vanilla JS',
    itemDos: 'LocalStorage',
    itemTres: 'Bootstrap',
    itemCuatro: 'jQuery',
    url:'https://miglino.github.io/cafe_orfeo/'
  },
]

const Posts = () => {

  return (
    <div className='posts'>
    <h1 className="posts-title">PROYECTOS</h1>
      <div className="posts-cards">
        {
          cardsDb.map(card => (
              <Card card={card} key={card.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default Posts