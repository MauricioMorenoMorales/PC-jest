// despues de cada prueba
afterEach(() => console.log('Despues de hacer cada prueba'))
afterAll(() => console.log('Despues de todas las pruebas'))

//antes de cada prueba
beforeAll(() => console.log('Antes de todas las pruebas'))
beforeEach(() => console.log('Antes de cada prueba'))

describe('Preparar antes de ejecutaro', () => {
	test('Es verdadero', () => {
		expect(true).toBeTruthy()
	})
})
