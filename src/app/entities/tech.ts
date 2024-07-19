export class Tech {
  private __id : number;
  private _title : string;
  private _description : string;
  private _price : number;
  private _image : string;
  private _category : string;

  constructor(_id: number, title: string, description: string, price: number, image: string, category: string) {
    this.__id = _id;
    this._title = title;
    this._description = description;
    this._price = price;
    this._image = image;
    this._category = category;
  }

  get _id(): number {
    return this.__id;
  }

  set _id(value: number) {
    this.__id = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get category(): string {
    return this._category;
  }

  set category(value: string) {
    this._category = value;
  }
}
