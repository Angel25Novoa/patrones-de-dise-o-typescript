interface IObserver<T>{
  refresh(value: T): void;
}

interface ISubject<T>{
  observers: IObserver<T>[];

  suscribe(observer: IObserver<T>) : void;
  unsuscribe(observer: IObserver<T>) : void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T>{
  observers: IObserver<T>[];

  constructor(){
    this.observers = [];
  }

  suscribe(observer: IObserver<T>){
    this.observers.push(observer);
  }

  unsuscribe(observer: IObserver<T>){
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(value: T){
    this.observers.forEach(e => {
      e.refresh(value);
    })
  }
}

class Observer<T> implements IObserver<T>{
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void){
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();

const obs1 = new Observer<number>((n) => {
  console.log(`Hello ${n}`);
})

const obs2 = new Observer<number>((n) => {
  console.log(`Hi ${n}`);
})

subject.suscribe(obs1);
subject.suscribe(obs2);
subject.notify(1.2);
subject.notify(30);

const subjectString = new Subject<string>();

const obs3 = new Observer<string>((name) => {
  console.log(`Hi ${name}`);
})

subjectString.suscribe(obs3);
subjectString.notify("Jorge");