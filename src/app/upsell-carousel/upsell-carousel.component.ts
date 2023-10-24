import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upsell-carousel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="carousel-section">
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).webp" class="d-block" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h3>Tailored Just For San Diego</h3>
              <p>Find local events not normally advertised</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).webp" class="d-block" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h3>Browse Free Events In Your Area</h3>
              <p>All events are free, and found in your neighborhood</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).webp" class="d-block" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h3>No Commitment . Hassle Free.</h3>
              <p>Choose a date, choose a location, choose your adventure.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  `,
  styleUrls: ['./upsell-carousel.component.css']
})
export class UpsellCarouselComponent {

}
