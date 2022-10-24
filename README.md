# Ejecución de la parte Backend
- Para ejecutar la parte backend de la aplicación de manera local se lo realizará mediante los sigueintes pasos:
  
  - Clonar el repositorio: Para lo cual clonaremos la rama Backend ejecutando el siguente comando
     ```
     git clone -b Backend https://github.com/KevinVeliz/PokeApi.git
     ```
 
   - Acontinuación abriremos una terminal y nos diriguimos al repositorio clonado
 
    - Luego procederemos a ejecutar el comando   ``` npm i ```  para instalar todas las dependencias necesarias
    
    - Por último ejecutamos el comando   ```npm start``` y la aplicación se levantará por defecto en la siguiente dirección   ```localhost:7000``` 
---
<dl>
  <dt>Nota</dt>
  <dd>Se debe tener instalado MongoDB o levantar una instancia en MongoDBAtlas</dd>
  
  <dt>Agregar un archivo .env </dt>
  <dd>Dentro de este archivo se agregará la conexión a MongoDB. Se deja un ejemplo acontinuación de la estructura a tener</dd>
  <dd>DB_CNN=mongodb+srv://user:password@pokeapi.3ab0ykj.mongodb.net/(nombre de la base de datos)</dd>
</dl>

---
## Previsualizaciones de la Base de datos y Swagger

![image](https://user-images.githubusercontent.com/65980001/197460955-22da779b-85d0-482d-a3cc-267af0230016.png)


![image](https://user-images.githubusercontent.com/65980001/197460928-db3a6010-2824-4c7d-85e1-d8c88e7746a4.png)
