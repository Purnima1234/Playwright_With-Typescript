class TestDataStorage<T> {
    private data: T[]=[];

    add(item:T): void {
        this.data.push(item);
    }
    getFirst(): T | undefined {
        return this.data[0];
    }
    count(): number {
        return this.data.length;
    }

}

let statusCodestorage=new TestDataStorage<number>();
let stringStorage=new TestDataStorage<string>();

statusCodestorage.add(200);
statusCodestorage.add(404);
statusCodestorage.add(500);

stringStorage.add("Hello");
stringStorage.add("World");
stringStorage.add("TypeScript");    

