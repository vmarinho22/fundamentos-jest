import Product from '../product/Product';
import Cart from './Cart';

const makeCart = () : Cart => {
  return new Cart;
}

const makeProduct = (name: string): Product =>  ({
  name: name,
  price: 10.0,
})

const makeSut = () => { // System Under Test
  const sut = makeCart();

  return {
    sut
  }
}

describe("Test Class Cart", () => {
  it("should empty cart", () => {
    const { sut } = makeSut();

    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it("should has one item in cart", () => {
    const { sut } = makeSut();
    
    expect(sut.items.length).toBe(0);

    sut.addItem(makeProduct('Product 1'))

    expect(sut.items.length).toBe(1);
    expect(sut.items[0].product.name).toBe("Product 1")
    expect(sut.items[0].quantity).toBe(1)

  });

  it("should has two item in cart", () => {
    const { sut } = makeSut();
    
    expect(sut.items.length).toBe(0);

    sut.addItem(makeProduct('Product 1'))
    sut.addItem(makeProduct('Product 1'))
    sut.addItem(makeProduct('Product 2'))

    expect(sut.items.length).toBe(2);
    expect(sut.items[0].product.name).toBe("Product 1")
    expect(sut.items[0].quantity).toBe(2)
    expect(sut.items[1].product.name).toBe("Product 2")
    expect(sut.items[1].quantity).toBe(1)

  });

  it("should has two item in cart, and add same product one", () => {
    const { sut } = makeSut();
    
    expect(sut.items.length).toBe(0);

    sut.addItem(makeProduct('Product 1'))
    sut.addItem(makeProduct('Product 1'))

    expect(sut.items.length).toBe(1);
    expect(sut.items[0].product.name).toBe("Product 1")
    expect(sut.items[0].quantity).toBe(2)

  });

  it("should be remove one item if add two and remove one", () => {
    const { sut } = makeSut();

    sut.addItem(makeProduct('Product 1'))
    sut.addItem(makeProduct('Product 2'))

    expect(sut.items.length).toBe(2);

    sut.removeItem(makeProduct("Product 1"))

    expect(sut.items.length).toBe(1);

  });

  it("should be remove two itens if add two and remove two", () => {
    const { sut } = makeSut();

    sut.addItem(makeProduct('Product 1'))
    sut.addItem(makeProduct('Product 2'))

    expect(sut.items.length).toBe(2);

    sut.removeItem(makeProduct("Product 1"))
    sut.removeItem(makeProduct("Product 2"))

    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty).toBeTruthy();

  });

  it('should be get total of cart', () => {
    const { sut } = makeSut();

    sut.addItem(makeProduct('Product 1'))
    sut.addItem(makeProduct('Product 2'))

    expect(sut.total()).toBe(20)
  })

  it('should be get total of cart with empty cart', () => {
    const { sut } = makeSut();

    expect(sut.total()).toBe(0)
  })

  it('should clear cart', () => {
    const { sut } = makeSut();

    sut.addItem(makeProduct('Product 1'))
    sut.addItem(makeProduct('Product 2'))

    sut.clear();

    expect(sut.isEmpty).toBeTruthy();
  })

});
