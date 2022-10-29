import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Message from "../layouts/Message"
import styles from './Projects.module.css'
import Container from '../layouts/Container'
import Loading from '../layouts/Loading'
import LinkButton from '../layouts/LinkButton'
import ProjectCard from '../project/ProjectCard'

function Projects(){
    const[projects, setProjects] = useState([])
    const[removeLoading, setRemoveLoading] = useState(false)
    const[projectMessage, setProjectMessage] = useState('')

    const location = useLocation()
    let message = ''
    if (location.state) {
      message = location.state.message
    }

    useEffect(()=>{
      setTimeout(()=>{

      fetch('http://localhost:5000/projects',{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },

      })
      .then((resp) => resp.json())
      .then((data) =>{
        console.log(data)
        setProjects(data)
        setRemoveLoading(true)  //setando loading
        

      })
      .catch((err) => console.log(err))
    }, 300)
    },[])

    function removeProject(id){

      fetch(`http://localhost:5000/projects/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        },
      })
      .then((resp) => resp.json())
      .then((data) =>{
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMessage('Projeto removido com sucesso!')
      })
      .catch(err => console.log(err))
    }
            
    return (
    <div className={styles.project_container}>
        <div className={styles.tittle_container}>
          <h1>Meus Projetos</h1>
          <LinkButton to="/newproject" text="Criar Projeto"/>
        </div>
        
        {message && <Message type="success" msg={message}/>}
        {projectMessage && <Message type="success" msg={projectMessage}/>}

        <Container customClass="start">
          {projects.length > 0 && 
            projects.map((project) =>                       //Map feito para mostrar os projetos existentes.
            <ProjectCard 
            name={project.name}
            id={project.id}
            budget={project.budget}
            category={project.category.name}
            key={project.id}
            handleRemove={removeProject}

            />
          )}
          {!removeLoading && <Loading/>}
          {removeLoading && projects.length ===0 && (
            <p>Nâo há projetos!</p>
          )}
        </Container>
    </div>
    )
}

export default Projects