import { Jugador } from './clases';

describe('Pruebas de clase', () => {

    const jugador = new Jugador();
    
    beforeAll( () => {
        // console.log('beforeAll');
    });
    
    beforeEach( () => {
        // console.log('beforeEach');
        jugador.hp = 100;
    });

    afterAll( () => {
        // console.log('afterAll');
    });

    afterEach(() => {
        // console.log('afterEach');
    });

    it('Debe retornar 80 de hp, si recibe 20 de danio', () => {

        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(20);

        expect( resp ).toBe(80);

    });

    it('Debe retornar 50 de hp, si recibe 50 de danio', () => {

        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50);

    });

    it('Debe retornar 0 de hp, si recibe 100 o mas de danio', () => {

        // const jugador = new Jugador();
        const resp = jugador.recibeDanio(100);

        expect( resp ).toBe(0);

    });


});
