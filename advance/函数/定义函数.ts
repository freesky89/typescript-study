// 方法一: 整体定义，参数和返回值靠解构
type fnType = (str: string) => string
const fn: fnType = (str) => {
    return str
}

// 方法二: 定义参数类型和函数返回值
function fn2(str: string): string  {
    return str
}

// test
fn('hello')
fn2('hello')
fn2(1) // error