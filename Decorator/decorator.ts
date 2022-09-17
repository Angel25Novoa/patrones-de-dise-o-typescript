interface Component {
  getDetail(): string;
}

class ProductComponent implements Component{
  protected name: string;

  constructor(name: string){
    this.name = name;
  }

  public getDetail(): string {
      return `${this.name}`
  }
}

abstract class ProductDecorator implements Component{
  protected component: Component;

  constructor(component: Component){
    this.component = component;
  }

  public getDetail(): string {
    return this.component.getDetail();
  }  
}

//* decorador 1
class CommercialInfoProductDecorator extends ProductDecorator {
  private tradename: string;
  private brand: string;

  constructor(component: Component, tradename: string, brand: string){
    super(component);

    this.tradename = tradename;
    this.brand = brand;
  }

  public getDetail(): string {
    return `${this.tradename} ${this.brand} ` + super.getDetail();
  } 
}

//*decorador2
class StoreProductDecorator extends ProductDecorator{
  private price: number;

  constructor(component: Component, price: number){
    super(component);
    this.price = price;
  }

  public getDetail(): string {
    return super.getDetail()+` ${this.price}`;
  }
}

//*decorador3
class HTMLProductDecorator extends ProductDecorator{
  public getDetail(): string {
      return `
      <div>
        <h1>Información del producto</h1>
        <p>${super.getDetail()}</p>
      </div>
      `
  }
}

//! ejecución

const productComponent = new ProductComponent("Beer");
console.log(productComponent.getDetail());

//* decorador 1 + component

const commercialInfoProduct = new CommercialInfoProductDecorator(productComponent, "London Porter", "Fuller's");
console.log(commercialInfoProduct.getDetail());

//* decorador 2 + component

const storeProduct = new StoreProductDecorator(productComponent, 15.5);
console.log(storeProduct.getDetail());

//* decorador2 + decorador1

const storeProduct2 = new StoreProductDecorator(commercialInfoProduct, 15.5);
console.log(storeProduct2.getDetail());

//*decorador3 con decorador2 con decorador 1

const htmlProductDecorator = new HTMLProductDecorator(storeProduct2);
console.log(htmlProductDecorator.getDetail());