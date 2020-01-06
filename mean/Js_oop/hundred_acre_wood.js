var tigger = { character: "Tigger" };
tigger.north = pooh.south;

var pooh = { character: "Winnie the Pooh" };
pooh.west = piglet.east;
pooh.east = bees.west;
pooh.north = chris.south;

var bees = { character: "Bees" };
bees.north = rabbit.south;

var piglet = { character: "Piglet" };
piglet.north = owl.south;

var owl = { character: "Owl" };
owl.east = chris.west;

var chris = { character: " Christopher Robin" };
chris.north = kanga.south;
chris.east = rabbit.west;

var rabbit = { character: "Rabbit" };
rabbit.east = gopher.west;

var gopher = { character: "Gopher" };

var kanga = { character: "Kanga" };
kanga.north = eeyore.souoth;

var eeyore = { character: "Eeyore" };
eeyore.east = heffalumps.west;

var heffalumps = { character: "Heffalumps" };

var player = {
  location: tigger
};

// function move(e) {
// 	this.player = this.${e}
// 	if (!e) { console.log("Player cannot move that direction")}
// 	}
// }

function move(direction) {
  if (player.location[direction] === undefined) {
    return "You cannot go " + direction;
  } else {
    player.location = player.location[direction];
    return "You are now at " + player.location.character + "house";
  }
}
console.log(move("north"));
console.log(move("north"));
console.log(move("east"));
console.log(move("east"));
console.log(move("east"));
