import { Injectable } from '@angular/core';
import { Food } from 'src/app/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food {
    return this.getAll().find(food => food.id == id)!
  }

  getAll(): Food[] {
    return [
      {
        id: 1,
        name: 'Pizza',
        price: 10,
        cookTime: '40-50',
        favorite: true,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-1.jpg',
      },
      {
        id: 2,
        name: 'Teftel',
        price: 9,
        cookTime: '30-40',
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-2.jpg',
      },
      {
        id: 3,
        name: 'Pattato Fry',
        price: 7,
        cookTime: '20-30',
        favorite: false,
        origins: ['Belgium France'],
        imageUrl: '/assets/images/foods/food-3.jpg',
      },
      {
        id: 4,
        name: 'Pasta',
        price: 15,
        cookTime: '40-50',
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-4.jpg',
      },
      {
        id: 5,
        name: 'Lasagna',
        price: 20,
        cookTime: '30-50',
        favorite: true,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-5.jpg',
      },
      {
        id: 6,
        name: 'Cannoli',
        price: 8,
        cookTime: '10-15',
        favorite: true,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-6.jpg',
      }
    ]
  }
}