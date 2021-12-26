/* eslint-disable import/prefer-default-export */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurantIdb) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurantIdb.putRestaurant({ id: 1 });
    favoriteRestaurantIdb.putRestaurant({ id: 2 });
    expect(await favoriteRestaurantIdb.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurantIdb.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurantIdb.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurantIdb.putRestaurant({ exampleProperty: 'exampleProperty' });
    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurantIdb.putRestaurant({ id: 1 });
    favoriteRestaurantIdb.putRestaurant({ id: 2 });
    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurantIdb.putRestaurant({ id: 1 });
    favoriteRestaurantIdb.putRestaurant({ id: 2 });
    favoriteRestaurantIdb.putRestaurant({ id: 3 });
    await favoriteRestaurantIdb.deleteRestaurant(2);
    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 3 }]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurantIdb.putRestaurant({ id: 1 });
    favoriteRestaurantIdb.putRestaurant({ id: 2 });
    favoriteRestaurantIdb.putRestaurant({ id: 3 });
    await favoriteRestaurantIdb.deleteRestaurant(4);
    expect(await favoriteRestaurantIdb.getAllRestaurants()).toEqual([{ id: 1 }, { id: 2 }, { id: 3 }]);
  });
};

export { itActsAsFavoriteRestaurantModel };
