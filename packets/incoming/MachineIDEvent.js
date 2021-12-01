const ByteBuffer = require("bytebufferjs");


class MachineIDEvent {

    static header = 2490;

    /**
     * @param {ByteBuffer} packet 
     * @param {*} client 
     */
    static Parse(packet){
        
        let data = {
            storedMachineId: packet.readString(),
            clientFingerprint: packet.readString(),
        }

        return data;

    }

}

module.exports = MachineIDEvent;