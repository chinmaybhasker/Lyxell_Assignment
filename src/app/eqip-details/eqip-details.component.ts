import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EquipDetailModal } from '../EquipModal';

import { MainService } from '../main.service';

@Component({
  selector: 'app-eqip-details',
  templateUrl: './eqip-details.component.html',
  styleUrls: ['./eqip-details.component.css']
})
export class EqipDetailsComponent implements OnInit {

  constructor(private mainService : MainService,private router: ActivatedRoute) { }
  object : EquipDetailModal = new EquipDetailModal();
  keyJSON = ['equipment_category','gear_category','weight','name'];
  ngOnInit(): void {
    let index = this.router.snapshot.paramMap.get('id')
    console.log(index);

    this.mainService.getDeatils(index).subscribe(data=>{
      console.log(data);
     // debugger;
      for(let x of this.keyJSON){
        if (data[x] != undefined){
          if (x == 'equipment_category' || x == 'gear_category'){
            this.object[x] =  data[x]['name']
          }
          else{
            this.object[x] =  data[x]
          }   
        }
        else{
          this.object[x] = "Not Available";
        }
      }
      console.log(JSON.stringify(this.object))
      // //this.object = new EquipDetailModal();
      // if (data['equipment_category']['name'] != undefined){
      // this.object.equip_Category = data['equipment_category']['name'];
      // }
      // else{
        
      // }
      // if (data['gear_category']['name'] != undefined){
      // this.object.gear_Category = data['gear_category']['name'];
      // }
      // else{
      //   this.object.gear_Category = "Not Available";
      // }
      // if ()
      // this.object.weight = data['weight'];
      // this.object.name = data['name']
    });
  }

}
