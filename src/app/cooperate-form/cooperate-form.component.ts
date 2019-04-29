import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  ActivatedRoute } from "@angular/router";

import { equipmentList } from '../mock-equipment';
import { Equipment } from '../equipment';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-cooperate-form',
  templateUrl: './cooperate-form.component.html',
  styleUrls: ['./cooperate-form.component.css']
})
export class CooperateFormComponent implements OnInit {

  equipment: Equipment;
  selectedId: number;
  alreadyInvestedPercent: number;
  investment: number;
  isPayed: boolean = false;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.selectedId  = +this.route.snapshot.paramMap.get('id');
    this.equipment = equipmentList.find( x => x.id == this.selectedId);
    this.alreadyInvestedPercent = (this.equipment.currentInvestment * 100) / this.equipment.price;

    this.firstFormGroup = this._formBuilder.group({
    });

    this.secondFormGroup = this._formBuilder.group({
      investment: [1, [Validators.min(1), Validators.max(this.equipment.price - this.equipment.currentInvestment)]]
    });

    this.thirdFormGroup = this._formBuilder.group({
    });
  }

  openBottomSheet() {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  pay(){
    console.warn("PAYMENT!")
    this.isPayed = true;
  }
}

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}