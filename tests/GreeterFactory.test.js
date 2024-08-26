const GreeterFactory = require('../GreeterFactory');
const { NiceGreeter, IrritatedGreeter } = require('../Greeter');

describe('GreeterFactory', () => {
	test('should return NiceGreeter for a name other than Ian', () => {
		const greeter = GreeterFactory.getGreeter('James');
		expect(greeter).toBeInstanceOf(NiceGreeter);
		expect(greeter.greet('James')).toBe('Hello, James!');
	});

	test('should return IrritatedGreeter for the name Ian', () => {
		const greeter = GreeterFactory.getGreeter('Ian');
		expect(greeter).toBeInstanceOf(IrritatedGreeter);
		expect(greeter.greet('Ian')).toBe('What do you want, Ian?');
	});

	test('should return NiceGreeter for a name in different casing (not Ian)', () => {
		const greeter = GreeterFactory.getGreeter('moocow');
		expect(greeter).toBeInstanceOf(NiceGreeter);
		expect(greeter.greet('moocow')).toBe('Hello, moocow!');
	});

	test('should return IrritatedGreeter for the name Ian regardless of casing', () => {
		const greeter = GreeterFactory.getGreeter('IAN');
		expect(greeter).toBeInstanceOf(IrritatedGreeter);
		expect(greeter.greet('IAN')).toBe('What do you want, IAN?');
	});
});

