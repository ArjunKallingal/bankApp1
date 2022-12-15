import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-deleteconfim',
  templateUrl: './deleteconfim.component.html',
  styleUrls: ['./deleteconfim.component.css']
})
export class DeleteconfimComponent {

  @Input() item:string|undefined

  constructor() {}

  ngOnInit():void {}

}
