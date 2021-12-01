const ByteBuffer = require("bytebufferjs");


class FriendPrivateMessageEvent {

    static header = 3567;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
        	userId: packet.readInt(),
        	message: packet.readString()
        }

        return data;

    }

}

module.exports = FriendPrivateMessageEvent;