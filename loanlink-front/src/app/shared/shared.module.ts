import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderModule } from './components/presentational/loader/loader.module';

@NgModule({
  imports: [CommonModule, LoaderModule],
  exports: [LoaderModule],
  declarations: []
})
export class SharedModule {}
