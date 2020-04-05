import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
