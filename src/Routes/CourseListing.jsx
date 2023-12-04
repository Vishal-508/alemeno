import React, { useEffect } from 'react'
// import { getCourse } from '../Redux/actionCreators'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getCourse } from '../Redux/actionCreators';
import Navbar from '../Components/Navbar';
var courses = [{
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'Stephen Grider',
    description: 'Learn the basics of React Native development and build your first mobile app',
    enrollmentStatus: 'Open',
    thumbnail: 'https://img-b.udemycdn.com/course/240x135/1362070_b9a1_2.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
    ],
    students: [
        {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
        {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
        },

    ],
},
{
    id: 2,
    name: '100 Days of Code:THe COmplete Python',
    instructor: 'Dr. Angela Yu',
    description: 'Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!',
    enrollmentStatus: 'Open',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg',
    duration: '10 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to Python',
            content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
    ],
    students: [
        {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
        {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
        },

    ],
},
{
    id: 3,
    name: 'Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]',
    instructor: 'John Doe',
    description: 'Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included.',
    enrollmentStatus: 'Open',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
    ],
    students: [
        {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
        {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
        },

    ],
},
{
    id: 4,
    name: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    instructor: 'Jonas Schmedtmann',
    description: 'The Complete JavaScript Course 2024: From Zero to Expert!',
    enrollmentStatus: 'Open',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/851712_fc61_6.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
    ],
    students: [
        {
            id: 101,
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
        {
            id: 102,
            name: 'Bob Smith',
            email: 'bob@example.com',
        },

    ],
},
{
    id: 5,
    name: 'Next.js Projects - 4 NextJS 13 projects (Instagram, Google.)',
    instructor: 'Dr. Sahand Ghavidel',
    description: 'Next.js 13 (reactjs framework) Projects. 4 NextJS 13 projects. IMDB, Instagram, Twitter, Google clone using Next js 13',
    enrollmentStatus: 'Open',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/2497890_744b_3.jpg',
    duration: '8 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
    ],
    students: [
        {
            id: 501,
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
        {
            id: 502,
            name: 'Bob Smith',
            email: 'bob@example.com',
        },

    ],
},
{
    id: 6,
    name: 'Typescript with React classes - quick start - Jest testing',
    instructor: 'Alex Horea',
    description: 'Quickly stack using Typescript with React and build great apps!do not stop here and write awesome tests with Jest!',
    enrollmentStatus: 'Open',
    thumbnail: 'https://img-c.udemycdn.com/course/240x135/3908850_7bf2.jpg',
    duration: '12 weeks',
    schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
    location: 'Online',
    prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
    syllabus: [
        {
            week: 1,
            topic: 'Introduction to React Native',
            content: 'Overview of React Native, setting up your development environment.'
        },
        {
            week: 2,
            topic: 'Building Your First App',
            content: 'Creating a simple mobile app using React Native components.'
        },
    ],
    students: [
        {
            id: 501,
            name: 'Alice Johnson',
            email: 'alice@example.com',
        },
        {
            id: 502,
            name: 'Bob Smith',
            email: 'bob@example.com',
        },

    ],
}
]



const CourseListing = () => {
    const { courses, isLoading, isError } = useSelector((store) => store);
    const dispatch=useDispatch();
    var data=courses;
    useEffect(()=>{
        if(data.length===0){
            dispatch(getCourse()) 
        }
    },[])
  
    return (
        <>
        <Navbar/>
        <div>CourseListing</div>
        </>
    )
}

export default CourseListing