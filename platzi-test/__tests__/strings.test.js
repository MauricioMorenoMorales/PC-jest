describe('Comprobar cadenas de texto', () => {
	const text = 'Un bonito texto'
	test('debe contener el siguiente texto', () => {
		expect(text).toMatch(/bonito/)
	})
	test('no debe contener el siguiente texto', () => {
		expect(text).not.toMatch(/no mostrar/)
	})
	test('Comprobar el tamaño de un texto', () => {
		expect(text).toHaveLength(15)
	})
})
