const ByteBuffer = require("bytebufferjs");


class RequestGuildInfoEvent {

    static header = 2991;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	guildId: packet.readInt(),
        	newWindow: packet.readBoolean()
        }

        return data;

    }

}

module.exports = RequestGuildInfoEvent;