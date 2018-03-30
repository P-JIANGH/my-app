import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MdIconRegistry, ds: DomSanitizer) => {
  ir.addSvgIcon('category', ds.bypassSecurityTrustResourceUrl('assets/Category.svg'));
};
