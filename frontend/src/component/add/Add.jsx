
import { useState } from 'react'
import './add.css'
import axios from 'axios'

function Add({SetShowModif,modif,editVal,setAllData,setMaxMin}) {
   
    const [nom,setNom] = useState(modif? editVal.nom : '')
    const [salaire,setSalaire] = useState(modif? editVal.salaire : '')

    const getData = ()=>{
        axios
        .get("http://localhost:8080/api/employe",)
        .then(res=>{
            
            setAllData(res.data.employes)
            setMaxMin(res.data.maxmin)
            
        })
        .catch(err=>{
                console.log(err)
            })
    }

   const addVal = ()=>{
    if(modif){
      axios
      .put("http://localhost:8080/api/add",{data:{id:editVal.numEmp,nom,salaire: parseFloat(salaire)}})
      .then(res1=>{
        console.log(res1)
         getData()
       })
      .catch(err=>console.log(err))
    }else{
      if(nom!==''){
        axios
        .post("http://localhost:8080/api/add",{data:{nom,salaire: parseFloat(salaire)}})
        .then(res1=>{
          console.log(res1)
          getData()
      })
      .catch(err=>console.log(err))
      }
      }

    setNom('')
    setSalaire('')
    SetShowModif(false)

   }

   const annul = ()=>{
     setNom('')
     setSalaire('')
     if(nom===''){
      SetShowModif(false)
     }
   }

   const addSalaire = (e)=>{
    if(isNaN((e.target.value)[e.target.value.length - 1])){
     setSalaire(e.target.value.slice(0,e.target.value.length - 1))
    }else{
      setSalaire(e.target.value)
    }
   }

   console.log(salaire)

    return(
        <div className='addModif'>
            <form onSubmit={(e)=>e.preventDefault()}>
                <h3>{modif? "Modification d'un emploiyé":"Ajout d'un employé"}</h3>
                <label htmlFor="name">Nom</label>
                <input type="text" id='name' autocomplete="off" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                <label htmlFor="salaire">Salaire</label>
                <input type="text" id='salaire' autocomplete="off" value={salaire} onChange={(e)=>addSalaire(e)}/>
                <div className="action">
                    <button type='submit' className="submit" onClick={addVal}>{modif? "Enregistrer" : "Ajouter"}</button>
                    <button type='button' className="reject" onClick={annul}>Anuller</button>
                </div>
                <div className="closebtn" onClick={()=>SetShowModif(false)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="480" height="480">
                    <path fill="#f78f8f" d="M21 24.15L8.857 36.293 4.707 32.143 16.85 20 4.707 7.857 8.857 3.707 21 15.85 33.143 3.707 37.293 7.857 25.15 20 37.293 32.143 33.143 36.293z" />
                    <path fill="#c74343" d="M33.143,4.414l3.443,3.443L25.15,19.293L24.443,20l0.707,0.707l11.436,11.436l-3.443,3.443 L21.707,24.15L21,23.443l-0.707,0.707L8.857,35.586l-3.443-3.443L16.85,20.707L17.557,20l-0.707-0.707L5.414,7.857l3.443-3.443 L20.293,15.85L21,16.557l0.707-0.707L33.143,4.414 M33.143,3L21,15.143L8.857,3L4,7.857L16.143,20L4,32.143L8.857,37L21,24.857 L33.143,37L38,32.143L25.857,20L38,7.857L33.143,3L33.143,3z" />
                  </svg>
                </div>
            </form>
            
        </div>
    )
}

export default Add