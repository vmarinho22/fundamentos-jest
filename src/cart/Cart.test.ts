import Cart from './Cart';

describe("Test Class Cart", () => {
  it.only("should empty cart", () => {
    const cart = new Cart;

    expect(cart.items.length).toBe(0);
    expect(cart.isEmpty()).toBe(true);
  });

  it("should has one item in cart", () => {
    const cart = new Cart;

    cart.addItem({
      name: "Test",
      price: 10.0,
      quantity: 2
    })

  });
});
