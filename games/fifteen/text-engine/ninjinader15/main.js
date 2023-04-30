import field from './rooms/field.js'
import fieldAfter from './rooms/field-after.js'
import stream from './rooms/stream.js'
import structure from './rooms/structure.js'
import bedroom from './rooms/bedroom.js'

window.invader15 = () => ({
  roomId: field.id, // Set this to the ID of the room you want the player to start in.
  rooms: [ field, stream, fieldAfter, structure, bedroom ]
});
