import { arrayFruits, arrayColors } from '../arrays'

describe('Comprobaremos que existe un elemento', () => {
	test('contiene una banana', () => {
		expect(arrayFruits()).toContain('banana')
	})
	test('contiene un platano', () => {
		expect(arrayFruits()).not.toContain('platano')
	})
	test('Comprobar el tamaño de un arreglo', () => {
		expect(arrayColors()).toHaveLength(5)
	})
})
