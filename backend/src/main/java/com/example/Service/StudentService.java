package com.example.Service;

import com.example.Model.Student;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;

import java.io.*;
import java.util.*;

@Service
public class StudentService {

    private final Map<Long, Student> studentDB = new HashMap<>();
    private Long idCounter = 1L;
    private final ObjectMapper objectMapper = new ObjectMapper();

    // ✅ Save JSON in project root
    private final File jsonFile = new File(System.getProperty("user.dir"), "students.json");

    public StudentService() {
        System.out.println("JSON file path: " + jsonFile.getAbsolutePath());
        loadStudentsFromFile();
    }

    private void loadStudentsFromFile() {
        try {
            if (jsonFile.exists()) {
                List<Student> students = objectMapper.readValue(jsonFile, new TypeReference<List<Student>>() {});
                for (Student student : students) {
                    studentDB.put(student.getId(), student);
                    idCounter = Math.max(idCounter, student.getId() + 1);
                }
            } else {
                saveStudentsToFile(); // Create empty file
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private void saveStudentsToFile() {
        try {
            List<Student> students = new ArrayList<>(studentDB.values());
            objectMapper.writerWithDefaultPrettyPrinter().writeValue(jsonFile, students);
            System.out.println("✅ Saved students to JSON.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    public List<Student> getAllStudents() {
        return new ArrayList<>(studentDB.values());
    }

    public Student getStudentById(Long id) {
        return studentDB.get(id);
    }

    public Student createStudent(Student student) {
        student.setId(idCounter++);
        studentDB.put(student.getId(), student);
        saveStudentsToFile();
        return student;
    }

    public Student updateStudent(Long id, Student student) {
        Student existing = studentDB.get(id);
        if (existing == null) {
            throw new NoSuchElementException("Student not found with ID: " + id);
        }

        existing.setRollNo(student.getRollNo());
        existing.setName(student.getName());
        existing.setDepartment(student.getDepartment());
        existing.setEmail(student.getEmail());
        existing.setPhone(student.getPhone());

        saveStudentsToFile();
        return existing;
    }

    public boolean deleteStudent(Long id) {
        boolean removed = studentDB.remove(id) != null;
        if (removed) {
            saveStudentsToFile();
        }
        return removed;
    }
}
