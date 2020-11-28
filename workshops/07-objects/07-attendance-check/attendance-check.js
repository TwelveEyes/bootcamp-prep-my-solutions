let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
function attendanceCheck(day) {
    let attendanceArray = [];

    for(i = 0; i < classRoom.length; i++) {
        let student = classRoom[i];
        let name = Object.keys(student)[0];
        let attendance = student[name];

        for(x = 0; x < attendance.length; x++) {
            if(attendance[x][day]) attendanceArray.push(name);
        }
    }

    return attendanceArray;
}