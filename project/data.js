/* Food Data - Countries and their dishes */
const foodData = [
    {
        country: "Italy",
        flag: "🇮🇹",
        foods: [
            { name: "Pizza Napoletana", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=60", desc: "Soft dough, San Marzano tomatoes, mozzarella, and fresh basil. Famous in Naples for its chewy crust.", why: "It represents the simplicity of Italian cooking and is a cultural icon." },
            { name: "Pasta Carbonara", img: "https://www.cookingclassy.com/wp-content/uploads/2020/10/spaghetti-carbonara-01.jpg", desc: "Eggs, hard cheese, cured pork, and black pepper. Famous in Rome for its creamy yet simple sauce.", why: "The creamy sauce comes from emulsifying eggs and cheese, not cream." },
            { name: "Risotto", img: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=500&q=60", desc: "Arborio rice cooked slowly with broth. Famous in Northern Italy for its velvety texture.", why: "It is the ultimate comfort food, demonstrating patience and mastery." },
            { name: "Lasagna", img: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=1350&q=80", desc: "Layers of pasta, meat sauce, béchamel, and cheese. Famous across Italy and served at family celebrations.", why: "It is the ultimate crowd-pleaser and perfect for family gatherings." },
            { name: "Tiramisu", img: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=60", desc: "Coffee-soaked ladyfingers and mascarpone cream. Famous in Veneto for its light sweetness.", why: "It is arguably the most famous dessert in the world." }
        ]
    },
    {
        country: "Japan",
        flag: "🇯🇵",
        foods: [
            { name: "Sushi", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=500&q=60", desc: "Vinegared rice combined with fish or seafood. Famous in Tokyo for its delicate balance of flavor.", why: "It showcases the Japanese dedication to freshness and balance." },
            { name: "Ramen", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=500&q=60", desc: "Wheat noodles served in rich meat or fish broth. Famous in Fukuoka for its deep, satisfying taste.", why: "It is the ultimate comfort food for late nights and cold weather." },
            { name: "Tempura", img: "https://media.istockphoto.com/id/476064337/photo/tempura.jpg?s=612x612&w=0&k=20&c=7CX5nbtw67IlrAInUoimdXBlJEpaMuGaeUqkZ1w9WFU=", desc: "Seafood or vegetables battered and deep-fried. Famous in Tokyo for its light, crispy texture.", why: "The light, crispy batter was introduced by Portuguese missionaries." },
            { name: "Curry Rice", img: "jcr.png", desc: "Sticky rice served with thick Japanese curry. Famous in home kitchens for its warming, savory flavor.", why: "This comforting bowl brings warmth and flavor to every spoonful." }
        ]
    },
    {
        country: "India",
        flag: "🇮🇳",
        foods: [
            { name: "Butter Chicken", img: "https://media.istockphoto.com/id/1479262112/photo/butter-chicken.jpg?s=612x612&w=0&k=20&c=m0XtnTX_x5ideVEWl0wi_hj9u4G2MifCahvXs0zi3Wg=", desc: "Creamy tomato gravy with tender chicken. Famous in Delhi and popular for its rich, buttery sauce.", why: "The mild spice and silky texture make it loved by people of all ages." },
            { name: "Masala Dosa", img: "https://media.istockphoto.com/id/942682776/photo/masala-dosa-indian-breakfast-crepes-with-spicy-potato-filling.jpg?s=612x612&w=0&k=20&c=SCyxwiWKxy7LAXaGlfhnlUabTfRkxQBuTFUsqUx-VDk=", desc: "Crispy rice-and-lentil crepe filled with spiced potato. Famous in South India for breakfast and street food.", why: "The combination of crisp dosa and flavorful potato filling is irresistible." },
            { name: "Hyderabadi Biryani", img: "https://media.istockphoto.com/id/1410130688/photo/mutton-biryani-served-in-a-golden-dish-isolated-on-dark-background-side-view-indian-food.jpg?s=612x612&w=0&k=20&c=ueFrghYZuKAty-rFVe5dtMtNIbn0jaUsSvCUwTVOmd8=", desc: "Fragrant layered rice with spiced meat and saffron. Famous in Hyderabad for its royal aroma.", why: "Its complex spice profile and tender meat make it a celebratory favorite." },
            { name: "Pani Puri", img: "https://media.istockphoto.com/id/979145974/photo/pani-puri-or-golgappa-is-a-popular-indian-chat-menu-selective-focus.jpg?s=612x612&w=0&k=20&c=hg4yj5ygrFM9enVvZf0rzw0_mqH-80UNt0eLxWSeAYQ=", desc: "Hollow crisp shells filled with spicy water and potato. Famous in Mumbai for its tangy street-food punch.", why: "The burst of sweet, sour, and spicy flavors makes it addictive." },
            { name: "Paneer Tikka", img: "https://media.istockphoto.com/id/1363048607/photo/paneer-tikka.jpg?s=612x612&w=0&k=20&c=vjVqdZwyI7JuOi7DTVji1Vqfmb4bf8yXFDO-HbU8pnk=", desc: "Grilled cottage cheese marinated in spices. Famous in North India for its smoky goodness.", why: "It is a vegetarian crowd-pleaser with bold charred flavor." },
            { name: "Gulab Jamun", img: "https://media.istockphoto.com/id/163064596/photo/gulab-jamun.jpg?s=612x612&w=0&k=20&c=JvJ4AAs-N5pRzzRmVg1lG0talC3QoUt0ZGiO1NKz-kQ=", desc: "Soft milk dumplings soaked in rose syrup. Famous at Indian festivals for its warm sweetness.", why: "Its syrupy sweetness and melt-in-your-mouth texture make it a dessert staple." }
        ]
    },
    {
        country: "Mexico",
        flag: "🇲🇽",
        foods: [
            { name: "Tacos Al Pastor", img: "https://media.istockphoto.com/id/1341594041/photo/tacos-al-pastor-traditional-mexican-food-with-onion-cilantro-pineapple-red-sauce-or-guacamole.jpg?s=612x612&w=0&k=20&c=SMoIMM-M35APwkVRr5h_gz2cksHfN5chGtWwxaIbmA0=", desc: "Spit-roasted pork tacos with pineapple, onion, and cilantro. Famous in Mexico City for its street food flavor.", why: "The blend of sweet pineapple and smoky pork is unforgettable." },
            { name: "Mole Poblano", img: "https://media.istockphoto.com/id/1224505537/photo/mole-mexicano-poblano-mole-ingredients-mexican-spicy-food-traditional-in-mexico.jpg?s=612x612&w=0&k=20&c=hLKnUg-vQdPzwYZxrgUx3BzxaJUQMhNTx-3UnGvkW9U=", desc: "Rich chocolate-and-chili sauce served over chicken. Famous in Puebla for its deep, complex flavor.", why: "It combines dozens of spices and ingredients for a truly layered taste." },
            { name: "Chiles en Nogada", img: "https://media.istockphoto.com/id/1422372949/photo/chile-in-nogada-casero.jpg?s=612x612&w=0&k=20&c=KdiwdEyjAvSga2jGYwiLicH_Ot4-_eSG1KqvbKl7BoE=", desc: "Stuffed poblano peppers topped with walnut sauce and pomegranate. Famous for its patriotic Mexican colors.", why: "It is both a festive dish and a culinary work of art." }
        ]
    },
    {
        country: "France",
        flag: "🇫🇷",
        foods: [
            { name: "Croissant", img: "https://media.istockphoto.com/id/95380176/photo/fresh-croissant.jpg?s=612x612&w=0&k=20&c=WC9_MHOVAcCPF39ER4plI5yFmVhnO-bKqTeiXk3TKmM=", desc: "Flaky butter pastry that is crisp outside and tender inside. Famous in Paris bakeries for breakfast.", why: "The buttery layers are a classic example of French pastry skill." },
            { name: "Coq au Vin", img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=500&q=60", desc: "Chicken braised slowly in red wine with mushrooms and onions. Famous in French countryside kitchens for its deep flavor.", why: "Slow cooking turns the wine and herbs into a rich, comforting sauce." },
            { name: "Crème Brûlée", img: "https://media.istockphoto.com/id/504045700/photo/creme-brulee-traditional-french-vanilla-cream-dessert.jpg?s=612x612&w=0&k=20&c=oqnmTkPemMxhCANdmERB2AKn2QJ3X0earyd0HTMNG1w=", desc: "Creamy vanilla custard topped with a caramelized sugar crust. Famous for its elegant presentation and dessert ritual.", why: "The contrast of silky custard and crisp caramel is irresistible." }
        ]
    },
    {
        country: "Thailand",
        flag: "🇹🇭",
        foods: [
            { name: "Pad Thai", img: "https://media.istockphoto.com/id/1262880166/photo/world-famous-freshly-stir-fried-cooked-thai-recipe-of-prawn-pad-thai-noodles-on-a-round.jpg?s=612x612&w=0&k=20&c=-cgqFKc1dcbRFaB4ggAZL5RKALOLlYORV-DfHc44Bpg=", desc: "Stir-fried rice noodles with tamarind, peanuts, shrimp, and tofu. Famous for its balance of sweet, sour, and savory flavors.", why: "It is Thailand's most iconic street dish and a taste of Southeast Asia." },
            { name: "Green Curry", img: "https://media.istockphoto.com/id/1140580445/photo/thai-green-curry.jpg?s=612x612&w=0&k=20&c=55r_mPreDyGcNLQPXzK9PAC2m8DXU1uN_9t4Zw_q8dU=", desc: "Spicy coconut curry with green chilies and fresh herbs. Famous for its creamy heat and fragrant basil.", why: "The curry's fragrance comes from fresh herbs and green chilies." },
            { name: "Mango Sticky Rice", img: "https://media.istockphoto.com/id/1571278473/photo/delicious-thai-mango-sticky-rice-with-cut-fresh-mango-fruit-in-a-plate.jpg?s=612x612&w=0&k=20&c=RbFVUk2ZU185TwAGUr7TyM8uyTeWiWMLM-szWJ09J2w=", desc: "Sweet coconut rice served with ripe mango slices. Famous as a tropical dessert in Bangkok markets.", why: "The mix of sticky rice, coconut cream, and mango is refreshingly sweet." }
        ]
    }
];

/* Fun Facts Array */
const funFacts = [
    "🥄 Eating slowly helps you taste every bite and recognize fullness more easily.",
    "🍅 Tomatoes are botanically fruits but used as vegetables in many cuisines.",
    "🍚 Rice is the most widely consumed staple food in the world.",
    "🌶️ Spices were once more valuable than gold on early trade routes.",
    "🍽️ Shared meals are a universal way to celebrate friendship and culture.",
    "🌿 India grows more than 40% of the world's spices and uses over 100 different varieties in its cooking.",
    "👑 Biryani was once served in royal courts and remains a festival favorite across India.",
    "🫓 Masala dosa is one of the world's oldest street foods, originating from South India.",
    "☕ In India, chai is often brewed strong with spices like ginger and cardamom, then sweetened with milk and sugar for a comforting daily ritual.",
    "🍜 Indian cuisine is incredibly diverse, with each region offering unique dishes and flavors that reflect its history and culture.",
    "🍵 For many people, tea isn't just about taste; it's a daily companion that brings calm, comfort, and peace of mind."
];
