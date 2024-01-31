import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "~shared/modules/shared.module";

const DECLARATIONS: any[] = []

const MODULES = [CommonModule, SharedModule]

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [...MODULES],
  exports: [...DECLARATIONS, ...MODULES]
})
export class GamesModule {}
