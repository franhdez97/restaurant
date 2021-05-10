import { Component } from '@angular/core';
import { SpinnerService } from '../service/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.sass']
})
export class SpinnerComponent {
  isLoading = this.spinnerServ.isLoading$;

  constructor(private spinnerServ: SpinnerService) { }

}
