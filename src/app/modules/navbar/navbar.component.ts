import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 constructor(private toastr: ToastrService,private router:Router) { }

  ngOnInit(): void {
  }
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  signIn(){
    this.router.navigate(['/signin']);
  }

}
