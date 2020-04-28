# T-Book
Aplicación móvil para biblioteca.

Estos pasos son para probar la aplicacion, solo esta codigo.

**************************************************Requisitos Previos:***********************************************************
  *Tener instalado MongoDB
  *Tener instalado nodeJS
  
************************************************Pasos para probar la app********************************************************
-instale ionic:
    *npm install -g ionic 
-Haga un 'npm install' tanto a Backend como a Frontend
-lenvate servicios
  Backend:
    *dentro de la carpeta 'Backend' presione Shift + click derecho y seleccione 'Abrir la ventana de PowerShell aquí', 
     una vez se abra la ventena digite 'nodemon dist/'
  Frontend:
    *dentro de la carpeta 'Frontend' presione Shift + click derecho y seleccione 'Abrir la ventana de PowerShell aquí', 
     una vez se abra la ventena digite 'ionic serve'

-Cree un usuario

-login desde la app:
  *idEstudiante
  *password
  
***********************************POSIBLE ERROR EN PRIMERA CARGA DE SERVICIO DE IONIC******************************************
Si al momento de desplegar la app en el navegador obtiene lo siguiente en pantalla 'Cannot GET /'

-Abra el proyecto en un editor de codigo
-Entre a la siguiente ruta: 'Frontend/src/app/pages/login/login.page.ts'
-En la linea 14 '@ViewChild("slidePrincipals") slides: IonSlides;',modifique ("slidePrincipals") por ("slidePrincipal")
-guarde cambios
-vuelva a dejar ("slidePrincipals")
-nuevamente guarde cambios
-Regrese al navegador (En modo Herramientas para desarrolladores)
