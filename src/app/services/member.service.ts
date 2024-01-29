import { Injectable, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { IMember } from '../models/member.model';
@Injectable({
  providedIn: 'root'
})

export class MemberService implements OnInit{
  private dbPath = "/members";

  memberRef: AngularFirestoreCollection<IMember>;

  ngOnInit(): void {
      
  }
  constructor(private db: AngularFirestore) {
    this.memberRef = db.collection(this.dbPath);
  }

  submitData(data:IMember): any {
    console.log(data);
    this.memberRef.add({...data})
  }
  retrieveData(): AngularFirestoreCollection<IMember> {
    return this.memberRef;
  }
}
