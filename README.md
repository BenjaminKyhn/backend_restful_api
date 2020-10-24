# Backend RESTful API  
API'en kører på port 8080 i en Docker container og giver dig et JSON med magickort, når du sender en GET request.  

Start app'en ved at skrive:  
`docker-compose up --build`  

Hent alle kortene:  
`localhost:8080/cards`  

Hent et tilfældigt kort:  
`localhost:8080/cards/random` 
