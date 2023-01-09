export default field = {
  id: 'field', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
  name: 'The field', // Displayed each time the player enters the room.
  desc: `You awaken in the middle of a massive field. How did you get here? You can't remember, but you're pretty sure you don't remember going to sleep here. But what happened? It's right at the corner of your mind, but not quite there...

  [Type LOOK to look around]`,

  onLook: () => {
    const room = getRoom('field');
    room.desc = `To the SOUTH you see a small stream. There's water, and you're feeling pretty thirsty.

    To the EAST there's just... nothing... as far as the eye can see, just grass, grass, and more grass.

    To the WEST there's a small structure. Not much, but it's something.

    Suddenly, to the NORTH, a massive ball of flame! Where did that come from! It looks like someone dropped a bomb or something!!

    [Type GO and the direction you want to travel]`
  },

  exits: [
    {
      dir: 'north',
      id: 'fire-ball',
      block: `You probably don't want to go that way! Everything is on fire!`,
    },
    {
      dir: 'east',
      id: 'nothing',
      block: `You walk east for a while, but there's just more grass. You give up quickly and return to where you started.`,
    },
    {
      dir: 'west',
      id: 'structure',
      block: `You walk to the structure, but it's just a roof. If one of those fireballs falls over here, this is where you're heading!`,
    },
    {
      dir: 'south',
      id: 'stream',
    },
  ],
}
