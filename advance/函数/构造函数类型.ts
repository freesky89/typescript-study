// 定义构造函数类型
type B<T = any> = {
    new (...args: any[]): T & {};
}

const Test: Partial<B<string>> = () => {}


// 定义一个基础接口类
interface Point {
    x: number, 
    y: number,
}

// 定义普通类
interface PointConstructor {
    new (x: number, y: number): Point;
}

// 定义子类
class Point2D implements Point {
    readonly x: number;
    readonly y: number;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
    }
}

// 定义工厂函数，返回子类实例
function newPoint(
    pointConstructor: PointConstructor,
    x: number,
    y: number
  ): Point {
    return new pointConstructor(x, y);
}

const point: Point = newPoint(Point2D, 2, 2);

