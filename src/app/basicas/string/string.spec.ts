import { mensaje } from './string';

// sirve para agrupar pruebas
// describe('Pruebas de Strings');
// Para decir que es una prueba en especifico en concreto.
/// it('Debe de regresar un string');

describe('Pruebas de strings', () => {
    
    it( 'Debe de regresar un string', () => {

        const resp = mensaje('Jose');
        expect( typeof resp ).toBe('string');

    } );

    it( 'Debe de retornar un saludo con el nombre enviado', () => {

        const nombre = 'Jose'
        const resp = mensaje(nombre);
        expect( resp ).toContain(nombre);

    } );


});