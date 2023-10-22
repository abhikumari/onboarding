import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { IgxLegendComponent, IgxCategoryChartComponent } from 'igniteui-angular-charts';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  firstFormGroup: FormGroup = this.fb.group({
    fullName: [''],
    displayName: ['']
  });
  secondFormGroup: FormGroup = this.fb.group({
    workspaceName: [''],
    workspaceUrl: ['']
  });

  //template string
  brand: string = 'Eden';
  logoUrl: string = '../../assets/logo.JPG';
  doneImg: string = '../../assets/check-circle-solid.JPG"';
  welcomeHeader: string = 'Welcome! First things first...';
  welcomeText: string = 'You can aways change them later.';
  fullName: string = 'Full Name';
  displayName: string = 'Display Name';
  create: string = 'Create Workspace';
  setupTitle: string = 'Let`s setup a home for all your work';
  workspaceText: string = 'You can always create another workspace later.';
  workspaceName: string = 'Workspace Name';
  workspaceUrl: string = 'Workspace URL';
  optional: string = '(optional)';
  planTitle: string = 'How are you planning to use Eden?'
  planText: string = 'We`ll stremline your setup accordingly.'
  launchTitle: string = 'Congratulations, Eren!'
  launchText: string = 'You have completed onboarding, you can start Eden!'
  launchBtn: string = 'Launch Eden'
  required: string = 'This field is required'


  workspace = [{ icon: '../../assets/self.JPG', header: 'For myself', text: 'write better. think more clearly. Stay organized' },
  { icon: '../../assets/team.JPG', header: 'With my team', text: 'Wikis, docs, tasks & projects, all in one place' }]

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.fb.group({
      fullName: ['', Validators.required],
      displayName: ['', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      workspaceName: ['', Validators.required],
      workspaceUrl: ['']
    });
  }
  get f() { return this.firstFormGroup.controls; }
  get f1() { return this.secondFormGroup.controls; }

  onSubmit() {
    if (this.firstFormGroup.invalid) {
      return;
    }
  }
  onSubmit1() {
    if (this.secondFormGroup.invalid) {
      return;
    }

  }


}
