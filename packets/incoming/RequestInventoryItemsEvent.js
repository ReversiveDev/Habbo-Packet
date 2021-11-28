const ByteBuffer = require("../../ByteBuffer");


class RequestInventoryItemsEvent {

    static header = 3150;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){

        return {};

    }

}

module.exports = RequestInventoryItemsEvent;