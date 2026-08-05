import { Component, OnInit, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zy-svg-map',
  standalone: true,
  templateUrl: './zy-svg-map.component.html',
  styleUrl: './zy-svg-map.component.css'
})
export class ZySvgMapComponent implements OnInit {
  @Output() countryHovered = new EventEmitter<string>();

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const paths = this.elRef.nativeElement.querySelectorAll('.allPaths');

    paths.forEach((path: any) => {
      // Listen for mouseover events
      this.renderer.listen(path, 'mouseover', () => {
        const countryCode = path.id; // Get countryCode
        this.highlightPath(path); // Highlight path
        this.countryHovered.emit(countryCode); // Emit countryCode
      });

      // Listen for mouseleave events
      this.renderer.listen(path, 'mouseleave', () => {
        this.resetPath(path); // Reset path style on mouseleave
      });
    });
  }

  // Highlight path on mouseover
  private highlightPath(path: any) {
    this.renderer.setStyle(path, 'fill', 'rgb(255, 127, 127)');
  }

  // Reset path on mouseleave
  private resetPath(path: any) {
    this.renderer.setStyle(path, 'fill', 'black');
  }
}
