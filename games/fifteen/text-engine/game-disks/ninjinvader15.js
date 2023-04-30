(() => {
  // rooms/field.js
  var field_default = field = {
    id: "field",
    name: "The field",
    desc: `You awaken in the middle of a massive field. How did you get here? You can't remember, but you're pretty sure you don't remember going to sleep here. But what happened? It's right at the corner of your mind, but not quite there...

  [Type LOOK to look around]`,
    onLook: () => {
      const room = getRoom("field");
      room.desc = `To the SOUTH you see a small stream. There's water, and you're feeling pretty thirsty.

    To the EAST there's just... nothing... as far as the eye can see, just grass, grass, and more grass.

    To the WEST there's a small structure. Not much, but it's something.

    Suddenly, to the NORTH, a massive ball of flame! Where did that come from! It looks like someone dropped a bomb or something!!

    [Type GO and the direction you want to travel]`;
    },
    exits: [
      {
        dir: "north",
        id: "fire-ball",
        block: `You probably don't want to go that way! Everything is on fire!`
      },
      {
        dir: "east",
        id: "nothing",
        block: `You walk east for a while, but there's just more grass. You give up quickly and return to where you started.`
      },
      {
        dir: "west",
        id: "structure",
        block: `You walk to the structure, but it's just a roof. If one of those fireballs falls over here, this is where you're heading!`
      },
      {
        dir: "south",
        id: "stream"
      }
    ]
  };

  // rooms/field-after.js
  var field_after_default = fieldAfter = {
    id: "fieldAfter",
    name: "The field (again)",
    desc: `You scramble back up the bank of the river only to find that more bombs have fallen, and what's worse is that they're getting closer!

  Like... really close... one after another, they're dropping, each closer than the last.

  And in the sky, what's that? Spaceships! So. Many. Spaceships. All dropping bombs! You've got to find cover, and fast!

  There's a small structure to the WEST, perhaps that will do?`,
    exits: [
      {
        dir: "north",
        id: "fire-ball",
        block: `So much fire in that direction! You really do not want to go that way!!`
      },
      {
        dir: "east",
        id: "nothing",
        block: `You walk east for a while, but there's just more grass. You give up quickly and return to where you started.`
      },
      {
        dir: "west",
        id: "structure"
      },
      {
        dir: "south",
        id: "stream"
      }
    ]
  };

  // items/gun.js
  var gun_default = gun = {
    id: "gun",
    name: ["something"],
    desc: `You bend down to take a closer look and discover what can only be described as a really big GUN!`,
    onLook: () => {
      if (gun.broken) {
        println("It appears to be jammed! If only you had something you could USE to unblock it.");
      } else {
        gun.name.unshift("gun");
        gun.isTakeable = true;
      }
    },
    onTake: () => {
      if (gun.isTakeable) {
        println("You TAKE the gun.");
        println("Oh! That's pretty heavy! Hopefully it's worth it!");
      } else {
        println("Maybe you should LOOK at it first?");
      }
    },
    kills: 0,
    spaceships: 5,
    fixed: false,
    broken: false,
    onUse: () => {
      const room = getRoom(disk.roomId);
      if (gun.broken && !gun.fixed) {
        println("No dice, it's totally jammed. You'll need to find a way to unjam it!");
      }
      if (room.id === "structure" && room.holes <= 3) {
        room.holes = room.holes + 1;
        println(`Oh no! You've shot another hole in the roof! Now there are ${room.holes}! `);
        if (room.holes > 3) {
          println(`Oh no! The structure comes crashing down around you! That's too bad!`);
          println();
          println("However, now you have a much better view of the spaceships... and a really big GUN!");
        } else {
          println(`Be careful, that's your only cover!!`);
        }
      } else {
        if (gun.kills === 0) {
          println(`You fire the gun, and oh my! The recoil! That hurts... but not nearly as much as it hurts for the first spaceship... which comes crashing down to earth in a ball of flame!`);
          gun.kills = 1;
        } else if (gun.kills < gun.spaceships - 2) {
          if (Math.random() > 0.4) {
            println(`You hit another one! Good for you!`);
            gun.kills += 1;
          } else {
            println(`Damn! Missed! Try again!`);
          }
          println(`${gun.spaceships - gun.kills} to go!`);
        } else if (!gun.fixed && gun.kills < gun.spaceships - 1) {
          println(`Oh no! Your gun is jammed, and your finger are just too big to get in there and unblock it! And when you're soooo close!`);
          gun.broken = true;
        } else {
          println(`You did it! You got them all! And just in time!!!`);
          println(`A magical PORTAL opens in the floor... do you jump in, or not!`);
        }
      }
    }
  };

  // items/knife.js
  var knife_default = knife = {
    id: "knife",
    isTakeable: true,
    name: ["shiny", "shiny", "shiny thing"],
    desc: `Below the cool flowing waters, something glimers just under the surface. At first, it looks like perhaps the sun is shimmering on the water, but then you realize you're looking at a KNIFE!

  [Type TAKE KNIFE to add it to your inventory]
  `,
    onLook() {
      const knife2 = getItem("shiny");
      knife2.name.unshift("pocket knife");
      knife2.name.unshift("knife");
      knife2.desc = `It looks like a small, red, swiss army style pocket knife.`;
      delete knife2.onLook;
    },
    onTake() {
      const room = getRoom("stream");
      room.desc = `You're standing by a cool running stream. Man that WATER sure looks nice.`;
      println("You took the pocket knife.");
      println("[Type INVENTORY at any time to see what you got! You can also USE items in your inventory.]");
    },
    onUse() {
      const room = getRoom(disk.roomId);
      if (room.id === "stream") {
        println(`Yup. It's a knife. Not much to do with it here in the water tho.`);
      } else if (gun_default.broken) {
        println(`You take the pocket knife from your pocked, and open it up. It's a good thing you found it when you did!
      A little bit of work, and you manage to get the gun unblocked! NICE!`);
        gun_default.fixed = true;
      }
    }
  };

  // items/water.js
  var water_default = water = {
    id: "water",
    name: "water",
    desc: `Man, that water sure does look good. And you're so thirsty. Perhaps you could TAKE a small drink of WATER.

  [Type TAKE WATER to add some to your inventory]
  `,
    isTakeable: true,
    onTake() {
      const room = getRoom("stream");
      room.desc = `You're standing by a cool running stream. Man that WATER sure looks nice.`;
      println("Fortunately, you find a small canteen, and fill it with water. That first sip is sooo good.");
      println("");
      println("[Type INVENTORY at any time to see what you got! You can also USE items in your inventory.]");
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
        "Water water bo bater, banana fana fo fater, mi my mo mater... waaaaaater."
      ];
      println(responses[water.index]);
      water.index = (water.index + 1) % responses.length;
    }
  };

  // rooms/stream.js
  var stream_default = stream = {
    id: "stream",
    name: "The stream",
    desc: `You make your way down the banks of the stream. While there's a fire raging to the north, it seems like a good idea to find some cool WATER. In the water, you see something small and SHINY.

      [Type LOOK AT {ITEM NAME} to look at items]`,
    onEnter: () => {
    },
    onLook: () => {
      const room = getRoom("stream");
      desc = [];
      desc.push(`You're by the stream.`);
      if (!disk.inventory.find((i) => i.id === "knife")) {
        desc.push(`There's something SHINY in the water!`);
      }
      if (!disk.inventory.find((i) => i.id === "water")) {
        desc.push(`And man you really could stand to TAKE a drink of that WATER!`);
      }
      room.desc = desc.join(" ");
    },
    items: [knife_default, water_default],
    exits: [
      { dir: "north", id: "fieldAfter" }
    ]
  };

  // items/portal.js
  var portal_default = portal = {
    id: "portal",
    name: "portal",
    desc: `Yup. Definitely a portal`,
    isTakeable: false
  };

  // rooms/structure.js
  var structure_default = structure = {
    id: "structure",
    name: "The structure",
    desc: `Ok! Seems like you're safe here... for now! What an odd structure to find in the middle of a field. It's complely open on all sides, but the roof seems to be made out of concrete, so very strong. That's fortunate given the situation you're in now!

      On the floor, you see SOMETHING that requires additional inspection!

      Suddenly, a bomb drops right on the roof!

      It holds, for now, but it's clear that another bomb dropped on that exact spot will fall straight through, you'll have to be careful.
      `,
    holes: 1,
    onEnter: () => {
      var field2 = getRoom("field");
      field2.desc = `You scramble back up the bank of the river only to find that more bombs have fallen, and what's worse is that they're getting closer!`;
    },
    onLook: () => {
      const room = getRoom("stream");
      desc = [];
      desc.push(`You're by the stream.`);
      if (!disk.inventory.find((i) => i.id === "knife")) {
        desc.push(`There's something SHINY in the water!`);
      }
      if (!disk.inventory.find((i) => i.id === "water")) {
        desc.push(`And man you really could stand to TAKE a drink of that WATER!`);
      }
      room.desc = desc.join(" ");
    },
    items: [gun_default, portal_default],
    exits: [
      { dir: "north", id: "fieldAfter" },
      { dir: "portal", id: "bedroom" }
    ]
  };

  // rooms/bedroom.js
  var bedroom_default = bedroom = {
    id: "bedroom",
    name: "Your bedroom",
    desc: `You're back in your bedroom... it feels like you just woke up! But how is that possible!? Was it all a dream? It felt so real!!

  HAPPY 15TH BIRTHDAY MY NINJINVADER!!!
  LOVE, DAD`,
    onLook: () => {
      bedroom.desc = "Theres nothing else to do... you're late for school!!! WAKE UP AND GET MOVING :P";
    }
  };

  // main.js
  window.invader15 = () => ({
    roomId: field_default.id,
    rooms: [field_default, stream_default, field_after_default, structure_default, bedroom_default]
  });
})();
