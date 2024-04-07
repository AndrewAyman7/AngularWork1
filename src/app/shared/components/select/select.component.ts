import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent implements OnInit {

  @Input() data:any[]= []; // @Input() -> 3shan htgele mn elParent , Hbaseeha
  @Output() selectValue = new EventEmitter();

  ngOnInit(): void {
    
  }

  detectChanges(event:any){
    this.selectValue.emit(event);
  }
}
