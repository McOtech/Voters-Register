import { Component, OnInit } from '@angular/core';
import { Member, MembersService } from '../services/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  searchResult: Member[];
  count = 0;
  constructor(private member: MembersService) { }

  ngOnInit(): void {
    this.searchResult  = [];
  }

  searchMember(e) {
    e.preventDefault();
    const query = e.target.q.value;
    this.member.searchMember(query).subscribe((members: Member[]) => {
      this.searchResult = members;
    });
  }

}
