import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private selectedLabelSource = new BehaviorSubject<string>('');
  selectedLabel$ = this.selectedLabelSource.asObservable();

  updateSelectedLabel(label: string) {
    console.log('Mise à jour du label partagé :', label);
    this.selectedLabelSource.next(label);
  }

  constructor() { }
}
