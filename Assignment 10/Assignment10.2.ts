class Course {
    constructor(
        public code: string,
        public name: string,
        public credit: number
    ) {}

    showInfo(): void {
        console.log(
            `Course: ${this.code} - ${this.name}, Credit: ${this.credit}`
        );
    }
}


class Student {
    constructor(
        public studentId: string,
        public name: string
    ) {}

    enroll(course: Course): void {
        console.log(
            `Student: ${this.studentId} ${this.name} has enrolled in ${course.code} - ${course.name}.`
        );
    }
}


class Teacher {
    constructor(
        public name: string
    ) {}

    teach(course: Course): void {
        console.log(
            `Teacher: ${this.name} teaches ${course.code} - ${course.name}.`
        );
    }

    evaluate(student: Student, course: Course, score: number): void {
        let grade: string;

        if (score >= 80) {
            grade = "A";
        } else if (score >= 70) {
            grade = "B";
        } else if (score >= 60) {
            grade = "C";
        } else if (score >= 50) {
            grade = "D";
        } else {
            grade = "F";
        }

        console.log(`Teacher: ${this.name}`);
        console.log(
            `Student: ${student.studentId} ${student.name}`
        );
        console.log(
            `Course: ${course.code} - ${course.name}`
        );
        console.log(`Score: ${score}`);
        console.log(`Grade: ${grade}`);
    }
}


const teacherSmith = new Teacher("Dr. Smith");

const courseCS101 = new Course(
    "CS101",
    "Introduction to Computer Science",
    3
);

const alice = new Student(
    "651001",
    "Alice"
);


teacherSmith.teach(courseCS101);

alice.enroll(courseCS101);

teacherSmith.evaluate(
    alice,
    courseCS101,
    85
);