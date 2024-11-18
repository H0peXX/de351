import{Component} from "@angular/core";
@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styles: './courses-gen.component.css'
})
export class CoursesComponent{
    DE351 = {
        name:'Web Tech',
        room:'1802',
        isDisable:false,
        myImage:"images.jpeg"
    }
    
}
