import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  public tarefa = "";
  public items = ['Tarefa 1'];

  addTarefa() {
    this.items.push(this.tarefa);    
  }

  removeTarefa(item: any) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
