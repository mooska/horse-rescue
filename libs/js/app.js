(function () {
    var app = angular.module("pageApp", []);


    app.controller("pageController", function () {
        this.page = "home";



        this.selectPage = function (page) {
            this.page = page;
        };
    });

    app.controller("horseController", function () {
        this.horses = horses;
        this.selectedHorse = 0;


        this.selectHorse = function (horseIndex) {
            this.selectedHorse = horseIndex;
        };
    });

    app.controller("galleryController", function () {
        this.horses = availableHorses;
        this.selectedHorse = 0;
        this.selectedView = "gallery";

        this.selectHorse = function (horseIndex) {
            this.selectedHorse = horseIndex;
        };

        this.deselect = function () {
            this.selectedHorse = -1;
        };

        this.selectView = function (view) {
            this.selectedView = view;
        };
    });

    app.controller("facilityController", function ($scope) {
        this.images = facilityGallery;
        this.selectedImage = 0;
        this.selectedView = "gallery";

        this.selectImage = function (imageIndex) {
            this.selectedImage = imageIndex;
        };

        this.selectView = function (view) {
            this.selectedView = view;
        };
    });

    app.directive("homePage", function () {
        return {
            restrict: "E",
            templateUrl: "home.html"
        };
    });

    app.directive("horsesPage", function () {
        return {
            restrict: "E",
            templateUrl: "horses.html"
        };
    });

    app.directive("facilityPage", function () {
        return {
            restrict: "E",
            templateUrl: "facility.html"
        };
    });
    
    app.directive("contactPage", function () {
        return {
            restrict: "E",
            templateUrl: "contact.html"
        };
    });


    var horses = [
        {
            name: "Wyatt",
            bio: "A 10 yr old, 17H Thoroughbred gelding. He's never been on the track, has been privately owned. What a nice looking horse! He was adopted at our open house! Wyatt has found a new home and will be ridden by a 13 year old girl. We hope Wyatt will make a great horse for her! We'll update with photos when available.",
            image: "wyatt.jpg"
            },
        {
            name: "Zara",
            bio: "Zara is an approximately 20 year old Arab mix (possibly a Morab). She was well cared for by her previous owner who felt it was time to send his horse on to a new family. Zara has been adopted by the Joe and Natalie Harris family! They are new to horse ownership, but Natalie looked like a pro riding Zara. She has a lot of pep, but handles well under sadlle. We wish the best for Zara at her new home. We think she'll do great with this family.",
            image: "Zera.jpg.jpg"
            },
        {
            name: "Ginger",
            bio: "She's a 17 yr old Appaloosa mare (not registered), in good health, ridden by an adult for fun, not shown. Former owner thinks she'd make a great trail prospect. She's approx. 15H, with her winter coat hard to tell, but looks like she has some larger spots in her rump, roaning on her face, we're told she has a silvery color when shed out. She hasn't been ridden for a while, so we'll brush her up under saddle as soon as weather permits!",
            image: "gingerapp2.jpg"
            },
        {
            name: "Midnight",
            bio: "Midnight has gone to her new home in Cardington, Ohio with her new owner Bruce Harris. Bruce was looking for something a little easier to handle than the gelding he had purchased. Midnight seems to be a good fit. She was purchased at auction to avoid slaughter, and now is enjoying life with her pasture mate and new family!",
            image: "blackmare2pnt.jpg"
            },
        {
            name: "Spirit",
            bio: "15H buckskin QH gelding. Spirit was a little lethargic and not urinating normally. Vet came out and diagnosed EPM 4 days after arrival. Most likely the move here, and us saddling him up stressed him & made symptoms obvious. We saddled him up after treatment and some time off on He is still off in the rear, especially to the right. Will most likely be trail/pasture sound only. On the ground, one of the nicest horses we've ever had. People at our Open House commented that pictures don't do him justice. Easy keeper!",
            image: "spirit_buds_800x540.jpg"
            },
        {
            name: "Rocky",
            bio: "Coming on 17 Standardbred gelding. Former Amish horse trained to a buggy, approx. 16H. Has been ridden bareback by children. We really like these buggy horses! They are very sensible, have been exposed to years of traffic & noise. The amish retire them from the road at around 15yrs, but they still have many years ahead of them for trail riding! They have all the basics down but have not been ridden with saddles. Of the 5 amish horses we've purchased so far, all have taken the saddle very well.",
            image: "rocky.jpg"
            }
        ];

    var availableHorses = [
        {
            name: "Baby",
            height: "14H",
            weight: 1032,
            age: 3,
            bio: "Baby is a 2005 AQHA gray mare. She is a comfortable, flat legged horse born for western riding and western dressage. She has a fun, friendly personality and is the first to meet you at the fence to say hello.",
            thumb: "https://c1.staticflickr.com/3/2129/1863551108_9f715c8948_m.jpg",
            image: "https://c1.staticflickr.com/3/2129/1863551108_9f715c8948_z.jpg?zz=1"
        },
        {
            name: "Biggy",
            height: "15H",
            weight: 1243,
            age: 5,
            bio: "Biggy is a poster girl for Quarter Horses with a petite face and strong build. She will ride western or english with all levels of riders - just a wonderful, giving horse. Jynx loves to work reining or western riding with advanced riders. She is also a natural point and shoot for cross rails. ",
            thumb: "https://c2.staticflickr.com/8/7026/6406429779_3d164b36cd_n.jpg",
            image: "https://c2.staticflickr.com/8/7026/6406429779_3d164b36cd_b.jpg"
        },
        {
            name: "Feathered Princess",
            height: "16.5H",
            weight: 1488,
            age: 6,
            bio: "Feathered Princess is a 2006 chestnut AQHA/NRHA reining gelding. Dash is 14.2 hands, hearty and affectionate. He enjoys working patterns with experienced riders, yet is gentle enough for walk-trot with kids.",
            thumb: "https://c1.staticflickr.com/1/209/478108314_75fe854ee6_m.jpg",
            image: "https://c1.staticflickr.com/1/209/478108314_75fe854ee6_z.jpg?zz=1"
        },
        {
            name: "Rocky",
            height: "15.2H",
            weight: 1488,
            age: 18,
            bio: "is our ‘97 alpha mare in the herd, and a dream to ride. She has her APHA ROM in Western Pleasure.  Fergie is a 15.2 hand by Real Bonanza.  Real Bonanza is consistently listed as one of the top 10 APHA stallions for Halter and Performance get.  He has sired 15 APHA World Champions, 17 Reserve Champions, and 3 QH Congress Champs.  ",
            thumb: "https://c1.staticflickr.com/1/181/377793327_9b34b2d775_m.jpg",
            image: "https://c1.staticflickr.com/1/181/377793327_9b34b2d775_z.jpg?zz=1"
        },
        {
            name: "Baby",
            height: "14H",
            weight: 1032,
            age: 3,
            bio: "Baby is a 2005 AQHA gray mare. She is a comfortable, flat legged horse born for western riding and western dressage. She has a fun, friendly personality and is the first to meet you at the fence to say hello.",
            thumb: "https://c1.staticflickr.com/3/2129/1863551108_9f715c8948_m.jpg",
            image: "https://c1.staticflickr.com/3/2129/1863551108_9f715c8948_z.jpg?zz=1"
        },
        {
            name: "Biggy",
            height: "15H",
            weight: 1243,
            age: 5,
            bio: "Biggy is a poster girl for Quarter Horses with a petite face and strong build. She will ride western or english with all levels of riders - just a wonderful, giving horse. Jynx loves to work reining or western riding with advanced riders. She is also a natural point and shoot for cross rails. ",
            thumb: "https://c2.staticflickr.com/8/7026/6406429779_3d164b36cd_n.jpg",
            image: "https://c2.staticflickr.com/8/7026/6406429779_3d164b36cd_b.jpg"
        },
        {
            name: "Feathered Princess",
            height: "16.5H",
            weight: 1488,
            age: 6,
            bio: "Feathered Princess is a 2006 chestnut AQHA/NRHA reining gelding. Dash is 14.2 hands, hearty and affectionate. He enjoys working patterns with experienced riders, yet is gentle enough for walk-trot with kids.",
            thumb: "https://c1.staticflickr.com/1/209/478108314_75fe854ee6_m.jpg",
            image: "https://c1.staticflickr.com/1/209/478108314_75fe854ee6_z.jpg?zz=1"
        },
        {
            name: "Rocky",
            height: "15.2H",
            weight: 1488,
            age: 18,
            bio: "is our ‘97 alpha mare in the herd, and a dream to ride. She has her APHA ROM in Western Pleasure.  Fergie is a 15.2 hand by Real Bonanza.  Real Bonanza is consistently listed as one of the top 10 APHA stallions for Halter and Performance get.  He has sired 15 APHA World Champions, 17 Reserve Champions, and 3 QH Congress Champs.  ",
            thumb: "https://c1.staticflickr.com/1/181/377793327_9b34b2d775_m.jpg",
            image: "https://c1.staticflickr.com/1/181/377793327_9b34b2d775_z.jpg?zz=1"
        },
        {
            name: "Baby",
            height: "14H",
            weight: 1032,
            age: 3,
            bio: "Baby is a 2005 AQHA gray mare. She is a comfortable, flat legged horse born for western riding and western dressage. She has a fun, friendly personality and is the first to meet you at the fence to say hello.",
            thumb: "https://c1.staticflickr.com/3/2129/1863551108_9f715c8948_m.jpg",
            image: "https://c1.staticflickr.com/3/2129/1863551108_9f715c8948_z.jpg?zz=1"
        },
        {
            name: "Biggy",
            height: "15H",
            weight: 1243,
            age: 5,
            bio: "Biggy is a poster girl for Quarter Horses with a petite face and strong build. She will ride western or english with all levels of riders - just a wonderful, giving horse. Jynx loves to work reining or western riding with advanced riders. She is also a natural point and shoot for cross rails. ",
            thumb: "https://c2.staticflickr.com/8/7026/6406429779_3d164b36cd_n.jpg",
            image: "https://c2.staticflickr.com/8/7026/6406429779_3d164b36cd_b.jpg"
        },
        {
            name: "Feathered Princess",
            height: "16.5H",
            weight: 1488,
            age: 6,
            bio: "Feathered Princess is a 2006 chestnut AQHA/NRHA reining gelding. Dash is 14.2 hands, hearty and affectionate. He enjoys working patterns with experienced riders, yet is gentle enough for walk-trot with kids.",
            thumb: "https://c1.staticflickr.com/1/209/478108314_75fe854ee6_m.jpg",
            image: "https://c1.staticflickr.com/1/209/478108314_75fe854ee6_z.jpg?zz=1"
        },
        {
            name: "Rocky",
            height: "15.2H",
            weight: 1488,
            age: 18,
            bio: "is our ‘97 alpha mare in the herd, and a dream to ride. She has her APHA ROM in Western Pleasure.  Fergie is a 15.2 hand by Real Bonanza.  Real Bonanza is consistently listed as one of the top 10 APHA stallions for Halter and Performance get.  He has sired 15 APHA World Champions, 17 Reserve Champions, and 3 QH Congress Champs.  ",
            thumb: "https://c1.staticflickr.com/1/181/377793327_9b34b2d775_m.jpg",
            image: "https://c1.staticflickr.com/1/181/377793327_9b34b2d775_z.jpg?zz=1"
        }
    ];

    var facilityGallery = [
        {
            imageSrc: "Mvc-028f.jpg",
            title: "Stable",
            description: ""
        },
        {
            imageSrc: "stallaisle.jpg",
            title: "Stall Aisle",
            description: ""
        },
        {
            imageSrc: "stallball.jpg",
            title: "Stall Ball",
            description: ""
        },
        {
            imageSrc: "roundpen.jpg",
            title: "Round Pen",
            description: ""
        },
        {
            imageSrc: "ministalls.JPG",
            title: "Mini Stalls",
            description: ""
        },
        {
            imageSrc: "Addition.JPG",
            title: "New Addition",
            description: ""
        },
        {
            imageSrc: "arena.jpg",
            title: "Arena",
            description: ""
        },
        {
            imageSrc: "3066barn.jpg",
            title: "Barn",
            description: ""
        },
        {
            imageSrc: "Mvc-019f.jpg",
            title: "Title",
            description: ""
        },
        {
            imageSrc: "Mvc-020f.jpg",
            title: "Title",
            description: ""
        },
        {
            imageSrc: "pondpasture.JPG",
            title: "Title",
            description: ""
        }
    ];

})();