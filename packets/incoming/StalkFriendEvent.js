const ByteBuffer = require("bytebufferjs");


class StalkFriendEvent {

    static header = 3997;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	friendId: packet.readInt()
        }

        return data;

    }

}

module.exports = StalkFriendEvent;