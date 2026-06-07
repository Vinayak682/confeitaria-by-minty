export const content = {
  hero: {
    headline: "Elegant Bakes, Thoughtfully Crafted.",
    subheadline: "Minty Bhadani is a certified pastry chef sharing refined desserts, creative baking, and signature recipes.",
    image: "/confeitaria-by-minty/user-media/minty_photo_1.png",
    videoBg: "/confeitaria-by-minty/user-media/minty_full_vid_3.mp4"
  },
  about: {
    bio: "Passionate about creating exquisite European pastries and delightful desserts. Based in beautiful Auckland, New Zealand.",
    certifications: [
      "Certified Pastry Chef",
      "Diploma in Pastry and Baking",
      "City & Guilds Certified"
    ],
    image: "/confeitaria-by-minty/minty-profile.jpg"
  },
  categoriesPanel: [
    { title: "Gourmet Donuts", count: 12, image: "/confeitaria-by-minty/user-media/minty_photo_3.png" },
    { title: "Cupcakes", count: 24, image: "/confeitaria-by-minty/user-media/minty_photo_4.png" },
    { title: "Sugar Cookies", count: 18, image: "/confeitaria-by-minty/user-media/minty_photo_5.png" },
    { title: "Artisan Tarts", count: 8, image: "/confeitaria-by-minty/user-media/minty_photo_6.png" },
    { title: "Crepes & Pancakes", count: 15, image: "/confeitaria-by-minty/user-media/minty_photo_7.png" }
  ],
  highlights: [
    { title: "Ganache", image: "/confeitaria-by-minty/user-media/minty_photo_8.png", url: "https://www.instagram.com/stories/highlights/17870237648716017/" },
    { title: "Cookies", image: "/confeitaria-by-minty/user-media/minty_photo_9.png", url: "https://www.instagram.com/stories/highlights/17892186299583653/" },
    { title: "Cupcakes", image: "/confeitaria-by-minty/user-media/minty_photo_10.png", url: "https://www.instagram.com/stories/highlights/17963885065835910/" },
    { title: "Custom Gifts", image: "/confeitaria-by-minty/user-media/minty_photo_11.png", url: "https://instagram.com/confeitaria_by_minty" },
    { title: "Cheesecake", image: "/confeitaria-by-minty/user-media/minty_photo_12.png", url: "https://www.instagram.com/stories/highlights/17978624317617920/" },
    { title: "Reviews", image: "/confeitaria-by-minty/user-media/minty_photo_13.png", url: "https://www.instagram.com/stories/highlights/17989205623495270/" }
  ],
  featuredCreations: [
    { id: 'macarons', title: 'Macarons', category: 'Showcase', image: "/confeitaria-by-minty/user-media/minty_photo_14.png" },
    { id: 'cheesecakes', title: 'Cheesecakes', category: 'Showcase', image: "/confeitaria-by-minty/user-media/minty_photo_15.png", video: "/confeitaria-by-minty/user-media/minty_full_vid_1.mp4" },
    { id: 'brownies', title: 'Brownies', category: 'Showcase', image: "/confeitaria-by-minty/user-media/minty_photo_16.png" },
    { id: 'xmas', title: 'Seasonal Specials', category: 'Showcase', image: "/confeitaria-by-minty/user-media/minty_photo_17.png", video: "/confeitaria-by-minty/user-media/minty_full_vid_2.mp4" }
  ],
  recipes: [
    {
      id: "classic-french-macarons",
      title: "Classic French Macarons",
      description: "Delicate almond meringue shells filled with rich chocolate ganache.",
      category: "Macarons",
      image: "/confeitaria-by-minty/user-media/minty_photo_18.png",
      prepTime: "45 mins",
      cookTime: "15 mins",
      ingredients: ["100g Almond flour", "100g Powdered sugar", "75g Egg whites", "90g Granulated sugar"],
      steps: ["Sift flour and sugar.", "Whip egg whites.", "Fold ingredients.", "Pipe and bake."],
      tips: "Room temp eggs are key!"
    },
    {
      id: "strawberry-tartlet",
      title: "Strawberry Tartlet",
      description: "Crisp sweet pastry filled with vanilla crème pâtissière and fresh strawberries.",
      category: "Tarts",
      image: "/confeitaria-by-minty/user-media/minty_photo_19.png",
      prepTime: "60 mins",
      cookTime: "25 mins",
      ingredients: ["Pâte Sucrée", "Milk", "Egg yolks", "Sugar", "Vanilla", "Strawberries"],
      steps: ["Blind bake tart.", "Make pastry cream.", "Fill tart.", "Top with berries."],
      tips: "Glaze berries for shine."
    },
    {
      id: "fudge-brownies",
      title: "Ultimate Fudge Brownies",
      description: "Incredibly dense, rich, and fudgy brownies with a crackly top.",
      category: "Brownies",
      image: "/confeitaria-by-minty/user-media/minty_photo_20.png",
      prepTime: "20 mins",
      cookTime: "30 mins",
      ingredients: ["Dark chocolate", "Butter", "Eggs", "Sugar", "Flour", "Cocoa powder"],
      steps: ["Melt chocolate.", "Whisk eggs and sugar.", "Fold in chocolate and dry ingredients.", "Bake."],
      tips: "Do not overbake!"
    },
    {
      id: "rainbow-donuts",
      title: "Sprinkle Loaded Donuts",
      description: "Fluffy yeast donuts topped with chocolate glaze and rainbow sprinkles.",
      category: "Donuts",
      image: "/confeitaria-by-minty/user-media/minty_photo_21.png",
      prepTime: "120 mins",
      cookTime: "10 mins",
      ingredients: ["Flour", "Yeast", "Milk", "Butter", "Sugar", "Chocolate Glaze"],
      steps: ["Make dough.", "Proof.", "Cut donuts.", "Fry and glaze."],
      tips: "Fry at 180C exactly."
    },
    {
      id: "berry-crepes",
      title: "Raspberry Whipped Crepes",
      description: "Thin French crepes filled with fresh raspberries and whipped cream.",
      category: "Crepes",
      image: "/confeitaria-by-minty/user-media/minty_photo_22.png",
      prepTime: "20 mins",
      cookTime: "15 mins",
      ingredients: ["Eggs", "Milk", "Flour", "Butter", "Raspberries", "Heavy cream"],
      steps: ["Whisk batter.", "Cook thin crepes.", "Whip cream.", "Assemble."],
      tips: "Let batter rest 30 mins."
    }
  ],
  reels: [
    { id: 29, type: 'post', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_23.png", url: 'https://www.instagram.com/p/CbNO3Nsrkig/' },
    { id: 30, type: 'post', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_24.png", url: 'https://www.instagram.com/p/CbKrHs5rkb3/' },
    { id: 31, type: 'post', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_25.png", url: 'https://www.instagram.com/p/CbFtlyWjRF-/' },
    { id: 32, type: 'post', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_26.png", url: 'https://www.instagram.com/p/CbpnEd3J6xx/' },
    { id: 33, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_27.png", url: 'https://www.instagram.com/reel/Cb-mEnKFcaT/' },
    { id: 34, type: 'post', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_28.png", url: 'https://www.instagram.com/p/Cc-wkkztRme/' },
    { id: 35, type: 'post', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_29.png", url: 'https://www.instagram.com/p/Cd5koTsLNdQ/' },
    { id: 36, type: 'post', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_30.png", url: 'https://www.instagram.com/p/CfRg5A2tdEC/' },
    { id: 37, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_31.png", url: 'https://www.instagram.com/reel/CftX9pIlTXs/' },
    { id: 38, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_32.png", url: 'https://www.instagram.com/reel/CgTb7r_F6ye/' },
    { id: 39, type: 'video', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_33.png", url: 'https://www.instagram.com/reel/CjI1ubLJLP2/' },
    { id: 40, type: 'video', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_34.png", url: 'https://www.instagram.com/reel/CjhRy4aD8pF/' },
    { id: 41, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_35.png", url: 'https://www.instagram.com/reel/Cld_5EqNdlx/' },
    { id: 1, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_36.png", url: 'https://www.instagram.com/reel/CoB-c8aPJta/' },
    { id: 2, type: 'video', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_37.png", url: 'https://www.instagram.com/reel/CtYntpRthu_/' },
    { id: 3, type: 'video', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_38.png", url: 'https://www.instagram.com/reel/DY1Qq0cyPuH/' },
    { id: 4, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_39.png", url: 'https://www.instagram.com/reel/DYV4leey6_W/' },
    { id: 5, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_40.png", url: 'https://www.instagram.com/reel/DWlBPJNEoYx/' },
    { id: 6, type: 'post', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_41.png", url: 'https://www.instagram.com/p/DC3pA45yNeA/' },
    { id: 7, type: 'video', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_42.png", url: 'https://www.instagram.com/reel/C_9oV9VSi8v/' },
    { id: 8, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_43.png", url: 'https://www.instagram.com/reel/C_fN_xxyefp/' },
    { id: 9, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_44.png", url: 'https://www.instagram.com/reel/C4muVhqydtE/' },
    { id: 10, type: 'post', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_45.png", url: 'https://www.instagram.com/p/C39iWGDrxHR/' },
    { id: 11, type: 'post', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_1.png", url: 'https://www.instagram.com/p/C1_qgEGSC6d/' },
    { id: 12, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_2.png", url: 'https://www.instagram.com/reel/CwHz1WzIWj3/' },
    { id: 13, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_3.png", url: 'https://www.instagram.com/reel/CtjfvBWIrqu/' },
    { id: 14, type: 'post', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_4.png", url: 'https://www.instagram.com/p/Cr_d42Qom0I/' },
    { id: 15, type: 'video', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_5.png", url: 'https://www.instagram.com/reel/CrEZUitv6ff/' },
    { id: 16, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_6.png", url: 'https://www.instagram.com/reel/CrQ4BqQp1tm/' },
    { id: 17, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_7.png", url: 'https://www.instagram.com/reel/CrAk-rYvjLV/' },
    { id: 18, type: 'video', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_8.png", url: 'https://www.instagram.com/reel/Cq0YICMP-nb/' },
    { id: 19, type: 'video', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_9.png", url: 'https://www.instagram.com/reel/Cqa65gDrg9h/' },
    { id: 20, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_10.png", url: 'https://www.instagram.com/reel/CqD2HZSPeTY/' },
    { id: 21, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_11.png", url: 'https://www.instagram.com/reel/Cpk2OWSPRlM/' },
    { id: 22, type: 'video', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_12.png", url: 'https://www.instagram.com/reel/CpPjPByLSlv/' },
    { id: 23, type: 'post', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_13.png", url: 'https://www.instagram.com/p/Co9URVcyU0G/' },
    { id: 24, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_14.png", url: 'https://www.instagram.com/reel/Cn32HQkjYz7/' },
    { id: 25, type: 'video', category: 'Flavors', image: "/confeitaria-by-minty/user-media/minty_photo_15.png", url: 'https://www.instagram.com/reel/Cm_zYtpjPlC/' },
    { id: 26, type: 'video', category: 'Masterclass', image: "/confeitaria-by-minty/user-media/minty_photo_16.png", url: 'https://www.instagram.com/reel/Cl-xN1-LDRS/' },
    { id: 27, type: 'video', category: 'Behind the Scenes', image: "/confeitaria-by-minty/user-media/minty_photo_17.png", url: 'https://www.instagram.com/reel/CmB0YiIuDi0/' },
    { id: 28, type: 'video', category: 'Celebrations', image: "/confeitaria-by-minty/user-media/minty_photo_18.png", url: 'https://www.instagram.com/reel/ClTegBuv-3A/' }
  ],
  testimonials: [
    {
      id: 1,
      quote: "Minty's creations are not just visually stunning, they are an absolute delight to eat. The attention to detail is remarkable.",
      author: "Local Cafe Partner",
      role: "Auckland, NZ"
    },
    {
      id: 2,
      quote: "Collaborating with Confeitaria by Minty elevated our brand campaign entirely. The content was professional and deeply engaging.",
      author: "Premium Ingredient Supplier",
      role: "Brand Partnership"
    }
  ]
};
