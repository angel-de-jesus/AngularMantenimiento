import { Component, OnInit } from '@angular/core';
import { UsersService } from "../users/users.service";

@Component({
  selector: 'app-cronogramap',
  templateUrl: './cronogramap.component.html',
  styleUrls: ['./cronogramap.component.css']
})
export class CronogramapComponent implements OnInit {
  articulos:any;

  art={
    responsable:null,
    actividad:null,
    descripcion:null,
    fechaI:null,
    fechaFin:null,
  }


  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    // this.recuperarTodos()
  }


  alta() {
    this.userService.altaCronograma(this.art).subscribe(datos => {
      
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        // this.recuperarTodos();
      }else{
        alert(datos['mensaje']);
      }
    });
  }
  hayRegistros() {
    return true;
  } 
}
