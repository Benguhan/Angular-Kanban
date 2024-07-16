import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PickListModule } from 'primeng/picklist';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink,CdkDropListGroup, CdkDropList, CdkDrag, PickListModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  authService = inject(AuthService);


  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  review = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  inProgress = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }



  // allowDrop(event: DragEvent): void {
  //   event.preventDefault();
  // }

  // drag(event: DragEvent): void {
  //   if (event.dataTransfer) {
  //     event.dataTransfer.setData('text', (event.target as HTMLElement).id);
  //   }
  // }

  // drop(event: DragEvent): void {
  //   event.preventDefault();
  //   const data = event.dataTransfer?.getData('text');
  //   if (data) {
  //     const element = document.getElementById(data);
  //     if (element) {
  //       (event.target as HTMLElement).appendChild(element);
  //     }
  //   }
  // }

  ngOnInit(): void {
    this.authService.user$.subscribe(user => {
      if (user) {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!
        });
      } else {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }

  logout() : void{
    console.log('logout');
  }
}
