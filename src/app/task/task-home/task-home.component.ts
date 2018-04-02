import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-home',
  templateUrl: './task-home.component.html',
  styleUrls: ['./task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id: 1,
      name: '待办',
      tasks: [
        {
          id: 1,
          desc: '任务一： 去星巴克买咖啡',
          completed: true,
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
          owner: {
          id: 1,
          name: '赵五',
          avatar: 'avatars:svg-11',
        },
        dueDate: new Date(),
      }, {
        id: 4,
        desc: '任务一： 去星巴克买咖啡',
          completed: true,
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
          owner: {
          id: 1,
          name: '葱葱',
          avatar: 'avatars:svg-16',
        },
        dueDate: new Date(),
      }],
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
