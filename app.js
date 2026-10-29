const express = require('express');

const app = express();

app.use(express.json());

let courses = [
    { id: 1, coursename: "AI/ML" },
    { id: 2, coursename: "Web Development" },
    { id: 3, coursename: "UI/UX" }
];


app.get('/', (req, res) => {
    res.json({ message: "This is the API project using postman." });
});

app.get('/courses', (req, res) => {
    res.json({
        message: "all data fetched successfully",
        data: courses
    });
});

app.get('/courses/:id', (req, res) => {
    const id = Number.parseInt(req.params.id);
    const course = courses.find((data) => {
        return data.id === id;
    });
    if (!course) {
        res.json({
            message: "data not found",
        });
    }
    res.json({
        message: "data fetched successfully",
        data: course
    });
});

app.post('/addcourse', (req, res) => {
    const { coursename } = req.body;
    const isexist = courses.find((data) => {
        return data.coursename == coursename;
    });
    if (isexist) {
        res.json({
            message: "data already exist",
        });
    }
    const course = {
        id: courses.length + 1,
        coursename: coursename
    };
    courses.push(course);
    res.json({
        message: "data added successfully",
        data: course
    });
});

app.put('/change', (req, res) => {
    const {id,coursename} = req.query;

    courses = courses.map((data) => {
        return data.id == id ? {id:id, coursename: coursename} : data;
    });
    res.json({
        message: "data updated successfully",
        data: courses
    });
});

app.delete('/deletecourse', (req, res) => {
    const id = Number (req.query.id);

    const course = courses.find((data) => {
        return data.id == id;
    });
    if (!course) {
        res.json({
            message: "data not found",
        });
    }
    courses = courses.filter((data) => {
        return data.id != id;
    });
    res.json({
        message: "data deleted successfully",
        data: courses
    });
});

app.listen(3000, () => {
    console.log('Server is running...');
});