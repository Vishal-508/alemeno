import { Box } from '@chakra-ui/react'
import React from 'react'

var singleCourse={
    id: 1,
    name: 'Introduction to React Native',
    instructor: 'John Doe',
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
}

const CourseDetails = ({data}) => {
  return (
    <Box className='detail-con' >
        <Box>
            image
        </Box>
         <Box as='h1'>
    course name
         </Box>
         <Box>
            instructor's name
         </Box>
         <Box>
              discription
         </Box>
         <Box>
            enrollment status
         </Box>

         <Box>
        course duration
         </Box>
         <Box>
            schedule
         </Box>
         <Box>
            re-requisites
         </Box>
         <Box>language</Box>
         <Box>
            syllabus with expandables items
         </Box>
    </Box>
  )
}

export default CourseDetails