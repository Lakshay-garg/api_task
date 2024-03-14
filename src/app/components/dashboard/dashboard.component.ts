import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  moduleId = 112;
  data:any[]=[]
  currentPage = 1;
  collectionSize: number = 0; // Define collectionSize and initialize it to 0
  page: number = 1; // Define page and initialize it to 1
  pageSize: number = 4;
 

  constructor(public companyService:CompanyService){}

  ngOnInit(): void {
    // Example usage
    
    this.companyService.getCustomFieldsButtonsIcons(this.moduleId).subscribe(response => {
      console.log(response)
    });
    this.getCompanyList()
    this.getCompanyById(1,this.moduleId)
  }

  getCompanyList() {
    this.companyService.getCompanyList().subscribe((res: any) => {
      this.data = res.data.content;
     
    });
  }

  getCompanyById(id:number,moduleId:number){
    return this.companyService.getCompanyById(id,moduleId).subscribe((res)=>{
    })
  }

 

  
  

}
