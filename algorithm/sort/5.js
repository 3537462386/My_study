const bubbleSort = arr => {
    // 函数局部变量
    console.time('冒泡排序耗时');// 时间计算
    const length = arr.length; // 缓存数组长度  变量 不会变
    // 相邻  一趟循环  搞定一个位置的顺序对的 交换？ 左右侧一定是最大值
    for (let i = 0; i < length - 1; i++) {   // i 一个元素的排序  外循环 i + 1
        // 所有元素排序  位置上放置正确的数字  位置？ 
        let isSwap = true;  //  本轮有序吗？
        for (let j = 0; j < length - i - 1; j++) { // 内循环 排好一个位置后 
            
                if (arr[j] > arr[j + 1]) {
                    // const temp = arr[j];
                    // arr[j] = arr[j + 1];
                    // arr[j + 1] = temp;
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; 
                    isSwap = false;
                }
                
    }
    if(isSwap){
        // 一次交换都没有发生
    }
}
    // return arr;
    console.timeEnd('冒泡排序耗时');
}
//全局变量
const arr = [5, 8, 6, 3, 9, 2, 1, 7];  // 引用式赋值 堆内存 值决定
bubbleSort(arr);
console.log(arr);