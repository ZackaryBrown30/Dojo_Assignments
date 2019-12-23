//no Redunencies 

var tigger = {character: "Tigger"};
tigger.north = pooh.south;

var pooh = { character : "Winnie the Pooh"};
pooh.west = piglet.east;
pooh.east = bees.west;
pooh.north = chris.south;

var bees = {character : "Bees"};
bees.north = rabbit.south;

var piglet = { character : "Piglet"};
piglet.north = owl.south;

var owl = { character : "Owl"};
owl.east = chris.west;

var chris = { character :  " Christopher Robin"};
chris.north = kanga.south;
chris.east = rabbit.west;

var rabbit  = { character : "Rabbit"};
rabbit.east = gopher.west;

var gopher = { character : "Gopher"};

var kanga = { character : "Kanga"};
kanga.north = eeyore.souoth;

var eeyore = { character : "Eeyore"};
eeyore.east = heffalumps.west;

var heffalumps = { character : "Heffalumps"};
