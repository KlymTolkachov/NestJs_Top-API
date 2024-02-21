class Point {
	x: number;
	y: number;

	constructor(x: number, y: number) {
		this.x = x;
		this.y = y;
	}

	protected a() {}
}

class D3Point extends Point {
	z: number;
	constructor(x: number, y: number, z: number) {
		super(x, y);
		this.z = z;
	}
}

const point = new D3Point(0, 0, 0);

interface Face {
	nose: (f: string) => number;
	cheeks: number;
}

class Dog implements Face {
	cheeks: 3;
	nose(f: string) {
		return Number(f);
	}
}

type obj = {
	x: 1;
	y: 2;
};

type One = keyof obj;

const hello: One = 'y';
