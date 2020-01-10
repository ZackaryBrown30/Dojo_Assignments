let students = [
  { name: "Remy", cohort: "Jan" },
  { name: "Genevieve", cohort: "March" },
  { name: "Chuck", cohort: "Jan" },
  { name: "Osmund", cohort: "June" },
  { name: "Nikki", cohort: "June" },
  { name: "Boris", cohort: "June" }
];

for (name in students) {
  console.log(students.name + students.cohort);
}
// Question 2

let users = {
  employees: [
    { first_name: "Miguel", last_name: "Jones" },
    { first_name: "Ernie", last_name: "Bertson" },
    { first_name: "Nora", last_name: "Lu" },
    { first_name: "Sally", last_name: "Barkyoumb" }
  ],
  managers: [
    { first_name: "Lillian", last_name: "Chambers" },
    { first_name: "Gordon", last_name: "Poe" }
  ]
};
function staff(dic) {
  for (staff in users) {
    console.log(staff.toUppercase());
    for (var i = 0; i < users[staff].length; i++) {
      var charCount =
        users[staff][i].first_name.length + users[staff][i].last_name.length;
      console.log(
        [i] +
          " - " +
          users[staff][i][first_name] +
          " , " +
          users[staff][i][last_name] +
          " - " +
          charCount
      );
    }
  }
}
