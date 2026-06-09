import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './pages/user-list/user-list.component';

@NgModule({
  declarations: [UserCardComponent, UserListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [UserListComponent],
})
export class UsersModule {}
