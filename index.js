const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

const courses = require('./data/courses.json')
const courseDetails = require('./data/courseDetails.json')


app.get('/', (req, res) => {
    res.send('courses api is running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courseDetails', (req, res) => {
    res.send(courseDetails)
})

app.get('/courseDetails/:id', (req, res) => {
    const id = req.params.id
    const selectedCourse = courseDetails.find(course => course._id === id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('courses is running on port', port);
})