# CLINICA DENTAL

## Objetivo
Este proyecto fue realizado con el proposito de desarrollar las habilidades en sequelize mediante la creacion de la base de datos de una clinica dental.


## Sobre el proyecto
Esta API (My Dental Clinic) contiene las siguientes relaciones:

![Tablas relacionales](https://github.com/Orianig/dentalClinicProject/blob/503cfb3e19d9679a916a80efbdda7f6e408da755/images/relationalTable.JPG)

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

##  Endpoints
<details>
  <summary><strong>Endpoints:</strong></summary>
## • auth

### /register

  POST `http://localhost:3000/auth/register`

body:
  
```
    {
       name
       lastName
       email
       password
       dni
       phoneNumber
       gender
       birthdate
       speciality
       collegiateNumber
       roleId
    }
```
  
### /login

body:
  
```
    {
        "email":"oriana@example.com",
        "password":"123456Aa"
    }
 ```
  
  POST `http://localhost:3000/auth/login`

## • user
  
  ### /profile
  
  GET `http://localhost:3000/user/profile`

  ### /allProfiles

  GET `http://localhost:3000/user/allProfiles`
  
  ### /UpdateProfile

  PUT `http://localhost:3000/user/updateProfile`
  
  ### /updateProfileAdmin

  PUT `http://localhost:3000/user/:id`
  
  ### /deleteProfileAdmin

  DELETE `http://localhost:3000/user/:id`
  
## • appointment
  
  ### /newAppointment
  body:
  
```
    {
       date
       interventionId
       details
       dentistId
       dentistSpecialityid
       patientId
       results
    }
```

  POST `http://localhost:3000/appointment/newAppointment`
  
  ### /allaAppointments

  PUT `http://localhost:3000/appointment/:id`
  
  ### /deleteAppointment

  DELETE `http://localhost:3000/appointment/:id`
  
  ### /getUserAppointment

  GET `http://localhost:3000/appointment/patientAppointments`
  
  ### /getAppointmentDetails

  GET `http://localhost:3000/appointment/appointmentDetail/:id`
  
  ### /getAllAppointments

  GET `http://localhost:3000/appointment/allAppointments`
  
  ### /getDentistAppointments

  GET `http://localhost:3000/appointment/dentistAppointments`
  
</details>

## Licencia

License and Copyright Add MIT Licence. The style is completely created by Oriana Infante, the images of the about.html page as well as the main logo are taken from the free svg image server.
