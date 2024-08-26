class Greeter {
	greet(name) {
		throw new Error('greet() must be implemented');
	}
}

class NiceGreeter extends Greeter {
	greet(name) {
		return `Hello, ${name}!`;
	}
}

class IrritatedGreeter extends Greeter {
	greet(name) {
		return `What do you want, ${name}?`;
	}
}

module.exports = { Greeter, NiceGreeter, IrritatedGreeter };

