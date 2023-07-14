import { useEffect } from 'react'
import axios from "axios"
import './table.css'

function Table({SetShowModif,SetEditVal,setModif,allData,setAllData,setMaxMin}) {

    const edit = (param)=>{
        SetEditVal(param)
        SetShowModif(true)
    }

    const getData = ()=>{
         axios
        .get("http://localhost:8080/api/employe",)
        .then(res=>{
            console.log(res.data)
            setAllData(res.data.employes)
            setMaxMin(res.data.maxmin)
            
        })
        .catch(err=>{
                console.log(err)
            })
    }

   useEffect(() => {
        getData()
   }, [])

   const deleteTion =(id)=>{
     axios
      .delete(`http://localhost:8080/api/add/${id}`)
      .then(res=>{
         getData()
         console.log(res.data)
       })
      .catch(err=>console.log(err))

    
   }


    return (
        <div className="table">
            <button className='add' onClick={()=>{SetShowModif(true);setModif(false)}}>Ajouter</button>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Salaire</th>
                        <th>Observation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                   {allData.map((data,i)=>{ 
                   return(<tr key={data.numEmp}>
                        <td>{i+1}</td>
                        <td>{data.nom}</td>
                        <td>{data.salaire}</td>
                        <td>{parseInt(data.salaire)<1000? "Mediocre" :( parseInt(data.salaire)<5000? "Moyen" : "Grand")}</td>
                        <td>
                            <button className='edit' onClick={()=>{edit(data);setModif(true)}}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                  <path d="M79.335938 15.667969C78.064453 15.622266 76.775 15.762109 75.5 16.099609C72.1 16.999609 69.299609 19.199219 67.599609 22.199219L64 28.699219C63.2 30.099219 63.699609 32.000781 65.099609 32.800781L82.400391 42.800781C82.900391 43.100781 83.400391 43.199219 83.900391 43.199219C84.200391 43.199219 84.399219 43.199609 84.699219 43.099609C85.499219 42.899609 86.1 42.399219 86.5 41.699219L90.199219 35.199219C91.899219 32.199219 92.4 28.700781 91.5 25.300781C90.6 21.900781 88.400391 19.100391 85.400391 17.400391C83.525391 16.337891 81.455078 15.744141 79.335938 15.667969 z M 60.097656 38.126953C59.128906 38.201172 58.199219 38.724609 57.699219 39.599609L27.5 92C24.1 97.8 22.200781 104.30039 21.800781 110.90039L21 123.80078C20.9 124.90078 21.5 125.99961 22.5 126.59961C23 126.89961 23.5 127 24 127C24.6 127 25.199219 126.8 25.699219 126.5L36.5 119.40039C42 115.70039 46.7 110.8 50 105L80.300781 52.599609C81.100781 51.199609 80.599219 49.3 79.199219 48.5C77.799219 47.7 75.899609 48.199609 75.099609 49.599609L44.800781 102C41.900781 106.9 37.899609 111.20039 33.099609 114.40039L27.300781 118.19922L27.699219 111.30078C27.999219 105.60078 29.699609 100 32.599609 95L62.900391 42.599609C63.700391 41.199609 63.200781 39.3 61.800781 38.5C61.275781 38.2 60.678906 38.082422 60.097656 38.126953 z M 49 121C47.3 121 46 122.3 46 124C46 125.7 47.3 127 49 127L89 127C90.7 127 92 125.7 92 124C92 122.3 90.7 121 89 121L49 121 z M 104 121 A 3 3 0 0 0 101 124 A 3 3 0 0 0 104 127 A 3 3 0 0 0 107 124 A 3 3 0 0 0 104 121 z" fill="#FFFFFF" />
                                </svg>
                            </button>
                            <button className='delete' onClick={()=>deleteTion(data.numEmp)}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="96" height="96">
                                  <path d="M6.496094 1C5.675781 1 5 1.675781 5 2.496094L5 3L2 3L2 4L3 4L3 12.5C3 13.324219 3.675781 14 4.5 14L10.5 14C11.324219 14 12 13.324219 12 12.5L12 4L13 4L13 3L10 3L10 2.496094C10 1.675781 9.324219 1 8.503906 1 Z M 6.496094 2L8.503906 2C8.785156 2 9 2.214844 9 2.496094L9 3L6 3L6 2.496094C6 2.214844 6.214844 2 6.496094 2 Z M 4 4L11 4L11 12.5C11 12.78125 10.78125 13 10.5 13L4.5 13C4.21875 13 4 12.78125 4 12.5 Z M 5 5L5 12L6 12L6 5 Z M 7 5L7 12L8 12L8 5 Z M 9 5L9 12L10 12L10 5Z" fill="#FFFFFF" />
                                </svg>
                            </button>
                        </td>
                    </tr>)})}
                </tbody>
            </table>
        </div>
    )
}

export default Table