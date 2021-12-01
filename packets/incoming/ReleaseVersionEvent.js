const ByteBuffer = require("bytebufferjs");


class ReleaseVersionEvent {

	static header = 4000;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	releaseVersion: packet.readString(),
            type: packet.readString(),
            platform: packet.readInt(),
            category: packet.readInt()
        }

        return data;

    }

}

module.exports = ReleaseVersionEvent;