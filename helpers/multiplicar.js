const fs = require('fs');
var colors = require('colors');



const crearArchivo = async (base = 5, l = true, h = 10) => {



    try {


        let salida = '';
        let consola = '';

        for (let i = 1; i <= h; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`;
        }

        if (l) {
            console.log('===================='.green);
            console.log('Tabla del '.green, colors.blue(base));
            console.log('===================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw err;
    }
}


/* const crearArchivo = (base = 5) => {

    return new Promise((resolve,reject) =>{

        console.log('====================');
        console.log('Tabla del ', base);
        console.log('====================');


        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base * i}\n`;
        }


        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`tabla-${base}.txt creado`);
        


    })

    
} */





module.exports = {
    crearArchivo
}