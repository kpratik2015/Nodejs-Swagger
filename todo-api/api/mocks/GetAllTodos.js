// The name of this file is the swagger router controller GetAllTodos
module.exports = {
    GetAllTodos: GetAllTodos
}

function GetAllTodos(req, res, next) {
    res.json([
        {
            todo_id: 0,
            tood: "Get some milk",
            author: "Jim",
            datecreated: "2018-12-09T14:10:39.281Z",
            duedate: "2018-12-09T18:10:39.281Z",
            completed: false
        },
        {
            todo_id: 1,
            tood: "Get some cereal",
            author: "Austin",
            datecreated: "2018-12-09T14:10:39.281Z",
            duedate: "2018-12-09T18:10:39.281Z",
            completed: false
        }
    ])
}