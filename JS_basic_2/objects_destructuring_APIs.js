let a , b ;
[a , b ] = [2,3] ;
// console.log(a + " " + b); 

const course = {
	courseName : "Javascript" ,
	userName : "Sachin Rajput" ,
	courseInstructor : "Hitesh",
}

const {courseInstructor : Mentor}  = course ;
console.log(Mentor) ;

// JSON Format is used for data transfer using APIs
// Example of random API  
// APIs json format can include objects or the array format

{
	"results": [
	{
	"gender": "female",
	"name": {
	"title": "Mrs",
	"first": "یسنا",
	"last": "محمدخان"
	},
	"location": {
	"street": {
	"number": 5647,
	"name": "30 تیر"
	},
	"city": "سنندج",
	"state": "فارس",
	"country": "Iran",
	"postcode": 21314,
	"coordinates": {
	"latitude": "13.9464",
	"longitude": "159.3458"
	},
	"timezone": {
	"offset": "+7:00",
	"description": "Bangkok, Hanoi, Jakarta"
	}
	},
	"email": "ysn.mhmdkhn@example.com",
	"login": {
	"uuid": "f96c9088-2e6f-4c23-bdf5-ead575325838",
	"username": "goldenwolf701",
	"password": "waters",
	"salt": "3y8YioDY",
	"md5": "5636594a941010142e446db80ffc925c",
	"sha1": "7fa181b62ac3dd5322040175f1568df4b39a2f8c",
	"sha256": "164a62c359b571d4cf5205cf90dad65380146f4b7935d910681e89a7926a7bf6"
	},
	"dob": {
	"date": "1994-03-06T04:25:48.366Z",
	"age": 30
	},
	"registered": {
	"date": "2008-08-17T13:33:14.454Z",
	"age": 15
	},
	"phone": "032-13515575",
	"cell": "0907-839-8919",
	"id": {
	"name": "",
	"value": null
	},
	"picture": {
	"large": "https://randomuser.me/api/portraits/women/45.jpg",
	"medium": "https://randomuser.me/api/portraits/med/women/45.jpg",
	"thumbnail": "https://randomuser.me/api/portraits/thumb/women/45.jpg"
	},
	"nat": "IR"
	}
	],
	"info": {
	"seed": "e98beefca0b32943",
	"results": 1,
	"page": 1,
	"version": "1.4"
	}
	}
