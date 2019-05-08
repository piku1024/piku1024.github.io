import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }

  getConfig() {
    return environment.social;
  }
  getCartTotal() {
    let fakeresponse = "10";
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }
  getUserStatus() {
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  getProducts(collType) {
    let fakeresponse = [{
      'category': "test",
      'scategory': "Test",
      'name': "product name",
      'price': "300",
      '_id': "123"
    }];
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  getFilterProducts(collType, filters) {
    let fakeresponse = [{
      'category': "test",
      'scategory': "Test",
      'name': "product name",
      'price': "300",
      '_id': "123"
    }];
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  setProducts(collType, filters) {
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }
  updateProducts(collType, filters) {
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }
  getOneProductDoc(collType, docId) {
    let fakeresponse = {
      'category': "test",
      'scategory': "Test",
      'name': "product name",
      'price': "300",
      '_id': "123"
    };
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

  delOneProductDoc(collType, docId) {
    let fakeresponse = true;
    return Observable.create(
      observer => {
        setTimeout(() => {
          observer.next(fakeresponse)
        }, 2000)
      }
    )
  }

}
