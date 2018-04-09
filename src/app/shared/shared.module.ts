import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectiveModule } from '../directive/directive.module';

import {
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatDialogModule,
  MatAutocompleteModule,
  MatMenuModule,
  MatCheckboxModule,
  MatRadioModule,
  MatSelectModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
 } from '@angular/material';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@NgModule({
  imports: [
    CommonModule,
    DirectiveModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
  ],
  declarations: [
    ConfirmDialogComponent
  ],
  exports: [
    CommonModule,
    DirectiveModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatNativeDateModule,
  ],
  entryComponents: [
    ConfirmDialogComponent,
  ],
})
export class SharedModule { }
