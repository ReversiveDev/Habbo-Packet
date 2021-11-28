let ByteBuffer = require("./ByteBuffer");
let fs = require("fs");

class HPacket extends ByteBuffer {

	header;
	name;
	_data = {};
	isUnknown = false;
	static INCOMING = {};

	constructor(packet){
		super(packet);

		if(!Object.keys(HPacket.INCOMING).length){
			let dirs = fs.readdirSync("./packets/incoming");
			for(let dir of dirs){
				let IPacket = require("./packets/incoming/" + dir);
				HPacket.INCOMING[IPacket.header] = IPacket;
			}
		}

		if(this.length){
			this.length = this.readInt();
			this.header = this.readShort();

			let IPacket = HPacket.INCOMING[this.header];
			if(IPacket){
				this.name = IPacket.prototype.constructor.name;
				this._data = IPacket.Parse(this);
			}else {
				this.isUnknown = true;
			}

		}

	}

}

module.exports = HPacket;