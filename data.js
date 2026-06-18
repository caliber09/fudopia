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
    },
    {
        country: "Germany",
        flag: "🇩🇪",
        foods: [
            { name: "Bratwurst", img: "https://media.istockphoto.com/id/956046242/photo/grilled-sausages-on-grill-with-smoke-and-flame.jpg?s=612x612&w=0&k=20&c=TWYCOh54Kcucj1Saab5joHx8of3_AqAzHIUdVRvciL0=", desc: "Grilled or pan-fried sausage, usually pork or veal, seasoned with herbs and spices. Famous in Germany for its hearty flavor.", why: "It’s a classic street and festival food." },
            { name: "Schnitzel", img: "https://media.istockphoto.com/id/1604908554027-866b7a4e0a0a?auto=format&fit=crop&w=500&q=60", desc: "Thin meat cutlet breaded and fried until golden and crispy. Famous in Vienna/Germany-style beer halls.", why: "The crunchy coating and tender meat are perfect together." },
            { name: "Currywurst", img: "https://media.istockphoto.com/id/1521302080322-5d6d3f1c3b6b?auto=format&fit=crop&w=500&q=60", desc: "Bratwurst topped with curry ketchup and spices. Famous in Berlin street food culture.", why: "A tangy, sweet-spicy sauce makes it instantly recognizable." },
            { name: "Sauerkraut", img: "https://media.istockphoto.com/id/1542014749744-5e65a2e8f1e5?auto=format&fit=crop&w=500&q=60", desc: "Fermented cabbage with a tangy, sour bite. Famous as an everyday German side dish.", why: "Fermentation gives it depth and a signature acidity." },
            { name: "Braten", img: "https://media.istockphoto.com/id/1600891964094-efb4c5b4e4d0?auto=format&fit=crop&w=500&q=60", desc: "Roasted meats (often pork or beef) served with rich pan gravy. Famous in traditional German Sunday meals.", why: "Slow roasting creates rich flavor and tender texture." },
            { name: "Kartoffelsalat", img: "https://media.istockphoto.com/id/1523986371872-9d3ba2e2a6d3?auto=format&fit=crop&w=500&q=60", desc: "German potato salad served creamy or vinaigrette-style depending on region. Famous at picnics and gatherings.", why: "It’s comforting and pairs perfectly with grilled sausages." },
            { name: "Käsespätzle", img: "https://images.unsplash.com/photo-1604909053188-89b5f2fbd8f8?auto=format&fit=crop&w=500&q=60", desc: "Swabian egg noodles tossed with melted cheese, often topped with onions. Famous in southern Germany.", why: "Cheesy noodles are the ultimate comfort dish." },
            { name: "Eisbein", img: "https://images.unsplash.com/photo-1600898146980-8b8d2f8b5c3a?auto=format&fit=crop&w=500&q=60", desc: "Pork knuckle typically braised until tender and served with sauerkraut or peas. Famous in hearty winter cuisine.", why: "It’s rich, savory, and deeply traditional." },
            { name: "Pretzel (Brezel)", img: "https://images.unsplash.com/photo-1615873968403-89b99f8a0e4a?auto=format&fit=crop&w=500&q=60", desc: "Twisted baked bread with a chewy crust and salty flavor. Famous at beer gardens.", why: "The unique crust is from baking with a lye/water treatment." },
            { name: "Black Forest Cake (Schwarzwälder Kirschtorte)", img: "https://images.unsplash.com/photo-1541014741259-8b7a9d0a5c6f?auto=format&fit=crop&w=500&q=60", desc: "Chocolate cake with whipped cream and cherries. Famous worldwide as a German dessert icon.", why: "The layered chocolate-cherry-cream combo is unforgettable." }
        ]
    },
    {
        country: "Korea",
        flag: "🇰🇷",
        foods: [
            { name: "Kimchi", img: "https://images.unsplash.com/photo-1604908177011-6b9b8e5b0d3e?auto=format&fit=crop&w=500&q=60", desc: "Fermented spicy vegetables, usually napa cabbage or radish. Famous as a staple side dish in Korea.", why: "It adds tang, heat, and umami to almost any meal." },
            { name: "Bibimbap", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=500&q=60", desc: "Rice bowl topped with assorted vegetables, meat (optional), and a gochujang sauce. Famous for its colorful toppings.", why: "Mixing everything creates a perfect balance of flavors." },
            { name: "Bulgogi", img: "https://images.unsplash.com/photo-1604908177188-ef0f1b4b5c6c?auto=format&fit=crop&w=500&q=60", desc: "Marinated grilled beef (sometimes pork) sweet-savory in flavor. Famous for its caramelized edges.", why: "The marinade tenderizes and boosts deep flavor." },
            { name: "Tteokbokki", img: "https://images.unsplash.com/photo-1604908177089-2c7d2f0a4f3b?auto=format&fit=crop&w=500&q=60", desc: "Chewy rice cakes cooked in a spicy-sweet gochujang sauce. Famous street food.", why: "The sauce clings perfectly and keeps you coming back." },
            { name: "Samgyeopsal", img: "https://images.unsplash.com/photo-1542222022-9f6cfb2f0d2c?auto=format&fit=crop&w=500&q=60", desc: "Grilled pork belly served with lettuce, garlic, and dipping sauces. Famous at Korean BBQ.", why: "It’s interactive and perfect for shared meals." },
            { name: "Japchae", img: "https://images.unsplash.com/photo-1604908177190-4a7b2e8c1e4a?auto=format&fit=crop&w=500&q=60", desc: "Stir-fried glass noodles with vegetables and sometimes beef. Famous for its glossy, sweet-savory taste.", why: "The noodles soak up flavor while staying springy." },
            { name: "Korean Fried Chicken", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=60", desc: "Double-fried crispy chicken often coated with soy-garlic or spicy sauce. Famous across Korea and beyond.", why: "Extra crunch and sticky glaze create a satisfying bite." },
            { name: "Hotteok", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=500&q=60", desc: "Sweet stuffed pancakes filled with cinnamon sugar or honey. Famous winter street dessert.", why: "The warm syrupy center is pure comfort." },
            { name: "Jjajangmyeon", img: "https://images.unsplash.com/photo-1604908177037-f1c0f0f4e7ea?auto=format&fit=crop&w=500&q=60", desc: "Noodles topped with thick black bean sauce. Famous for its savory, slightly sweet depth.", why: "The sauce has a rich umami that’s deeply satisfying." },
            { name: "Gimbap", img: "https://images.unsplash.com/photo-1604908177169-bf4c5e8c3e0f?auto=format&fit=crop&w=500&q=60", desc: "Korean seaweed rice rolls filled with vegetables, egg, and often meat or tuna. Famous for lunch boxes.", why: "Portable, flavorful, and easy to love." }
        ]
    },
    {
        country: "Turkey",
        flag: "🇹🇷",
        foods: [
            { name: "Döner Kebab", img: "https://images.unsplash.com/photo-1604908177006-2d8c0b1f3c2a?auto=format&fit=crop&w=500&q=60", desc: "Sliced roasted meat served in bread or plate with sauces and salad. Famous street food from Turkey.", why: "The rotating spit roasting creates rich flavor." },
            { name: "İskender Kebab", img: "https://images.unsplash.com/photo-1516683035403-1e3f3c0e3d7e?auto=format&fit=crop&w=500&q=60", desc: "Döner meat served over toasted bread with tomato sauce and melted butter-yogurt. Famous in Bursa.", why: "It’s creamy, saucy, and indulgent." },
            { name: "Köfte", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60", desc: "Seasoned ground meat patties or meatballs, grilled or pan-cooked. Famous at gatherings and street stalls.", why: "Simple ingredients create big flavor." },
            { name: "Lahmacun", img: "https://images.unsplash.com/photo-1604908177160-0d0d0f1c2e3a?auto=format&fit=crop&w=500&q=60", desc: "Thin crispy flatbread topped with spiced minced meat and herbs. Famous as Turkish pizza.", why: "It’s crunchy, savory, and served with lemon." },
            { name: "Menemen", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=60", desc: "Scrambled eggs with tomatoes, peppers, and spices. Famous for breakfast.", why: "Fresh vegetables make it bright and comforting." },
            { name: "Mercimek Çorbası", img: "https://images.unsplash.com/photo-1600891964166-1d4c0b3b6b5b?auto=format&fit=crop&w=500&q=60", desc: "Red lentil soup, smooth and warming with spices. Famous across Turkey.", why: "It’s hearty, affordable, and full of umami." },
            { name: "Pide", img: "https://images.unsplash.com/photo-1548365328-9f77e7f6d5f0?auto=format&fit=crop&w=500&q=60", desc: "Boat-shaped Turkish flatbread often topped with cheese, meat, or eggs. Famous in bakeries.", why: "The chewy crust + toppings make it special." },
            { name: "Baklava", img: "https://images.unsplash.com/photo-1604908177028-1d1f0d2e3c4b?auto=format&fit=crop&w=500&q=60", desc: "Layered filo pastry with nuts and syrup/honey. Famous dessert in Turkish cuisine.", why: "The crisp layers and sweet syrup are a perfect match." },
            { name: "Turkish Tea (Çay)", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=60", desc: "Strong black tea served in small tulip-shaped glasses. Famous daily ritual.", why: "It’s social, comforting, and essential to Turkish culture." },
            { name: "Künefe", img: "https://images.unsplash.com/photo-1604908177079-8c9b0d1e2f3a?auto=format&fit=crop&w=500&q=60", desc: "Shredded pastry with cheese, soaked in syrup. Famous warm dessert.", why: "Crunchy exterior with gooey cheese center is addictive." }
        ]
    },
    {
        country: "South Africa",
        flag: "🇿🇦",
        foods: [
            { name: "Jollof Rice", img: "https://images.unsplash.com/photo-1615873968403-89b99f8a0e4a?auto=format&fit=crop&w=500&q=60", desc: "One-pot rice cooked with tomatoes, peppers, and spices. Famous across West Africa.", why: "Smoky, tomato-rich flavor makes it a party staple." },
            { name: "Tagine", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=60", desc: "Slow-cooked stew with meat/vegetables and aromatic spices (often North African). Famous in Morocco.", why: "Cooking in a tagine pot traps steam for tender results." },
            { name: "Suya", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60", desc: "Spiced skewered meat (commonly beef or chicken) coated with a peanut-based seasoning. Famous street snack.", why: "The toasted spice-peanut mix gives bold, smoky flavor." },
            { name: "Bobotie", img: "https://images.unsplash.com/photo-1523986371872-9d3ba2e2a6d3?auto=format&fit=crop&w=500&q=60", desc: "Cape Malay spiced meat casserole topped with egg custard. Famous in South Africa.", why: "Sweet-savory spices plus custard topping create a unique taste." },
            { name: "Egusi Soup", img: "https://images.unsplash.com/photo-1542014749744-5e65a2e8f1e5?auto=format&fit=crop&w=500&q=60", desc: "Melon seed thick soup often served with swallow starches. Famous in West Africa.", why: "Melon seeds make it rich, thick, and satisfying." },
            { name: "Injera with Wat", img: "https://images.unsplash.com/photo-1604908176997-125f25f9f9fd?auto=format&fit=crop&w=500&q=60", desc: "Sour flatbread (injera) paired with spicy stews (wat), common in Ethiopia/Eritrea.", why: "The fermented bread balances the bold stews." },
            { name: "Fufu with Soup", img: "https://images.unsplash.com/photo-1521302080322-5d6d3f1c3b6b?auto=format&fit=crop&w=500&q=60", desc: "Swallow/sticky starchy dough served with leafy or groundnut-based soup. Famous in many regions.", why: "It’s comforting and perfect for scooping flavorful sauces." },
            { name: "Piri-Piri Chicken", img: "https://images.unsplash.com/photo-1542222022-9f6cfb2f0d2c?auto=format&fit=crop&w=500&q=60", desc: "Grilled chicken marinated in spicy piri-piri pepper sauce. Famous in Portuguese-influenced regions.", why: "Charred grill flavor + fiery marinade is irresistible." },
            { name: "Nigerian Suya-Style Plantain", img: "https://images.unsplash.com/photo-1600898146980-8b8d2f8b5c3a?auto=format&fit=crop&w=500&q=60", desc: "Caramelized or grilled plantain with smoky spices (often served as street snack). Famous across West Africa.", why: "Sweet caramel notes with spice make it addictive." },
            { name: "Harissa/Chakalaka Style Vegetables", img: "https://images.unsplash.com/photo-1548365328-9f77e7f6d5f0?auto=format&fit=crop&w=500&q=60", desc: "Spiced vegetable mixes served with stews or breads in Southern Africa.", why: "It brings heat, texture, and vibrant flavor." }
        ]
    },
    {
        country: "Spain",
        flag: "🇪🇸",
        foods: [
            { name: "Paella Valenciana", img: "https://images.unsplash.com/photo-1604909053188-89b5f2fbd8f8?auto=format&fit=crop&w=500&q=60", desc: "Rice cooked with saffron, chicken, rabbit, beans, and olive oil. Famous in Valencia for festive gatherings.", why: "Saffron gives the dish its signature color and aroma." },
            { name: "Gazpacho", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=500&q=60", desc: "Cold tomato-garlic soup served chilled with olive oil and bread. Famous in Andalusia.", why: "It’s refreshing and highlights ripe summer produce." },
            { name: "Tortilla Española", img: "https://images.unsplash.com/photo-1603398938378-3e2d3b0c0d3f?auto=format&fit=crop&w=500&q=60", desc: "Spanish omelet with potatoes and onions. Famous as tapas across the country.", why: "Simple ingredients combine into a comforting classic." },
            { name: "Jamón Ibérico", img: "https://images.unsplash.com/photo-1521302080322-5d6d3f1c3b6b?auto=format&fit=crop&w=500&q=60", desc: "Cured Iberian ham with nutty, savory flavor. Famous for its slow dry-curing process.", why: "The aging develops deep umami and a melt-in-your-mouth texture." },
            { name: "Churros con Chocolate", img: "https://images.unsplash.com/photo-1509440159598-0249088772ff?auto=format&fit=crop&w=500&q=60", desc: "Fried dough pastry sticks served with thick hot chocolate. Famous for breakfast or late-night treats.", why: "Crispy outside and rich chocolate dipping is irresistible." },
            { name: "Fideuà", img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=500&q=60", desc: "Seafood noodle paella using short noodles instead of rice. Famous in coastal Valencia region.", why: "The noodles toast in the broth, creating bold flavor." },
            { name: "Patatas Bravas", img: "https://images.unsplash.com/photo-1548365328-9f77e7f6d5f0?auto=format&fit=crop&w=500&q=60", desc: "Crispy potatoes topped with spicy tomato sauce and aioli. Famous as a classic tapas order.", why: "Sweet-spicy sauce pairs perfectly with crunchy potatoes." },
            { name: "Pulpo a la Gallega", img: "https://images.unsplash.com/photo-1600891964166-1d4c0b3b6b5b?auto=format&fit=crop&w=500&q=60", desc: "Galician-style octopus with olive oil, paprika, and sea salt. Famous in Galicia.", why: "Tender octopus flavor with smoky paprika is unforgettable." },
            { name: "Croquetas de Jamón", img: "https://images.unsplash.com/photo-1516683035403-1e3f3c0e3d7e?auto=format&fit=crop&w=500&q=60", desc: "Creamy ham-filled croquettes, breaded and fried. Famous as bar snacks.", why: "The creamy center and crisp crust create a perfect contrast." },
            { name: "Crema Catalana", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?auto=format&fit=crop&w=500&q=60", desc: "Custard dessert with caramelized sugar top, similar to crème brûlée. Famous in Catalonia.", why: "The crackly sugar layer makes every spoonful special." }
        ]
    },
    {
        country: "China",
        flag: "🇨🇳",
        foods: [
            { name: "Peking Duck", img: "https://images.unsplash.com/photo-1604908177011-6b9b8e5b0d3e?auto=format&fit=crop&w=500&q=60", desc: "Roasted duck with crispy skin served with pancakes and hoisin. Famous in Beijing.", why: "The skin-to-meat balance is what makes it iconic." },
            { name: "Xiao Long Bao", img: "https://images.unsplash.com/photo-1604908554027-866b7a4e0a0a?auto=format&fit=crop&w=500&q=60", desc: "Soup dumplings filled with pork and gelatin that turns to broth. Famous in Shanghai.", why: "You get both bite and warm soup in one delicious moment." },
            { name: "Kung Pao Chicken", img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=500&q=60", desc: "Spicy stir-fried chicken with peanuts and Sichuan flavors. Famous in Sichuan cuisine.", why: "The dish delivers numbing heat and savory sweetness." },
            { name: "Mapo Tofu", img: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?auto=format&fit=crop&w=500&q=60", desc: "Spicy tofu in a fragrant chili-bean sauce. Famous in Chengdu.", why: "Silky tofu absorbs bold, spicy, savory flavors." },
            { name: "Hot Pot", img: "https://images.unsplash.com/photo-1600898146980-8b8d2f8b5c3a?auto=format&fit=crop&w=500&q=60", desc: "A communal pot of simmering broth with ingredients cooked at the table. Famous across China.", why: "Customizable broth flavors make it great for groups." },
            { name: "Char Siu (Cantonese BBQ Pork)", img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=500&q=60", desc: "Sweet and savory roasted pork with sticky glaze. Famous in Cantonese cuisine.", why: "Caramelized char gives deep flavor." },
            { name: "Chow Mein", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=500&q=60", desc: "Stir-fried noodles with vegetables and meat/seafood. Famous as a comfort meal.", why: "High-heat wok cooking creates great texture." },
            { name: "Fried Rice (Yangzhou-style)", img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=60", desc: "Egg-fried rice with ham, shrimp, and scallions. Famous as a classic Chinese takeaway dish.", why: "The wok-fried grains taste fragrant and slightly smoky." },
            { name: "Wontons in Chili Oil", img: "https://images.unsplash.com/photo-1600891964094-efb4c5b4e4d0?auto=format&fit=crop&w=500&q=60", desc: "Small dumplings served in spicy chili oil broth. Famous in northern provinces.", why: "Rich, spicy broth complements tender wontons." },
            { name: "Mooncakes", img: "https://images.unsplash.com/photo-1541014741259-8b7a9d0a5c6f?auto=format&fit=crop&w=500&q=60", desc: "Traditional pastries filled with sweet bean or lotus seed paste. Famous during Mid-Autumn Festival.", why: "The festival symbolism makes them especially meaningful." }
        ]
    },
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
