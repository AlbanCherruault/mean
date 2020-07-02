import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatCardModule} from '@angular/material/card';
import {NgModule} from '@angular/core';


const MODULES = [
  MatToolbarModule,
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule,
  FlexLayoutModule,
  MatCardModule
];



@NgModule ({
  imports: [
    ...MODULES
  ],
  exports: [
    ...MODULES
  ],
  declarations: []
})
// @ts-ignore
export class LayoutModule {}
