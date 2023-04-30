import gun from '../items/gun.js'

export default knife = {
  id: 'knife',
  isTakeable: true, // Allow the player to take the item
  name: ['shiny', 'shiny', 'shiny thing'],
  desc: `Below the cool flowing waters, something glimers just under the surface. At first, it looks like perhaps the sun is shimmering on the water, but then you realize you're looking at a KNIFE!

  [Type TAKE KNIFE to add it to your inventory]
  `,
  onLook() {
    const knife = getItem('shiny');

    // now that we know it's a key, place that name first so the engine calls it by that name
    knife.name.unshift('pocket knife');
    knife.name.unshift('knife');

    // let's also update the description
    knife.desc = `It looks like a small, red, swiss army style pocket knife.`;

    // remove this method (we don't need it anymore)
    delete knife.onLook;
  },
  onTake() {
    const room = getRoom('stream');
    room.desc = `You're standing by a cool running stream. Man that WATER sure looks nice.`
    println('You took the pocket knife.')
    println('[Type INVENTORY at any time to see what you got! You can also USE items in your inventory.]')
  },
  onUse() {
    const room = getRoom(disk.roomId);
    if (room.id === 'stream') {
      println(`Yup. It's a knife. Not much to do with it here in the water tho.`);
    } else if (gun.broken) {
      println(`You take the pocket knife from your pocked, and open it up. It's a good thing you found it when you did!
      A little bit of work, and you manage to get the gun unblocked! NICE!`)
      gun.fixed = true;
    }
  },
}
