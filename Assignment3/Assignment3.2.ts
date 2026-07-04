enum CourseStatus {
    Open,
    Closed,
    Full
}
interface student {
    id: string;
    name: string;
}
interface Course {
    title: string;
    code: string;
    status: CourseStatus;
    students: student[];
}

function enrollStudent(course: Course, student: student) {
    if (course.status === CourseStatus.Closed) {
        console.log(`Cannot enroll ${student.name} in ${course.title}. The course is closed.\n`);
    }else if (course.status === CourseStatus.Open) {
        course.students.push(student);
        console.log(`${student.name} has been enrolled in ${course.title}.\n`);
    }else {
        console.log(`Cannot enroll ${student.name} in ${course.title}. The course is full.\n`);
    }
}

const course1: Course = {
    title: "Introduction to TypeScript",
    code: "TS101",
    status: CourseStatus.Open,
    students: []
};

const course2: Course = {
    title: "Advanced TypeScript",
    code: "TS201",
    status: CourseStatus.Closed,
    students: []
};

const course3: Course = {
    title: "TypeScript for Professionals",
    code: "TS301",
    status: CourseStatus.Full,
    students: []
};

const student1: student = {
    id: "S001",
    name: "Max verstappen"
};

const student2: student = {
    id: "S002",
    name: "Gojo-Satoru"
};

const student3: student = {
    id: "S003",
    name: "Minecraft"
};

enrollStudent(course1, student1); 
enrollStudent(course2, student2); 
enrollStudent(course3, student3); 
