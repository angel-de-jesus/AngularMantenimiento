import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../users/users.service";
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-table',
  templateUrl: './view-table.component.html',
  styleUrls: ['./view-table.component.css']
})
export class ViewTableComponent implements OnInit {

  articulos:any;

  art={
    responsable:null,
    actividad:null,
    descripcion:null,
    fechaI:null,
    fechaFin:null,
  }
  constructor(public userService: UsersService) {
  }

  ngOnInit(): void {
    this.recuperarTodos();
    // console.log(this.recuperarTodos())
  }

  generatePdf() {
    var data = document.getElementById('cronograma');
    var docDefinition = {
      content: [
        {
          text: 'Tabla de cronograma\n\n',
          style: 'header'
        },
        {
          text: [
            {text: 'Cronograma de Test', fontSize: 15, bold: true},
           
          ]
        },
      ],
      styles: {
        header: {
          alignment: "center",
          fontSize: 18,
          bold: true
        },
        bigger: {
          fontSize: 15,
          italics: true
        }
      }
    };
    
    html2canvas(data).then(canvas => {
      var imgWidth = 200;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4');
      var position = 20;
      pdf.text("Cronograma",10,10)
      pdf.addImage(contentDataURL, 'PNG', 10, position, imgWidth, imgHeight)
      pdf.save('Cronograma.pdf');

    });
  }

  recuperarTodos() {
    this.userService.recuperarCrono().subscribe(result => this.articulos = result);
  }

}
