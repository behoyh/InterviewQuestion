import { Component, OnInit } from '@angular/core';
import { Reducer, CREATE_GRAPH, UPDATE_GRAPH, CASCADE_GRAPH } from './reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Interview Question';

  private nodeAry: any[];

  ngOnInit(): void {
    this.nodeAry = this.GenerateArray();

    this.GenerateChanges();
  }
  GenerateChanges() {
    for (var i = 0; i < 20; i++) {
      var length = Math.floor((Math.random() * 10));
      var ary = Array.from(new Set(Array.from({ length: length }, () => Math.floor(Math.random() * 20))));

      console.log(i, ary);

      this.nodeAry = Reducer.StateChange(this.nodeAry, {
        type: UPDATE_GRAPH,
        id: i,
        input: ary
      });

      this.nodeAry = Reducer.StateChange(this.nodeAry, {
        type: CASCADE_GRAPH
      });

      console.log(this.nodeAry);
    }
  }

  private GenerateArray(): object[] {

    return Reducer.StateChange(undefined, {
      type: CREATE_GRAPH
    });
  }
}
