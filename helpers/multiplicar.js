const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';
    
        for (let i = 1; i <= hasta; i++) {
            salida += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.red } ${ i } ${ '='.red } ${ base * i }\n`;
        }
        
        if ( listar ) {
            console.log('====================='.yellow);
            console.log('     Tabla del '.yellow, colors.cyan( base ));
            console.log('====================='.yellow);
        }
        
        console.log(consola);
        
        fs.writeFileSync( `./out/tabla-${ base }.txt`, salida );
        
        return `Tabla del ${ base }.txt`;
    
    } catch(err) {
        throw err
    }

}

module.exports = {
    crearArchivo
}
