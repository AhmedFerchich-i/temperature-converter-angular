import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For [(ngModel)]
import { InputNumberModule } from 'primeng/inputnumber'; // For <p-inputnumber>
import { ThermostatComponent } from '../animations/thermostat/thermostat.component';
import { ConversionEquationComponent } from '../conversion-equation/conversion-equation.component';
@Component({
  selector: 'app-home',
  imports: [FormsModule,InputNumberModule,ThermostatComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  F:number|null=null
    C:number|null=null
    
    onFahrenheitInput(event:any){
      if (event === '' || event === null || event === undefined) {
        this.F = null;
        this.C = null;
        return;
      }
      this.F=event
      console.log(this.F)
      this.C = this.F !==null ? (this.F - 32) * 5/9 : null;
    }
    onCelsiusInput(event:any){
      if (event === '' || event === null || event === undefined) {
        this.F = null;
        this.C = null;
        return;
      }
      this.C=event
      console.log(this.C)
      this.F = this.C !==null ? (this.C * 9/5) + 32 : null;
    }

}
