let connection = require ('./config_bdd')


class Tache{
	//le constructeur
	constructor(id,label, order, end, close){
		this.id = id
		this.label = label
		this.order = order
		this.end = end
		this.close = close
	}


	static selectAll (cb){
	 connection.query (`SELECT taches.id, taches.label,  taches.order, taches.end, taches.close
	 					FROM taches WHERE taches.close = 0`,(err,rows) => {
 	if (err) throw err
 		cb(rows.map((row) => new Tache(row.id, row.label, row.order, row.end, row.close)))
 	// methode map : transforme chaque ligne en objet Tache
 }) 
}


	static create (label, cb){
	 connection.query (`INSERT INTO taches SET label = ?`,[label], (err,result) => {
 	if (err) throw err
 		cb(result)//resultat du callback
 })
}


	static remove (id, cb){
	 connection.query (`UPDATE taches SET close = 1 WHERE id = ?`,[id], (err,result) => {
 	if (err) throw err
 		cb(result)//resultat du callback
 })
}


	}

	module.exports = Tache