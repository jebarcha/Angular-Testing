import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda en h3', () => {

       component.leyenda = 'Progreso de carga';

       fixture.detectChanges(); // disparar la deteccion de cambios

       const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;
       // console.log('elem', elem);
       expect( elem.innerHTML ).toContain('Progreso de carga');

    });

    it ('Debe de mostrar en el input el valor del progreso', () => {

       component.cambiarValor(5);

       fixture.detectChanges();
       fixture.whenStable().then( () => {
       const input = fixture.debugElement.query( By.css('input') );
       const elem: HTMLElement = input.nativeElement;

       expect( elem.value ).toBe('55');
       });

    })

    it ('Debe de incrementar/decrementar en 5, con un click en el boton', () => {

       const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
       // console.log('botones', botones);

       botones[0].triggerEventHandler('click', null);
       expect( component.progreso ).toBe(45);  // el 1er boton es el que resta

       botones[1].triggerEventHandler('click', null);
       expect( component.progreso ).toBe(50);  // el 1er boton es el que resta

    })

    it ( 'En el titulo del componente, debe mostrar el progreso', () => {

       const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
       botones[0].triggerEventHandler('click', null);
       
       fixture.detectChanges(); // refresca la pantalla

       const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

       expect( elem.innerHTML ).toContain('45');

    })

});
