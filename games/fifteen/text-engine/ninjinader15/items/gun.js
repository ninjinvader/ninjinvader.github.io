export default gun = {
  id: 'gun',
  name: ['something'],
  desc: `You bend down to take a closer look and discover what can only be described as a really big GUN!`,
  onLook: () => {
    if (gun.broken) {
      println("It appears to be jammed! If only you had something you could USE to unblock it.")
    } else {
      gun.name.unshift('gun');
      gun.isTakeable = true;
    }
  },
  onTake: () => {
    if (gun.isTakeable) {
      println("You TAKE the gun.")
      println("Oh! That's pretty heavy! Hopefully it's worth it!")
    } else {
      println("Maybe you should LOOK at it first?")
    }
  },
  kills: 0,
  spaceships: 5,
  fixed: false,
  broken: false,
  onUse: () => {
    const room = getRoom(disk.roomId);

    if (gun.broken && !gun.fixed) {
      println("No dice, it's totally jammed. You'll need to find a way to unjam it!")
    }
    if (room.id === 'structure' && room.holes <= 3) {
      room.holes = room.holes + 1;
      println(`Oh no! You've shot another hole in the roof! Now there are ${room.holes}! `);
      if (room.holes > 3) {
        println(`Oh no! The structure comes crashing down around you! That's too bad!`)
        println()
        println("However, now you have a much better view of the spaceships... and a really big GUN!")
      } else {
        println(`Be careful, that's your only cover!!`)
      }
    } else {
      if (gun.kills === 0) {
        println(`You fire the gun, and oh my! The recoil! That hurts... but not nearly as much as it hurts for the first spaceship... which comes crashing down to earth in a ball of flame!`)
        gun.kills = 1;
      } else if (gun.kills < gun.spaceships - 2) {
        if (Math.random() > .4) {
          println(`You hit another one! Good for you!`)
          gun.kills += 1
        } else {
          println(`Damn! Missed! Try again!`)
        }
        println(`${gun.spaceships - gun.kills} to go!`)
      } else if (!gun.fixed && gun.kills < gun.spaceships - 1) {
        println(`Oh no! Your gun is jammed, and your finger are just too big to get in there and unblock it! And when you're soooo close!`)
        gun.broken = true
      } else {
        println(`You did it! You got them all! And just in time!!!`)
        println(`A magical PORTAL opens in the floor... do you jump in, or not!`)
      }
    }
  },
}
