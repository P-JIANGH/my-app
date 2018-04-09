import { NgModule, SkipSelf, Optional } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { loadSvgResources } from '../utils/svg.util';
import { AppRoutingModule } from '../app-routing.module';
import 'rxjs/add/operator/take';

@NgModule({
  imports: [
    HttpClientModule,
    SharedModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    { provide: 'BASE_CONFIG', useValue: 'http://localhost:4200' },
  ],
})
export class CoreModule {

  constructor(
    @Optional() @SkipSelf() parent: CoreModule,
    ir: MatIconRegistry,
    ds: DomSanitizer
  ) {
    if (parent) {
      throw new Error('已有核心模块，不能重复加载！');
    }
    loadSvgResources(ir, ds);
  }
}
