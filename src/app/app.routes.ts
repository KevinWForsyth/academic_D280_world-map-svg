import { Routes } from '@angular/router';
import { ZySvgMapComponent } from './zy-svg-map/zy-svg-map.component';
import { ZyInfoCardComponent } from './zy-info-card/zy-info-card.component';

export const routes: Routes = [
    { path: 'svg', component: ZySvgMapComponent },
    { path: 'info', component: ZyInfoCardComponent }
];

