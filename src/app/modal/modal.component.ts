import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  public showModal = true;
  public subUserName: string = '';

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  onSearch(event: KeyboardEvent): void {
    const searchInput: string = (event.target as HTMLInputElement).value;
    if (event.key === 'Enter') {
      this.subUserName = (event.target as HTMLInputElement).value;
    }
  }
}
