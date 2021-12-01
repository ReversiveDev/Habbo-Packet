const ByteBuffer = require("bytebufferjs");


class FloorPlanEditorRequestDoorSettingsEvent {

    static header = 3559;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        return {};

    }

}

module.exports = FloorPlanEditorRequestDoorSettingsEvent;