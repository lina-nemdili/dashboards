import { AfterContentInit, Component, ContentChild, ElementRef, input, viewChild } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent  {
  
  

  label=input.required<string>();
  @ContentChild('input') private control?:ElementRef<HTMLInputElement|HTMLTextAreaElement>;
 // private form=viewChild.required<ElementRef<HTMLFormElement>>('form');

onClick(){
  console.log(this.control);

}}