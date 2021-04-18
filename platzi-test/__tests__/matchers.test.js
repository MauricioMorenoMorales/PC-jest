describe('Comparadores comunies', () => {
	const user = {
		name: 'oscar',
		lastname: 'barajas',
	}
	const user2 = {
		name: 'oscar',
		lastname: 'barajas2',
	}
	test('Igualdad de elementos', () => {
		expect(user).toEqual(user2)
	})
	test('No son exactamente iguales', () => {
		expect(user).not.toEqual(user2)
	})
})
