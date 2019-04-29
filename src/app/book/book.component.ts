import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {  ActivatedRoute } from "@angular/router";

import { equipmentList } from '../my-second-mock-equipment';
import { Equipment } from '../equipment';

import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  equipment: Equipment;
  selectedId: number;

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  minDate = new Date();

  isPayed: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit() {
    this.selectedId  = +this.route.snapshot.paramMap.get('id');
    this.equipment = equipmentList.find( x => x.id == this.selectedId);

    this.firstFormGroup = this._formBuilder.group({
    });

    this.secondFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.thirdFormGroup = this._formBuilder.group({
    });
  }

  openBottomSheet() {
    this.bottomSheet.open(EasterEggTwo);
  }

  pay(){
    console.warn("PAYMENT!")
    this.isPayed = true;
  }
}

@Component({
  selector: 'easter-egg-2',
  templateUrl: 'easter-egg-2.html',
})
export class EasterEggTwo {
  constructor(private bottomSheetRef: MatBottomSheetRef<EasterEggTwo>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}