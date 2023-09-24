package com.fullstack.backend.employee.repository;

import com.fullstack.backend.employee.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}