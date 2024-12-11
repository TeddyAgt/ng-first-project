import {
    Directive,
    ElementRef,
    Host,
    HostListener,
    Input,
} from "@angular/core";

@Directive({
    selector: "[pkmnCardBorder]",
    standalone: false,
})
export class CardBorderDirective {
    private initialColor: string = "#f5f5f5";
    private defaultColor: string = "#009688";
    private defaultHeight: number = 220;

    constructor(private elem: ElementRef) {
        this.setHeight(this.defaultHeight);
        this.setBorder(this.initialColor);
    }

    @Input("pkmnCardBorder") borderColor: string;

    private setHeight(height: number) {
        this.elem.nativeElement.style.height = `${height}px`;
    }

    private setBorder(color: string) {
        this.elem.nativeElement.style.border = `solid 4px ${color}`;
    }

    @HostListener("mouseenter") onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.setBorder("#f5f5f5");
    }
}
