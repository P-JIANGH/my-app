import { Component, ReflectiveInjector, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  squareState: string;
  darkTheme = false;

  switchTheme(dark) {
    this.darkTheme = dark;
    this.oc.getContainerElement().className = dark ? 'myapp-dark-theme' : null;
  }

  constructor(private oc: OverlayContainer) {
    const injector = ReflectiveInjector.resolveAndCreate([
      Person,
      { provide: Address, useFactory: () => {
        if (environment.production) {
          return new Address('北京', '北京' , '朝阳区' , 'xx 街道 xx 号');
        } else {
          return new Address('西藏', '拉萨', 'xx 区', 'xx 街道 xx 号');
        }
      } },
      { provide: Id, useFactory: () => {
        return Id.getInstance('idcard');
      } },
    ]);
    const childInjector = injector.resolveAndCreateChild([Person]);
    const person = injector.get(Person);
    const personFromChild = childInjector.get(Person);
    console.log(person === personFromChild);
  }
}

class Id {
  static getInstance(opt) {
    return new Id();
  }
}

class Address {
  constructor(private province, private city, private district, private street) {

  }
}

class Person {
  id: Id;
  address: Address;
  constructor(@Inject(Id) id, @Inject(Address) address) {
    this.id = id;
    this.address = address;
  }
}
