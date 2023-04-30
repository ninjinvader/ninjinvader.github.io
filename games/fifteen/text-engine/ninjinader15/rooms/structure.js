import knife from '../items/knife.js'
import water from '../items/water.js'
import gun from '../items/gun.js'
import field from './field.js'
import portal from '../items/portal.js'

export default structure = {
      id: 'structure',
      name: 'The structure',
      desc: `Ok! Seems like you're safe here... for now! What an odd structure to find in the middle of a field. It's complely open on all sides, but the roof seems to be made out of concrete, so very strong. That's fortunate given the situation you're in now!

      On the floor, you see SOMETHING that requires additional inspection!

      Suddenly, a bomb drops right on the roof!

      It holds, for now, but it's clear that another bomb dropped on that exact spot will fall straight through, you'll have to be careful.
      `,
      holes: 1,
      onEnter: () => {
        var field = getRoom('field')
        field.desc = `You scramble back up the bank of the river only to find that more bombs have fallen, and what's worse is that they're getting closer!`
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
      items: [ gun, portal ],
      exits: [
        { dir: 'north',  id: 'fieldAfter' },
        { dir: 'portal', id: 'bedroom', }
      ],
    }
