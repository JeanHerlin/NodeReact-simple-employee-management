let connection = require('../../config/db')


class Employe{

    static getEmploye(cb){
        let query = "SELECT * FROM employe"
        connection.query(query,(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static searchEmploye(nom,cb){
        let query = `SELECT * FROM employe WHERE nom LIKE '%${nom}%'`
        connection.query(query,(err,results)=>{
            if(err) throw(err)
            cb(results)
        })
    }

    static addEmploye(data,cb){
        let query = "INSERT INTO employe SET nom = ? , salaire = ?"
        connection.query(query,[data.nom,data.salaire],(err,results)=>{
            if(err) cb(err)
            cb(results)
        })
    }

    static getMaxMin(cb){
        let query = "SELECT MAX(salaire) as max,MIN(salaire) as min, SUM(salaire) as total FROM employe"
        connection.query(query,(err,results)=>{
            if(err) cb(err)
            cb(results)
        })
    }

    static updateEmploye(data,cb){
       let query = "UPDATE employe SET nom = ? , salaire = ? WHERE numEmp = ?"
       connection.query(query,[data.nom,data.salaire,data.id],(err,result)=>{
           if(err) cb(err)
           cb(result)
       })
    }

    static deleteEmploye(id,cb){
       let query = "DELETE from employe WHERE numEmp = ?"
       connection.query(query,[id],(err,result)=>{
           if(err) cb(err)
           cb(result)
       })
    }
}

module.exports = Employe