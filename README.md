# CLINICA DENTAL

## Objetivo
Este proyecto fue realizado con el proposito de desarrollar las habilidades en sequelize mediante la creacion de la base de datos de una clinica dental.


## Sobre el proyecto
Esta API (My Dental Clinic) contiene las siguientes relaciones:

![Tablas relacionales](

## Tecnologías utilizadas
  
- JavaScript
- DOCKER
- MYSQL
- SEQUELIZE
- Postman
- JWT

## Instalación
1. Clonar el repositorio
2. $ npm install
3. Conectamos nuestro repositorio con la base de datos
4. $ Ejecutamos las migraciones
5. $ Ejecutamos los seeders
6. $ npm run dev

<details>
  <summary><strong>Endpoints:</strong></summary>
• auth

### /register

  POST http://localhost:3000/auth/register
body:

    {
        
    }
  ### /login
  body:
    {
        "email":"oriana@example.com",
        "password":"123456Aa"
    }
  
  POST http://localhost:3000/auth/login
  
• user
  
  ### /profile
```plaintext
  GET http://localhost:3000/user/profile
```
  ### /allProfiles

  GET http://localhost:3000/user/allProfiles
  
  ### /UpdateProfiles

  PUT http://localhost:3000/user/updateProfile
  
  ### /updateProfileAdmin

  PUT http://localhost:3000/user/:id
  
  ### /deleteProfileAdmin

  DELETE http://localhost:3000/user/:id
  
• appointment
  
  ### /profile

  GET http://localhost:3000/user/profile
  
  ### /allProfiles

  GET http://localhost:3000/user/allProfiles
  
  ### /UpdateProfiles

  PUT http://localhost:3000/user/updateProfile
  
  ### /updateProfileAdmin

  PUT http://localhost:3000/user/:id
  
  ### /deleteProfileAdmin

  DELETE http://localhost:3000/user/:id
  
  
  
  
  
  
  
  
</details>

## Licencia

Este proyecto se ha realizado bajo la licencia MIT.
