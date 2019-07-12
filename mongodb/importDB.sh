#!/bin/bash
mongo actres_internal --eval 'db.contents.drop()'
mongoimport --db actres_internal --collection contents --file db/general.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/inicio.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/corpus-comparables.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/corpus-paralelos.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/corpus-cetri.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/corpus-corpes.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/corpus-gedire.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/herramientas.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/aplicaciones.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/noticias.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/acceso.json --jsonArray
mongoimport --db actres_internal --collection contents --file db/ficha-tecnica.json --jsonArray

mongo actres_internal --eval 'db.datasheets.drop()'
mongoimport --db actres_internal --collection datasheets --file db/datasheets.json --jsonArray

mongo actres_internal --eval 'db.notices.drop()'
mongoimport --db actres_internal --collection notices --file db/notices.json --jsonArray

mongo actres_internal --eval 'db.users.drop()'
mongoimport --db actres_internal --collection users --file db/users.json --jsonArray
