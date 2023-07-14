
import './home.css'
import Table from '../../component/table/Table'
import Salaries from '../../component/salaries/Salaries'
import Add from '../../component/add/Add'
import { useState } from 'react'
import axios from 'axios'

function Home() {
    const [showModif,SetShowModif] = useState(false)
    const [editVal,SetEditVal] = useState()
    const [modif,setModif] = useState(false)
    const [allData,setAllData] = useState([])
    const [maxMin,setMaxMin] = useState()
    

    const search = (e)=>{
        axios
        .post("http://localhost:8080/api/search",{nom:e.target.value})
        .then(res=>{
            if(res.data){
               setAllData(res.data)
            }
            
        })
        .catch(err=>{
                console.log(err)
            })
    }

    return (
        <div className="home">
            <h1>Gestion des Employés</h1>
            <div className="serch">
                <input type="search" placeholder='Recherche...' onChange={(e)=>search(e)}/>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="500" height="500">
                   <path d="M21 3C11.601563 3 4 10.601563 4 20C4 29.398438 11.601563 37 21 37C24.355469 37 27.460938 36.015625 30.09375 34.34375L42.375 46.625L46.625 42.375L34.5 30.28125C36.679688 27.421875 38 23.878906 38 20C38 10.601563 30.398438 3 21 3 Z M 21 7C28.199219 7 34 12.800781 34 20C34 27.199219 28.199219 33 21 33C13.800781 33 8 27.199219 8 20C8 12.800781 13.800781 7 21 7Z" fill="#FFFFFF" />
                </svg>
            </div>
            <Table SetShowModif={SetShowModif} SetEditVal={SetEditVal} setModif={setModif} allData={allData} setAllData={setAllData} setMaxMin={setMaxMin}/>
            <Salaries maxMin={maxMin}/>
            {showModif? <Add SetShowModif={SetShowModif} modif={modif} editVal={editVal} setAllData={setAllData} setMaxMin={setMaxMin}/> : null}
        </div>
    )
}

export default Home
