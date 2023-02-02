import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { UserGuardService } from 'src/app/services/user-guard.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authServiceLogout : UserGuardService, private route : Router){}

  logoutUser() {
    Swal.fire({
      title: 'Desea cerrar sesion',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Log Out!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Exitoso!',
          'Has cerrado sesion correctamente',
          'success'
        )
        this.authServiceLogout.isLogOut()
        console.log(this.authServiceLogout.isLogOut());
        
        // localStorage.removeItem('logeado')
        this.route.navigate(['/'])
      }
    })

  }
}
