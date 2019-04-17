import { usuarioLogueado } from "./boleanos";

describe('Pruebas de boleanos', () => {

    it ('Debe de retornar true', () => {

        const res = usuarioLogueado();
        expect( res ).toBeTruthy();
        // expect( res ).toBe(true);

    })
})