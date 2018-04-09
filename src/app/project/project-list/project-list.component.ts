import { Component, OnInit, HostBinding } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { slideToRight } from '../../animate/router.anim';
import { listAnimation } from '../../animate/list.anim';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  animations: [slideToRight, listAnimation],
})
export class ProjectListComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  projects = [{
      id: 1,
      name: '企业协作平台',
      desc: '这是一个企业内部项目',
      coverimg: 'assets/img/covers/cover.png',
    }, {
      id: 2,
      name: '自动化测试项目',
      desc: '这是一个企业内部项目',
      coverimg: 'assets/img/covers/cover.png',
    },
  ];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '新增项目' },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = [ ...this.projects, {
        id: 3,
        name: '一个新项目',
        desc: '这是一个新项目',
        coverimg: 'assets/img/covers/cover.png',
      }, {
        id: 4,
        name: '又一个新项目',
        desc: '又这是一个新项目',
        coverimg: 'assets/img/covers/cover.png',
      }];
      console.dir(this.projects);
    });
  }

  launchInviteDialog() {
    const dialogRef = this.dialog.open(InviteComponent);
  }

  launchUpdateDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, {
      data: { title: '编辑项目' },
    });
  }

  launchConfirmDialog(project) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { title: '删除项目', content: '您确认删除该项目吗' },
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.projects = this.projects.filter(p => p.id !== project.id);
    });
  }

}
