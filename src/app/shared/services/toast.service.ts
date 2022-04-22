import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastService: HotToastService) { }

  onError(httpError: HttpErrorResponse): void {
    this.toastService.error(httpError?.error?.descripcion);
  }

  onSuccess(message: string): void {
    this.toastService.success(message);
  }
}
