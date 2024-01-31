import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const DECLARATIONS: any[] = []

const MODULES = [CommonModule, ReactiveFormsModule, RouterModule]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...MODULES],
  exports: [...MODULES, ...DECLARATIONS],
  providers: []
})
export class SharedModule {}
