import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

   @Input('srvElement') element: {type: string, name: string, content: string};
   @Input() name: string;

  constructor() {
    console.log('Constructor called');
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Called');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit() called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck() called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called!!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called!!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called!!');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called!!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() Called!!!');
  }

}
