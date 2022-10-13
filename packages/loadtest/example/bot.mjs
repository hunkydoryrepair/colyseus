import { Client } from "colyseus.js";

export async function main(options) {
    const client = new Client(options.endpoint);
    const room = await client.joinOrCreate(options.roomName, options.requestJoinOptions);

    room.send('message-type', {});

    room.onMessage('message-type', (payload) => {
        // logic
    });

    room.onLeave((code) => {
        // logic
    });

    // await room.leave(true);
}
