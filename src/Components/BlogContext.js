import React, { createContext, useState } from 'react';

export const BlogContext = createContext();

export const BlogProvider = (props) => {
  const [bollywood, setBollywood] = useState([
    {
      Title:
        ' Beast song Jolly O Gymkhana: Thalapathy Vijay and Pooja Hegde’s groovy number is catchy; fans call it "a visual treat"',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://st1.bollywoodlife.com/wp-content/uploads/2022/03/Beast-Jolly-O-Gymkhana.jpg?impolicy=Medium_Widthonly&w=800',
      BlogContent:
        'After Arabic Kuthu, the makers of Thalapathy Vijay and Pooja Hegde starrer Beast have now released the second single from the film titled Jolly O Gymkhana. The track is composed by Anirudh Ravichander and it is sung by Thalapathy Vijay. It’s a feel-good dance number with some upbeat music that will surely cheer you up. Visually, it’s a colourful track, and Vijay and Pooja’s breezy dance moves will surely grab your attention. Hegde took to Twitter to share the song with everyone.',
      Likes: '500',
    },
    {
      Title:
        ' Bachchhan Paandey: Akshay Kumar beats Alia Bhatt, Ranveer Singh to emerge as the king of the box office in post-pandemic times with SUPERB opening numbers',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://st1.bollywoodlife.com/wp-content/uploads/2022/03/MicrosoftTeams-image-614.jpg',
      BlogContent:
        'The pandemic has meant a lot of stress for Bollywood. But superstar Akshay Kumar seems to be reigning and how. The first day collections of Bachchhan Paandey has proved the same. The film has collected more than Rs 13 crore and is set for bigger numbers over the weekend. This is massive. Rohit Shetty’s Sooryavanshi also made Rs 26 crore on its opening day. The film was the first biggie to come after theatres opening. Akshay Kumar has a better record now than Ranveer Singh and Alia Bhatt. Here is a look…',
      Likes: '501',
    },
    {
      Title:
        ' The Kashmir Files box office collection: Vivek Agnihotri film benefiting massively from never-seen-before block bookings',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://st1.bollywoodlife.com/wp-content/uploads/2022/03/The_Kashmir_Files_Box_Office_Collection_And_Records.jpg?impolicy=Medium_Widthonly&w=800',
      BlogContent:
        'The Kashmir Files has been creating box office history left, right and centre at the box office. Never before has a film come along in Bollywood that has brought in more money during the weekdays than it did over its first weekend, sending all trade analysis and predictions for a rollicking toss. Where The Kashmir Files lifetime collection will end up is now anybodys guess, but what this trajectory has done is completely shaken up what the trade and industry thought about how the audience will respond to certain kinds of films, especially small ones arriving with little to no marketing.',
      Likes: '502',
    },
    {
      Title:
        ' Rajinikanth’s 2.0, Aishwarya Rai’s Ponniyin Selvan, Prabhas’ Adipurush and more – Budgets of these 10 films make them the most expensive Indian movies',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://st1.bollywoodlife.com/wp-content/uploads/2022/03/2-point-0.jpg',
      BlogContent:
        'Every year many films are made India in different languages like Hindi, Tamil, Telugu, Malayalam, Kannada and others. The budget of some films is quite high and some movies are made on medium budget and low budget. Well, the most expensive Indian movie made till now is Rajinikanth starrer 2.0. Reportedly, the movie which also starred Akshay Kumar and Amy Jackson, was made on a budget of Rs. 575 crore. The movie was high on VFX and it had received a great response when it was released.',
      Likes: '503',
    },
    {
      Title:
        ' TV News Recap: The Kapil Sharma Show vs The Kashmir Files, Karan Kundrra reveals numbers of kids Tejasswi Prakash wants and more',
      CategoryName: 'Bollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://st1.bollywoodlife.com/wp-content/uploads/2022/03/TV-News-Recap.png?impolicy=Medium_Widthonly&w=800',
      BlogContent:
        'Tha Kapil Sharma Show, The Kashmir Files, Tejasswi Prakash and Karan Kundrra, Shivangi Joshi, Imlie, Shehnaaz Gill, Shamita Shetty and Raqesh Bapat, Bade Achhe Lagte Hain 2, Anupamaa, Yeh Rishta Kya Kehlata Hai, and more made news in the TV section this past week. The Kapil Sharma Show got embroiled in a controversy over the promotion of The Kashmir Files, Lovebirds Tejasswi Prakash and Karan Kundrra grabbed headlines for a lot of reasons. Shivani Joshi talked about her bond with Mohsin Khan and opened up on pay disparity on Indian television. Shehnaaz Gills video from Dabboo Ratnanis photoshoot went viral. Shamita Shetty and Raqesh Bapat debunked the break-up rumours by walking down the red carpet event of the awards show together and more. So, you see, a lot happened in the TV world... here we are with a recap... ',
      Likes: '504',
    },
  ]);

  const [technology, setTechnology] = useState([
    {
      Title:
        ' Hogwarts Legacy Release Date, Gameplay, Features Revealed: All You Need to Know',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://i.gadgets360cdn.com/large/hogwarts_legacy_portkey_games_avalanche_software_1647696224379.jpg?downsize=950:*',
      BlogContent:
        'Hogwarts Legacy — the upcoming open world role-playing game set at the Hogwarts School of Witchcraft and Wizardry, a century before the Harry Potter years — is set to launch at the end of the year. The launch details of the upcoming game were shared during a PlayStation State of Play livestream event held on March 18. Hogwarts Legacy is set in the wizarding world a century before the events of J.K. Rowlings Harry Potter franchise, and will arrive on PC, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series S/X later this year..',
      Likes: '500',
    },
    {
      Title:
        ' Oppo K10 Specifications Leaked; Tipped to Come With 6.5-Inch LCD Screen, 50-Megapixel Triple Cameras',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://i.gadgets360cdn.com/large/oppo_k10_twitter_oppo_1647689467942.jpg?downsize=950:*',
      BlogContent:
        'Oppo K10 specifications have been shared by a tipster, giving us an idea of what to expect from the upcoming smartphone. The Chinese company recently confirmed that the Oppo K10 will launch on March 23. Oppo has also teased some of the specifications of the handset, revealing that it will be powered by a Snapdragon 680 SoC and feature a triple camera setup along with a hole-punch display design. The companys upcoming Oppo Enco Air 2 TWS earphones will also launch on March 23, alongside the upcoming Oppo K10 handset.',
      Likes: '501',
    },
    {
      Title:
        'OnePlus 10 Pro Teased by Company Ahead of India Launch, OnePlus TV Y1S Pro Tipped to Debut Alongside Phone',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://i.gadgets360cdn.com/large/oneplus_10_pro_image_1646918779692.jpg?downsize=950:*',
      BlogContent:
        'OnePlus 10 Pro — the upcoming flagship smartphone from the Chinese company — is set to debut in global markets later this month. Ahead of the launch, the company has teased the launch of a new smartphone in India, which can be safely assumed to be none other than the OnePlus 10 Pro. The premium smartphone was launched in China back in January, and is equipped with a Snapdragon 8 Gen 1 SoC, paired with up to 12GB of RAM. Meanwhile, a tipster claims that OnePlus could also launch the OnePlus TV Y1S Pro smart TV with a 43-inch Ultra-HD display alongside the OnePlus 10 Pro in India.',
      Likes: '502',
    },
    {
      Title:
        ' Lenovo ThinkBook 14+, Lenovo ThinkBook 16+ With 12th Gen Intel CPUs and Nvidia RTX 2050 GPU Launched',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://i.gadgets360cdn.com/large/lenovo_thinkbook_14_16_plus_lenovo_1647677406061.jpg?downsize=950:*',
      BlogContent:
        "Lenovo ThinkBook 14+ and Lenovo ThinkBook 16+ laptops were launched on Friday, as the latest additions to the company's ThinkBook portfolio. The laptops run on Windows 11 out-of-the-box and are powered by 12th generation Intel Core i5 and Core i7 ‘Alder Lake' processors along with 16GB of RAM and 512GB of onboard storage. The Lenovo ThinkBook 14+ and Lenovo ThinkBook 16+ come with Intel Iris Xe graphics, and will also be available with additional configurations with an Nvidia RTX 2050 GPU, according to the company.",
      Likes: '503',
    },
    {
      Title:
        ' SpaceX Falcon 9 Flies for the Record 12th Time, Launches 53 Starlink Satellites',
      CategoryName: 'Technology',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://i.gadgets360cdn.com/large/spacex_reuters_1556260807227.JPG?downsize=950:*',
      BlogContent:
        "SpaceX successfully launched its Falcon 9 rocket for a record-breaking 12th time on Saturday (March 19), and then returned to Earth for yet another successful touchdown. The Falcon 9 was launched into low-Earth orbit from Florida's Cape Canaveral Space Force Station at 12:24am ET on March 19 (9:54am IST), carrying 53 of SpaceX's Starlink Internet satellites. This was Falcon 9 first stage's 12th flight, breaking the previous record for SpaceX rocket reusability.",
      Likes: '504',
    },
  ]);

  const [hollywood, setHollywood] = useState([
    {
      Title: '‘Go Ask Puff’: Mase Sends Message to Diddy Following Diss Song',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://atlantablackstar.com/wp-content/uploads/2022/03/pjimage-12-1-768x432.jpg',
      BlogContent:
        'Weeks after Diddy caught flak from critics and former Bad Boy signees on social media about his alleged bad business dealings following his “Making the Band” reboot plans, Mase delivered a random diss track, reminding the music mogul yet again that they were not on good terms. Still, it doesn’t appear that the 46-year-old is done with his former boss just yet. Mase appeared to have one final message when he returned to social media later in the week–this time for fans. ',
      Likes: '500',
    },
    {
      Title:
        ' Ben Affleck & Jennifer Garner Reunite AtSon Samuel’s School As J.Lo RomanceHeats Up',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://hollywoodlife.com/wp-content/uploads/2022/03/Ben-Affleck-Jennifer-Garner-Reunite-backgrid-ftr1.jpg?w=620',
      BlogContent:
        'Ben Affleck is ever the doting dad! The Tender Bar star was photographed picking up son Samuel, 10, from school on Friday in Santa Monica, California, wearing a plaid button down shirt over a t-shirt and pairing the look with blue jeans. Sam sported blue jeans like his dad, also wearing a white shirt and a cowl neck scarf.',
      Likes: '501',
    },
    {
      Title:
        ' Pete Davidson’s Best ‘SNL’ Skits OfAll-Time: From ‘Aladdin’ To ‘Teacher Trial’',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://hollywoodlife.com/wp-content/uploads/2022/03/Pete-Davidson-Best-SNL-Skits-ftr.jpg?w=620',
      BlogContent:
        'Pete Davidson, 28, has come a long way since making his debut on Saturday Night Live when he was just 20-years-old. The comedian first joined the show in 2014, and he’s only become a bigger star since then. From acting in mainstream movies like The King of Staten Island to making headlines with his celebrity romances, Pete has remained a staple of SNL. While he’ll hopefully be starring in many more sketches for years to come, here are some of his funniest yet in no particular order.',
      Likes: '502',
    },
    {
      Title: 'Harry Styles’ Grammy Wins: How Many He’sWon & For What',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://hollywoodlife.com/wp-content/uploads/2022/03/Harry-Styles-Grammy-Wins-ftr.jpg?w=620',
      BlogContent:
        'There’s no denying that Harry Styles is one of the biggest pop stars on the planet. The former One Direction singer has blossomed into a vibrant solo artist, with hits like “Sign of the Times,” “Adore You,” “Golden,” and “Watermelon Sugar.” Add in his countless sold-out shows and the growing number of Gold and Platinum records, and it’s clear that this man is one of the shining stars in the pop music galaxy.',
      Likes: '503',
    },
    {
      Title:
        ' Stars In Red Dresses: Photos Of Selena Gomez, Taylor Swift & More',
      CategoryName: 'Hollywood',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://hollywoodlife.com/wp-content/uploads/2022/02/selena-gomez-red-dress-ss.jpg?w=1000',
      BlogContent:
        'Red, red, red! It’s the perfect way to heat up your wardrobe, whether it’s the middle of winter or a sizzling summer day. From deep wine hues to bright, blood-orange tones, there are endless ways to make red looks work for you. Celebrities have positively nailed the trend, taking it from the sidewalk to the red carpet.',
      Likes: '504',
    },
  ]);

  const [fitness, setFitness] = useState([
    {
      Title:
        ' Running injuries don’t happen for the reasons you think – here’s the three best ways to prevent them',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://images.indianexpress.com/2022/03/Running-1.jpg',
      BlogContent:
        'Running is one of the most popular forms of physical activity worldwide. But though it requires little expertise or equipment – and can be very beneficial for our health – it unfortunately also comes with a relatively high risk of injury. In fact, one survey found nearly half of all runners experience injury or pain. Another study even estimated that runners experience nearly 18 injuries for every 1,000 hours of running.',
      Likes: '500',
    },
    {
      Title:
        ' Weekend fitness: Practice these five easy exercises for toned arms',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://images.indianexpress.com/2022/02/exercise-1200-1.jpg',
      BlogContent:
        'If you’re a working professional with a tight schedule, a homemaker with tons of chores and responsibilities or a student looking to have a toned upper body, you’ve come to the right place.Amidst the hustle and bustle of everyday life, it becomes difficult to have a regular exercise regime. While some prefer to hit the gym, others prefer the calmness that yoga brings with it.',
      Likes: '501',
    },
    {
      Title: ' How is exercise related to good sexual health?',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://images.indianexpress.com/2022/02/exercise_200_getty.jpg',
      BlogContent:
        'Exercise is known to be essential for one’s overall health. A new study states that this includes sexual health as well. It notes that men with higher waist circumference or a higher BMI have 50 per cent more chances of erectile dysfunction. The results were published in The Journal of Sexual Medicine.In yet another study published in 2021 in the same journal, it was noted that women who worked out six hours per week showed lower sexual distress and resistance in their clitoral arteries compared to those women who did not exercise. It also indicated that those who exercised showed higher levels of desire, arousal, lubrication and orgasm.',
      Likes: '502',
    },
    {
      Title: ' How to master the pull-up',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://images.indianexpress.com/2022/03/pull-ups.jpg',
      BlogContent:
        'I’ve always loved pull-ups, partly out of spite. There is a common fitness refrain that women can’t do them, and I don’t like to be told I can’t do something — especially if the reason is my gender. As a teenager, I pushed lawn-mowers and hauled rocks just to show that being a girl didn’t mean I was weak.I love how pull-ups make me feel — powerful, strong. There’s nothing like the feeling of lifting yourself up. Pull-ups are also beautiful for their simplicity. They require nothing more than a bar, and engage at least a dozen muscles, from the lats all the way to the glutes. Experts say they improve upper body strength, shoulder mobility and core stability, while helping to hone coordination too.',
      Likes: '503',
    },
    {
      Title:
        ' ‘These will truly make you feel like a brand new person’: Simple stretches to ‘fix your posture’',
      CategoryName: 'Fitness',
      PublishedDate: 'Aug 21 2021',
      ImageAsset: 'https://images.indianexpress.com/2022/02/stretching-2.jpg',
      BlogContent:
        'Most people tend to spend hours on end on laptops, working from the bed, or the sofa, hunched over the phone, all of which contribute to bad posture in the long run. So, it is imperative to have a good stretching routine — either independently or after a workout — to ensure correct posture and keep injuries at bay. Some stretches also help in fixing and even bettering your posture, like the ones shared by fitness coach Zoe Modgill which, as she put it, “will truly make you feel like a brand new person.”',
      Likes: '504',
    },
  ]);

  const [food, setFood] = useState([
    {
      Title:
        ' Wondering How To Detox Post Holi? These 7 Amazing Drinks Will Come To Your Rescue',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://c.ndtvimg.com/2022-03/783buqpg_lemon-juice_625x300_09_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
      BlogContent:
        "Festivals are dedicated to merry-making with loved ones and bonding with them over drinks, food and heavy, greasy treats. Holi, the festival of colours, is almost here, and, like other festivals, it also leads to self-indulgence and overeating. Sweets and fried foods have long been a staple of Holi celebrations. However, such foods make us feel bloated, fatigued, and sluggish. So, it's essential to detox after all the celebrations to reverse the effects of binge and mindless eating. We have curated a list of 7 detox drinks for you, that are tasty, healthy and refreshing.",
      Likes: '500',
    },
    {
      Title:
        "Chakka Pradhaman: Kerala's Jackfruit Flavoured Sweet Dish Is A Favourite",
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://c.ndtvimg.com/2022-03/pc820iv8_chakka-pradhaman_625x300_19_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
      BlogContent:
        "One of the most interesting arguments I've often heard after wedding feasts - especially in cities like Thrissur and Palakkad in Central Kerala, is whether the sambar or payasam (kheer) should be the yardstick to judge an elaborate Sadya. Served on a banana leaf, the wedding sadya is a medley of at least 20 dishes. It's too much to count, especially when all you want to do is dig in. Of course, this sadya or celebration meal is also a regular during festivals like Vishu and Onam as also the star birthday known as Pirannal (an abridged version of Piranna Naal or day of birth as per the Malayalam calendar).",
      Likes: '501',
    },
    {
      Title: ' Looking For Holi Menu Options? Check Out These 5 Recipes',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://c.ndtvimg.com/2020-02/l1gjpgs_arbi-tikki_625x300_21_February_20.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
      BlogContent:
        "Are we even talking about a festival if we don't mention food? Festive occasions anywhere around the world seem incomplete without good food. A wholesome menu has the power to lift everyone's mood. Also, we tend to look for easy-peasy snack ideas for our menus. Don't we? And, with the festival of Holi just days away we have curated a list of about five finger foods that would certainly gift you with maximum taste in minimum ingredients. You can pair them with thandaai, jaljeera, masala chaach or simply the cup of your favourite hot beverage.",
      Likes: '502',
    },
    {
      Title:
        ' Amchoori Dum Ki Bhindi Recipe: A Flavourful Yet Healthy Dish All Bhindi Lovers Must Try',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://c.ndtvimg.com/2021-03/j219l6o_bhindi_625x300_11_March_21.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
      BlogContent:
        'Bhindi is one of the most popular vegetarian dishes among Indians. Masala bhindi, kurkuri bhindi or simple evergreen pyaaz bhindi, we love all forms of bhindi recipes that are regularly made in our households. However, if you are still looking for yet another new recipe to make bhindi in a different way, here we present to you a splendid recipe of amchoori dum ki bhindi. The name itself has us drooling, right? Want to know more about it?',
      Likes: '503',
    },
    {
      Title:
        ' Holi 2022: 5 Delicious Diabetic-Friendly Desserts To Enjoy On The Festival',
      CategoryName: 'Food',
      PublishedDate: 'Aug 21 2021',
      ImageAsset:
        'https://c.ndtvimg.com/2022-03/jdak6q18_baked-gujiyas_625x300_17_March_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350',
      BlogContent:
        'Any event, occasion, and especially, a festival in India is incomplete without a box of mithai. Whatever the celebration may be, different kinds of mithai will always be available. And when we see those sweet treats lined up on the table, we can never resist ourselves. Even those who have diabetes, may sneak in a small bite. However, this one small sweet bite for a diabetic person can be harmful. Diabetes is a challenging disease to manage. We always hear people say to diabetic patients to stay away from sweets, but did you know if you swap certain ingredients in your much-loved desserts, you can make them diabetic-friendly? Well, if you want to get your hands on these recipes, we have just the list you need. You can make these recipes for Holi and enjoy the festival! But always remember, too much of any sweet (even if it is sugar-free) can take a toll on your health. So, consume these desserts in moderation.',
      Likes: '504',
    },
  ]);

  return (
    <BlogContext.Provider
      value={{
        value1: [bollywood, setBollywood],
        value2: [hollywood, setHollywood],
        value3: [technology, setTechnology],
        value4: [fitness, setFitness],
        value5: [food, setFood],
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};
