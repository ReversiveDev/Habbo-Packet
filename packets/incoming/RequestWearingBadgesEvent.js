const ByteBuffer = require("bytebufferjs");


class RequestWearingBadgesEvent {

    static header = 2091;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	userId: packet.readInt()
        }

        return data;

    }

}

module.exports = RequestWearingBadgesEvent;