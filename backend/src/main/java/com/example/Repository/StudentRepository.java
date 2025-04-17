
package com.example.Repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Model.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
}
