import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import mapboxgl from 'mapbox-gl';
import as from 'mapbox-gl';
import { environment } from '../../enviroments/enviroment.prod';

@Component({
    selector: 'app-map',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})



export class MapComponent implements OnInit{
    map?: mapboxgl.Map;



    ngOnInit(): void {
        mapboxgl.accessToken = environment.maptokenkey;
        this.map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-73.253097, 10.461729], // starting position [lng, lat]
            zoom:13.14, // starting zoom
        });
    }
    title = "MapBox";
}
