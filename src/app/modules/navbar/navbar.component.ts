import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

 constructor(private toastr: ToastrService,private router:Router,public _userService:UserService) { }

  ngOnInit(): void {
    this._userService.getCurrentUser();
  }
  
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  signIn(){
    this.router.navigate(['/signin']);
  }
  onLogout(){
    console.log("uuuuuuuuuuuuuu");
    this._userService.logout().then(
      (res)=>{
        this.router.navigate(['/']);
      }
    )
  }

}
