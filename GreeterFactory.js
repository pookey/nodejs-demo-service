const { NiceGreeter, IrritatedGreeter } = require('./Greeter');

class GreeterFactory {
	static getGreeter(name) {
		if (name.toLowerCase() === 'ian') {
			return new IrritatedGreeter();
		} else {
			return new NiceGreeter();
		}
	}
}

module.exports = GreeterFactory;
