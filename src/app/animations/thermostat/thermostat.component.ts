import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-thermostat',
  imports: [],
  templateUrl: './thermostat.component.html',
  styleUrl: './thermostat.component.css'
})
export class ThermostatComponent implements OnChanges {
@Input() temperature:number|null=null;
gifUrl="/assets/thermostat.gif"
ngOnChanges(changes: SimpleChanges): void {
  if (this.temperature === null) {
    setTimeout(()=>{this.gifUrl = '/assets/thermostat.gif';},1000)
    
  } else if (this.temperature <= 50) {
     // Example threshold for cold
     setTimeout(()=>{this.gifUrl = '/assets/cold_thermostat.gif';},1000)
    
  } else if (this.temperature >= 80) { // Example threshold for hot
    
    setTimeout(()=>{this.gifUrl = '/assets/hot_thermostat.gif';},1000)
  } else {
    setTimeout(()=>{this.gifUrl = '/assets/thermostat.gif';},1000)
    
  }
}
}
