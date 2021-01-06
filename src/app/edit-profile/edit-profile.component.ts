import { Inject, OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JQ_TOKEN } from '../services/jquery.service';
import { Member, MembersService } from '../services/members.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  id: number = undefined;
  memberDetails: Member;
  constructor(@Inject(JQ_TOKEN) private $: any, private route: ActivatedRoute, private router: Router, private member: MembersService) { }

  ngOnInit(): void {
    this.memberDetails = {
      id: 0,
      fname: 'First',
      lname: 'Last',
      regno: 'Registration Number',
      status: 1,
      year: 1970,
      created: ''
    };
    try {
      this.id = this.route.snapshot.params['id'];
      if (this.id !== undefined) {
        this.getMemberDetails(this.id);
      }
    } catch (error) {}
    this.$('.ui.dropdown').dropdown();
  }
  getMemberDetails(id: number) {
    this.member.getMemberDetails(id).subscribe((member: Member) => {
      this.memberDetails = member;
    });
  }
  saveMemberDetails(e) {
    e.preventDefault();
    const id = this.id;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const regno = e.target.regno.value;
    const year = e.target.year.value;
    if (this.id === undefined) {
      this.member.storeMember({fname, lname, regno, year}).subscribe((id: number) => {
        this.router.navigate([`/members/${id}`]);
      });
    } else {
      this.member.updateMember({id, fname, lname, regno, year}).subscribe((id: number) => {
        this.router.navigate([`/members/${id}`]);
      });
    }
  }

}
