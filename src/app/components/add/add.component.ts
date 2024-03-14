import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  moduleId=112
  fields:any
  addForm!:FormGroup
  countryList:any[]=[]
  stateList:any[]=[]
  cityList:any[]=[]
  statusList:any[]=[]

  constructor(public companyService:CompanyService,public fb:FormBuilder,public router:Router){}

  ngOnInit(): void {
    this.getFields()
    this.generateForm()
    this.getCountry()
    this.getStatus()
  }

  getFields(){
    this.companyService.getCustomFieldsButtonsIcons(this.moduleId).subscribe((res)=>{
      this.fields = res.data
    })
  }

  generateForm(){
    this.addForm = this.fb.group({
      id: [''],
      companyCode:[''],
      typeId:[''],
      companyName:[''],
      logo:[''],
      address:[''],
      countryId:[''],
      stateId:[''],
      cityId:[''],
      companyEmail:[''],
      phone:[''],
      pinCode:[''],
      companyDetails:[''],
      panNo:[''],
      msmeReg:[''],
      msmeRegNo:[''],
      authorizedSignatory:[''],
      regNo:[''],
      status:[''],
      authorisedEmail:[''],
      rccm:[''],
      idNat:[''],
      noImpot:[''],
      bankDetails:[''],
      bankAccounts:[''],
      generalAttachments:[''],
      documents:[''],
    })
  }

  getCountry(){
    this.companyService.getCountry().subscribe((res)=>{
      this.countryList = res.data
    })
  }

  onCountrySelect(val:number){
    this.companyService.getState(val).subscribe((res)=>{
      this.stateList = res.data
    })
  }

  onStateSelect(val:number){
    this.companyService.getCity(val).subscribe((res)=>{
      this.cityList = res.data
    })
  }

  getStatus(){
    this.companyService.getStatus(this.moduleId).subscribe((res)=>{
      this.statusList = res.data
    })
  }

  submit(){
    console.log(this.addForm.value)
  }

  cancel(){
    this.router.navigateByUrl('/dashboard')
  }

}
