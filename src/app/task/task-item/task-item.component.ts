import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { ItemAnim } from '../../animate/item.anim';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  animations: [ItemAnim],
})
export class TaskItemComponent implements OnInit {

  widerPriority = 'in';

  @Input() item;
  @Input() avatar;
  @Output() taskClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
    this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
  }

  onItemClick() {
    this.taskClick.emit();
  }

  onCheck(e: Event) {
    e.stopPropagation();
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.widerPriority = 'out';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.widerPriority = 'in';
  }

}
