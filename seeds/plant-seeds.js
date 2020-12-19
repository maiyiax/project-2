const { Plant } = require('../models');

const plantdata = [
    {
        common_name: 'Chinese Evergreen',
        scientific_name: 'Aglaonema',
        image_url: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/5/9/4/6/22854.Jpg',
        description: 'A Chinese Evergreen plant is one of the easiest and best-looking houseplants to have in your home or office. Aglaonemas, the scientific name for Chinese Evergreen plants, are a hardy hybrid from the Aroid family and originally came from the subtropics of Southeast Asia. Chinese Evergreen plants can be used as upright table plants or, as they get larger, bushy floor plants. All of the many Chinese Evergreen plant varieties have long, shiny, leathery leaves with unique patterns of green, gray, pink, red, and cream. NASA lists the Chinese Evergreen as one of its top ten plants to clean the air of harmful toxins.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 1,
        water: 'weekly'
    },
    {
        common_name: "Elephant's Ear",
        scientific_name: 'Alocasia',
        image_url: 'https://www.ourhouseplants.com/imgs-content/Alocasia-leaves.jpg',
        description: "An Alocasia plant, native to Asia, is also called an Elephant Ear plant or African Mask plant because of their very large,  glossy, heart-shaped leaves with wavy edges. These stunning, veined leaves come in red, bronze, blue-green, and purple. If you are searching for a dramatic, very different looking plant that can be as small as 6″ or as tall as a tree, an Alocasia plant is a great choice. These plants do require extra care and attention. Alocasia plants are considered poisonous and should be kept away from pets and children.",
        care_level: 'difficult',
        toxicity: 1,
        // light_id: 3, 
        water: 'daily'
    },
    {
        common_name: 'Flamingo Flower',
        scientific_name: 'Anthurium',
        image_url: 'https://kalamazooflorist.imgix.net/images/itemVariation/anthuriuminapot1-20072241019.jpeg',
        description: 'Also referred to as "Laceleaf", the names refer to the structure of the flower. These easy-care indoor plants produce beautiful, long-lasting, waxy, heart- shaped “flowers” which are really modified leaves called “spathes” throughout the year.  Anthurium spathes come in red, pink, white, and salmon and can be used in cut flower arrangements. Anthurium plants look beautiful as table centerpieces or on a reception desk in an office. These plants are poisonous and should be kept away from pets and children.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'daily'
    },
    {
        common_name: 'Zebra Plant',
        scientific_name: 'Aphelandra squarrosa',
        image_url: 'https://plantingman.com/wp-content/uploads/2017/03/Zebra-plant.jpg',
        description: 'Zebra house plants have spectacular foliage and exotic looking flowers. The nickname Zebra plant comes from its large, dark green, shiny leaves that have a bold white midrib and white veins. The stems of the leaves have a purple tinge. The bright yellow flowers on a Zebra plant emerge from bracts at the end of a long stem. A Zebra plant, native to the Brazilian forests, is primarily a table plant that stands about a foot tall. These plants do require a little extra care; but this beautiful, out of the ordinary houseplant, is well worth it.',
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 3,
        water: 'daily'
    },
    {
        common_name: 'Norfolk Island Pine',
        scientific_name: 'Araucaria heterophylla',
        image_url: 'https://cdn.shopify.com/s/files/1/0108/5782/products/Norfolk_Island_Pine_1263x.jpg?v=1576158933',
        description: 'Norfolk Island Pines, sometimes simply called Star Pines or Norfolk Pines, are stately symmetrical evergreens that thrive indoors in very bright light. Many people use Norfolk Pines as living Christmas Trees, but be careful not to dry them out with too many lights. Norfolk Pines come small enough to sit on a table and large enough to fill the corner of a large room with tall ceilings. When purchasing a Norfolk Pine as a houseplant be sure that the plant has multiple trunks. This prevents it from looking bare and skinny as it grows taller. Keep in mind, you can’t trim a Norfolk Pine or make it shorter without the tree losing its symmetrical shape.',
        care_level: 'moderate',
        toxicity: 0,
        // light_id: 4,
        water: 'weekly'
    },
    {
        common_name: 'Asparagus Fern',
        scientific_name: 'Asparagus densiflorus',
        image_url: 'https://pics.davesgarden.com/pics/2004/07/07/Myshakall/4f2f69.jpg',
        description: 'Native to South Africa, Asparagus Ferns are not true ferns at all but rather members of the lily family. The name asparagus fern comes from the fact that the new growth resembles tiny asparagus spears. Asparagus sprengeri, a cultivar of asparagus densiflorus is the most popular variety of this plant. Asparagus ferns looks beautiful sitting on a table or hanging in a basket. During the summer these ferns are perfect plants to hang in a sunny spot on your porch. In the proper location, asparagus ferns grow over 2-3ft. wide with cascading trailers 2ft-4ft.in length. The long graceful vines of an asparagus fern are covered in tiny needle-like bright green leaves; an added plus are the small white flowers that eventually turn into red berries. Be careful, hidden in the lush foliage are sharp little thorns that are difficult to see.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Cast Iron Plant',
        scientific_name: 'Aspidistra',
        image_url: 'https://smartgardenguide.com/wp-content/uploads/2020/10/cast-iron-plant-care-aspidistra-elatior-6.jpg',
        description: 'A Cast Iron plant, native to China, is an almost indestructible easy-care plant that survives where other houseplants quickly die. Water it or forget to water it, good light or poor light, warm room or cold room, the Cast Iron plant survives. This is a rather plain plant with 2ft. long, pointed, course textured, leathery leaves that emerge directly from the soil. The variegated varieties of a Cast Iron plant have a cream-colored stripe down each of the leaves that reverts to solid green in very low light.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 2,
        water: 'bi-weekly',
    },
    {
        common_name: 'Begonia',
        scientific_name: 'Begonia',
        image_url: 'https://www.gardeningknowhow.com/wp-content/uploads/2007/05/begonia-1.jpg',
        description: 'Though many consider begonias to be an outdoor plant, they also make excellent indoor plants that may bloom the entire year. Begonia plants originally came from the tropical, moist regions of southern Asia, Africa, South America, and Central America which is why they require such high humidity. There are over 1500 varieties of begonia plants that fall into the categories of  stemmed, rhizomatous, or tuberous. The leaves of some such as the Begonia Rex or the Iron Cross begonia, have extraordinarily colorful foliage. Other varieties, such as the Reiger Begonia, have beautiful flowers. There are some such as the Angel Wing begonia, that have both lovely flowers and outstanding leaves. Begonia plants look great in hanging baskets,  placed on a table, or on a warm windowsill. All begonia plants have asymmetrical leaves, thick succulent stems, and flowers that grow in clusters.',
        care_level: 'difficult',
        toxicity: 1,
        // light_id: 2,
        water: 'weekly',
    },
    {
        common_name: 'Urn Plant',
        scientific_name: 'Aechmea fasciata',
        image_url: 'https://i.pinimg.com/originals/d2/b9/43/d2b94323711988eacd8ea0d48ceb05ad.jpg',
        description: 'Sometimes called a Silver Vase plant, the Urn plant is an easy care flowering plant native to Brazil. In nature, it is an epiphytic plant, which means it grows on other plants or trees. This bromeliad variety has thick, arching, gray-green leaves.These unique leaves are arranged in a circular fashion so that they form an upturned waxy cup in the center. This central cup, or reservoir collects the water and nutrients that the plant needs. After three or four years, as a Bromeliad fasciata matures, the plant produces a tall flower stalk with numerous pink bracts. The real flowers are small blue blooms that grow between the pink bracts. Although the blue flowers quickly die, the bright pink bracts often last 5 or 6 months. When buying a Bromeliad fasciata, avoid purchasing one that already has small blue flowers since this indicates the pink bracts have been visible for a while and may soon fade.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: 'Peacock Plant',
        scientific_name: 'Calathea makoyana',
        image_url: 'https://cdn.shopify.com/s/files/1/0662/5489/products/Calathea_makoyana_-_Peacock_Calathea_-_pistils_nursery-2.jpg?v=1536176486',
        description: 'Calathea plants, native to tropical South and Central America, Africa, and the West Indies, are grown primarily for their beautiful, brightly colored, upright, oval leaves. There are over 300 different types of Calathea plants, many being man-made hybrids created by tissue cultures. The various varieties have leaves with a purple undersides and various vibrant colorful patterns on the top side. Indoors, a Calathea is a table plant or short bush that rarely gets bigger than  24” tall and 24”-26” wide. A Calathea, with its exotic foliage, is difficult to care for, but like many other fussy plants, well worth the effort.',
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 3,
        water: 'daily'
    },
    {
        common_name: 'Parlor Palm',
        scientific_name: 'Chamaedorea elegans',
        image_url: 'https://smartgardenguide.com/wp-content/uploads/2019/05/how-to-care-for-a-parlor-palm-chamaedorea-elegans-12-734x506.jpg',
        description: 'This compact, dark green, indoor palm with long graceful fronds is a fabulous green friend that does well in almost all locations. A Parlor Palm can be small enough to use in a terrarium or tall enough to sit on the floor. In a 6” pot it makes a perfect table plant. When a Parlor Palm is planted in a 10” pot, it can grow up to 4ft. tall. Since these palms require very little care, it is the perfect plant for offices, businesses, and for less than optimal growing conditions in homes.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: 'Areca Palm',
        scientific_name: 'Dypsis lutescens',
        image_url: 'https://cdn.shopify.com/s/files/1/0059/8835/2052/products/Areca-Palm-2-450w_grande.jpg?v=1599029729',
        description: 'The Areca palm, native to Madagascar, is one of the most popular indoor houseplants sold today. Indoors an Areca palm is a medium sized exotic looking plant that can reach a height of 6-8 feet; outdoors it may be as tall as 25 feet. The Areca palm gets its nickname, the Butterfly palm, because its long feathery fronds (leaves) arch upwards off multiple reed- like stems, resembling butterfly wings. Each frond has between 40-60 leaflets on it. When first bought, Areca palms are a delight, inexpensive good-sized plants with beautiful green upright fronds. However, over time, the overall appearance of an Areca palm may diminish; the older bottom fronds turn yellow and the larger fronds droop and bend.',
        care_level: 'moderate',
        toxicity: 0,
        // light_id: 3,
        water: 'twice-weekly'
    },
    {
        common_name: 'Spider Plant',
        scientific_name: 'Chlorophytum comosum',
        image_url: 'https://ae01.alicdn.com/kf/HTB1q5TkbB1D3KVjSZFyq6zuFpXaT.jpg',
        description: 'The graceful, easy care, indoor spider plant, that can also grow outdoors in the shade during the summer, produces leaves directly from the center of the plant. When kept root-bound, a spider plant sends out numerous long stems with baby plants at the ends that can easily be used for propagation. Spider plants are available with green leaves, green leaves trimmed in white, or white leaves trimmed in green. All varieties are easy to care for and fun to have. A spider plant is inexpensive and a great choice for beginning plant lovers; an added plus, spider plants clean the air of harmful toxins.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 2,
        water: 'weekly'
    },
    {
        common_name: 'Cyclamen',
        scientific_name: 'Cyclamen',
        image_url: 'https://assets.eflorist.com/assets/products/PHR_/T91-1A.jpg',
        description: 'There are over 20 species of cyclamen plants native to North Africa and the Mediterranean. The best variety to use as an indoor plant is the cyclamen “persicum”. Cyclamen are compact table plants that produce butterfly-like flowers atop tall upright stems. The flowers come in red, white, pink, and lavender and have a pleasant sweet smell. The distinctive leaves of a cyclamen are heart shaped and marked with a silver design. These relatively small plants, growing only 8”-10” in height, are popular gifts for Thanksgiving, Christmas, and Valentine’s Day. These little gems grow and re-bloom as indoor houseplants for several years.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'twice-weekly'
    },
    {
        common_name: 'Dumb Cane Plant',
        scientific_name: 'Dieffenbachia',
        image_url: 'https://assets.eflorist.com/site/EF-18170/assets/products/PHR_/sku4121713.jpg',
        description: 'Dieffenbachia or Dumb Cane plants, native to the tropics of Mexico and all the way south to Argentina, are relatively easy-care houseplants with large, broad, patterned, oblong leaves. They can be small table plants or 5ft-6ft. trees depending on the variety you select. Dieffenbachias are fast-growing houseplants that tend to get top heavy if not properly pruned.  All parts of a dieffenbachia are extremely poisonous which is how they earned the nickname “dumb cane plant”and should be kept away from pets and children.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 2,
        water: 'weekly'
    },
    {
        common_name: "Marble Queen Pothos",
        scientific_name: 'Epipremnum aureum',
        image_url: 'https://i.pinimg.com/originals/88/ed/4b/88ed4be3648c057921fcbdec9fca8a1b.jpg',
        description: 'The marble queen pothos is a popular plant in the hardy pothos family. All members of this group have glossy, heart-shaped, leathery leaves but in different colors. The golden pothos is yellow and green, the jade pothos is solid green, and the marble queen pothos is green and white. The marble queen pothos, with its long cascading vines makes a beautiful table or hanging plant. This plant, sometimes referred to as devil’s ivy, can be trained to grow on a pole or trellis.  All pothos plants are efficient in cleaning the air of harmful chemicals.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 2,
        water: 'weekly'
    },
    {
        common_name: 'Rubber Tree Plant',
        scientific_name: 'Ficus elastica',
        image_url: 'https://cdn.shopify.com/s/files/1/0551/6489/products/Ficus-elastica-150cm_578x.png?v=1540517740',
        description: 'A Ficus elastica or Rubber tree plant, originated in India and Malaysia and was once grown for the rubber produced from its sap; today they are very popular indoor house plants. A rubber tree usually has 5”-12” large, thick, glossy leaves. Once damaged, the leaves cannot be trimmed and should be cut off. These plants can be used as a small plant for the table, a full lush bush on the floor, or a ten- foot specimen tree in a room with tall ceilings. Like a ficus benjamin, a rubber tree doesn’t like to be moved and prefers constant temperatures. There are several varieties you can purchase: burgundy rubber trees have reddish leaves, the tricolor has grayish- green leaves with splashes of pink and cream, and the doescheri has green leaves with splashes of pale yellow or creamy white.',
        care_level: 'moderate',
        toxicity: 1,
        // light_id: 3,
        water: 'monthly'
    },
    {
        common_name: 'Amaryllis',
        scientific_name: 'Hippeastrum',
        image_url: 'https://static.onecms.io/wp-content/uploads/sites/37/2018/03/15233600/101692437.jpg',
        description: 'Amaryllis plants are native to the tropical regions of South America. These spectacular easy care bulb plants can be planted from October through the end of April and will bloom from late December to June. With proper after-bloom care, an Amaryllis plant flowers year after year. Amaryllis Bulbs can be purchased pre-planted or you can do the planting yourself. The larger and fatter the plant bulbs, the more flowers an Amaryllis produces. The brightly colored flowers  come in red, orange, white, pink, and salmon. Some new varieties even have striped flowers.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Wax Plant',
        scientific_name: "Hoya Carnosa",
        image_url: 'https://www.guide-to-houseplants.com/images/wax-plant2.jpg',
        description: 'There are over 200 species of the easy to grow, almost indestructible hoya plant. Hoya plants are often referred to as Wax plants because of the waxy nature of their leaves and flowers. They have long trailing vines that often intertwine. Under the proper conditions, hoya plants produce five-pointed, star shaped, fragrant flowers in red, white, pink, purple, yellow, orange, and even black. These semi- succulent green gems are perfect to hang in front of a bright sunny window. Even a plant novice will be successful growing a hoya plant if they are careful not to over-water.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: 'Sensitive Plant',
        scientific_name: 'Mimosa pudica',
        image_url: 'https://i.pinimg.com/736x/df/98/cc/df98cc0bc5aa7359cd2bde89d25d4836.jpg',
        description: 'The Mimosa species of plants began as a creeping annual plant in Central and South America and is still often used as a ground cover. The Mimosa pudica or Sensitive Plant is the variety most often grown as a houseplant. The Sensitive Plant has prickly delicate branches and feathery fronds that fold inward and droop when they are touched, shaken, or even blown on; these are called seismonic movements. The leaflets of a Sensitive Plant reopen in about half hour but fold up naturally each night. Although fun to watch, the opening and closing of the leaves weakens a Sensitive Plant if it occurs too often. Mimosa Pudica may produce tiny pink flowers that resemble little fluffy balls, but this occurs more often when it is planted outdoors than indoors.',
        care_level: 'moderate',
        toxicity: 1,
        // light_id: 4,
        water: 'bi-weekly'
    },
    {
        common_name: 'Boston Fern',
        scientific_name: 'Nephrolepis exaltata',
        image_url: 'https://nestreeo.com/wp-content/uploads/2020/05/Boston-Fern-3.jpg',
        description: 'Boston Ferns are native to tropical forests and swamp areas around the world. These ferns are especially prevalent in Florida, Mexico, Africa, Central and South America, and Polynesia. The wide- spreading Boston Fern with beautiful arching fronds does best in hanging baskets. The fronds or leaves can be 2-3 feet long and 4-6 inches wide. Each frond has small leaflets (pinnae) on either side of a midrib, and the leaflets have slightly serrated edges. A Boston Fern does a great job removing formaldehyde from the air.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 3,
        water: 'twice-weekly'
    },
    {
        common_name: 'Moth Orchid',
        scientific_name: 'Phalaenopsis',
        image_url: 'https://images-na.ssl-images-amazon.com/images/I/71TbciYkF3L._AC_SX679_.jpg',
        description: 'Orchid plants are one of the largest plant species in the world with over 20,000 different varieties. They are long-lived, and with proper care, bloom again and again for many years. The flowers of an orchid plant may be yellow, white, pink, lavender, spotted, or striped. These plants are a beautiful, inexpensive replacement for a cut flower arrangement or just an added delight for any room in your home or office. The Phalaenopsis or Moth Orchid is one of the best and most available varieties. The flowers of a Phalaenopsis plant open off  long arching spikes and often last 2-3 months.',
        care_level: 'moderate',
        toxicity: 0,
        // light_id: 2,
        water: 'weekly'
    },
    {
        common_name: 'Boat Orchids',
        scientific_name: 'Cymbidium',
        image_url: 'https://i.pinimg.com/originals/2d/59/9e/2d599e22dabf14475fb794affae17ef0.jpg',
        description: 'Cymbidium orchid plants, or Boat orchids, are among the most attractive, popular, and long lasting orchid plants available throughout the world.  The name Cymbidium comes from the greek word Kumbos which means cavity and refers to the shape of the base of the lip of the flower. These plants have long, thin, grass – like leaves. Sturdy stems or spikes emerge from the leaves of the plant and each spike produces 15-30 beautiful waxy- looking orchid flowers. There are over 52 varieties of Cymbidiums, each with a different color and pattern to their flowers. Cymbidium blooms, which often last for months, come in yellow, red, pink, orange, light green, yellowish green, white, cream, and even brown. These plants have the added advantage of being able to bloom during the winter when other orchids cannot. Although Cymbidium orchid plants require a little extra care, their beautiful flowers make it all worthwhile.',
        care_level: 'moderate',
        toxicity: 0,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Baby Rubberplant',
        scientific_name: 'Peperomia Obtusifolia',
        image_url: 'https://uaelandscapes.com/wp-content/uploads/2020/06/Peperomia-obtusifolia-Baby-Rubber-Plant3.jpg?v=1593184611',
        description: 'There are over 1000 varieties of peperomia plants and most are native to Central and South America. All peperomia plants, which belong to the Pepper Family, are semi- succulents with very similar care requirements. The leaves, thick and plump, rippled, smooth, or shiny, can be various shades of green, red, gray, and cream. The pattern on the leaves may be marbled, striped, or a solid color. Peperomia plant flowers are tiny and inconsequential, growing in clusters on upright conical spikes. When small, peperomia houseplants can be used in dish gardens and terrariums. Indoors, mature peperomia plants never grow taller than 12”-18″ and are ideal for tables. Some varieties make excellent hanging plants. The most popular peperomias used as indoor house plants are the caperata and the obtusifolia varieties.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Heartleaf Philodendron',
        scientific_name: 'Philodendron hederaceum',
        image_url: 'https://i.etsystatic.com/10494852/r/il/2246fa/2047003105/il_570xN.2047003105_jmbu.jpg',
        description: 'There are over 200 different varieties of philodendron plants that come in different sizes, colors, and leaf shapes. The heartleaf or sweetheart philodendron has dark green, shiny, heart-shaped leaves and looks great as a table or hanging plant. Heartleaf philodendrons are some of the most popular plants we use in homes and offices; they thrive on neglect and are almost impossible to kill. Another great plus, philodendron plants remove air-born toxins such as formaldehyde from the air.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 2,
        water: 'weekly'
    },
    {
        common_name: 'Prayer Plant',
        scientific_name: 'Maranta leuconeura',
        image_url: 'https://cdn.apartmenttherapy.info/image/upload/v1591488413/gen-workflow/product-listing/redprayerplantamz.jpg',
        description: 'The Prayer plant, native to Brazil. Asia, and Africa, is a very unique plant. The large, patterned leaves with hues of red, green, brown, and cream, lift up and fold together each evening as though praying and open again the next morning. Although the flowers of a Prayer plant are small and insignificant, the patches of color on the leaves get darker and more vibrant as the plant matures. Some interesting varieties include the Rabbits Tracks and Herringbone.  A Prayer plant requires a warm humid environment in order to grow well.',
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 3,
        water: 'twice-weekly'
    },
    {
        common_name: 'Split Leaf Philodendron',
        scientific_name: 'Monstera deliciosa',
        image_url: 'https://i.pinimg.com/originals/6f/61/70/6f617056877b781439b739aac2382ced.jpg',
        description: 'The Split Leaf Philodendron, also called monstera deliciosa or  swiss cheese plant, is a large, popular, easy- care houseplant that is not really in the philodendron family. There is a great deal of confusion about what to call this plant; the various names have become inter-changeable over the years such as: windowleaf plant, ceriman, and Mexican breadfruit plant. These plants are native to the jungles of Mexico, Panama, and India, have big glossy heart-shaped leaves that, as the plant matures, split from the leaf edge to the center vein. These slits in the leaves are called cuts. A split leaf philodendron  grows rapidly and often has leaves that are up to 3ft. long and 2ft. wide. If you want a big, tropical, low maintenance plant, this one is perfect. The leaves, stems, and roots of a split leaf philodendron contain oxalic acid. The only part of the plant that is not poisonous is the delicious fruit it produces in nature.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: ,
        water: 'weekly'
    },
    {
        common_name: 'Snake Plant',
        scientific_name: 'Sansevieria trifasciata',
        image_url: 'https://naturerabbit.in/wp-content/uploads/2018/08/Nature-Rabbit-Sansevieria-Black-Gold-Snake-plant.jpg',
        description: 'A Sansevieria Plant, originally from South Africa, is another hardy almost impossible to kill houseplant that thrives on neglect. Sansevieria plants, also called a Snake plant and Mother in Law’s Tongue plant, can be used as table plants or, when taller, stately floor plants. Certain varieties such as the “Trifasciata” have long, thick, stiff, upright leaves that can reach 4ft. in length while other varieties, such as the Hahni, have very short compact leaves that are only 4”. NASA  lists the Sansiviera plant as an excellent clean air plant.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 2,
        water: 'monthly'
    },
    {
        common_name: 'Arboricola',
        scientific_name: 'Schefflera arboricola',
        image_url: 'https://www.plantvine.com/plants/Schefflera-Amate-Large.jpg',
        description: 'An Arboricola, or Hawaiian Schefflera, originally came from Taiwan and, when grown as an outdoor plant, even flowers. Hawaiian Schefflera plants can be as large as 8ft specimen trees and some have beautiful braided trunks. This plant can also be as small as 5″ and be used in a dish garden. Hawaiian Schefflera plants are great table or floor plants for home or office as well as excellent plants if you want to try your hand at creating a bonsai plant. These are full upright houseplants with masses of small shiny leathery leaves. The Hawaiian Schefflera “Capella” has gold and green leaves while the Hawaiian Schefflera “Tribute” has white and green leaves.',
        care_level: 'average',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Gloxina',
        scientific_name: 'Sinningia speciosa',
        image_url: 'https://www.po.flowerscanadagrowers.com/uploads/2011/10/6245_50.jpg',
        description: 'A perennial bulb, and relative of African violets, gloxina is often grown as a potted houseplant that can be taken outside in the summer.  They have ovate velvety green leaves that form a basal rosette.  They need bright indoor light with no direct sunlight and constant moisture.  It will bloom in the spring after which cut the leaves back to the first two leaves to encourage a second bloom. ',
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 1,
        water: 'weekly'
    },
    {
        common_name: 'Peace Lily',
        scientific_name: 'Spathiphyllum',
        image_url: 'https://i.etsystatic.com/15265690/r/il/9c7e6c/1211862072/il_570xN.1211862072_3kuo.jpg',
        description: 'Peace Lily plants are beautiful indoor houseplants with large, glossy, oval, dark green leaves and impressive white “spathes” (flowers) that last for weeks. Spathes may be green which reminds us that they are really modified leaves. A Peace Lily or Spathiphyllum originated in tropical forests around the world where it grew close to the forest floor in the shade of the larger plants. This helps explain why Peace Lily plants are one of very few indoor plants that can bloom even in medium to low light. NASA lists the Peace Lily as one of the best plants to clean the air of harmful toxins such as benzene, formaldehyde, and carbon monoxide.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 1,
        water: 'weekly'
    },
    {
        common_name: 'Madagascar Jasmine',
        scientific_name: 'Stephanotis floribunda',
        image_url: 'https://media.sciencephoto.com/image/b8361860/800wm',
        description: 'Stephanotis floribunda, or Madagascar Jasmine, is an evergreen woody vine commonly grown as a houseplant. It is a climber that can grow to more than 20 feet with glossy, leathery oval leaves and clusters of pure white, waxy, intensely fragrant tubular flowers.',
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 4,
        water: 'twice-weekly'
    },
    {
        common_name: 'Cape Primrose',
        scientific_name: 'Streptocarpus',
        image_url: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/3/e/e/3/16099.Jpg',
        description: " Streptocarpus aren’t primrose at all, but gesneriads (African violet cousins). They will bloom heavily year-round and can be quite spectacular. They are great for windows, or in artificial light. Unlike violets, each leaf of a streptocarpus will produce 8-10 or more bloom stalks, sequentially, so that plants tend to stay in heavy bloom for long periods of time,",
        care_level: 'average',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Wandering Jew',
        scientific_name: 'Tradescantia zebrina',
        image_url: 'https://assets.eflorist.com/site/EF-7620/assets/products/PHR_/sku6462268.jpg',
        description: 'Wandering Jew plants are fast growing, easy- care plants that are perfect to hang in front of a window that gets bright indirect light. The zebrina variety has long vines covered in small stemless leaves about 2” in length. The colorful patterned leaves are green with purple stripes and a silver shine. The underside of the leaf is a deep purple or magenta color. There are other varieties of Wandering Jew plants that have pink, off -white, or a bronze stripe in their leaves. The “fluminensis” Wandering Jew plant has small, solid green leaves and white flowers while the “palida” variety has purple leaves with white, purple, or pink flowers. Wandering Jew plants, native to South America and Mexico, are commonly used in the Tabasco region of Mexico to make a cold herbal tea called Matali.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Chinese money Plant',
        scientific_name: 'Pilea peperomioides',
        image_url: 'https://s7d1.scene7.com/is/image/terrain/46197901_000_a?$zoom2$',
        description: 'Having a superficial resemblance to pennyworts and growing 30 cm (12 in) tall and wide, it is an erect, evergreen perennial, with round, dark green, peltate leaves up to 10 cm in diameter on a long petiole. The stem axis is greenish to dark brown, usually simple, often upright straight, slightly lignified at the base. In poor growing conditions, the plants lose their leaves in the lower part of the branch axis and thereby assume a very distinctive habit. The plants are completely hairless. Striking are their large, circular, shiny, leaves, which can have a diameter of over 15 centimeters.',
        care_level: 'average',
        toxicity: 0,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Satin Pothos',
        scientific_name: 'Scindapsus pictus',
        image_url: 'https://www.whiteflowerfarm.com/mas_assets/cache/image/4/a/5/5/19029.Jpg',
        description: "The Satin Pothos (Scindapsus pictus) is native to Southeast Asia and has the reputation of being one of the easiest houseplants to keep alive. It is known for its heart-shaped leaves, splashed with spots of iridescent gray, and fast-growing trailing vines. This Pothos is not actually a Pothos plant – although it looks extremely similar! That's just its common name. Instead it is a variety of Scindapsus pictus. They are different genera but within the same family.",
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Yucca',
        scientific_name: 'Yucca Elephantipes',
        image_url: 'https://exoticplantsouq.ae/wp-content/uploads/2020/05/yucca-indoor-indoor-plant-2.jpg',
        description: 'The spineless yucca plant, a native of Guatemala and southeast Mexico, is an ideal easy care houseplant. Yucca plants can be a bush or a stalk plant.  The long, leathery, pointed leaves of a yucca plant are a foot or more in length and about an inch wide. Yucca Plants are very top heavy and should always be set into a heavy clay or ceramic pot to prevent them from toppling over. A yucca is a plant that complements a Southwestern look in your home or office.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: 'Aloe vera',
        scientific_name: 'Aloe vera',
        image_url: 'https://s7d1.scene7.com/is/image/terrain/53770426_000_a?$zoom2$',
        description: 'An Aloe Vera plant is an easy care, drought resistant succulent that can be grown indoors or outdoors. Medicine Plant is its nickname because the sap from its leaves soothes minor skin irritations and burns; this makes it a  great plant for a sunny kitchen. An Aloe Vera plant has long, narrow, plump leaves with little spikes along the edges so be very careful when handling it. It can be used as a table plant when small or a floor plant as it matures.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: 'Prickly Pear',
        scientific_name: 'Opuntia',
        image_url: 'https://cdn.webshopapp.com/shops/30495/files/337923472/cactus-opuntia-in-decorative-pot.jpg',
        description: 'Prickly pears are a subgroup of Opuntia, identified by their wide, flat, branching pads, and are often called nopal cactus or paddle cactus. Most varieties have a combination of detachable spines and tufts of barbed bristles (glochids) that can cause significant allergic skin reactions. There are also spineless varieties like O. ellisiana and others. The pads, flowers and fruit of most varieties are edible after careful cleaning. Most prickly pear plants are found in warm, dry climates like the Southwest, although there are some cold-hardy varieties such as the Eastern prickly pear (O. humifusa). As the plants prepare for winter, pads may begin to look shriveled and wilted, but they will green up quickly in spring.',
        care_level: 'average',
        toxicity: 1,
        // light_id: 4,
        water: 'bi-weekly'
    },
    {
        common_name: 'Christmas Cactus',
        scientific_name: 'Zygocactus',
        image_url: 'https://i.pinimg.com/originals/ee/7d/4e/ee7d4e499c859accd2427e37a59dbb10.jpg',
        description: 'Christmas cactus plants, Schlumbergera bridgesii, native to central and South America, are one of the most popular houseplants sold during the holiday season. Christmas cactus are epiphytes in their native environment. Epiphytes are plants that grow on other plants and trees. Whether used as a table or hanging plant, a Christmas cactus produces beautiful tubular flowers in white, pink, red, yellow, salmon, and fuchsia during late November and December. The leaves are small, flat, and smooth with scalloped edges. There is a Thanksgiving cactus  (Zygocactus truncates) and an Easter cactus (Rhipsalidopsis gaertneri). Each of these plants blooms around a specific holiday. A Christmas cactus is an easy care, flowering plant that can live for 100 years, being passed on from generation to generation. With each passing year, a Christmas cactus gets bigger and more impressive.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: 'Moon Cactus',
        scientific_name: 'Gymnocalycium mihanovichii',
        image_url: 'https://img.plantsam.com/wp-content/uploads/2014/06/Gymnocalycium-mihanovichii.jpg',
        description: 'This cute “mutant” cactus is actually a combination of two cacti, typically Gymnocalycium (the sicon) and a rootstock cactus, such as Hylocereus. The term “moon cactus” typically refers to the yellow and orange varieties, however red varieties can be included.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 2,
        water: 'bi-weekly'
    },
    {
        common_name: 'Jade Plant',
        scientific_name: 'Crassula ovata',
        image_url: 'https://cdn11.bigcommerce.com/s-x68mczjd0x/images/stencil/1280x1280/products/840/782/CRASSULAOVATA1GRULER__11234.1560536907.jpg?c=2',
        description: 'A Jade plant, sometimes called a Friendship plant, Lucky plant, or Money Tree plant, is a green friend that just won’t die! It’s a perfect table plant or short bushy floor plant for a sunny hot location. Jade plants are succulent houseplants with numerous thick, leathery, green leaves growing in clumps on thick stems. Some jade plant varieties develop red edges on their leaves when exposed to bright sunlight. A jade plant is native to the dry hills of South Africa, so it is very drought resistant. This compact sturdy plant produces tiny pink or white star-shaped flowers, not in the summer like most plants, but around Christmas. Jade plants are one of the easiest houseplants to propagate either by stem cuttings or by stray leaves that fall into the soil.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: 'Echeveria',
        scientific_name: 'Echeveria',
        image_url: 'https://i.ytimg.com/vi/TOkJwbT_S_E/maxresdefault.jpg',
        description: 'Echeveria is a family of rose-shaped succulents native to the semi-desert regions of Central America. Because of its charming leaves structure, Echeverias are one of the most well-known succulents. There are plenty of types with different gorgeous colors when it comes to Echeverias. Same like other succulents, they are super easy to grow and take care of.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 4,
        water: 'bi-weekly'
    },
    {
        common_name: 'English Ivy',
        scientific_name: 'Hedera helix',
        image_url: 'https://m.media-amazon.com/images/I/817b6nMTqhL._AC_SY450_.jpg',
        description: 'English Ivy plants, native to North America, Europe, and Asia, can be found in over 100 different sizes, colors, and leaf shapes. Whether you want a plant to place on a table, hang from the ceiling, sit in a wall sconce, or train as a topiary there is an English Ivy plant for you. Some of my favorites are: California Ivy, Asterick Ivy, Kolibri Ivy, Algerian Ivy, Gold Child Ivy, and Needlepoint Ivy. NASA has determined that English Ivy plants are excellent Clean Air Plants and can absorb air-born toxins such as formaldehyde, carbon monoxide, and especially benzene.',
        care_level: 'average',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: 'Strawberry Begonia',
        scientific_name: 'Saxifraga Stolonifera',
        image_url: 'https://img.plantsam.com/wp-content/uploads/2016/04/Saxifraga-stolonifera.jpg',
        description: 'The Strawberry Begonia plant, or Strawberry Geranium as it is sometimes called, is neither a begonia nor a geranium, but rather a member of the Saxifrage family. It does have bluish-green, fuzzy leaves like those of a begonia and it does spread by sending out “stolen” or “runners” like a strawberry plant; but a Strawberry Begonia is really an evergreen native to Asia and a close relative of the Piggyback plant. A Strawberry Begonia produces a lovely, white flower with pointed petals and a bright, yellow center. Like a strawberry plant, new babies develop at the ends of each of the “stolen.” Indoors or on your porch a Strawberry Begonia makes a beautiful hanging plant. Outdoors it can also be an excellent ground cover in your garden.',
        care_level: 'average',
        toxicity: 0,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: "Azalea",
        scientific_name: "Rhododendron",
        image_url: 'https://www.avasflowers.net/img/prod_img/avasflowers-pretty-potted-pink-azalea-planter.jpg',
        description: 'Azaleas, the national flower of Nepal, are part of an ancient group of plants dating back million of years. They are related to rhododendrons and blueberries and are descendents of Asian shrubs. Azaleas can also be used as a centerpiece for weddings or to replace expensive cut flower arrangements in your home or office. These plants have terminal blooms which means the entire plant flowers at one time, making a beautiful display. Since florist azalea plants are different than outdoor azalea plants, indoor azaleas rarely do well planted in your garden.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'twice-weekly'
    },
    {
        common_name: "Baby's Tear's Plant",
        scientific_name: "Soleirolia",
        image_url: 'https://www.gardenloversclub.com/wp-content/uploads/2019/09/babys-tears-in-pot.jpg',
        description: "Baby's tears is a mat-forming tropical perennial that makes for an eye-catching specimen for indoor terrariums and hanging baskets. What makes baby's tears plants so special are the myriad tiny leaves, which form a dense mat suggestive of a gnome's green paradise. Although baby's tears plants are easy for beginners, they require regular attention to look their best.",
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 3,
        water: 'twice-weekly'
    },
    {
        common_name: "Bird of Paradise",
        scientific_name: "Strelitzia",
        image_url: 'https://img.crocdn.co.uk/images/products2/pl/20/00/03/35/pl2000033579_card3_lg.jpg',
        description: 'An indoor Bird of Paradise is a slow growing plant with large paddle- shaped leaves that resemble those of a banana plant. Even indoors, a Bird of Paradise plant can easily reach a height of 6ft-7ft. This plant produces multiple large, leathery leaves sometimes 3ft or more in length. After 4 or 5 years, an indoor Bird of Paradise (Strelitzia Reginae) may, on rare occasions, produce an exotic orange/red flower that resembles the head of a crane. The Strelitzia Nicolai or White Bird of Paradise produces a blue/white version of this flower. Flower production is much more frequent when a Bird of Paradise is used as an outdoor plant.',
        care_level: 'difficult',
        toxicity: 1,
        // light_id: 4,
        water: 'weekly'
    },
    {
        common_name: "Bleeding-Heart Vine",
        scientific_name: "Clerodendrum thomsoniae",
        image_url: 'https://cdn.shopify.com/s/files/1/0067/9346/1858/products/IMG_8661_740x.jpg?v=1603962309',
        description: 'A Bleeding Heart Vine Plant, native to tropical west Africa, is grown for its masses of beautiful bi-colored flowers. Each flower on a Bleeding Heart Vine is made up of a corolla or inner group of bright red petals that emerge from a white calyx or outer part of the flower. The Bleeding Heart Vine’s nickname, the “Bag Plant” refers to the shape of the outer white petals. When planted in a container, a Bleeding Heart Vine can grow up to 3 feet in length, outside in tropical areas, it often reaches 15 feet. A Bleeding Heart Vine has twining stems with large attractive dark green leaves. You can place a trellis in your container to help a Bleeding Heart Vine grow tall or place it on a shelf or in a hanging basket.',
        care_level: 'average',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: "Guzmania",
        scientific_name: "Guzmania",
        image_url: 'https://cdn.shopify.com/s/files/1/1941/1701/products/Bromeliad_Guzmania_500x.jpg?v=1594132742',
        description: 'Guzmania bromeliads are wonderfully stunning tabletop plants. They feature long, narrow, shiny green leaves that arise from a deep central cup. The plants are somewhat taller than many bromeliads. Their large and showy flower bracts arise in the summer in an amazing array of colors. Guzmania are not difficult bromeliads to grow, and they will reward you with many weeks of color with little or no effort.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 2,
        water: 'bi-weekly'
    },
    {
        common_name: "Calla Lily",
        scientific_name: "Zantedeschia aethiopica",
        image_url: 'https://i.pinimg.com/originals/85/39/fe/8539fe6078addc2f637fadfdbe278cfb.jpg',
        description: 'The Calla Lily is a beautiful plant whether grown outdoors or indoors in a decorative pot by a sunny window. This elegant plant, native to the marshes of South Africa, is not really a lily at all but a member of the Araceae family. The extraordinary funnel or trumpet shaped waxy flowers of a Calla Lily, grow on tall thick stems and have a yellow spadix emerging from their center. The long tapered green leaves of the plant may be streaked with faint white or yellow spots. Today, thanks to the many new hybrids developed by breeders throughout the world, Calla Lilies can be found not only in white, but also pink, orange, fuchsia, red, yellow, and cream. The long lasting flowers are popular in wedding bouquets where they are a symbol of purity and beauty.',
        care_level: 'average',
        toxicity: 1,
        // light_id: 3,
        water: 'daily'
    },
    {
        common_name: "Cat Palm",
        scientific_name: "Chamaedorea cataractarum",
        image_url: 'https://mcnamaraflorist.imgix.net/images/itemVariation/cat-palm-20032472405.jpg?auto=format&w=375&h=450&fit=crop',
        description: 'The Cat Palm, also called the Cascade or Cataract Palm, is native to southeastern Mexico and resembles the inexpensive Areca Palm and the very pricey Kentia Palm. Indoors the plant grows slowly, eventually reaching a height of 4-6ft. Although this plant looks beautiful in the plant nursery, it often deteriorates once you bring it home. It requires a very tropical environment, bright indirect light, and plenty of water. This is a very attractive plant that produces glossy, dark green leaves on thin shoots, but it is a challenging plant that needs attention.',
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: "Chrysanthemums",
        scientific_name: "Chrysanthemums",
        image_url: 'https://plantingman.com/wp-content/uploads/2017/02/Chrysantheium-plant.jpg',
        description: 'A Chrysanthemum is really an outdoor plant that has become a popular floral gift and flowering plant for home and office. It is second only to the rose as the most popular cut flower in the world. Mums are members of the Asteraceae Family which includes over 20,000 flowering species. Chrysanthemums were brought to Japan by Buddhist Monks in 400 AD and have remained a very important part of Japanese culture to this day. Mums last 3-4 weeks indoors with very little care and in almost any environment before needing to be replaced. The blooms which come in various shapes and colors can be daisy-like, pom-poms, or buttons, and may be yellow, burgundy, pink, or white. NASA has listed the Chrysanthemum as a plant that cleans the air of benzene, formaldehyde, and carbon monoxide. You may also enjoy sipping Chrysanthemum tea to relax.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: ,
        water: 'weekly'
    },
    {
        common_name: "Cineraria",
        scientific_name: "Pericallis Cruenta",
        image_url: 'https://media.bunnings.co.nz/Product-384x384/3f79f18b-c2ee-4ac9-a901-3d084a040a37.jpg',
        description: 'Cineraria plants are beautiful small flowering plants that are available for purchase during the late winter and early spring. The compact Cineraria plant has tight bunches of petite daisy like flowers surrounded by large dark green leaves. Cineraria flowers can be red, white, blue, or purple. Each Cineraria flower has an “eye” in the middle surrounded by a small white ring. Cineraria plants reach a maximum height of 15-20 inches. Cineraria plants are very fragile perennial plants so they are mostly used as outdoor annuals or indoor gift plants that bloom for only about a month. Once the flowers of a Cineraria plant die, it’s time to throw it out or plant it outside. Be sure that there are plenty of  buds when you purchase a Cineraria plant so it can bloom for as long as possible.',
        care_level: 'difficult',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: "Kaffir Lily",
        scientific_name: "Clivia miniata",
        image_url: 'https://i.pinimg.com/originals/73/7d/5a/737d5a88db590b7acfc4687de326b8cc.jpg',
        description: 'Clivia plants, close relatives of Amaryllis plants, are easy- care almost indestructible flowering plants from South Africa. Named after a Duchess belonging to the Clive family, Clivias have long, thick, dark-green arching leaves growing out of a large plant bulb. The trumpet or lily- shaped flowers are 2″-3″ in size and can be orange, orange/red, yellow, or cream colored. Clivia flowers appear as a dense cluster of 15-20 small blooms at the end of a long stem. Clivia plants bloom for about 4 weeks during the late spring and early summer when the weather is warm and the days are long. Clivias are large plants that can grow 2-3 feet tall and almost as wide. Planting a Clivia in a heavy clay or ceramic pot prevents it from tipping over. The older a Clivia plant gets the more beautiful it becomes',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: "Coleus",
        scientific_name: "Solenostemon",
        image_url: 'https://c8.alamy.com/comp/XBA9TH/two-coleus-in-flowerpots-solenostemon-scutellarioides-XBA9TH.jpg',
        description: 'Coleus is a fast- growing, hanging houseplant that comes in over 100 different leaf colors, textures, shapes, & designs. It is a member of the mint family. These plants were very popular during the Victorian era but fell out of favor for a while because of the poor plant quality being sold. Today a coleus plant is once again very popular both as an indoor and as an outdoor plant. The colors on the leaves may be a mixture of lavender, cream, pink, maroon, yellow, red, bronze, and various shades of green. The color patterns can be marbled, stripped, or dappled. If you have a very bright area in your home that calls for a hanging plant, then a coleus is perfect for you.',
        care_level: 'average',
        toxicity: 0,
        // light_id: 4,
        water: 'twice-weekly'
    },
    {
        common_name: "Brazilian Snow Plant ",
        scientific_name: "Ctenanthe Lubbersiana",
        image_url: 'https://plantingman.com/wp-content/uploads/2019/05/Ctenanthe-lubbersiana-%E2%80%98Golden-mosaic%E2%80%99.jpg',
        description: 'Ctenanthe, native to tropical Brazil, is a member of the Marantaceae family and is related to the calathea and prayer plant. These evergreen perennials are grown primarily for the beauty of their colorful leaves. C. lubbersiana reaches a height of about 18 inches and has green and yellow patterned elliptical leaves with pale green undersides. A Ctenanthe is not an easy care plant and can be quite frustrating for a novice plant grower.',
        care_level: 'difficult',
        toxicity: 1,
        // light_id: 3,
        water: 'daily'
    },
    {
        common_name: "Desert Rose",
        scientific_name: "Adenium obesum",
        image_url: 'https://5.imimg.com/data5/TM/HJ/MY-38022806/adenium-desert-rose-plant-500x500.jpg',
        description: 'A Desert Rose plant is a unique looking succulent native to the semi-arid regions of Arabia and the eastern and western parts of Africa. This plant is a type of caudiciform or “fat plant” because of its thick bulbous base. When grown indoors, a desert rose can be 2ft-5ft tall and 1ft-3 ft wide. Desert rose plants have beautiful flowers and sparse small leaves. The 1″-2″ saucer shaped blooms are quite a conversation piece and can be red, pink, or white. The fat, bulbous trunk is partially or completely buried in the soil. This is one of my favorite indoor flowering plants because it is so unusual and thrives on neglect.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: "Donkey's Tail",
        scientific_name: "Sedum Morganianum",
        image_url: 'https://i.pinimg.com/originals/8e/9c/56/8e9c568a9e41081966e4cf569f6b7ef1.jpg',
        description: 'A Donkey’s Tail plant (Sedum Morganianum), sometimes called Burro’s Tail plant, is an easy-care Succulent Plant native to Mexico. This very attractive and unique looking plant has long hanging stems covered in thick heavy blue-green leaves that overlap like the hair on a donkey’s tail. A Donkey’s Tail plant is very fragile and the leaves easily fall off if the plant is disturbed. These plants do well in hanging baskets where stems have lots of room to cascade down & no one can bump into it. Under the right conditions, a Donkey’s Tail plant may produce star-shaped flowers in pink, red, or lavender during the spring and summer.',
        care_level: 'easy',
        toxicity: 0,
        // light_id: 4,
        water: 'bi-weekly'
    },
    {
        common_name: "Emerald Gem",
        scientific_name: "Homalomena",
        image_url: 'https://i.pinimg.com/474x/d9/57/90/d95790293bfd204b5ee94578c59b1147.jpg',
        description: 'An Emerald Gem plant or Homalomena, native to tropical Asia and South America, is an upright plant with dark green, waxy, spade-shaped leaves. Since these plants are usually about 12″-30″ tall, it makes them ideal for areas with height restrictions. Although an Emerald Gem plant is a relative of the easy-care philodendron, it is a bit more finicky and requires more attention. However, if you are tired of the same old houseplants, an Emerald Gem plant makes a nice addition to your plant collection.',
        care_level: 'difficult',
        toxicity: 0,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: "Paperplant",
        scientific_name: "Fatsia Japonica",
        image_url: 'https://cdn.shopify.com/s/files/1/0253/6701/9565/products/Fatsia-Japonica-Camoflauge-11_1000x1000.jpg?v=1606044970',
        description: 'The fatsia japonica plant, or Japanese aralia, originated in the sub-tropic forests of Japan, Korea, & Taiwan. Fatsia plants are a type of evergreen plant that can be grown both indoors as a houseplant and outdoors in frost-free areas. A fatsia plant has shiny, leathery, medium green palmate (hand-shaped) leaves that grow at the ends of stiff stems. Fatsia plants are compact upright plants that can grow up to 6ft. tall even indoors. Prune a fatsia aggressively to help keep the growth under control and the shape attractive.',
        care_level: 'average',
        toxicity: 0,
        // light_id: 3,
        water: 'weekly'
    },
    {
        common_name: "Fiddle leaf fig",
        scientific_name: "Ficus lyrata",
        image_url: 'https://i.pinimg.com/originals/5e/38/79/5e3879e4af262bbd7c5658485fb20e61.jpg',
        description: 'A Ficus Lyrata, or as it’s commonly called a Fiddle Leaf Fig plant, has large wide leathery leaves that resemble a violin or fiddle. These dark green, hard leaves are over a foot long  and grow on woody stems. The Ficus Lyrata, native to Australia, Melanesia, and Southern Asia, is one of the easier ficus trees to care for. It can be small enough to use as a table plant or large enough to be used as an indoor tree.',
        care_level: 'average',
        toxicity: 1,
        // light_id: 3,
        water: 'bi-weekly'
    },
    {
        common_name: "Lucky Bamboo",
        scientific_name: "Dracaena sanderiana",
        image_url: 'https://www.trees.com/sites/default/files/field/image/Lucky-Bamboo-Tree_0.jpg',
        description: 'A Lucky Bamboo plant is really made up of the cut stalks of a Dracaena Sanderiana and is native to West Africa and Eastern Asia. The Lucky Bamboo stalks are usually between 4″- 24″in height. Followers of Feng Shui believe that the Lucky Bamboo plant brings prosperity and good fortune to a home or business. If the Lucky Bamboo arrangement has three stalks it brings happiness, five stalks bring wealth, and six stalks bring health. Four stalks are never allowed  since the word four in Chinese sounds too close to the Chinese word for death. If you buy Lucky Bamboo stalks loose and not planted, be sure to keep them in water until you have permanently placed them in a vase or decorative container. If you purchase multiple Lucky Bamboo stems that are tied together, do not remove the ties, this stabilizes the plant. Lucky Bamboo plants require very little care and grow practically anywhere as long as you keep the water clean and chemical free.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 2,
        water: 'monthly'
    },
    {
        common_name: "Moses in the cradle",
        scientific_name: "Tradescantia spathacea",
        image_url: 'https://www.logees.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/1/r1934-4-large.jpg',
        description: 'Moses in the Cradle plants (Tradescantia spathacea) have many alternative names such as Moses-in-a-Boat, Boat Lily, Cradle Lily, Moses-in-the-Bullrushes, and Oyster plant. Whatever you want to call them, these colorful plants, native to Mexico, the West Indies, and Central America, are easy to care for and have very attractive leaves. Moses In the Cradle plants produce rosettes of long, waxy, sword-shaped leaves that are glossy green or green, purple, and white striped on top and a rich purple on the underside. The very small white flowers, tucked away in a purple boat shaped bract, give Moses-in-the-Cradle Houseplants their many common names.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 4,
        water: 'weekly'
    },
    {
        common_name: "Poinsettia",
        scientific_name: "Euphorbia pulcherrima",
        image_url: 'https://i.pinimg.com/originals/c0/ec/44/c0ec4422e346897b83aeb0bd9fe114a5.jpg',
        description: 'A Poinsettia plant, native to Mexico, is the most popular indoor flowering plant sold in the U.S. even though it is only available six weeks of the year. The colorful parts of a poinsettia are really modified leaves called bracts. Many people mistakenly think the bracts are the flower petals of the plant. Although these bracts are quite attractive they are not part of the flowers. The real flowers are quite inconsequential and are located inside the small yellow part of the poinsettia called a cyathia. There is a cyathia in the center of each group of bracts. Selecting the right poinsettia is the key to having a plant that stays colorful and beautiful the entire holiday season.',
        care_level: 'easy',
        toxicity: 1,
        // light_id: 3,
        water: 'weekly'
    }
]

const seedPlants = () => Plant.bulkCreate(plantdata);

module.exports = seedPlants;