const path = require('node:path')
//console.log(path.sep) para seber que tipo de separacion usa tu sistema operativo "/" o "\"

//Unir rutas con path.join (para que ponga la separacion sola dependiendo el sistema)
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//De ruta completa obtener nombre de fichero
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

//Nombre del fichero pero sin la extension
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

//Obtener extension
const extension = path.extname('image.jpg')
console.log(extension)