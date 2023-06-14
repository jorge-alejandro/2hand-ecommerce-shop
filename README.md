



<h1 align="center">
    <a href="https://sylius.com/github-readme/link/" target="_blank">
        <img src="https://i.postimg.cc/CMttpyBc/Home-Troco.png" />
    </a>
</h1>


## [TROCO - EXCHANGE THINGS FROM GAMERS TO GAMERS ](https://github.com/jorge-alejandro/2hand-ecommerce-shop)
#

## ¿Qué es TROCO? 

TROCO es un proyecto de desarrollo de un portal especializado en el intercambio de artículos para gamers estilo retro, como las videoconsolas, los juegos y los ordenadores, donde dos usuarios pueden acordar intercambiar uno o más artículos mediante el método tradicional del trueque.

#
#
## ✍️ Requisitos del Proyecto 

❌ `Usuarios anónimos`
- Pueden realizar **búsquedas por nombre, categoría, localidad y precio**
- Pueden hacer **Login.**
- Pueden **registrarse con un email, un nombre y un password mediante un código de validación** que recibirán en su bandeja de entrada.

✅ ```Usuarios registrados:```
- Pueden **gestionar su perfil:** cambiando de datos, añadiendo o actualizando su biografía e insertando una imagen de avatar.
- Pueden realizar **búsquedas por nombre, categoría, localidad y precio.**
- Publican **nuevos artículos** introduciendo un nombre, una imagen, una descripción, una categoría, un precio y una localidad para el artículo.
- Durante la **reserva de artículos** el trueque se desarrolla de la siguiente manera:
  - El vendedor recibe la **propuesta de trueque vía email y puede aceptarla y proponer una hora y lugar de entrega.**
  - El comprador recibe información sobre **si el trueque fue aceptado o rechazado vía email con la información** de hora y lugar de entrega en caso afirmativo.
  - El comprador **puede valorar al vendedor** después de realizar el trueque.

#
#

## 🧐 ¿Cómo funciona TROCO?
- Accede a **troco.pro**
- Regístrate o haz Login.
- Sube uno o varios artículos que quieras hacer trueque.
- Completa las especificaciones de los artículos, tales como descripción, localización, estado del artículo, etc..
- Propón un trueque sobre algún artículo que desees intercambiar
- Recibe una aceptación o rechazo a tu petición de trueque
#
#
## 👨‍💻 ¿Cómo se ha desarrollado TROCO? 
El desarrollo de TROCO se divide en 2 bloques: Tecnología utilizada y Know-how en la implementación:

| 📟 Tecnologías:                                                                     |                                                                                                  |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [Draw.io:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/tree/main/documents) Software de diagramación que permite crear diagramas y flujos de trabajo de forma intuitiva y colaborativa. | ![Draw.io](https://i.postimg.cc/L5gqBB4B/drawio.png)                                                     |
| [Excalidraw:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/tree/main/documents) Herramienta de dibujo que permite crear bocetos y diagramas de forma rápida y sencilla.       | ![Excalidraw](https://i.postimg.cc/zGmYtw72/excalidraw-troco-2.png)                                      |
| [Figma:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/tree/main/documents)           Herramienta que permite crear prototipos interactivos que simulan la experiencia real del usuario. | ![Figma](https://i.postimg.cc/PfV9Cb8V/figma-troco.png)                                                  |
| [Visual Studio:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/tree/main/documents) Entorno de desarrollo para crear aplicaciones de manera eficiente. Permite escribir, depurar y probar código de manera fluida. | ![Visual Studio](https://i.postimg.cc/L5gqBB4B/drawio.png)                                             |
| [MySQL Workbench:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/tree/main/documents)           Herramienta de administración y diseño de bases de datos en un entorno gráfico intuitivo. | ![MySQL Workbench](https://i.postimg.cc/nrknbXL9/mysql-troco.png)                                        |
| [Insomnia:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/tree/main/documents) Software de prueba de API y cliente REST para realizar solicitudes HTTP y analizar las respuestas de manera eficiente. | ![Insomnia](https://i.postimg.cc/xTJ64WFn/insomnia-troco.png)                                           |

#
#
| 🪄 Implementación:                                                                     |                                                                                                  |
|--------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| [API Set up:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/app.js) Utlizando un método y un payload determinado se crea un usuario el cual a través de un código de validación completa el proceso de registro.  | [![Registro](https://i.postimg.cc/ncYSCf8H/0-API-connection.png)](https://youtu.be/O5b4KJvAu8o)                                                     |
| [Registro:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/register-user.js) Utlizando un método y un payload determinado se crea un usuario el cual a través de un código de validación completa el proceso de registro.  | [![Registro](https://i.postimg.cc/yxkPFfN8/1-registration.png)](https://www.youtube.com/watch?v=XnPB8X8v6IQ)                                    |
| [Login:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/login-user.js) Hacemos una ruta POST a users/login + payload y nos genera un token que nos va a permitir realizar el resto de acciones con autorización.       | [![Login](https://i.postimg.cc/85ndPhbQ/2-login.png)](https://www.youtube.com/watch?v=jPrTfIVhIuQ)                                              |
| [Crear un Item:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/create-item.js)           Una vez obtenido el token, en la ruta /items insertamos un payload con diferentes parámetros necesarios para la creación. Una vez enviado comprobamos en que se ha creado en la bbdd | [![Crear un Item](https://i.postimg.cc/cCpQf0jF/3-create-item.png)](https://www.youtube.com/watch?v=pcg5gDU9Oug)                                            |
| [Aceptación de Deal:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/accept-deal.js) Se introduce el id del "comprador" en la ruta de POST y se utiliza el token del "vendedor" para hacer el Deal. Posteriormente se envía información adicional.  | [![Aceptación de Deal](https://i.postimg.cc/5tjRJcTn/5-deal-acceptance.png)](https://www.youtube.com/watch?v=W49QuWSMFfc) 
| [Deal Rating:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/rate-deal.js)           Con los headers válidos de uno de los usuarios del Deal generamos el rating, en este caso añadiendo comentarios adicionales. | [![Deal Rating](https://i.postimg.cc/XJ12DsQt/6-deal-rating.png)](https://youtu.be/eB2mRwbeIcY)                                            |
| [Deal Rechazado:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/reject-deal.js) Añadimos el id del Deal que se quiere rechazar, teniendo en los header el token del usuario. El Deal se podrá rechazar por ambas partes.  | [![Deal Rechazado](https://i.postimg.cc/9QCc2Bdr/7-deal-rejected.png)](https://youtu.be/zB26OrIx2bw)                                            |
| [Buscador de Items:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/search-items.js) El campo del search va buscar por nombre, localización, categoría y añadiendo filtros a la misma.  | [![Alt text](https://i.postimg.cc/KjtySK4P/8-searcher.png)](https://youtu.be/sxik_c02RZk)
| [Wishlist:](https://github.com/jorge-alejandro/2hand-ecommerce-shop/blob/main/src/use%20cases/add-to-wishlist.js) Con el token de usuario y el id del Item guardamos el artículo en nuestra wishlist, teniendo en cuenta que un usuario no puede añadir sus propios artículos.  | [![Alt text](https://i.postimg.cc/3RDsmyXs/9-wishlist.png)](https://youtu.be/A9MFBNk0Vh8)
#
#

## 🧍 Autores 

- Jorge García  
- Jorge Cidre  
- Edu Loiola  
- Miguel Ortigueira

