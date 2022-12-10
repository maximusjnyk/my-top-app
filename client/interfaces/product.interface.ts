export interface ProductCharacteristic {
	name: string;
	value: string;
}

export interface ReviwModel {
	_id: string;
	name: string;
	title: string;
	description: string;
	rating: number;
	createdAt: Date;
}

export interface ProductModel {
	lenght: any;
	_id: string;
	categories: string[];
	tags: string[];
	title: string;
	image: string;
	description: string;
	link: string;
	price: number;
	credit: number;
	oldPrice: number;
	characteristics: ProductCharacteristic[];
	advantages: string;
	initialRating: number;
	createdAt: Date;
	updatedAt: Date;
	__v: number;
	html: string;
	companyId: string;
	clicks: number;
	reviews: ReviwModel[];
	reviewCount: number;
	reviewAvg?: number;
}



