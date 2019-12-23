//I DEFINITELY DONT HAVE THIS HANDLED YET
users = [{
    fname: "Kermit",
    lname: "the Frog",
    languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
    interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
    }
},
{
    fname: "Winnie",
    lname: "the Pooh",
    languages: ["Python", "Swift", "Java"],
    interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
    }
},
{
    fname: "Arthur",
    lname: "Dent",
    languages: ["JavaScript", "HTML", "Go"],
    interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
    }
}]
function userLangauges(obj) {
    for (var i = 0; i < obj.objects; i++) {
        console.log(obj[users][i][fname] + obj[users][i][lname] + " knows " + obj[users][i][languages] + " .")
    }
}
userLangauges(users);