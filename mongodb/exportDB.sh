#!/bin/bash

query="{name:'general'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/general.json --query "$query"
query="{name:'inicio'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/inicio.json --query "$query"
query="{name:'corpus-comparables'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/corpus-comparables.json --query "$query"
query="{name:'corpus-paralelos'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/corpus-paralelos.json --query "$query"
query="{name:'herramientas'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/herramientas.json --query "$query"
query="{name:'aplicaciones'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/aplicaciones.json --query "$query"
query="{name:'noticias'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/noticias.json --query "$query"
query="{name:'acceso'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/acceso.json --query "$query"
query="{name:'ficha-tecnica'}";
mongoexport --db actres_internal --collection contents --jsonArray --pretty --out db/ficha-tecnica.json --query "$query"

query="{}";
mongoexport --db actres_internal --collection datasheets --jsonArray --pretty --out db/datasheets.json --query "$query"
mongoexport --db actres_internal --collection notices --jsonArray --pretty --out db/notices.json --query "$query"
mongoexport --db actres_internal --collection users --jsonArray --pretty --out db/users.json --query "$query"
