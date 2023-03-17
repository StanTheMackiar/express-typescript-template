import './config/env';
import { httpServer } from './config';

 const bootstrap = async() => {

    httpServer.listen(process.env.PORT, () => {
      console.log(`Servidor escuchando el puerto ${process.env.PORT}`)
    });

 }  

 bootstrap();