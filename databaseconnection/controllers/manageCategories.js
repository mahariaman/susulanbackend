const {db} = require('../connection/mysqldb')

module.exports={
    getAllCategoriesbyID:(req,res)=>{
        db.query(`select * from categories where id=?`,[req.params.id],(err,results)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },
    AddCategories:(req,res)=>{
        let data = req.body
        db.query(`insert into categories set ?`,data,(err,results)=>{
            if(err) return res.status(500).send(err)
            return res.send("berhasil")
        })
        db.query(`select * categories`,data,(err,results)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(results)
        })
    },
    EditCategories:(req,res)=>{
        let data = req.body
        let sql = `update categories set where id = ${db.escape(req.params.id)}`

        db.query(sql,data,(err,results)=>{
            if(err) return res.status(500).send(err)
            db.query('select * from categories',(err,results1)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send(results1)
            })
        })
    },
    DeleteCategories:(req,res)=>{
        let sql = `delete from categories where id= ${db.escape(req.params.id)}`
        db.query(sql,(err,results)=>{
            if(err) return res.status(500).send(err)
        })
        db.query('select * from karyawan',(err,results1)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(results1)
            
        })
    }
}