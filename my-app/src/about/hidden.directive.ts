import {Directive , ElementRef, Renderer ,HostListener, Input} from "@angular/core";

@Directive({
    selector:'[myHighlight]'
})
export class HighlightDirective{
    constructor(private el:ElementRef, private renderer:Renderer){}
    @Input() myHighlight:string;
    @HostListener ('click') onclick(){
          this.higlight(this.myHighlight || 'yellow');
    }
    @HostListener ('mouseleave') onmouseleave(){
        this.higlight(null);
    }
    private higlight(color:string){
        this.renderer.setElementStyle(this.el.nativeElement,'background',color);
    }
}