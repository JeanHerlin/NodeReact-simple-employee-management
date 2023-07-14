import './salaries.css'

function Salaries({maxMin}) {
  console.log(maxMin)
    return(
        <div className="salaries">
           <div className='total'>
             <span>Salaire Total :  </span>
             <small>{maxMin? maxMin[0].total : ""}</small>
           </div>
           <div className='max'>
             <span>Salaire Maximale :  </span>
             <small>{maxMin? maxMin[0].max : ""}</small>
           </div>
           <div className='min'>
            <span>Salaire Minimale :  </span>
            <small>{maxMin? maxMin[0].min :""}</small>
           </div>
        </div>
    )
}
export default Salaries