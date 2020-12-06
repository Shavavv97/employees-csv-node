const fs = require("fs");
const args = process.argv.slice(2);

fs.readFile("../data/employees.csv", "utf8", function (err, data) {
    if (err) {
        console.log(err.message);
        return;
    }

    const id = args[0];
    const attr = args[1];

    const titles = data.slice(0, data.indexOf("\n")).split(",");
    const rows = data.slice(data.indexOf("\n") + 1).split("\n");

    let employees = rows.map((row) => {
        const values = row.split(",");
        return titles.reduce(
            (object, curr, i) => ((object[curr] = values[i]), object), {}
        );
    });
    let employeesId = employees.filter((employee) => employee.id == id);

    if (employeesId == "") {
        console.log("You have to send a valid ID");
        return;
    }

    if (attr) {
        if (attr in employeesId[0]){
            console.log({
                [attr]: employeesId[0][attr]
            });
            return;
        }
        console.log('There is no such attribute')
        return;
    }

    console.log(employeesId[0]);
});