import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Student } from './student';
import { StudentService } from './student.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  students = [];
  model = new Student();
  registerForm: FormGroup;
  formBuilder: FormBuilder;
  constructor(private studentService: StudentService) {}
  ngOnInit() {
    this.getAllStudents();
    this.registerForm = this.formBuilder.group({
      customername: ['', Validators.required],
      contactperson: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', Validators.required],
      pan: [false, Validators.requiredTrue],
      registeron: ['', Validators.required],
      Type: ['', Validators.required],
    });
  }
  getAllStudents() {
    this.studentService.getAllStudentService().subscribe((x: any[]) => {
      this.students = x;
    });
  }
  editStudent(id) {
    this.studentService
      .getStudentService(id)
      .subscribe((data: any) => (this.model = data));
  }
  deleteStudent(id: any) {
    this.studentService.deleteStudentService(id).subscribe((data) => {
      this.getAllStudents();
    });
  }
  addStudent() {
    if (!this.model.id) {
      this.studentService.createStudentService(this.model).subscribe((data) => {
        this.getAllStudents();
        this.model = new Student();
      });
    } else {
      this.studentService
        .updateStudentService(this.model.id, this.model)
        .subscribe((data) => {
          this.getAllStudents();
          this.model = new Student();
        });
    }
  }
  marksEntryList: any = [
    {
      marksDistributionList: [
        {
          courseId: '01',
          courseTitle: 'Tax Description',
          taxDescription: null,
        },
        {
          courseId: '02',
          courseTitle: 'Base amount',
          baseAmount: 0,
        },
        {
          courseId: '03',
          courseTitle: 'Tax%',
          taxp: 0,
        },
      ],
    },
  ];

  getTotal(marks) {
    return marks.reduce((baseAmount, taxp) => baseAmount / taxp);
  }
}
