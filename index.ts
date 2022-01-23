import { Observable } from 'rxjs';

const namesObservable$ = new Observable<string>((subscriber) => {
  console.log('Observable executed');
  subscriber.next('Duarte');
  subscriber.next('Catarina');
});

const observer = {
  next: (value) => console.log(value),
};

const subscrition = namesObservable$.subscribe(observer);
subscrition.unsubscribe();
