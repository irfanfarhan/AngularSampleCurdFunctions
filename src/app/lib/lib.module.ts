import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { ModalComponent } from './modal/modal.component';
import { ModalOpen } from './modal/modal-open.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
        ImageComponent,
        ScrollToTopComponent,
        ModalComponent,
        ModalOpen,
        ButtonComponent
    ],
    exports: [
      ImageComponent,
      ScrollToTopComponent,
      ModalComponent,
      ModalOpen,
      ButtonComponent
    ],
    providers: [
    ]
})
export class LibraryModule { }
