import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.css']
})
export class DetailviewComponent implements OnInit{

  moduleId = 112
  companyData:any

  constructor(public route:ActivatedRoute, public companyService:CompanyService, public router:Router){}

  ngOnInit(): void {
    this.getCompanyById()
  }

  getCompanyById(){
    const Id = this.route.snapshot.params['id']
    this.companyService.getCompanyById(Id,this.moduleId).subscribe((res)=>{
      this.companyData = res
    })
  }

  cancel(){
    this.router.navigateByUrl('/dashboard')
  }
}
