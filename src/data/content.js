export const content = {
  hero: {
    headline: "Elegant Bakes, Thoughtfully Crafted.",
    subheadline: "Minty Bhadani is a certified pastry chef sharing refined desserts, creative baking, and signature recipes.",
    image: "https://images.unsplash.com/photo-1557925923-33b251d59296?auto=format&fit=crop&q=80&w=2000",
    videoBg: "https://cdn.pixabay.com/video/2019/11/02/28643-370503070_large.mp4"
  },
  about: {
    bio: "Passionate about creating exquisite European pastries and delightful desserts. Based in beautiful Auckland, New Zealand.",
    certifications: [
      "Certified Pastry Chef",
      "Diploma in Pastry and Baking",
      "City & Guilds Certified"
    ],
    image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=1000"
  },
  categoriesPanel: [
    { title: "Gourmet Donuts", count: 12, image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800" },
    { title: "Cupcakes", count: 24, image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=800" },
    { title: "Sugar Cookies", count: 18, image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800" },
    { title: "Savory & Salads", count: 8, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800" },
    { title: "Crepes & Pancakes", count: 15, image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800" }
  ],
  highlights: [
    { title: "Breads", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400" },
    { title: "Cookies", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400" },
    { title: "Cupcakes", image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400" },
    { title: "Ganache", image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=400" },
    { title: "Cheesecake", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400" },
    { title: "Gift Boxes", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400" }
  ],
  featuredCreations: [
    { id: 'macarons', title: 'Macarons', category: 'Showcase', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=800' },
    { id: 'cheesecakes', title: 'Cheesecakes', category: 'Showcase', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800', video: 'https://cdn.pixabay.com/video/2019/11/02/28643-370503070_large.mp4' },
    { id: 'brownies', title: 'Brownies', category: 'Showcase', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800' },
    { id: 'xmas', title: 'Seasonal Specials', category: 'Showcase', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800', video: 'https://cdn.pixabay.com/video/2021/08/17/85375-589926861_large.mp4' }
  ],
  recipes: [
    {
      id: "classic-french-macarons",
      title: "Classic French Macarons",
      description: "Delicate almond meringue shells filled with rich chocolate ganache.",
      category: "Macarons",
      image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=1200",
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
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1200",
      prepTime: "20 mins",
      cookTime: "15 mins",
      ingredients: ["Eggs", "Milk", "Flour", "Butter", "Raspberries", "Heavy cream"],
      steps: ["Whisk batter.", "Cook thin crepes.", "Whip cream.", "Assemble."],
      tips: "Let batter rest 30 mins."
    }
  ],
  reels: [
    { id: 29, type: 'post', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/CbNO3Nsrkig/' },
    { id: 30, type: 'post', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/CbKrHs5rkb3/' },
    { id: 31, type: 'post', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/CbFtlyWjRF-/' },
    { id: 32, type: 'post', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/CbpnEd3J6xx/' },
    { id: 33, type: 'video', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cb-mEnKFcaT/' },
    { id: 34, type: 'post', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/Cc-wkkztRme/' },
    { id: 35, type: 'post', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/Cd5koTsLNdQ/' },
    { id: 36, type: 'post', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/CfRg5A2tdEC/' },
    { id: 37, type: 'video', image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CftX9pIlTXs/' },
    { id: 38, type: 'video', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CgTb7r_F6ye/' },
    { id: 39, type: 'video', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CjI1ubLJLP2/' },
    { id: 40, type: 'video', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CjhRy4aD8pF/' },
    { id: 41, type: 'video', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cld_5EqNdlx/' },
    { id: 1, type: 'video', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CoB-c8aPJta/' },
    { id: 2, type: 'video', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CtYntpRthu_/' },
    { id: 3, type: 'video', image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/DY1Qq0cyPuH/' },
    { id: 4, type: 'video', image: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/DYV4leey6_W/' },
    { id: 5, type: 'video', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/DWlBPJNEoYx/' },
    { id: 6, type: 'post', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/DC3pA45yNeA/' },
    { id: 7, type: 'video', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/C_9oV9VSi8v/' },
    { id: 8, type: 'video', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/C_fN_xxyefp/' },
    { id: 9, type: 'video', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/C4muVhqydtE/' },
    { id: 10, type: 'post', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/C39iWGDrxHR/' },
    { id: 11, type: 'post', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/C1_qgEGSC6d/' },
    { id: 12, type: 'video', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CwHz1WzIWj3/' },
    { id: 13, type: 'video', image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CtjfvBWIrqu/' },
    { id: 14, type: 'post', image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/Cr_d42Qom0I/' },
    { id: 15, type: 'video', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CrEZUitv6ff/' },
    { id: 16, type: 'video', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CrQ4BqQp1tm/' },
    { id: 17, type: 'video', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CrAk-rYvjLV/' },
    { id: 18, type: 'video', image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cq0YICMP-nb/' },
    { id: 19, type: 'video', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cqa65gDrg9h/' },
    { id: 20, type: 'video', image: 'https://images.unsplash.com/photo-1621236378699-8597faf6a176?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CqD2HZSPeTY/' },
    { id: 21, type: 'video', image: 'https://images.unsplash.com/photo-1514516345957-556ca7d90a29?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cpk2OWSPRlM/' },
    { id: 22, type: 'video', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CpPjPByLSlv/' },
    { id: 23, type: 'post', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/p/Co9URVcyU0G/' },
    { id: 24, type: 'video', image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cn32HQkjYz7/' },
    { id: 25, type: 'video', image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cm_zYtpjPlC/' },
    { id: 26, type: 'video', image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/Cl-xN1-LDRS/' },
    { id: 27, type: 'video', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/CmB0YiIuDi0/' },
    { id: 28, type: 'video', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=400', url: 'https://www.instagram.com/reel/ClTegBuv-3A/' }
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
