# backendSchoolMern
## Guia Levantar App Localmente (esta pensado en linux ubuntu)

Requisitos:tener instalado node y mongo db

Situarse en el escritorio abrir terminal poner el siguiente comando

1-backend git clone https://github.com/MirkoGabriel/backendSchoolMern.git

2-frontend git clone https://github.com/MirkoGabriel/frontendSchoolMern.git

3-crear una carpeta llamada mernEscuela

4-poner las dos carpetas creadas en mernEscuela.

5- desde la terminal navegar mernEscuela/backendSchoolMern
va a haber un archivo llamado “milonga” (es la bbdd)

6-Poner el siguiente comando 
mongorestore --archive=”milonga” --db=mernEscuela (importar bbdd)

7-abrir visualStudioCode u  otro editor de texto

8-en la terminal pararse en mernEscuela/backendSchoolMern y poner
  -npm install (instala las dependencias)
  -npm run dev (inicia el server y verifica la bbdd)

9-en la terminal pararse en mernEscuela/frontendSchoolMern y poner
  -npm install (instala las dependencias)
  -npm start (inicia la app de reacr)

10- probar app



