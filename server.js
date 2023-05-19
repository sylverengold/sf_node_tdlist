//cmd: npm install -g npm
//cmd: npm init
//cmd: npm install -g serve
//recharge de page automatique
//cmd : npm i -S nodemon
//json : "start": "nodemon server.js"
//prod : "start" : "NODE_ENV=production nodemon server1.js"
//cmd: npm run start

//cmd : npm i -S express 
let express = require ('express')// import et affectation à la variable app de la classe express
let app = express()

//cmd : npm i -S ejs // moteur de template // ejs -> format des fichiers template
app.set('view engine','ejs') 

//cmd : npm i -S body-parser // formate des données POST //middle ware 
let bodyParser = require ('body-parser') 


//cmd : npm i -S express-session // gerer des sessions
let session = require ('express-session') 
app.use(bodyParser.urlencoded({extended: false}))//parametrage body-parser pour URL
app.use(bodyParser.json())//parametrage body-parser pour json 
app.use(session({
	secret:'trucafaire',// chiffrement - on met un peu ce qu'on veut
	resave: false,
	saveUninitialized : true,
	cookie: {secure:false}//true -> https / false -> http
}))

//cmd : npm i -S mysql

app.use (express.static('public'))//

app.use(require('./flash'))



app.get('/',(request,response)=>{
	let Tache = require("./tache")
		Tache.selectAll(function(taches){//ici la fonction correspond au 'cb' de la methode 'all' de la class 'Tache'
			response.render('./index',{taches:taches})//on injecte une variable vers le template
	})

})

app.post('/',(request,response)=>{
if (request.body.new_tache === undefined || request.body.new_tache ==='' ){
	request.flash('error',"Vous n'avez pas posté aucune tache !")
	response.redirect('/')
	
} else {

	let Tache = require("./tache")
	Tache.create(request.body.new_tache, function () {// on recupere le message POST dans une classe Message
	request.flash('success',"Nouvelle tache ajoutée")
	response.redirect('/')
})

}
	

})


app.delete('/',(request,response)=>{
let Tache = require("./tache")
Tache.remove(request.body.id, function () {// on recupere le message POST dans une classe Message
	request.flash('success',"La tache a été supprimée")
	response.redirect('/')// on redirige vers la racine // ici server1.js
})// methode asynchrone
})



app.listen(8080)