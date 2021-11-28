const ByteBuffer = require("../../ByteBuffer");


class SecureLoginEvent {

    static header = 2419;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
            ssoTicket: packet.readString(),
            unknown: packet.readInt()
        }

        return data;

    }

}

module.exports = SecureLoginEvent;