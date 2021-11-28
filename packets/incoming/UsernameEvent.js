const ByteBuffer = require("../../ByteBuffer");


class UsernameEvent {

    static header = 3878;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
            username: packet.readString()
        }

        return data;

    }

}

module.exports = UsernameEvent;