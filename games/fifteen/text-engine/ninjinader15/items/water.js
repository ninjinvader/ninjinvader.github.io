export default water = {
  id: 'water',
  name: 'water',
  desc: `Man, that water sure does look good. And you're so thirsty. Perhaps you could TAKE a small drink of WATER.

  [Type TAKE WATER to add some to your inventory]
  `,
  isTakeable: true, // Allows the player to take the item.
  onTake() {
    const room = getRoom('stream');
    room.desc = `You're standing by a cool running stream. Man that WATER sure looks nice.`
    println('Fortunately, you find a small canteen, and fill it with water. That first sip is sooo good.')
    println('')
    println('[Type INVENTORY at any time to see what you got! You can also USE items in your inventory.]')
  },
  index: 0,
  onUse() {
    var responses = [
      `You take another sip of water. At this rate, you'll need to pee soon!`,
      "Mmmmmmmmm.... water is so good.",
      "(gulp gulp gulp) ahhhhh",
      "You pour a little water on the ground. It soaks in to the dry earth.",
      "You take a sip. It's so cold! It almost hurts your teeth!",
      "You take a drink, dance around, and sing the water song. Water is so good.",
      "Another sip? You must be really thirsty!",
      "You are obviously really thirsty. Just a few more sips should be enough.",
      "You really like playing with the water, don't you?",
      "Water water bo bater, banana fana fo fater, mi my mo mater... waaaaaater.",
    ];
    println(responses[water.index])
    
    water.index = (water.index + 1) % responses.length
  },
}
