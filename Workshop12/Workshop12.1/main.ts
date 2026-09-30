import { StudentDAO } from "./StudentDAO.ts";

const studentDAO = new StudentDAO();

studentDAO.insert("684245062",'พีรพัฒน์',3.5);
studentDAO.insert("684245059",'ก้องภพ',3.6);
studentDAO.insert("684245000",'Nobita',2.4);

const students = studentDAO.findAll();
students.forEach(s => {
    console.log(`${s.getInfo()} ${s.isHonors() ? "[Honors: YES]" : "[Honors: NO]"}`);
});