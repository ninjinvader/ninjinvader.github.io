import knife from '../items/knife.js'
import water from '../items/water.js'
import field from './field.js'

export default stream = {
      id: 'stream',
      name: 'The stream',
      desc: `You make your way down the banks of the stream. While there's a fire raging to the north, it seems like a good idea to find some cool WATER. In the water, you see something small and SHINY.

      [Type LOOK AT {ITEM NAME} to look at items]`,
      onEnter: () => {
      },
      onLook: () => {
        const room = getRoom('stream');
        desc = []
        desc.push(`You're by the stream.`)

        if (!disk.inventory.find(i => i.id === 'knife')) {
          desc.push(`There's something SHINY in the water!`)
        }
        if (!disk.inventory.find(i => i.id === 'water')) {
          desc.push(`And man you really could stand to TAKE a drink of that WATER!`)
        }
        room.desc = desc.join(' ')
      },
      items: [ knife, water ],
      exits: [
        { dir: 'north', id: 'fieldAfter' }
      ],
    }
