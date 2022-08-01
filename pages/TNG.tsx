import Head from "next/head";

//page explaining TNG and such
export default function OurResearch() {
    return (
        <div className="w-screen h-screen overflow-hidden">
            <Head>
                <title>SHTEM Website | TNG</title>
                <meta name="description" content="TNG" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className="flex flex-col w-full h-full overflow-y-auto bg-white-200">
                <img
                    className="float-center w-50 h- 50 justify-center items-center"
                    src="http://www.clipartbest.com/cliparts/9cR/57X/9cR57XMMi.gif"
                />
                <h1 className="text-blue-600 text-2xl">
                    Welcome...
                </h1>
                <p>{`You've just been through a simulated shopping experience. From the 10 minutes you spent browsing through our website, we can accurately predict your future behavior. You are probably wondering: How is that possible? Well, the seemingly “fun” questions in our surveys and “random” data collected without your knowledge were meticulously crafted to build your online user profile. This profile contains crucial personal information from your location to which politician you are most likely to vote for. Though we won’t use it to harm you, many companies use your profile to profit off of you by selling your data. What you didn’t realize is that while you get to use this website seemingly for free, you were paying with heartbeats, the limited amount of time you have in your life. The clock is always ticking. Do you really want to lose that time while being made into a product? To discover what/ how your data is collected, who’s selling it, and who’s benefiting, keep reading!`}</p>
                <img
                    className="w-15 h-15"
                    src="https://neoreach.com/wp-content/uploads/2019/10/source.gif"
                />
                <h1>Surveillance Capitalism:</h1>
                <p>{`To learn why and how your personal data is being collected, you need to understand what surveillance capitalism is. Surveillance capitalism is the economic system based on surveilling largely unaware users of social media apps and websites, collecting their data, and selling that information for a profit. It is a movement founded on predictive algorithms, mathematical calculations of human behavior. Surveillance capitalists “sell certainty to business customers who would like to know with certainty what we do. Targeted adverts, yes, but also businesses want to know whether to sell us a mortgage, insurance, what to charge us, do we drive safely? They want to know the maximum they can extract from us in an exchange. They want to know how we will behave in order to know how to best intervene in our behavior.”`}</p>
                <img
                    className="w-50 h-50"
                    src="https://image.shutterstock.com/image-illustration/digital-city-big-brother-electronic-600w-662065279.jpg"
                />
                <h2>So what exactly are these companies exactly collecting?</h2>
                <p>The amount of data collected tells a story: the story of you.  A prime example is Sahara Prime. In just twenty minutes, it knows your address, your name, what type of person you are, your interests, and so much more.
    Depending on the nature of the website or app, the platform might be collecting any or even all of the following protected private information: First and last name, gender, date of birth/ age, location: IP address,  mailing address, email address, phone numbers, payment details: Credit card information…</p>
                <p>In some cases, other data can be collected such as:</p>
                <li>Social media accounts if you log in using them</li>
                <li>tastes and preferences from reviews or browsing data (clicks, time spent looking)</li>
                <li>language</li> 
                <li>Employment history</li>
                <li>Education history</li>
                <li> weight, height, and body measurements (like estimated stride and shoe/foot size)</li>
                <div className ="w-15 h-15">
                    <img src = "https://cdn-res.keymedia.com/cms/images/ca/126/0299_637401223494954835.jpg"></img>
                </div>
                <p>{`And aren't you wondering why such companies would want information about who you would bring to Disneyland from your family? These corporations have algorithms that can create inferences about you based on the data collected. These inferences indicate your moods and lead to the company having something called a behavioral surplus. Behavioral surplus, coined by Harvard Professor Shoshana Zuboff, is the surplus of data collected far exceeding the amount required to improve products and services. This additional data is used to train models that predict users' behavior and represent their wants, values, interests, and more. With this behavioral surplus, you are the perfect victim for these corporations to release their advertisements, waiting for you to bite. And whether or not you bite is also stored as data and is sold to get a better idea of what type of advertisement and product works for you.`}</p>
                <p>These ads can impact you for the worse. You may think that ads are simply trying to help you find the perfect purchase, but there is so much more than that. Take politics for example. Recent trends indicate a more polarizing America, and one cause of that has to be social media. With the data about your political preference, your feed will only have stories and articles with your political preference since you have a higher tendency to open those. The more articles you open, the indications point to the more radical your views get. The rabbit hole just continues going down.</p>
                <div className ="w-50 h-50">
                    <img src = "https://dailynexus.s3.us-west-1.amazonaws.com/dailynexus/wp-content/uploads/2020/12/09145214/IMG_20201123_142020632_HDR_2-1-768x550.jpg"></img>
                </div>
                <h2>Attention Economy:</h2>
                <p>{`Nowadays, our world revolves around our phones. Our interests, Our friends, and Who we see ourselves, are all attached to that small device in your hands. That is the way social media creators want it. Their entire purpose is to see how much of your life you can give to them. They create these predictive algorithms and these addictive features to get you hooked and addicted to your phone. Features like push notifications, beautiful animations, and designs, like buttons, infinite scrolls, and much more are all just pieces in a chess game to capture its king: you. Studies show that the brain of someone addicted to their phone is very much similar to the brain of someone who has a drug or gambling problem. This constant barrage of shallow rewards rewires your brain to want more likes, retweets, and emoji reactions, which leads to social media addiction. It is a never-ending cycle, pulling you in for more and more screen time. Why would they do this? The more time you spend on your phone, the more data they collect from you and the more ads you will be exposed to. The more data that they collect about you, the more companies are willing to spend on that data.`}</p>
                <div className ="w-50 h-50">
                    <img src = "https://i1.wp.com/blogs.jccc.edu/campusledger/files/2014/03/Screen-Shot-2014-03-13-at-7.39.20-PM1.png?fit=500%2C436&ssl=1"></img>
                </div>
                <h2>The harmful effects of attention economy and algorithms:</h2>
                <p>{`Many services online are offered for free. In the attention economy, attention is not only a resource but a currency: users pay for a service with their attention. For example, while you were using our website for “free”, you didn’t realize you were paying with heartbeats, the limited amount of time you have in your life. Today, the dynamics of the attention economy incentivize companies to draw users in to spend more and more time on apps and sites. This has adverse effects on the user. Once addicted, the less focus and attention they will pay to particular things. They will be less productive and lazy. Studies show that those addicted to social media perform worse on cognitive tests which test the ability to multitask and be attentive. This particularly impacts students. By spending time on social media, they are spending less time on homework or having a social life. Thus, either their grades drop or they rush to finish their homework at the last possible second, evoking feelings of stress. On top of that, a lack of focus and attentiveness can have a terrible impact on a student's learning ability.`}</p>
                <div className ="w-50 h-50">
                    <img src = "https://img.freepik.com/premium-photo/top-view-shot-sleeping-tired-handsome-businessman-table-with-hands-laptop-frustrated-stressed-caucasian-male-freelancer-after-failure-workplace_616427-2721.jpg"></img>
                </div>
                <h2>What can you do about it?</h2>
                <p>You are now aware of the social media epidemic. We have opened your eyes. Now the question is: will you free yourself? There are so many things you can choose to do but the first thing is to have a conscientious effort against it. The first task: you have approximately 50 minutes left on your timer. Try not to use your phone for that time period. Once you do that, you have a choice. You can either choose to join the resistance and help stop the growing attention economy or you can continue shopping. This is your choice.</p>
                <div className ="w-50 h- 50">
                    <img src = "http://www.clipartbest.com/cliparts/9cR/57X/9cR57XMMi.gif"></img>
                </div>
                <div className="flex gap-2 justify-center">
                    <button className="bg-green-600 text-white px-5 py-2 rounded-lg text-xl">
                        Join The Resistance
                    </button>
                    <button className="bg-red-500 text-white px-5 py-2 rounded-lg text-xl">
                        Continue Shopping
                    </button>
                </div>
            </main>
        </div>
    )
}
