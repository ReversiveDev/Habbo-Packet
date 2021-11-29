const ByteBuffer = require("../../ByteBuffer");


class RequestRoomCategoriesEvent {

    static header = 3027;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = RequestRoomCategoriesEvent;