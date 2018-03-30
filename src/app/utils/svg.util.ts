import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer) => {
  const imgDir = 'assets/img';
  const sidebarDir = `${imgDir}/sidebar`;
  const daysDir = `${imgDir}/days`;
  ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/projects.svg`));
  ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/project.svg`));
  ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/month.svg`));
  ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/week.svg`));
  ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/day.svg`));

  for (let i = 1; i < 31; i++) {
    ir.addSvgIcon(`day${i}`, ds.bypassSecurityTrustResourceUrl(`${daysDir}/day${i}.svg`));
  }
};
