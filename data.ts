export interface Producto {
    nombre: string,
    categoria: string,
    precio: number
}

export interface Kiosco {
    productos: Producto[]
}

export interface Reporte {
    fecha: Date,
    kiosco: Kiosco
}

export const kiosco: Kiosco = {
    productos: [
        {
            nombre: "Pepitos paquete de 6 unidades",
            categoria: "Galletitas",
            precio: 3000
        },
        {
            nombre: "Alfajor Milka 1 unidad",
            categoria: "Alfajores",
            precio: 3000
        },
        {
            nombre: "Gaseosa 7up 1 unidad",
            categoria: "Bebidas",
            precio: 3000
        },
        {
            nombre: "Pepitos",
            categoria: "Galletitas",
            precio: 3000
        }
    ]
};

export const reporte: Reporte = {
    fecha: new Date(),
    kiosco: kiosco  // Asigna el objeto kiosco al campo kiosco del reporte
};