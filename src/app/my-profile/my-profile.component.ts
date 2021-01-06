import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JQ_TOKEN } from '../services/jquery.service';
import { Member, MembersService } from '../services/members.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {
  memberDetails: Member;
  constructor(@Inject(JQ_TOKEN) private $: any, private member: MembersService, private route: ActivatedRoute, private router: Router) { }

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
    const id = this.route.snapshot.params['id'];
    this.getMemberDetails(id);
    this.$('.verify-btn').on('click', () => {
      this.$('.ui.small.modal').first().modal('show');
    });
  }

  getMemberDetails(id: number) {
    this.member.getMemberDetails(id).subscribe((member: Member) => {
      this.memberDetails = member;
    });
  }
  vote(e) {
    e.preventDefault();
    const id = e.target.id.value;
    const choice = confirm('Do you want to proceed?');
    if (choice) {
      this.member.vote(id).subscribe((memberId: number) => {
        this.router.navigate([`/members/${memberId}/refresh`]);
        // window.location.reload();
      });
    }
  }
  getDate(timestamp: string) {
    return new Date(timestamp).toDateString();
  }
}
