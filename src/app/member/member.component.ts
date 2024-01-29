import { Component, OnInit } from '@angular/core';
import { MemberService } from '../services/member.service';
import { IMember } from '../models/member.model';
import { map } from 'rxjs/operators';


declare var Swal: any;

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})

export class MemberComponent implements OnInit {
  member: IMember = new IMember();
  // mModel = new IMember;
  constructor(private mService: MemberService) {
    this.retrieveData();
  }
  memberList: any;
  showModal: boolean = false;
  selectItem() {
    this.showModal = true;
  }
  retrieveData(): void {
    this.mService.retrieveData().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.memberList = data;
      console.log(this.memberList);
    });
  }
  submitForm() {
    this.mService.submitData(this.member).then(() => {
      Swal.fire({
        icon: 'success',
        title: 'บันทึกข้อมูลสำเร็จ!',
        text: this.member.title + ' ' + this.member.fName + ' ' + this.member.lName,
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        this.clearForm();
      });
    });
  }

  clearForm() {
    this.member.address = '';
    this.member.title = 'นาย';
    this.member.fName = '';
    this.member.lName = '';
    this.member.email = '';
    this.member.mobileNum = '';
    this.member.lineID = '';
  }
  ngOnInit(): void {
      
  }
}
