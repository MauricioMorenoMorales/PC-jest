describe('Comparadores comunies', () => {
	const user = {
		name: 'oscar',
		lastname: 'barajas',
	}
	const user2 = {
		name: 'oscar',
		lastname: 'barajas2',
	}
	const user3 = {
		name: 'oscar',
		lastname: 'barajas',
	}
	test('Igualdad de elementos', () => {
		expect(user).toEqual(user3)
	})
	test('No son exactamente iguales', () => {
		expect(user).not.toEqual(user2)
	})
})
