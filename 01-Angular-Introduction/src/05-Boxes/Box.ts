class Box<T> {
    private boxes: T[] = [];

    add(element: T): T[] {
        this.boxes.push(element);
        return this.boxes
    }

    remove(): T[] {
        this.boxes.shift();
        return this.boxes;
    }

    
    get count () : number {
        return this.boxes.length;
    }
    
}

let box = new Box<Number>();
box.add(1);
box.add(2);
box.add(3);
console.log(box.count);

let box1 = new Box<String>();
box1.add("Pesho");
box1.add("Gosho");
console.log(box1.count);
box1.remove();
console.log(box1.count);
