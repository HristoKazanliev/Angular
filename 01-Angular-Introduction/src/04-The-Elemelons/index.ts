import { Melon } from "./Melon";

class Watermelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length
    }

    toString(): string {
        return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

class Firemelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length
    }

    toString(): string {
        return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

class Earthmelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length
    }

    toString(): string {
        return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

class Airmelon extends Melon {
    get elementIndex(): number {
        return this.weight * this.melonSort.length
    }

    toString(): string {
        return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

class Melolemonmelon extends Watermelon{
    private static readonly elements = ["Water", "Fire", "Earth", "Air"];
    private currIndex: number = 0;
    
    morph() {
        this.currIndex = (this.currIndex + 1) % Melolemonmelon.elements.length;
    }

    toString(): string {
        const currElement = Melolemonmelon.elements[this.currIndex];
        return `Element: ${currElement}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
    }
}

//let test : Melon = new Melon(100, "Test");
//Throws error

let watermelon : Watermelon = new Watermelon(12.5, "Kingsize");
console.log(watermelon.toString());
let firemelon = new Melolemonmelon(15, "Small");
console.log(firemelon.toString());

// Element: Water
// Sort: Kingsize
// Element Index: 100
