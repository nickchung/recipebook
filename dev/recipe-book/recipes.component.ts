import {Component} from 'angular2/core';

@Component({
    selector: 'my-recipes',
    template: `
        <div class="master list">
            Recipe Master
        </div>
        <div classs="detail">
            Recipe Detail
        </div>
    `
})

export class RecipesComponent {
}