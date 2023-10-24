import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [ CommonModule ],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('300ms ease-in', style({ transform: 'translateX(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  template: `
    <div class="onboarding">
      <ng-container *ngFor="let question of questions; let i = index">
        <div [@slideIn]="" *ngIf="i === currentQuestionIndex">
          <p>{{ question }}</p>
          <input type="text" (keyup.enter)="nextQuestion()" />
        </div>
      </ng-container>
    </div>

  `,
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  questions = [
    'What is your name?',
    'How old are you?',
    'Where are you from?'
  ];
  currentQuestionIndex = 0;

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    }
  }
}
