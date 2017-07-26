import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  loadMore(): void {
    // alert('加载更多');
  }

  /**
   * 搜索
   */
  search() {
    alert('searching!')
  }
}





