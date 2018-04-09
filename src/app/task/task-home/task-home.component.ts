import { Component, OnInit, HostBinding, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewTaskComponent } from '../new-task/new-task.component';
import { CopyTaskComponent } from '../copy-task/copy-task.component';
import { ConfirmDialogComponent } from '../../shared/confirm-dialog/confirm-dialog.component';
import { NewTaskListComponent } from '../new-task-list/new-task-list.component';
import { slideToRight } from '../../animate/router.anim';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss'],
  animations: [slideToRight],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskHomeComponent implements OnInit {

  @HostBinding('@routeAnim') state;

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一： 去星巴克买咖啡',
          completed: true,
          priority: 3,
          owner: {
            id: 1,
            name: '张三',
            avatar: 'avatars:svg-11',
          },
          dueDate: new Date(),
        }, {
          id: 2,
          desc: '任务一： 去星巴克买咖啡',
          completed: false,
          priority: 2,
          owner: {
            id: 1,
            name: '李四',
            avatar: 'avatars:svg-3',
          },
          dueDate: new Date(),
          reminder: new Date(),
        },
      ],
    }, {
      id: 2,
      name: '进行中',
      tasks:  [{
        id: 3,
        desc: '任务一： 去星巴克买咖啡',
          completed: false,
          priority: 1,
          owner: {
          id: 1,
          name: '赵五',
          avatar: 'avatars:svg-11',
        },
        dueDate: new Date(),
      }, {
        id: 4,
        desc: '任务一： 完成老板布置的任务',
          completed: false,
          priority: 2,
          owner: {
          id: 1,
          name: '江浩',
          avatar: 'avatars:svg-9',
        },
        dueDate: new Date(),
      }, {
        id: 5,
        desc: '任务一： 去星巴克买咖啡',
          completed: false,
          priority: 3,
          owner: {
          id: 1,
          name: '葱葱',
          avatar: 'avatars:svg-16',
        },
        dueDate: new Date(),
      }],
    },
  ];

  constructor(private dialog: MatDialog, private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  launchNewTaskDialog() {
    this.dialog.open(NewTaskComponent, {
      data: {
        title: '新建任务',
      }
    });
  }

  launchCopyTaskDialog() {
    this.dialog.open(CopyTaskComponent, {
      data: {
        lists: this.lists,
      },
    });
  }

  launchUpdateTaskDialog(task) {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      data: {
        title: '修改任务',
        task,
      },
    });
  }

  launchDelDialog() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: '删除列表',
      },
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchEditListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '更改列表名称',
      },
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }

  launchNewListDialog() {
    const dialogRef = this.dialog.open(NewTaskListComponent, {
      data: {
        title: '新增列表',
      },
    });
    dialogRef.afterClosed().subscribe(result => console.log(result));
  }
}
