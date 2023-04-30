export default fieldAfter = {
  id: 'fieldAfter', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
  name: 'The field (again)', // Displayed each time the player enters the room.
  desc: `You scramble back up the bank of the river only to find that more bombs have fallen, and what's worse is that they're getting closer!

  Like... really close... one after another, they're dropping, each closer than the last.

  And in the sky, what's that? Spaceships! So. Many. Spaceships. All dropping bombs! You've got to find cover, and fast!

  There's a small structure to the WEST, perhaps that will do?`,

  exits: [
    {
      dir: 'north',
      id: 'fire-ball',
      block: `So much fire in that direction! You really do not want to go that way!!`,
    },
    {
      dir: 'east',
      id: 'nothing',
      block: `You walk east for a while, but there's just more grass. You give up quickly and return to where you started.`,
    },
    {
      dir: 'west',
      id: 'structure',
    },
    {
      dir: 'south',
      id: 'stream',
    },
  ],
}
