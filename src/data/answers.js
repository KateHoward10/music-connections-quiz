const answers = [
  [
    ["Heart of Glass", "Blondie"],
    ["Killer Queen", "Queen"],
    ["Sweet Caroline", "Neil Diamond"],
    ["All That She Wants", "Ace of Base"],
    ["God Save The Queen", "Sex Pistols"],
    ["Better Together", "Jack Johnson"],
    ["Karma Chameleon", "Culture Club"],
    ["King of the Mountain", "Kate Bush"],
    ["The Joker", "Steve Miller Band"],
    ["Ace of Spades", "Motorhead"],
    ["card", "playing cards"]
  ],
  [
    ["In the Court of the Crimson King", "King Crimson"],
    ["Pale Blue Eyes", "Velvet Underground"],
    ["Little Red Corvette", "Prince"],
    ["Money", "Pink Floyd"],
    ["Back To Black", "Amy Winehouse"],
    ["Take Me To The River", "Al Green"],
    ["Smoke On The Water", "Deep Purple"],
    ["Pretty in Pink", "Psychedelic Furs"],
    ["Yellow", "Coldplay"],
    ["Purple Haze", ["Jimi Hendrix", "The Jimi Hendrix Experience"]],
    ["colour", "colours"]
  ],
  [
    ["Blue Monday", "New Order"],
    ["Ruby Tuesday", "Rolling Stones"],
    ["Sunday Morning", "Velvet Underground"],
    ["Saturday Night", "Whigfield"],
    ["Lazy Sunday", "Small Faces"],
    ["Manic Monday", "The Bangles"],
    ["Friday I’m In Love", "The Cure"],
    ["Saturday Night’s Alright For Fighting", "Elton John"],
    ["Monday Morning", "Fleetwood Mac"],
    ["Friday", "Rebecca Black"],
    ["day", "days of the week"]
  ],
  [
    ["I Don’t Like Mondays", "Boomtown Rats"],
    ["Black Dog", "Led Zeppelin"],
    ["Cool For Cats", "Squeeze"],
    ["Eye of the Tiger", "Survivor"],
    ["Fluorescent Adolescent", "Arctic Monkeys"],
    ["Gold Lion", "Yeah Yeah Yeahs"],
    ["Float On", "Modest Mouse"],
    ["Kiss From a Rose", "Seal"],
    ["White Rabbit", "Jefferson Airplane"],
    ["I Am The Walrus", "The Beatles"],
    [["animal", "mammal"], "animals"]
  ],
  [
    ["Hounds of Love", "Kate Bush"],
    ["Bridge Over Troubled Water", "Simon & Garfunkel"],
    ["Lust For Life", "Iggy Pop"],
    ["Wish You Were Here", "Pink Floyd"],
    ["Thriller", "Michael Jackson"],
    ["Hotel California", "The Eagles"],
    ["Purple Rain", "Prince"],
    ["London Calling", "The Clash"],
    ["What’s Going On", "Marvin Gaye"],
    ["Heroes", "David Bowie"],
    [["album", "title"], "title tracks from albums"]
  ],
  [
    ["Brothers in Arms", "Dire Straits"],
    ["Fortunate Son", ["Creedence Clearwater Revival", "CCR"]],
    ["A.M. 180", "Grandaddy"],
    [["California Dreamin'", "California Dreaming"], "Mamas & The Papas"],
    ["He Ain’t Heavy, He’s My Brother", "The Hollies"],
    ["Lost in Music", "Sister Sledge"],
    ["Papa Don’t Preach", "Madonna"],
    ["My Perfect Cousin", "The Undertones"],
    ["Stay", ["Shakespears Sister", "Shakespeare's Sister"]],
    [
      ["Sweet Child o’ Mine", "Sweet Child of Mine"],
      ["Guns N’ Roses", "Guns and Roses"]
    ],
    [["family", "relative"], "family members"]
  ],
  [
    ["Mary’s Boy Child", "Boney M"],
    ["Can We Fix It?", "Bob The Builder"],
    ["Only You", "Flying Pickets"],
    ["Earth Song", "Michael Jackson"],
    ["Always On My Mind", "Pet Shop Boys"],
    [
      ["Another Brick in the Wall (Part 2)", "Another Brick in the Wall"],
      "Pink Floyd"
    ],
    [
      ["Killing in the Name", "Killing in the Name Of"],
      "Rage Against The Machine"
    ],
    ["Too Much", "Spice Girls"],
    ["Don’t You Want Me", "Human League"],
    ["Do They Know It’s Christmas?", "Band Aid"],
    [["christmas", "1", "one"], "UK Christmas number ones"]
  ],
  [
    ["Bohemian Rhapsody", "Queen"],
    ["Paranoid", "Black Sabbath"],
    ["Tubthumping", "Chumbawumba"],
    ["What’s Up", ["4 Non Blondes", "Four Non Blondes"]],
    ["Buck Rogers", "Feeder"],
    ["Glory Box", "Portishead"],
    ["Iris", "Goo Goo Dolls"],
    ["Baba O’Riley", "The Who"],
    ["Laid", "James"],
    ["The Bad Touch", "Bloodhound Gang"],
    [["lyrics", "title", "name"], "song titles missing from lyrics"]
  ],
  [
    ["Intervention", "Arcade Fire"],
    ["We Didn’t Start The Fire", "Billy Joel"],
    ["September", "Earth, Wind & Fire"],
    ["I’m On Fire", "Bruce Springsteen"],
    [
      ["Great Balls of Fire", "Goodness Gracious Great Balls of Fire"],
      "Jerry Lee Lewis"
    ],
    ["Relight My Fire", "Take That"],
    ["Light My Fire", "The Doors"],
    ["Sex on Fire", "Kings of Leon"],
    ["Firestarter", "The Prodigy"],
    ["Fire", ["Crazy World of Arthur Brown", "Arthur Brown"]],
    ["fire", "fire"]
  ],
  [
    ["No Cars Go", "Arcade Fire"],
    ["Caroline, No", "Beach Boys"],
    ["No Quarter", "Led Zeppelin"],
    ["Don’t Speak", "No Doubt"],
    ["(I Can’t Get No) Satisfaction", "Rolling Stones"],
    ["No Woman No Cry", ["Bob Marley", "Bob Marley & The Wailers"]],
    ["No Tomorrow", "Orson"],
    ["No Surprises", "Radiohead"],
    ["No Surrender", "Bruce Springsteen"],
    [["You Don't Love Me (No, No, No)", "No, No, No"], "Dawn Penn"],
    ["no", "no"]
  ],
  [
    ["No Lucifer", ["British Sea Power", "BSP"]],
    ["Devil’s Spoke", "Laura Marling"],
    ["Straight To Hell", "The Clash"],
    ["Chase The Devil", "Max Romeo"],
    ["Number Of The Beast", "Iron Maiden"],
    ["Devil’s Haircut", "Beck"],
    ["Road To Hell", "Chris Rea"],
    ["Devil In Disguise", ["Elvis Presley", "Elvis"]],
    ["Bat Out Of Hell", ["Meat Loaf", "Meatloaf"]],
    ["Sympathy For The Devil", "Rolling Stones"],
    [["devil", "hell"], "Hell, or the devil"]
  ],
  [
    ["Highway To Hell", "ACDC"],
    ["Boulevard of Broken Dreams", ["Green Day", "Greenday"]],
    [
      ["Dancing in the Street", "Dancing in the Streets"],
      ["Martha Reeves & the Vandellas", "Martha & the Vandellas"]
    ],
    ["Electric Avenue", "Eddy Grant"],
    ["Street Fighting Man", "Rolling Stones"],
    ["Road To Nowhere", "Talking Heads"],
    ["Dead End Street", "The Kinks"],
    ["Baker Street", "Gerry Rafferty"],
    ["Autobahn", "Kraftwerk"],
    ["Penny Lane", "The Beatles"],
    [["road", "street"], "roads"]
  ],
  [
    [["Across 110th Street", "Across 110th St"], "Bobby Womack"],
    ["Song 2", "Blur"],
    [["Edge of Seventeen", "Edge of 17"], "Stevie Nicks"],
    ["Dreadlock Holiday", "10cc"],
    ["99 Problems", "Jay-Z"],
    [["54-46 Was My Number", "54-46 That's My Number"], "Toots & The Maytals"],
    ["I Can’t Help Myself", ["The Four Tops", "4 Tops"]],
    [
      ["Two Out Of Three Ain’t Bad", "2 Out of 3 Ain't Bad"],
      ["Meat Loaf", "Meatloaf"]
    ],
    ["500 Miles", "The Proclaimers"],
    [["Seven Nation Army", "7 Nation Army"], "White Stripes"],
    ["number", "numbers"]
  ],
  [
    ["Red Red Wine", "UB40"],
    [["Whiskey in the Jar", "Whisky in the Jar"], "Thin Lizzy"],
    ["Rip It Up", "Orange Juice"],
    ["Milk & Alcohol", "Dr Feelgood"],
    ["I Am A Cider Drinker", "The Wurzels"],
    ["Champagne Supernova", "Oasis"],
    ["Coffee & TV", "Blur"],
    ["Gin & Juice", "Snoop Dogg"],
    ["You Sexy Thing", "Hot Chocolate"],
    ["Milkshake", "Kelis"],
    [["drink", "beverage"], "drinks"]
  ],
  [
    ["Waterfalls", "TLC"],
    ["Enola Gay", ["Orchestral Manoeuvres in the Dark", "OMD"]],
    ["Proud Mary", ["Creedence Clearwater Revival", "CCR"]],
    ["Remember Me", ["British Sea Power", "BSP"]],
    ["Express Yourself", "N.W.A"],
    ["Spitfire", ["Public Service Broadcasting", "PSB"]],
    ["When Smokey Sings", "ABC"],
    ["Unbelievable", "EMF"],
    ["Don’t Bring Me Down", ["Electric Light Orchestra", "ELO"]],
    ["Paper Planes", "MIA"],
    [["letter", "3", "three"], "artists known by 3 letters"]
  ],
  [
    ["What’s The Frequency, Kenneth?", "REM"],
    ["Life on Mars?", "David Bowie"],
    ["Have You Ever Seen The Rain?", ["Creedence Clearwater Revival", "CCR"]],
    ["Are You Experienced?", ["Jimi Hendrix", "The Jimi Hendrix Experience"]],
    ["Where Is The Love?", "Black Eyed Peas"],
    ["Who Let The Dogs Out?", "Baha Men"],
    ["Why Can’t We Be Friends?", "War"],
    ["Where Is My Mind?", "Pixies"],
    ["How Soon Is Now?", "The Smiths"],
    [["Do You Realize??", "Do You Realise??"], "Flaming Lips"],
    ["question", "a series of very important questions"]
  ]
];

export default answers;
