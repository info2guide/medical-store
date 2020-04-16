import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertService } from './services/alert.service';
import { FormErrorComponent } from './components/form-error/form-error.component';
import { sharedProviders } from './services';
import { CannotSpaceDirective, ValidEmailDirective, CheckEmailDirective, CompareDirective, AlphaNumericDirective } from './validators/common.validators';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AlertComponent,
    FormErrorComponent,
    NavbarComponent,
    CannotSpaceDirective,
    ValidEmailDirective,
    CheckEmailDirective,
    CompareDirective,
    AlphaNumericDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    AlertComponent,
    FormErrorComponent,
    NavbarComponent,
    CannotSpaceDirective,
    ValidEmailDirective,
    CheckEmailDirective,
    CompareDirective,
    AlphaNumericDirective
  ]
})
export class SharedModule { 
  static forRoot() : ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [ AlertService, sharedProviders ]
    };
  }
}
