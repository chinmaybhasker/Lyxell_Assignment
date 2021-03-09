import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EquipmentDetailsModal } from '../EquipDetailsModal';
import { MainService } from '../main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  searchText : string;
  equipModal : EquipmentDetailsModal;
  equipModalArray : EquipmentDetailsModal[] = [];
  equipModalArrayTemp : EquipmentDetailsModal[] = [];
  errorMsg : string = 'No Record Found!'
  serviceErrorMsg : string ='Something Went Worg, please try after sometime!';
  serviceErrorFlag : boolean =false;
  errorFlag : boolean = false;
  ngOnInit(): void {
    this.mainService.getEqipmentDetails().subscribe(data=>{
      console.log(data);
      this.errorFlag = false;
      this.serviceErrorFlag = false;
      this.equipModalArray = [];
      for(let x of data['results']){
          this.equipModal = new EquipmentDetailsModal();
          this.equipModal.index = x.index;
          this.equipModal.name = x.name;
          this.equipModal.url= x.url;
          this.equipModalArray.push(this.equipModal);
      }
      this.equipModalArrayTemp = this.equipModalArray;
    },err=>{
          this.serviceErrorFlag = true;
    }
    )
    
  }
  constructor(private mainService : MainService,private router: Router){}
  title = 'lyxellAngular';

  EqipDetail(obj){
    this.router.navigate(['/EqipDetail',obj.index])
  }

  search(){
    this.equipModalArray = [];
    this.errorFlag =false;
    console.log( this.equipModalArrayTemp);
      this.equipModalArrayTemp.filter(x=>{
        if (x.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1){
          this.equipModalArray.push(x);
        }
      })
      if (this.equipModalArray.length == 0){
        this.errorFlag =true;
      }
      if (this.searchText.length == 0){
        this.equipModalArray = this.equipModalArrayTemp;
      }
  }

}
