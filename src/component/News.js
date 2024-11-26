import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Footer from "./Footer";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
    static defaultProps = {
        country: "us",
        pageSize: 10,
        category: "general",
        publishedAt: "2024-11-07T12:13:30Z",
        author: "PTI",
    };
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
        publishedAt: PropTypes.string,
        author: PropTypes.string,
    };
    article = [
        // {
        //     source: {
        //         id: null,
        //         name: "BusinessLine",
        //     },
        //     author: "PTI",
        //     title:
        //         "In a win for Elon Musk, Scindia rejects spectrum auction pitch from Ambani, Mittal",
        //     description:
        //         "Elon Musk's Starlink gains support from Indian government for satellite broadband spectrum allocation over auction.",
        //     url: "https://www.thehindubusinessline.com/info-tech/in-a-win-for-elon-musk-scindia-rejects-spectrum-auction-pitch-from-ambani-mittal/article68840868.ece",
        //     urlToImage:
        //         "https://bl-i.thgim.com/public/incoming/u1nx2s/article68840917.ece/alternates/LANDSCAPE_1200/2024-10-31T131808Z_994667726_RC2OVAA4AZ6G_RTRMADP_3_USA-ELECTION-MUSK-HEARING.JPG",
        //     publishedAt: "2024-11-07T12:13:30Z",
        //     content:
        //         "In a boost to Elon Musk's Starlink, Communications Minister Jyotiraditya Scindia has said the spectrum for satellite broadband will be allocated and not auctioned as sought by Indian billionaires Muk… [+3594 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "New York Post",
        //     },
        //     author: "Associated Press",
        //     title:
        //         "Man who used legal loophole to live rent-free for years in New Yorker Hotel found unfit to stand trial",
        //     description:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday.",
        //     url: "https://nypost.com/2024/11/07/us-news/man-who-used-legal-loophole-to-live-rent-free-for-years-in-new-yorker-hotel-found-unfit-to-stand-trial/",
        //     urlToImage:
        //         "https://nypost.com/wp-content/uploads/sites/2/2024/11/93199250.jpg?quality=75&strip=all&w=1024",
        //     publishedAt: "2024-11-07T11:45:34Z",
        //     content:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday.\r\nDoctors examining… [+3267 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Biztoc.com",
        //     },
        //     author: "thehill.com",
        //     title: "'A star is born:' Elon Musk's big bet on Trump pays off",
        //     description:
        //         "Elon Musk’s massive bet on President-elect Trump appears to have paid off, as the billionaire owner of Tesla and SpaceX looks ahead to an administration likely to boost his companies and his own political power. \nTrump was projected to win the presidency as o…",
        //     url: "https://biztoc.com/x/11888c1aac94a4fe",
        //     urlToImage: "https://biztoc.com/cdn/11888c1aac94a4fe_s.webp",
        //     publishedAt: "2024-11-07T11:11:16Z",
        //     content:
        //         "Elon Musks massive bet on President-elect Trump appears to have paid off, as the billionaire owner of Tesla and SpaceX looks ahead to an administration likely to boost his companies and his own polit… [+141 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "GlobeNewswire",
        //     },
        //     author: "Research and Markets",
        //     title:
        //         "North American OEM Software-defined Vehicle (SDV) Strategy Report 2024 Featuring Ford, GM, and Tesla",
        //     description:
        //         'Dublin, Nov. 07, 2024 (GLOBE NEWSWIRE) -- The "Benchmarking of North American OEM Software-defined Vehicle Strategies, 2024" report has been added to ResearchAndMarkets.com\'s offering.',
        //     url: "https://www.globenewswire.com/news-release/2024/11/07/2976429/28124/en/North-American-OEM-Software-defined-Vehicle-SDV-Strategy-Report-2024-Featuring-Ford-GM-and-Tesla.html",
        //     urlToImage:
        //         "https://ml.globenewswire.com/Resource/Download/908fb457-7f8e-4a08-9081-5565e3dfb3d7",
        //     publishedAt: "2024-11-07T11:07:00Z",
        //     content:
        //         'Dublin, Nov. 07, 2024 (GLOBE NEWSWIRE) -- The "Benchmarking of North American OEM Software-defined Vehicle Strategies, 2024" report has been added to ResearchAndMarkets.com\'s offering.\r\nThis research… [+5354 chars]',
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "TechNode",
        //     },
        //     author: "Jill Shen",
        //     title:
        //         "Founder of China’s answer to Wayve talks $100m funding, Tesla’s FSD, and AI future",
        //     description:
        //         "Deeproute said it would be relatively easy to scale up its technology and comply with data security rules for both China and overseas markets.",
        //     url: "http://technode.com/2024/11/07/founder-of-chinas-answer-to-wayve-talks-100m-funding-teslas-fsd-and-ai-future/",
        //     urlToImage:
        //         "https://technode.com/wp-content/uploads/2024/11/171-e1730977547565.jpg",
        //     publishedAt: "2024-11-07T11:06:36Z",
        //     content:
        //         "Every Wednesday and Friday, TechNodes Briefing newsconstter delivers a roundup of the most important news in China tech, straight to your inbox.\r\nDeeproute.ai, a Chinese startup using an autonomous dri… [+5260 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Yahoo Entertainment",
        //     },
        //     author: "Reuters",
        //     title:
        //         "Futures steady after Trump-fueled rally, Fed's rate decision awaited",
        //     description:
        //         "Traders have about fully priced in a 25-basis point rate cut, but will keep a close watch on the central bank's policy statement for any clues on the future ...",
        //     url: "https://finance.yahoo.com/news/futures-steady-trump-fueled-rally-104408881.html",
        //     urlToImage:
        //         "https://media.zenfs.com/en/reuters-finance.com/7bb423ddcce523646732344df075e4d0",
        //     publishedAt: "2024-11-07T10:44:08Z",
        //     content:
        //         "(Reuters) - U.S. stock futures edged higher ahead of an interest-rate decision by the Federal Reserve on Thursday, building on a sharp rally set off by Donald Trump's stunning comeback as U.S. presid… [+2090 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Biztoc.com",
        //     },
        //     author: "barrons.com",
        //     title: "Tesla Stock Pulls Back After Musk's ‘Bet for the Ages’",
        //     description: "Tesla Stock Pulls Back After Musk's ‘Bet for the Ages’",
        //     url: "https://biztoc.com/x/027bf7096a9c9339",
        //     urlToImage: "https://biztoc.com/cdn/027bf7096a9c9339_s.webp",
        //     publishedAt: "2024-11-07T10:38:27Z",
        //     content:
        //         "Tesla Stock Pulls Back After Musk's Bet for the Ages\r\nThis story appeared on barrons.com, 2024-11-07 10:35:42.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "seattlepi.com",
        //     },
        //     author: "By YURI KAGEYAMA, AP Business Writer",
        //     title:
        //         "Japanese automaker Nissan cuts 9,000 jobs as its vehicles fail to sell",
        //     description:
        //         "Nissan is reporting a loss for the latest fiscal quarter as its vehicle sales sank while costs and inventory ballooned. The Japanese automaker announced it is cutting 9,000 jobs globally, or about 6% of its more than 133,000 employees. Nissan is also slashing…",
        //     url: "https://www.seattlepi.com/news/world/article/japanese-automaker-nissan-cuts-9-000-jobs-as-its-19896403.php",
        //     urlToImage:
        //         "https://s.hdnux.com/photos/01/45/37/22/26604696/3/rawImage.jpg",
        //     publishedAt: "2024-11-07T10:26:49Z",
        //     content:
        //         "FILE - Logos at a Nissan showroom are seen in Ginza shopping district in Tokyo, on March 31, 2023.Eugene Hoshiko/AP\r\nTOKYO (AP) Nissan reported Thursday a loss for the latest fiscal quarter as its ve… [+2755 chars]",
        // },

        // {
        //     source: {
        //         id: null,
        //         name: "Bangkok Post",
        //     },
        //     author: "News Agencies",
        //     title: "Biden set to make first post-election comments",
        //     description:
        //         "<p>WASHINGTON - US President Joe Biden was set to address the nation on Thursday after a stinging election defeat for his Democratic Party at the hands of Republican Donald Trump, whose stunning political comeback has reverberated around the world.</p>",
        //     url: "https://www.bangkokpost.com/world/2898063/biden-set-to-make-first-post-election-comments",
        //     urlToImage:
        //         "https://static.bangkokpost.com/media/content/20241107/c1_2898063_700.jpg",
        //     publishedAt: "2024-11-07T10:22:00Z",
        //     content:
        //         "WASHINGTON - US President Joe Biden was set to address the nation on Thursday after a stinging election defeat for his Democratic Party at the hands of Republican Donald Trump, whose stunning politic… [+5816 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "ET Online",
        //     title: "Trump's Indians: Indian-origin loyalists who could get top jobs",
        //     description:
        //         "As Donald Trump prepares for his second term as US President, speculation is mounting over who will secure key positions in his administration. Trump has indicated his preference for rewarding loyalists who supported him during his previous term. Several Indi…",
        //     url: "https://economictimes.indiatimes.com/news/international/world-news/donald-trump-indian-americas-indian-origin-canidates-in-trump-government-who-may-get-top-jobs-vivek-ramaswamy-kash-patel-nikki-haley-shalli-kumar-bobby-jindal/articleshow/115051834.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115052076,width-1200,height-630,imgsize-95788,overlay-economictimes/articleshow.jpg",
        //     publishedAt: "2024-11-07T10:20:49Z",
        //     content:
        //         "Though Donald Trump, who made history by staging an impressive comeback as the US President, will take many days or even weeks to select his cabinet and other high-ranking administration officials, t… [+8711 chars]",
        // },
        // {
        //     source: {
        //         id: "the-jerusalem-post",
        //         name: "The Jerusalem Post",
        //     },
        //     author: "BY TAL SHILO/WALLA!",
        //     title:
        //         "Netanyahu's son Yair met with Musk, praises him for defending free speech",
        //     description:
        //         "A photo with Yair was released from Musk’s meeting with PM Netanyahu in Washington, where his son's participation was initially hidden from the public.",
        //     url: "https://www.jpost.com/israel-news/article-827962",
        //     urlToImage:
        //         "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/562009",
        //     publishedAt: "2024-11-07T10:14:42Z",
        //     content:
        //         "The son of Israel’s Prime Minister, Yair Netanyahu, posted a photo with Elon Musk and publicly praised the billionaire owner of the social media platform X/Twitter for defending free speech in the Un… [+1257 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "ET Online",
        //     title:
        //         "A new era just began for SpaceX, Tesla? Speculations swirl as Elon Musk enters Trump's inner circle",
        //     description:
        //         "Elon Musk is expected to be a key figure in Donald Trump's next administration. Trump has hinted at giving Musk a role in reducing government spending. Musk's companies, including SpaceX and Tesla, could benefit from Trump's policies. Musk actively supported …",
        //     url: "https://economictimes.indiatimes.com/news/international/global-trends/a-new-era-just-began-for-spacex-tesla-speculations-swirl-as-elon-musk-enters-trumps-inner-circle/articleshow/115050589.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115051748,width-1200,height-630,imgsize-77302,overlay-economictimes/articleshow.jpg",
        //     publishedAt: "2024-11-07T10:13:31Z",
        //     content:
        //         "HR\r\nHuman Potential and the Future of Employment\r\nBy - Lynda Gratton, Prof. at London Business School, Speaker, Author, Global Thought Leader\r\nView Program",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Trump Win Sparks Record $64 Billion Gain for World’s 10 Richest People - Bloomberg",
        //     description:
        //         "Trump Win Sparks Record $64 Billion Gain for World’s 10 Richest PeopleBloomberg Elon Musk bet big on Trump. Here’s what he stands to gain — and lose — from his winCNN Elon Musk In Trump Family's Election Victory Photo. But Melania Is MissingNDTV Trump’s Victo…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175423385",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T10:12:45Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Citizen.digital",
        //     },
        //     author: "Reuters",
        //     title: "How Elon Musk's clout with Trump could enrich his companies",
        //     description:
        //         "Elon Musk’s backing of Donald Trump’s decisive victory for a second presidency gives the billionaire entrepreneur extraordinary influence to help his companies secure favourable government treatment.",
        //     url: "https://www.citizen.digital/business/how-elon-musks-clout-with-trump-could-enrich-his-companies-n352569",
        //     urlToImage:
        //         "https://citizentv.obs.af-south-1.myhuaweicloud.com/138619/conversions/Capture-og_image.webp",
        //     publishedAt: "2024-11-07T10:07:19Z",
        //     content:
        //         "Elon Musks backing of Donald Trumps decisive victory for a second presidency gives the billionaire entrepreneur extraordinary influence to help his companies secure favourable government treatment.\r\n… [+9339 chars]",
        // },
        // {
        //     source: {
        //         id: "business-insider",
        //         name: "Business Insider",
        //     },
        //     author: "lmaidan@businessinsider.com (Laila Maidan)",
        //     title:
        //         "Wall Street's most famous floor trader recounts election euphoria at the NYSE and explains how to trade an incredibly bullish fourth quarter",
        //     description:
        //         "Volatile markets excite traders because they create opportunities to exploit the moves.",
        //     url: "https://www.businessinsider.com/stock-market-post-election-results-bullish-trump-trade-peter-tuchman-2024-11",
        //     urlToImage:
        //         "https://i.insider.com/672bce3788cea3ba1c1ec4f7?width=1200&format=jpeg",
        //     publishedAt: "2024-11-07T10:00:02Z",
        //     content:
        //         "For Peter Tuchman, a senior floor trader who's spent over four decades at the New York Stock Exchange, the excitement the day after the elections was euphoric.\r\n\"Look, the bottom line is, on the floo… [+3974 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "BusinessLine",
        //     },
        //     author: "Team BL",
        //     title:
        //         "Trump win: Can India Inc hope for new US opportunities, as much as Musk would fancy his chances for India entry?",
        //     description:
        //         "Trump’s stance on tariffs and potential trade barriers also raises concerns, as he might consider broader tariffs to protect American industries",
        //     url: "https://www.thehindubusinessline.com/companies/trump-win-can-india-inc-hope-for-new-us-opportunities-as-much-as-musk-would-fancy-his-chances-for-india-entry/article68840448.ece",
        //     urlToImage:
        //         "https://bl-i.thgim.com/public/incoming/w602xp/article68840465.ece/alternates/LANDSCAPE_1200/2024-11-06T203129Z_929638687_RC2LMAA0ROIN_RTRMADP_3_USA-ELECTION-TRUMP-MUSK.JPG",
        //     publishedAt: "2024-11-07T09:55:42Z",
        //     content:
        //         "Leading companies in India are hoping that corporate ties with the United States would expand, spurred by the election of Donald Trump, whose policies are expected to bolster the economy while creati… [+2705 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "AutoExpress",
        //     },
        //     author: "Chris Rosamond",
        //     title:
        //         "Drivers changing car tyres too early are wasting their money and hurting the planet",
        //     description:
        //         "Why running tyres all the way to the 1.6mm legal limit makes sense for safety and the environment",
        //     url: "https://www.autoexpress.co.uk/features/364971/drivers-changing-car-tyres-too-early-are-wasting-their-money-and-hurting-planet",
        //     urlToImage:
        //         "https://media.autoexpress.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1730972509/autoexpress/2024/11/Michelin tyre testing.jpg",
        //     publishedAt: "2024-11-07T09:53:56Z",
        //     content:
        //         "The way to do this is quite simple. You put four tyres on a car, you drive it a certain distance, you take them off again, you weigh them and see how much rubber they've lost, he says. if you put fou… [+2209 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "PTI",
        //     title:
        //         "In a win for Elon Musk, Scindia says no to spectrum auction pitch from Ambani, Mittal",
        //     description:
        //         "India will assign satellite broadband spectrum instead of auctioning it. This benefits Elon Musk's Starlink. Indian billionaires Mukesh Ambani and Sunil Mittal wanted an auction. The Telecom Regulatory Authority of India will determine the spectrum price. Thi…",
        //     url: "https://economictimes.indiatimes.com/industry/telecom/telecom-news/in-a-win-for-elon-musk-scindia-says-no-to-spectrum-auction-pitch-from-ambani-mittal/articleshow/115051066.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115051102,width-1200,height-630,imgsize-112994,overlay-economictimes/articleshow.jpg",
        //     publishedAt: "2024-11-07T09:48:30Z",
        //     content:
        //         "New Delhi: In a boost to Elon Musk's Starlink, Communications Minister Jyotiraditya Scindia has said the spectrum for satellite broadband will be allocated and not auctioned as sought by Indian billi… [+3856 chars]",
        // },
        // {
        //     source: {
        //         id: "abc-news",
        //         name: "ABC News",
        //     },
        //     author: "YURI KAGEYAMA AP business writer",
        //     title:
        //         "Japanese automaker Nissan cuts 9,000 jobs as its vehicles fail to sell",
        //     description:
        //         "Nissan is reporting a loss for the latest fiscal quarter as its vehicle sales sank while costs and inventory ballooned",
        //     url: "https://abcnews.go.com/Business/wireStory/japanese-automaker-nissan-cuts-9000-jobs-vehicles-fail-115595383",
        //     urlToImage:
        //         "https://i.abcnewsfe.com/a/21a85110-c402-45bd-a639-b0c9c9a87027/wirestory_b6fa5d02770a13908ecec11b6a9f8e8f_16x9.jpg?w=1600",
        //     publishedAt: "2024-11-07T09:48:15Z",
        //     content:
        //         "TOKYO -- TOKYO (AP) Nissan reported Thursday a loss for the latest fiscal quarter as its vehicle sales sank while costs and inventory ballooned, prompting the Japanese automaker to slash 9,000 jobs.\r… [+2409 chars]",
        // },
        // {
        //     source: {
        //         id: "the-jerusalem-post",
        //         name: "The Jerusalem Post",
        //     },
        //     author: "BY REUTERS",
        //     title:
        //         "Biden set to address nation after Trump's decisive US election win",
        //     description:
        //         "Biden, who was replaced as the Democrats' candidate in the race by Vice President Kamala Harris due to concerns about his mental acuity, will speak to address the nation, the White House said.",
        //     url: "https://www.jpost.com/international/article-827976",
        //     urlToImage:
        //         "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/631553",
        //     publishedAt: "2024-11-07T09:45:28Z",
        //     content:
        //         "US President Joe Biden is set to address the nation on Thursday after a stinging election defeat for his Democratic Party at the hands of Republican Donald Trump, whose stunning political comeback ha… [+4222 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Yahoo Entertainment",
        //     },
        //     author: "Curtis Heinzl",
        //     title: "Lyft Soars on Earnings Outlook Bolstered by Record Trips",
        //     description:
        //         "(Bloomberg) -- Lyft Inc. shares surged in premarket trading after issuing strong earnings guidance for both this quarter and the full year, signaling that...",
        //     url: "https://finance.yahoo.com/news/lyft-soars-strong-earnings-outlook-211556445.html",
        //     urlToImage:
        //         "https://s.yimg.com/ny/api/res/1.2/DMcX_6dIchLkVgKUXEULEw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02Nzg-/https://media.zenfs.com/en/bloomberg_technology_68/8c33a41274e9d4942e28eaaff0b50733",
        //     publishedAt: "2024-11-07T09:41:39Z",
        //     content:
        //         "(Bloomberg) Lyft Inc. (LYFT) shares surged in premarket trading after issuing strong earnings guidance for both this quarter and the full year, signaling that the ride-hailing services plan to attrac… [+3037 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Yahoo Entertainment",
        //     },
        //     author: "YURI KAGEYAMA",
        //     title:
        //         "Japanese automaker Nissan cuts 9,000 jobs as its vehicles fail to sell",
        //     description:
        //         "Nissan reported Thursday a loss for the latest fiscal quarter as its vehicle sales sank while costs and inventory ballooned, prompting the Japanese automaker...",
        //     url: "https://finance.yahoo.com/news/japanese-automaker-nissan-cuts-9-093809582.html",
        //     urlToImage:
        //         "https://s.yimg.com/ny/api/res/1.2/HXRtBmuYHT7X1oeFoqWxZw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap_finance_articles_694/ac60d858ba9550ae597a5e97fb0ba987",
        //     publishedAt: "2024-11-07T09:38:09Z",
        //     content:
        //         "TOKYO (AP) Nissan reported Thursday a loss for the latest fiscal quarter as its vehicle sales sank while costs and inventory ballooned, prompting the Japanese automaker to slash 9,000 jobs.\r\nChief Ex… [+2398 chars]",
        // },

        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "Nishtha Awasthi",
        //     title:
        //         "Trump’s victory fuels market rally; trading volumes, investor activity surge",
        //     description:
        //         "Donald Trump's election victory sparked a financial market rally on November 7, driving stock indices, bond yields, and the U.S. dollar to new highs. Trading volumes surged, particularly for Tesla and small-cap stocks, as investors reacted to expected policy …",
        //     url: "https://economictimes.indiatimes.com/markets/stocks/news/trumps-victory-fuels-market-rally-trading-volumes-investor-activity-surge/articleshow/115050668.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115050635,width-1200,height-630,imgsize-948615,overlay-etmarkets/articleshow.jpg",
        //     publishedAt: "2024-11-07T09:36:17Z",
        //     content:
        //         "Donald Trumps presidential election victory triggered a massive rally across financial markets on Wednesday, as investors eagerly positioned themselves for anticipated tax cuts, deregulation, and inf… [+2535 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "LADbible",
        //     },
        //     author: "Jess Battison",
        //     title:
        //         "Lidl launches rival Coca-Cola Christmas truck with full list of UK locations and dates",
        //     description:
        //         "It seems Coca-Cola has some competition as Lidl is bringing the Holidays too this Christmas",
        //     url: "https://www.ladbible.com/news/uk-news/coca-cola-christmas-truck-lidl-dates-602151-20241107",
        //     urlToImage:
        //         "https://images.ladbible.com/resize?type=webp&quality=70&width=1200&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltcd74acc1d0a99f3a/blte5058211cba982f7/672c82708b78cf08147b561f/lidl-chritmas-truck.png",
        //     publishedAt: "2024-11-07T09:18:25Z",
        //     content:
        //         "Holidays are coming, holidays are coming, holidays are coming youre singing it now, right?\r\nWe all know that the Coca-Cola Christmas ad is the official confirmation that its time to get Christmassy. … [+2260 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Bangkok Post",
        //     },
        //     author: "Bloomberg News",
        //     title: "Nissan to cut 9,000 jobs, announces restructuring",
        //     description:
        //         "<p>TOKYO &mdash; Nissan Motor Company lowered its annual profit outlook, announced plans to cut 9,000 jobs and reduce capacity by 20%, as it seeks to cope with deteriorating sales in major markets.</p>",
        //     url: "https://www.bangkokpost.com/business/motoring/2898046/nissan-to-cut-9-000-jobs-announces-restructuring",
        //     urlToImage:
        //         "https://static.bangkokpost.com/media/content/20241107/c1_2898046_700.jpg",
        //     publishedAt: "2024-11-07T09:18:00Z",
        //     content:
        //         "TOKYO — Nissan Motor Company lowered its annual profit outlook, announced plans to cut 9,000 jobs and reduce capacity by 20%, as it seeks to cope with deteriorating sales in major markets.\r\nThe Japan… [+2251 chars]",
        // },
        // {
        //     source: {
        //         id: "rt",
        //         name: "RT",
        //     },
        //     author: "RT",
        //     title: "Musk gains billions on Trump’s victory – Bloomberg",
        //     description:
        //         "Donald Trump’s victory triggered a $26.5 billion net worth gain for his biggest financial backer Elon Musk, Bloomberg has said  Read Full Article at RT.com",
        //     url: "https://www.rt.com/business/607271-musk-net-worth-soaring/",
        //     urlToImage:
        //         "https://mf.b37mrtl.ru/files/2024.11/article/672c83042030276ffd56db65.jpg",
        //     publishedAt: "2024-11-07T09:13:35Z",
        //     content:
        //         "Donald Trump’s victory in the US presidential election has led to the net worth of one of his biggest financial backers, Elon Musk, skyrocketing by $26.5 billion, according to Bloomberg’s Billionaire… [+2247 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Elon Musk’s net worth soars over $20 billion after Trump win - Cointelegraph",
        //     description:
        //         "Elon Musk’s net worth soars over $20 billion after Trump winCointelegraph Elon Musk bet big on Trump. Here’s what he stands to gain — and lose — from his winCNN The Elon Musk effect: How Donald Trump gained from billionaire’s supportAl Jazeera English Trump W…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175423039",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T09:12:50Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "'Trump Trade': Election news leads to biggest 1-day stock market gain in 2 years - ABC News",
        //     description:
        //         "'Trump Trade': Election news leads to biggest 1-day stock market gain in 2 yearsABC News Stock market today: Dow, Nasdaq, S&P 500 all soar to records after Trump triumphs in electionYahoo Finance Heard on the Street Wednesday Recap: Trump CardThe Wall Street …",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175423037",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T09:12:40Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: "fortune",
        //         name: "Fortune",
        //     },
        //     author: "Diane Brady",
        //     title: "Being Elon Musk",
        //     description:
        //         "Musk’s MVP status with the incoming president makes one wonder where he’ll exert his newfound influence.",
        //     url: "https://fortune.com/2024/11/07/being-elon-musk/",
        //     urlToImage:
        //         "https://fortune.com/img-assets/wp-content/uploads/2024/11/GettyImages-2176138679.jpg?resize=1200,600",
        //     publishedAt: "2024-11-07T09:10:20Z",
        //     content:
        //         "Good morning.Oh, to be inside the mind of Elon Musk. President-elect Donald Trump has called him a super genius and promised to create a new government efficiency position for Musk in his administrat… [+3831 chars]",
        // },

        // {
        //     source: {
        //         id: "fortune",
        //         name: "Fortune",
        //     },
        //     author: "Sudhi Ranjan Sen, Dan Strumpf, Ruchi Bhatia, Bloomberg",
        //     title: "Trump victory gives Modi chance to reset India’s image with West",
        //     description:
        //         "India is facing increased more scrutiny from the U.S and its allies, over the nation’s close ties with Russia’s Vladimir Putin.",
        //     url: "https://fortune.com/asia/2024/11/07/trump-victory-gives-modi-chance-to-reset-indias-image-with-west/",
        //     urlToImage:
        //         "https://fortune.com/img-assets/wp-content/uploads/2024/11/GettyImages-1203050488-e1730968620314.jpg?resize=1200,600",
        //     publishedAt: "2024-11-07T08:47:19Z",
        //     content:
        //         "Few leaders in Asia are more happy to see Donald Trump heading back to the White House than Indian Prime Minister Narendra Modi. Modi became one of the first major leaders to congratulate Trump on hi… [+5627 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "ET Online",
        //     title: "Three key issues Donald Trump and Elon Musk may clash over",
        //     description:
        //         "Elon Musk and Donald Trump, despite their mutual admiration and shared vision for American innovation, might face policy conflicts. Trump's proposed rollback of EV incentives and clean air regulations could directly impact Tesla's profitability. Additionally,…",
        //     url: "https://economictimes.indiatimes.com/news/international/global-trends/three-key-issues-donald-trump-and-elon-musk-may-clash-over/articleshow/115047562.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115047635,width-1200,height-630,imgsize-933167,overlay-economictimes/articleshow.jpg",
        //     publishedAt: "2024-11-07T08:15:00Z",
        //     content:
        //         "Artificial Intelligence(AI)\r\nAI and Analytics based Business Strategy\r\nBy - Tanusree De, Managing Director- Accenture Technology Lead, Trustworthy AI Center of Excellence: ATCI\r\nView Program",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "The Star Online",
        //     },
        //     author: "Jackie Davalos, Leah Nylen, Mackenzie Hawkins",
        //     title: "Tech giants brace for AI revamp, antitrust pullback in Trump 2.0",
        //     description:
        //         "Silicon Valley is bracing for a vastly different relationship with the US government as Donald Trump returns to the White House with promises to undo many of his predecessor’s policies and Elon Musk poised to play an influential role. Read full story",
        //     url: "https://www.thestar.com.my/tech/tech-news/2024/11/07/tech-giants-bracefor-ai-revamp-antitrust-pullback-in-trump-20",
        //     urlToImage:
        //         "https://apicms.thestar.com.my/uploads/images/2024/11/07/3005162.jpg",
        //     publishedAt: "2024-11-07T08:00:00Z",
        //     content:
        //         "Silicon Valley is bracing for a vastly different relationship with the US government as Donald Trump returns to the White House with promises to undo many of his predecessors policies and Elon Musk p… [+8716 chars]",
        // },
        // {
        //     source: {
        //         id: "al-jazeera-english",
        //         name: "Al Jazeera English",
        //     },
        //     author: "Lorraine Mallinder",
        //     title:
        //         "The Elon Musk effect: How Donald Trump gained from billionaire’s support",
        //     description:
        //         "Tech tycoon played pivotal role in Trump win, pumping money into campaign and using X to megaphone hardline MAGA views.",
        //     url: "https://www.aljazeera.com/features/2024/11/7/the-elon-musk-effect-how-donald-trump-gained-from-billionaires-support",
        //     urlToImage:
        //         "https://www.aljazeera.com/wp-content/uploads/2024/11/AFP__20241027__36KY6WB__v2__HighRes__RepublicanPresidentialCandidateDonaldTrumpHolds-1730905643.jpg?resize=1920%2C1440",
        //     publishedAt: "2024-11-07T07:57:18Z",
        //     content:
        //         "When Donald Trump declared his magnificent victory as the results of the United States presidential election trickled in, he reserved special praise for one man who has helped to catapult him back in… [+10105 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "International Business Times",
        //     },
        //     author: "Ann Resuma",
        //     title: "Big Tech CEOs Congratulate President-Elect Donald Trump",
        //     description:
        //         "CEOs of big tech firms send their well wishes to President-elect Donald Trump.",
        //     url: "https://www.ibtimes.com/big-tech-ceos-congratulate-president-elect-donald-trump-3749999",
        //     urlToImage:
        //         "https://d.ibtimes.com/en/full/4557956/metas-founder-chief-executive-mark-zuckerberg-has-put-most-his-attention-companys-ai.jpg",
        //     publishedAt: "2024-11-07T07:52:51Z",
        //     content:
        //         "Big tech CEOs were quick to send their congragulatory messages to President-elect Donald Trump despite his threat to some of them, mainly Meta CEO Mark Zuckerberg.\r\nZuckerberg took to his social medi… [+2037 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "New York Post",
        //     },
        //     author: "Richard Pollina",
        //     title:
        //         "Ex-Yankees star Roger Clemens calls out Americans who said they’d leave US if Trump won 2024 election: ‘Don’t const the door hit you in the ass’",
        //     description: '"Don’t const the door hit you in the ass on the way out."',
        //     url: "https://nypost.com/2024/11/07/sports/ex-yankees-star-roger-clemens-calls-out-americans-who-said-theyd-leave-us-if-trump-won-2024-election/",
        //     urlToImage:
        //         "https://nypost.com/wp-content/uploads/sites/2/2024/11/newspress-collage-vt61or30j-1730963738818.jpg?quality=75&strip=all&1730946151&w=1024",
        //     publishedAt: "2024-11-07T07:43:36Z",
        //     content:
        //         "Seven-time Cy Young winning pitcher Roger Clemens celebrated Donald Trumps election victory with a stern message for those who threatened to leave the US if he won a second term in office. \r\nWho ever… [+3955 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Sky.com",
        //     },
        //     author: null,
        //     title:
        //         "US talk show host on verge of tears as he calls Trump win 'terrible night'",
        //     description:
        //         'US talk show host Jimmy Kimmel struggled to hold back tears as he called Donald Trump\'s election win a "terrible night".',
        //     url: "https://news.sky.com/story/jimmy-kimmel-on-verge-of-tears-as-he-calls-trump-win-terrible-night-13249783",
        //     urlToImage:
        //         "https://e3.365dm.com/24/11/1600x900/skynews-jimmy-kimmel-kimmel_6741275.jpg?20241107075127",
        //     publishedAt: "2024-11-07T07:42:00Z",
        //     content:
        //         'US talk show host Jimmy Kimmel struggled to hold back tears as he called Donald Trump\'s election win a "terrible night".\r\nIn his opening monologue, he said the choice was between a prosecutor and a c… [+3037 chars]',
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Securityaffairs.com",
        //     },
        //     author: "Pierluigi Paganini",
        //     title:
        //         "Canada ordered ByteDance to shut down TikTok operations in the country over security concerns",
        //     description:
        //         "Canada ordered ByteDance to shut down TikTok operations over security concerns but did not issue a full ban on the platform. The Canadian government ordered ByteDance to wind up TikTok Technology Canada, Inc. over security concerns following a national securi…",
        //     url: "https://securityaffairs.com/170653/security/canada-ordered-bytedance-to-shut-down-tiktok-operations.html",
        //     urlToImage:
        //         "https://securityaffairs.com/wp-content/uploads/2020/01/tiktok-app.jpg",
        //     publishedAt: "2024-11-07T07:30:23Z",
        //     content:
        //         "Canada ordered ByteDance to shut down TikTok operations in the country over security concerns\r\n | Critical bug in Cisco UWRB access points allows attackers to run commands as root\r\n | INTERPOL: Opera… [+114654 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "CNBC",
        //     },
        //     author: null,
        //     title: "CNBC Daily Open: The Trump rally kicks off",
        //     description:
        //         "Donald Trump’s victory in the U.S. presidential elections is providing a tailwind to risk assets. But Wednesday's frenzy could have been a relief rally too.",
        //     url: "https://www.cnbc.com/2024/11/07/cnbc-daily-open-the-trump-rally-kicks-off.html",
        //     urlToImage:
        //         "https://image.cnbcfm.com/api/v1/image/108057289-17307531222024-11-04t203943z_597142270_rc2kyaaz8xnr_rtrmadp_0_usa-election-trump.jpeg?v=1730753176&w=1920&h=1080",
        //     publishedAt: "2024-11-07T07:30:01Z",
        //     content:
        //         "This report is from today's CNBC Daily Open, our international markets newsconstter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what yo… [+3767 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Autocar",
        //     },
        //     author: "James Attwood",
        //     title: "'Our time has come': Honda's CEO on its bold EV future",
        //     description:
        //         "Japanese brand may be late to the EV party, but a barrage of bold new EVs are on their way\n\nIs there a more confusing, esoteric car company than Honda? One capable of astonishing ambition and technical innovation, yet also of missing industry trends and produ…",
        //     url: "https://www.autocar.co.uk/car-news/features/our-time-has-come-hondas-ceo-its-bold-ev-future",
        //     urlToImage:
        //         "https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/_toshihiro_mibe_honda_feature.jpg",
        //     publishedAt: "2024-11-07T07:01:30Z",
        //     content:
        //         "So its plan involves developing a mobile power pack (a swappable battery) for use by electric motorbikes and mini-EVs likely to mean quadricycles or vehicles that fall under Japans kei car rules.\r\nWe… [+1948 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Japan Today",
        //     },
        //     author: null,
        //     title:
        //         "Asian shares bounce after Trump's victory as focus turns to the Fed",
        //     description:
        //         "Shares recovered from early losses in Asia on Thursday after U.S. stocks stormed to records as investors wagered on what Donald Trump’s return to the White House will mean for the economy and the world.  Markets also were turning their attention to the Federa…",
        //     url: "https://japantoday.com/category/business/stock-market-today-asian-shares-bounce-after-trump%27s-victory-as-focus-turns-to-the-fed",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T07:00:11Z",
        //     content:
        //         "Shares recovered from early losses in Asia on Thursday after U.S. stocks stormed to records as investors wagered on what Donald Trumps return to the White House will mean for the economy and the worl… [+4972 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Granta.com",
        //     },
        //     author: "Aea Varfis-van Warmelo",
        //     title: "Hunter",
        //     description:
        //         "‘So what’s a fifth-rate actor? Someone who’s been in quite a few shows, but for whatever reason – whether it’s skill or appearance – he might as well not have done any.’",
        //     url: "https://granta.com/hunter-shuang-xuetao/",
        //     urlToImage:
        //         "https://granta.com/wp-content/uploads/2024/11/Xuetao-1280x339.jpg",
        //     publishedAt: "2024-11-07T06:58:58Z",
        //     content:
        //         "Lu Dong moves the standing lamp, turns to gauge how far he is from the wall, then goes back to the chair hed carefully positioned no, never mind the chair, better to be prone on the floor. Pulling op… [+35399 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Watch These Tesla Price Levels as Stock Surges to 15-Month High - Investopedia",
        //     description:
        //         "Watch These Tesla Price Levels as Stock Surges to 15-Month HighInvestopedia Trump’s Victory Is a Major Win for Elon Musk and Big-Money PoliticsThe New York Times Trump Win Sparks Record $64 Billion Gain for World’s 10 Richest PeopleBloomberg Elon Musk says Tr…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175422453",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T06:32:16Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Biztoc.com",
        //     },
        //     author: "investopedia.com",
        //     title: "Watch These Tesla Price Levels as Stock Surges to 15-Month High",
        //     description:
        //         "Key Takeaways\n- Tesla shares are likely to remain in the spotlight after surging to a 15-month high Wednesday amid investor expectations that the EV maker could benefit from Donald Trump's win in the presidential election.\n- The stock has traded within an asc…",
        //     url: "https://biztoc.com/x/77692bb850f5a08a",
        //     urlToImage: "https://biztoc.com/cdn/807/og.png",
        //     publishedAt: "2024-11-07T06:27:19Z",
        //     content:
        //         "Key Takeaways- Tesla shares are likely to remain in the spotlight after surging to a 15-month high Wednesday amid investor expectations that the EV maker could benefit from Donald Trump's win in the … [+153 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Securityaffairs.com",
        //     },
        //     author: "Pierluigi Paganini",
        //     title:
        //         "Critical bug in Cisco UWRB access points allows attackers to run commands as root",
        //     description:
        //         "Cisco fixed a critical flaw in URWB access points, allowing attackers to run root commands, compromising industrial wireless automation security. Cisco has addressed a critical vulnerability, tracked as CVE-2024-20418, that could be exploited by unauthenticat…",
        //     url: "https://securityaffairs.com/170646/security/cisco-uwrb-crirical-flaw.html",
        //     urlToImage:
        //         "https://securityaffairs.com/wp-content/uploads/2014/07/cisco-building.jpg",
        //     publishedAt: "2024-11-07T06:17:16Z",
        //     content:
        //         "Critical bug in Cisco UWRB access points allows attackers to run commands as root\r\n | INTERPOL: Operation Synergia II disrupted +22,000 malicious IPs\r\n | Memorial Hospital and Manor suffered a ransom… [+114556 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Stock market today: Dow, Nasdaq, S&P 500 all soar to records after Trump triumphs in election - Yahoo Finance",
        //     description:
        //         "Stock market today: Dow, Nasdaq, S&P 500 all soar to records after Trump triumphs in electionYahoo Finance From prison companies to Tesla: These stocks are soaring off the Trump victoryCNN Wall Street rejoices as the bell tolls for Biden-era regulationFinanci…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175422377",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T06:13:03Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Paul Tan's Automotive News",
        //     },
        //     author: "Gerard Lye",
        //     title:
        //         "Xpeng details new AI Turing chip for its future cars – equivalent to 3 Nvidia Orin X or 2 Tesla FSD chips",
        //     description:
        //         "Xpeng has revealed its self-developed Turing AI chip which it plans to deploy in its future products, including cars, flying cars and even robots. As reported by CarNewsChina, Xpeng CEO He Xiaopeng said he believes […]\nThe post Xpeng details new AI Turing chi…",
        //     url: "https://paultan.org/2024/11/07/xpeng-details-new-ai-turing-chip-for-its-future-cars/",
        //     urlToImage:
        //         "https://paultan.org/image/2024/11/Xpeng-Turing-AI-Chip-AI-Day-2024-1-1200x628.jpg",
        //     publishedAt: "2024-11-07T06:08:19Z",
        //     content:
        //         "Xpeng has revealed its self-developed Turing AI chip which it plans to deploy in its future products, including cars, flying cars and even robots. As reported by CarNewsChina, Xpeng CEO He Xiaopeng s… [+1276 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Hurriyet Daily News",
        //     },
        //     author: "hurriyetdailynews.com",
        //     title: "Harris gives defiant concession after stunning Trump win",
        //     description:
        //         "Donald Trump's crushing presidential victory heralded a new era of uncertainty in the United States and the world on Wednesday, as defeated Kamala Harris gave a defiant concession speech while vowing to help with his transition to power.",
        //     url: "https://www.hurriyetdailynews.com/harris-gives-defiant-concession-after-stunning-trump-win-202346",
        //     urlToImage:
        //         "https://image.hurimg.com/i/hurriyet/75/200x200/672c56b20a16aa028026aed1.jpg",
        //     publishedAt: "2024-11-07T05:57:12Z",
        //     content:
        //         "WASHINGTON\r\nDonald Trump's crushing presidential victory heralded a new era of uncertainty in the United States and the world on Wednesday, as defeated Kamala Harris gave a defiant concession speech … [+6480 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "'What's Starlink?' Trump talks Elon Musk, Starship and SpaceX in election night victory speech (video) - Space.com",
        //     description:
        //         "'What's Starlink?' Trump talks Elon Musk, Starship and SpaceX in election night victory speech (video)Space.com Trump’s Victory Is a Major Win for Elon Musk and Big-Money PoliticsThe New York Times Trump Win Sparks Record $64 Billion Gain for World’s 10 Riche…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175422283",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T05:32:40Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Variety",
        //     },
        //     author: "Selome Hailu",
        //     title:
        //         "Seth Meyers Jokes Trump Will Run Again in 2028: 'Hail Supreme Leader'",
        //     description:
        //         "After the election, Seth Meyers joked about RFK Jr.'s brain worm, Elon Musk's 'edgelord' qualities, and the idea of Trump running again in 2028.",
        //     url: "https://variety.com/2024/tv/news/seth-meyers-trump-run-again-2028-1236203265/",
        //     urlToImage:
        //         "https://variety.com/wp-content/uploads/2024/11/NUP_206191_00509.jpg?w=1000&h=563&crop=1",
        //     publishedAt: "2024-11-07T05:20:19Z",
        //     content:
        //         "Seth Meyers is worried about more than just Donald Trump’s second term.\r\n“Well, Donald Trump has won the 2024 election and he’ll be president again for four more years, or eight, or 12, or whatever,”… [+3009 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Gadgets360.com",
        //     },
        //     author: "Radhika Parashar, Siddharth Suvarna",
        //     title:
        //         "Binance's Tri-Party Model: How It’s Calming Institutional Investor Concerns, According to Division Head",
        //     description:
        //         "In conversation with Gadgets 360, Catherine Chen, Head of VIP & Institutional at Binance, highlighted that crypto asset volatility continues to make investors hesitant to explore the asset class. Chen emphasized that the primary challenge for exchanges in gai…",
        //     url: "https://www.gadgets360.com/cryptocurrency/news/binance-tri-party-arrangements-calm-institutional-investors-catherine-chen-6962564",
        //     urlToImage: "https://i.gadgets360cdn.com/large/binance_1730298447172.jpg",
        //     publishedAt: "2024-11-07T05:15:53Z",
        //     content:
        //         "Catherine Chen, Head of VIP and Institutional investors at Binance, sat down for an exclusive conversation with Gadgets 360 during the recently held Binance Blockchain Week in Dubai. She highlighted … [+5412 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "How Elon Musk’s $130 million investment in Trump's victory could reap a huge pay off for Tesla and the rest of his business empire - Fortune",
        //     description:
        //         "How Elon Musk’s $130 million investment in Trump's victory could reap a huge pay off for Tesla and the rest of his business empireFortune Trump’s Victory Is a Major Win for Elon Musk and Big-Money PoliticsThe New York Times How Elon Musk could influence Trump…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175422225",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T05:12:46Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Biztoc.com",
        //     },
        //     author: "fortune.com",
        //     title:
        //         "How Elon Musk’s $130 million investment in Trump's victory could reap a huge pay off for Tesla and the rest of his business empire",
        //     description:
        //         "Donald Trump’s election-night address to the country confirmed that one of the evening’s biggest winners—in addition to himself—was Elon Musk.\nTrump spent a hefty portion of his scattered victory speech thanking Musk, who has recently spent more than $130 mil…",
        //     url: "https://biztoc.com/x/5308d2ae7e01c730",
        //     urlToImage: "https://biztoc.com/cdn/807/og.png",
        //     publishedAt: "2024-11-07T05:11:40Z",
        //     content:
        //         "Donald Trumps election-night address to the country confirmed that one of the evenings biggest winnersin addition to himselfwas Elon Musk.Trump spent a hefty portion of his scattered victory speech t… [+145 chars]",
        // },
        // {
        //     source: {
        //         id: "bloomberg",
        //         name: "Bloomberg",
        //     },
        //     author: "Bloomberg",
        //     title:
        //         "Trump victory gives Modi chance to reset India’s image with the West",
        //     description:
        //         "Analysts and officials believe that the US under Trump will continue a years-long effort to cultivate India as a strategic partner against a more assertive Beijing, an effort that has won India big new investments from US companies like Apple Inc",
        //     url: "https://www.bloomberg.com/news/articles/2024-11-07/trump-victory-gives-modi-chance-to-reset-india-s-image-with-west",
        //     urlToImage:
        //         "https://bl-i.thgim.com/public/todays-paper/tp-opinion/aywxsi/article68838499.ece/alternates/LANDSCAPE_1200/bl07-think2-midGL5DI47LI.4.jpg.jpg",
        //     publishedAt: "2024-11-07T04:56:32Z",
        //     content:
        //         "Few leaders in Asia are more happy to see Donald Trump heading back to the White House than Indian Prime Minister Narendra Modi. \r\nModi became one of the first major leaders to congratulate Trump on … [+6089 chars]",
        // },

        // {
        //     source: {
        //         id: null,
        //         name: "Energycentral.com",
        //     },
        //     author: "[Energy Central] Tony Paradiso",
        //     title: "What’s the Truth About EV Adoption?",
        //     description:
        //         "Sales are up. Sales are down. Automakers are scaling back on EV production. Tesla sales exceed expectations. People are turning to hybrids. China’s market share continues to rise. Tariffs threaten an EV trade war. These are just some of the headlines hitting …",
        //     url: "https://energycentral.com/c/cp/what%E2%80%99s-truth-about-ev-adoption",
        //     urlToImage:
        //         "https://energycentral.com/sites/default/files/styles/og_meta/public/ece/node_main/2024/11/ev20symbol.jpg?itok=EkpI_EPe",
        //     publishedAt: "2024-11-07T04:39:58Z",
        //     content:
        //         "<li>Energy Portfolio Analyst/Power Supply SpecialistCentral Virginia Electric CooperativeLovingston, VA\r\n</li><li>Senior Engineer - Grid InfrastructureNorth Carolina Electric CooperativesRaleigh, NC\r… [+1092 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Maketecheasier.com",
        //     },
        //     author: "Laura Tucker",
        //     title: "What Effect Will Another Trump Presidency Have on Consumer Tech?",
        //     description:
        //         "After the effect Donald Trump had eight years ago, what effect can we expect on the world of consumer tech throughout the next four years?",
        //     url: "https://www.maketecheasier.com/trump-presidency-effect-on-consumer-tech/",
        //     urlToImage:
        //         "https://www.maketecheasier.com/assets/uploads/2024/11/trump-presidency-effect-tech-world.jpeg",
        //     publishedAt: "2024-11-07T04:39:00Z",
        //     content:
        //         "Much of the world was watching the results of the election for President of the United States this week. It wasn’t the result many were expecting. After the effect Donald Trump had eight years ago, w… [+2595 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Investing.com",
        //     },
        //     author: "Reuters",
        //     title:
        //         "Trump win to test limit of presidential power; Harris concedes but vows to 'fight'",
        //     description:
        //         "Trump win to test limit of presidential power; Harris concedes but vows to 'fight'",
        //     url: "https://www.investing.com/news/world-news/trump-secures-white-house-comeback-victory-defeating-harris-3705690",
        //     urlToImage:
        //         "https://i-invdn-com.investing.com/news/world_news_2_69x52._800x533_L_1419494365.jpg",
        //     publishedAt: "2024-11-07T04:29:14Z",
        //     content:
        //         "By Steve Holland, Nandita Bose and Joseph Ax\r\nPALM BEACH, Florida/WASHINGTON (Reuters) -Donald Trump recaptured the White House with a sweeping victory on Wednesday as tens of millions of Americans l… [+6864 chars]",
        // },
        // {
        //     source: {
        //         id: "nbc-news",
        //         name: "NBC News",
        //     },
        //     author: "The Associated Press",
        //     title:
        //         "Man who used legal loophole to live rent-free for years in NYC hotel found unfit to stand trial",
        //     description:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday.",
        //     url: "https://www.nbcnews.com/news/us-news/man-used-legal-loophole-live-rent-free-years-nyc-hotel-found-unfit-sta-rcna179066",
        //     urlToImage:
        //         "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-02/240216-new-yorker-mb-1420-e94b49.jpg",
        //     publishedAt: "2024-11-07T04:25:02Z",
        //     content:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday.\r\nDoctors examining… [+2806 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "ET Online",
        //     title:
        //         "Elon Musk Net Worth: World's richest man's wealth soars $21 billion after Donald Trump's presidential win",
        //     description:
        //         "Elon Musk's net worth surged by $20.9 billion following Donald Trump's U.S. presidential election victory.  Musk's Tesla holdings saw significant gains as investors anticipated favorable policies under a Trump administration, including potential challenges fo…",
        //     url: "https://economictimes.indiatimes.com/news/international/global-trends/elon-musk-net-worth-worlds-richest-mans-wealth-soars-21-billion-after-donald-trumps-presidential-win/articleshow/115039201.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115039402,width-1200,height-630,imgsize-33138,overlay-economictimes/articleshow.jpg",
        //     publishedAt: "2024-11-07T04:20:49Z",
        //     content:
        //         "Artificial Intelligence(AI)\r\nAI and Analytics based Business Strategy\r\nBy - Tanusree De, Managing Director- Accenture Technology Lead, Trustworthy AI Center of Excellence: ATCI\r\nView Program",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Motley Fool Australia",
        //     },
        //     author: "Bronwyn Allen",
        //     title:
        //         "Xero and 2 other ASX tech shares cracking all-time highs on Thursday",
        //     description:
        //         "The price peaks follow a significant lift in the NASDAQ overnight following Republican Donald Trump's US election victory. \nThe post Xero and 2 other ASX tech shares cracking all-time highs on Thursday appeared first on The Motley Fool Australia.",
        //     url: "https://www.fool.com.au/2024/11/07/xero-and-2-other-asx-tech-shares-cracking-all-time-highs-on-thursday/",
        //     urlToImage:
        //         "https://www.fool.com.au/wp-content/uploads/2020/09/tesserent-share-price-1200x675.jpg",
        //     publishedAt: "2024-11-07T04:18:11Z",
        //     content:
        //         "Xero Ltd (ASX: XRO) and two other ASX tech shares hit new record highs today. \r\nThe Xero share price rose by 0.72% to reach a new all-time high of $154.78 on Thursday. The accounting software-as-a-se… [+2300 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "Bloomberg",
        //     title:
        //         "Donald Trump victory gives Narendra Modi chance to reset India’s image with West",
        //     description:
        //         "US Elections: Donald Trump's return as US President brings potential benefits and challenges for India.  India may see stronger strategic ties with the US against China. Trade issues and reduced cooperation in technology and defense are possible concerns. Tru…",
        //     url: "https://economictimes.indiatimes.com/news/economy/policy/donald-trump-victory-in-us-elections-to-become-us-president-gives-narendra-modi-chance-to-reset-indias-image-with-west/articleshow/115039018.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115039056,width-1200,height-630,imgsize-482448,overlay-economictimes/articleshow.jpg",
        //     publishedAt: "2024-11-07T04:13:10Z",
        //     content:
        //         "Few leaders in Asia are more happy to see Donald Trump heading back to the White House than Indian Prime Minister Narendra Modi.Modi became one of the first major leaders to congratulate Trump on his… [+6152 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Elon Musk’s $20 Billion Net Worth Jump Leads Billionaire Surge After Trump’s Win—Fortunes Of Bezos, Buffett And More Swell - Forbes",
        //     description:
        //         "Elon Musk’s $20 Billion Net Worth Jump Leads Billionaire Surge After Trump’s Win—Fortunes Of Bezos, Buffett And More SwellForbes Trump’s Victory Is a Major Win for Elon Musk and Big-Money PoliticsThe New York Times How Elon Musk could influence Trump's second…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175421969",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T04:12:52Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Ozbargain.com.au",
        //     },
        //     author: "trixieb",
        //     title:
        //         "Mega Bloks Tesla Cybertruck With 3,283 Pieces $139.99 (Was $189.99) Delivered @ Costco Online (Membership Required)",
        //     description:
        //         "ATL! This is an online price special at $139.99 delivered. I rang Costco and the price in-store is $179.99 at Perth but there is no stock.\n\n\n and it comes fully loaded with Easter eggs, too.\r\n\n\n\nAs a comparison,\n\n<ul>\n<li>Catch $259, OnePass $246.05</li>\n<li>…",
        //     url: "https://www.ozbargain.com.au/node/875435",
        //     urlToImage: "https://files.ozbargain.com.au/n/35/875435x.jpg?h=f3f17630",
        //     publishedAt: "2024-11-07T04:07:54Z",
        //     content:
        //         "ATL! This is an online price special at $139.99 delivered. I rang Costco and the price in-store is $179.99 at Perth but there is no stock.Mega Tesla Cybertruck\r\nThe vehicle of the future arrives toda… [+1373 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Lewrockwell.com",
        //     },
        //     author: "Eric Peters",
        //     title: "And Now We’ll See",
        //     description:
        //         "Trump has done it. The question now is – will he do it? Will he do more than just talk, that is? We’ll soon see. The first thing we’ll see is who he appoints to key positions. If he appoints people such as Nimarata Haley and Mike Pompeo it will not be necessa…",
        //     url: "https://www.lewrockwell.com/2024/11/eric-peters/and-now-well-see/",
        //     urlToImage:
        //         "https://lrc-cdn.s3.amazonaws.com/assets/2021/02/LRC-share.jpg",
        //     publishedAt: "2024-11-07T04:01:00Z",
        //     content:
        //         "Trump has done it. The question now is will he do it?\r\nWill he do more than just talk, that is?\r\nWell soon see.\r\nThe first thing well see is who he appoints to key positions. If he appoints people su… [+3243 chars]",
        // },

        // {
        //     source: {
        //         id: "newsweek",
        //         name: "Newsweek",
        //     },
        //     author: "Sonam Sheth",
        //     title: "Who Might Be in Trump's New Cabinet? List of Reported Contenders",
        //     description:
        //         "From RFK Jr. to Mike Pompeo to Elon Musk, here's who Trump may be eyeing to serve in his second administration.",
        //     url: "https://www.newsweek.com/donald-trump-appoint-cabinet-members-second-presidency-1981818",
        //     urlToImage:
        //         "https://d.newsweek.com/en/full/2514812/donald-trump-ticket-splitting.jpg",
        //     publishedAt: "2024-11-07T03:51:20Z",
        //     content:
        //         "Now that Donald Trump has won the 2024 election, the race for his Cabinet is on.\r\nMultiple media outconsts have reported that people are already floating names for who will fill key roles in a second T… [+6766 chars]",
        // },
        // {
        //     source: {
        //         id: "abc-news",
        //         name: "ABC News",
        //     },
        //     author: "The Associated Press",
        //     title:
        //         "Man who used legal loophole to live rent-free for years in NYC hotel found unfit to stand trial",
        //     description:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial",
        //     url: "https://abcnews.go.com/US/wireStory/man-legal-loophole-live-rent-free-years-nyc-115589922",
        //     urlToImage:
        //         "https://i.abcnewsfe.com/a/02259373-9020-4cbc-bd29-23057d4ed6f5/wirestory_dd138294f79482f5894fa7a3d7141a5b_16x9.jpg?w=1600",
        //     publishedAt: "2024-11-07T03:26:28Z",
        //     content:
        //         "NEW YORK -- A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday.\r\nDocto… [+2834 chars]",
        // },
        // {
        //     source: {
        //         id: "financial-post",
        //         name: "Financial Post",
        //     },
        //     author: "Bloomberg News",
        //     title: "Trump Victory Gives Modi Chance to Reset India’s Image With West",
        //     description:
        //         "Few leaders in Asia are more happy to see Donald Trump heading back to the White House than Indian Prime Minister Narendra Modi.",
        //     url: "https://financialpost.com/pmn/business-pmn/trump-victory-gives-modi-chance-to-reset-indias-image-with-west",
        //     urlToImage:
        //         "https://smartcdn.gprod.postmedia.digital/financialpost/wp-content/uploads/2024/11/the-uss-widening-trade-deficit-with-india.jpg",
        //     publishedAt: "2024-11-07T03:19:57Z",
        //     content:
        //         "Few leaders in Asia are more happy to see Donald Trump heading back to the White House than Indian Prime Minister Narendra Modi.\r\nAuthor of the article:\r\n42(c(ophpfe5n]n50hu(ahum_media_dl_1.pngIntern… [+8871 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "New York Times",
        //     title: "Trump's newest economic sherpas are not like his old ones",
        //     description:
        //         "During Donald Trump's second presidential campaign, his advisory team shifted from traditional economic voices to a more unorthodox group of financial figures. This includes Wall Street leaders like Howard Lutnick, CEO of Cantor Fitzgerald, and investors Scot…",
        //     url: "https://economictimes.indiatimes.com/news/international/global-trends/trumps-newest-economic-sherpas-are-not-like-his-old-ones/articleshow/115037629.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115037701,width-1200,height-630,imgsize-106114,overlay-economictimes/articleshow.jpg",
        //     publishedAt: "2024-11-07T03:18:37Z",
        //     content:
        //         "To staff his first term as president, Donald Trump attracted a group of largely by-the-book aides and advisers who produced an economic record -- corporate tax cuts and financial deregulation -- that… [+6525 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Ozbargain.com.au",
        //     },
        //     author: "TopBargains",
        //     title:
        //         "Hot Wheels Tesla Roadster RC 1:10 Racer $124.99 Delivered @ Costco (Membership Required)",
        //     description:
        //         "Hot Wheels Tesla Roadster RC 1:10 Racer\nTake the wheel of a legendary automobile with the Hot Wheels Tesla Remote Controlled Roadster. This 1:10 scale vehicle has authentic Tesla design details with running headlights and tail lights. Its proportional steerin…",
        //     url: "https://www.ozbargain.com.au/node/875421",
        //     urlToImage: "https://files.ozbargain.com.au/n/21/875421x.jpg?h=be95ddf9",
        //     publishedAt: "2024-11-07T03:05:10Z",
        //     content:
        //         "Hot Wheels Tesla Roadster RC 1:10 RacerTake the wheel of a legendary automobile with the Hot Wheels Tesla Remote Controlled Roadster. This 1:10 scale vehicle has authentic Tesla design details with r… [+734 chars]",
        // },
        // {
        //     source: {
        //         id: "abc-news",
        //         name: "ABC News",
        //     },
        //     author: "The Associated Press",
        //     title:
        //         "Man who used legal loophole to live rent-free for years in NYC hotel found unfit to stand trial",
        //     description:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial",
        //     url: "https://abcnews.go.com/Business/wireStory/man-legal-loophole-live-rent-free-years-nyc-115589926",
        //     urlToImage:
        //         "https://i.abcnewsfe.com/a/02259373-9020-4cbc-bd29-23057d4ed6f5/wirestory_dd138294f79482f5894fa7a3d7141a5b_16x9.jpg?w=1600",
        //     publishedAt: "2024-11-07T03:02:32Z",
        //     content:
        //         "NEW YORK -- A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday.\r\nDocto… [+2834 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "seattlepi.com",
        //     },
        //     author: null,
        //     title:
        //         "Man who used legal loophole to live rent-free for years in NYC hotel found unfit to stand trial",
        //     description:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial. Manhattan District Attorney Alvin Bragg’s office on Wednesday said doctors examining Mickey Barreto deemed…",
        //     url: "https://www.seattlepi.com/business/article/man-who-used-legal-loophole-to-live-rent-free-for-19895620.php",
        //     urlToImage:
        //         "https://s.hdnux.com/photos/01/44/62/45/26421622/6/rawImage.jpg",
        //     publishedAt: "2024-11-07T03:02:06Z",
        //     content:
        //         "FILE - The New Yorker Hotel sign glows at dusk, Wednesday, April 17, 2013 in New York.Mark Lennihan/AP\r\nNEW YORK (AP) A man charged with fraud for claiming to own a storied Manhattan hotel where he h… [+3125 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "Reuters",
        //     title: "How Musk's clout with Trump could enrich his companies",
        //     description:
        //         "Musk contributed at least $119 million to a pro-Trump spending group, federal records show. ​​A Trump administration, influenced by Musk, is expected to push for softer regulations on this front, according to four SpaceX sources familiar with its regulatory s…",
        //     url: "https://economictimes.indiatimes.com/tech/technology/how-musks-clout-with-trump-could-enrich-his-companies/articleshow/115037041.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115037221,width-1200,height-630,imgsize-41000,overlay-ettech/articleshow.jpg",
        //     publishedAt: "2024-11-07T02:59:52Z",
        //     content:
        //         "Elon Musk's backing of Donald Trump's decisive victory for a second presidency puts the billionaire entrepreneur in an extraordinary position of influence to help his companies secure favorable gover… [+8190 chars]",
        // },
        // {
        //     source: {
        //         id: "financial-post",
        //         name: "Financial Post",
        //     },
        //     author: "The Associated Press",
        //     title:
        //         "Man who used legal loophole to live rent-free for years in NYC hotel found unfit to stand trial",
        //     description:
        //         "NEW YORK (AP) — A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday. Doctors examining Mickey Barreto deemed he’s not mentally comp…",
        //     url: "https://financialpost.com/pmn/man-who-used-legal-loophole-to-live-rent-free-for-years-in-nyc-hotel-found-unfit-to-stand-trial",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T02:44:19Z",
        //     content:
        //         "NEW YORK (AP) A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial, prosecutors said Wednesday.\r\nDoc… [+2821 chars]",
        // },

        // {
        //     source: {
        //         id: null,
        //         name: "Yahoo Entertainment",
        //     },
        //     author: "Associated Press",
        //     title:
        //         "Man who used legal loophole to live rent-free for years in NYC hotel found unfit to stand trial",
        //     description:
        //         "A man charged with fraud for claiming to own a storied Manhattan hotel where he had been living rent-free for years has been found unfit to stand trial...",
        //     url: "https://www.yahoo.com/news/man-used-legal-loophole-live-024221267.html",
        //     urlToImage:
        //         "https://s.yimg.com/ny/api/res/1.2/Sy_16w9Fm5uQdE1ZiCYwCw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/c5dc2d95facbb63d6859465c5e5fc6b5",
        //     publishedAt: "2024-11-07T02:42:21Z",
        //     content:
        //         "Yahoo is using AI to generate takeaways from this article. This means the info may not always match what's in the article. Reporting mistakes helps us improve the experience.Generate Key Takeaways\r\nN… [+3027 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Independent.ie",
        //     },
        //     author: "Donal O'Donovan",
        //     title:
        //         "The Trump effect – euro sees biggest one-day drop since Brexit, oil and crypto rise, but renewables fall",
        //     description:
        //         "The dollar yesterday made its biggest gains in four years and the euro suffered its sharpest drop since the Brexit vote in 2016, as markets scrambled to adjust following the news that Donald Trump will be the next US president.",
        //     url: "https://www.independent.ie/business/the-trump-effect-euro-sees-biggest-one-day-drop-since-brexit-oil-and-crypto-rise-but-renewables-fall/a876778356.html",
        //     urlToImage:
        //         "https://focus.independent.ie/thumbor/DfUSPry6mHjiesf3gB8SYP1naK8=/0x12:3194x2141/629x0/prod-mh-ireland/afe5c5f7-b496-44b0-b582-c3373c458ff5/40340fcd-f3ab-45a4-95e6-f217aaa16535/afe5c5f7-b496-44b0-b582-c3373c458ff5.jpg",
        //     publishedAt: "2024-11-07T02:30:00Z",
        //     content:
        //         "The dollar yesterday made its biggest gains in four years and the euro suffered its sharpest drop since the Brexit vote in 2016, as markets scrambled to adjust following the news that Donald Trump wi… [+3131 chars]",
        // },
        // {
        //     source: {
        //         id: "abc-news-au",
        //         name: "ABC News (AU)",
        //     },
        //     author: "Hanan Dervisevic",
        //     title:
        //         "Trump has won the US election but isn't president yet. Here's when that'll happen",
        //     description:
        //         "Donald Trump will return to the White House officially on January 20, 2025 on Inauguration day.",
        //     url: "https://www.abc.net.au/news/2024-11-07/when-does-trump-become-president-explainer/104571630",
        //     urlToImage:
        //         "https://live-production.wcms.abc-cdn.net.au/35491bd734179b72e53829ade214493b?impolicy=wcms_watermark_news&cropH=2813&cropW=5000&xPos=0&yPos=0&width=862&height=485&imformat=generic",
        //     publishedAt: "2024-11-07T02:28:27Z",
        //     content:
        //         "Republican Donald Trump will be the next US president after an historic victory that will send him back to the White House.\r\nAlthough Trump secured enough votes to win on election day, it will be a c… [+4005 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Motley Fool Australia",
        //     },
        //     author: "Bronwyn Allen",
        //     title: "Appen share price lifts 5% on oversubscribed SPP results",
        //     description:
        //         "The technology company has announced the results of its Share Purchase Plan. \nThe post Appen share price lifts 5% on oversubscribed SPP results appeared first on The Motley Fool Australia.",
        //     url: "https://www.fool.com.au/2024/11/07/appen-share-price-lifts-5-on-oversubscribed-spp-results/",
        //     urlToImage:
        //         "https://www.fool.com.au/wp-content/uploads/2023/09/tech-invest-1200x675.jpg",
        //     publishedAt: "2024-11-07T02:24:49Z",
        //     content:
        //         "The Appen Ltd (ASX: APX) share price started the day well inside the green, rising 5.05% to an intraday high of $2.29 shortly after the market open.\r\nThe share price bump followed the company releasi… [+2638 chars]",
        // },
        // {
        //     source: {
        //         id: "abc-news",
        //         name: "ABC News",
        //     },
        //     author: "ELAINE KURTENBACH AP business writer",
        //     title:
        //         "Stock Market Today: Asian shares retreat after Trump's victory as focus turns to the Fed",
        //     description:
        //         "Shares have fallen in Asia after U.S. stocks stormed to records as investors made bets on what Donald Trump’s return to the White House will mean for the economy and the world",
        //     url: "https://abcnews.go.com/US/wireStory/stock-market-today-asian-shares-retreat-after-trumps-115589203",
        //     urlToImage:
        //         "https://i.abcnewsfe.com/a/aac26776-cba5-41df-94d4-13759021a9fb/wirestory_ab18973c20d3e48e0567768378b32c01_16x9.jpg?w=1600",
        //     publishedAt: "2024-11-07T02:22:25Z",
        //     content:
        //         "Shares retreated in Asia early Thursday after U.S. stocks stormed to records as investors wagered on what Donald Trumps return to the White House will mean for the economy and the world. \r\nMarkets al… [+3621 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Elon Musk Helped Elect Trump. What Does He Expect in Return? - The New York Times",
        //     description:
        //         "Elon Musk Helped Elect Trump. What Does He Expect in Return?The New York Times Trump’s Victory Is a Major Win for Elon Musk and Big-Money PoliticsThe New York Times Trump’s Victory Boosts Billionaires’ Wealth. Musk and Bezos Are Winners, Too.Barron's Trump's …",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175421619",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T02:13:14Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Stock futures are little changed after major post-election rally as focus shifts to Fed: Live updates - CNBC",
        //     description:
        //         "Stock futures are little changed after major post-election rally as focus shifts to Fed: Live updatesCNBC Dow soars 1,500 points to record high in best day since 2022 after Trump election win: Live updatesCNBC Wall Street Salivates Over a New Trump BoomThe Wa…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175421617",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T02:13:04Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "CNA",
        //     },
        //     author: null,
        //     title:
        //         "Asian shares retreat after Trump's victory as focus turns to the Fed",
        //     description:
        //         "Shares retreated in Asia early Thursday (Nov 7) after US stocks stormed to records as investors wagered on what Donald Trump’s return to the White House will mean for the",
        //     url: "https://www.channelnewsasia.com/business/asian-shares-nikkei-kospi-hang-seng-retreat-donald-trump-us-election-victory-4732141",
        //     urlToImage:
        //         "https://onecms-res.cloudinary.com/image/upload/s--GlocBzxI--/fl_relative,g_south_east,l_one-cms:core:watermark:ap_data-1,w_0.1/f_auto,q_auto/c_fill,g_auto,h_676,w_1200/v1/mediacorp/cna/image/2024/11/07/ap24312014052601.jpg?itok=gRHL3Sp3",
        //     publishedAt: "2024-11-07T02:13:00Z",
        //     content:
        //         "Shares retreated in Asia early Thursday (Nov 7) after US stocks stormed to records as investors wagered on what Donald Trumps return to the White House will mean for the economy and the world.\r\nMarke… [+1690 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Investor's Business Daily",
        //     },
        //     author: "ED CARSON, Investor's Business Daily",
        //     title:
        //         "Dow Jones Surges On Trump Win. What To Do As Stock Market Signals Bull Run.",
        //     description:
        //         "The major indexes jumped to highs as many stocks flash buys. Start of a new bull run?",
        //     url: "https://www.investors.com/market-trend/stock-market-today/dow-jones-surges-trump-win-signals-bull-run/",
        //     urlToImage:
        //         "https://www.investors.com/wp-content/uploads/2024/04/Stock-trumpprofile-smile-01-shutt.jpg",
        //     publishedAt: "2024-11-07T02:09:38Z",
        //     content:
        //         "Dow Jones futures edged higher overnight, along with S&amp;P 500 futures and Nasdaq futures, after the stock market had huge gains following Donald Trump's election victory. The Fed meeting ends Thur… [+7242 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "NDTV News",
        //     },
        //     author: "Reuters",
        //     title:
        //         "How Donald Trump's US Election Win Would Benefit Elon Musk's Companies",
        //     description:
        //         "Elon Musk contributed at least $119 million to a pro-Trump spending group and tirelessly touted the former president at the critical late stage of his campaign against Kamala Harris.",
        //     url: "https://www.ndtv.com/world-news/how-donald-trumps-win-would-enrich-elon-musks-companies-6961715",
        //     urlToImage:
        //         "https://c.ndtvimg.com/2024-11/3ckd7ac8_elon-musk-donald-trump_625x300_07_November_24.jpeg",
        //     publishedAt: "2024-11-07T02:08:15Z",
        //     content:
        //         "Elon Musk's backing of Donald Trump's decisive victory for a second presidency gives the billionaire entrepreneur extraordinary influence to help his companies secure favorable government treatment. … [+9496 chars]",
        // },
        // {
        //     source: {
        //         id: "abc-news",
        //         name: "ABC News",
        //     },
        //     author: "ELAINE KURTENBACH AP business writer",
        //     title:
        //         "Stock Market Today: Asian shares retreat after Trump's victory as focus turns to the Fed",
        //     description:
        //         "Shares have fallen in Asia after U.S. stocks stormed to records as investors made bets on what Donald Trump’s return to the White House will mean for the economy and the world",
        //     url: "https://abcnews.go.com/Business/wireStory/stock-market-today-asian-shares-retreat-after-trumps-115589208",
        //     urlToImage:
        //         "https://i.abcnewsfe.com/a/aac26776-cba5-41df-94d4-13759021a9fb/wirestory_ab18973c20d3e48e0567768378b32c01_16x9.jpg?w=1600",
        //     publishedAt: "2024-11-07T02:06:28Z",
        //     content:
        //         "Shares retreated in Asia early Thursday after U.S. stocks stormed to records as investors wagered on what Donald Trumps return to the White House will mean for the economy and the world. \r\nMarkets al… [+3621 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Slashdot.org",
        //     },
        //     author: "feedfeeder",
        //     title:
        //         "Tesla shares soar more than 14% as Trump win is seen boosting Elon Musk's electric vehicle company - The Associated Press",
        //     description:
        //         "Tesla shares soar more than 14% as Trump win is seen boosting Elon Musk's electric vehicle companyThe Associated Press Trump’s Victory Is a Major Win for Elon Musk and Big-Money PoliticsThe New York Times How Elon Musk’s $130 million investment in Trump's vic…",
        //     url: "https://slashdot.org/firehose.pl?op=view&amp;id=175421503",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T01:52:31Z",
        //     content:
        //         "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "NDTV News",
        //     },
        //     author: "Pushkar Tiwari",
        //     title:
        //         "In Trump 2.0, A Galaxy Of Contrarian Characters Set For White House Stints",
        //     description:
        //         "Donald Trump on Wednesday sealed his historic comeback to the White House and defeated Kamala Harris.",
        //     url: "https://www.ndtv.com/world-news/donald-trump-2-0-jd-vance-elon-musk-a-galaxy-of-contrarian-characters-set-for-white-house-stints-6961648",
        //     urlToImage:
        //         "https://c.ndtvimg.com/2024-11/soa45glo_elon-musk-donald-trump-jd-vance_625x300_07_November_24.jpeg",
        //     publishedAt: "2024-11-07T01:46:03Z",
        //     content:
        //         "Republican Donald Trump on Wednesday sealed his historic comeback to the White House and defeated his Democrat rival Kamala Harris despite a criminal conviction and two impeachments while in office. … [+2716 chars]",
        // },
        // {
        //     source: {
        //         id: "the-times-of-india",
        //         name: "The Times of India",
        //     },
        //     author: "Reuters",
        //     title: "Stocks surge to record highs as Trump returns to presidency",
        //     description:
        //         "US stock market surged with Dow, S&P 500, and Nasdaq closing at all-time highs. This followed Donald Trump's victory in the 2024 US presidential election. Investors anticipate policy changes including tax cuts and deregulation.  Financial sectors, particularl…",
        //     url: "https://economictimes.indiatimes.com/markets/stocks/news/stocks-surge-to-record-highs-as-trump-returns-to-presidency/articleshow/115035621.cms",
        //     urlToImage:
        //         "https://img.etimg.com/thumb/msid-115035647,width-1200,height-630,imgsize-1573546,overlay-etmarkets/articleshow.jpg",
        //     publishedAt: "2024-11-07T01:36:33Z",
        //     content:
        //         "U.S. stocks rallied sharply to close at record highs on Wednesday after Republican Donald Trump won the 2024 U.S. presidential election in a stunning comeback four years after being voted out of the … [+4274 chars]",
        // },

        // {
        //     source: {
        //         id: null,
        //         name: "Biztoc.com",
        //     },
        //     author: "apnews.com",
        //     title:
        //         "Tesla shares soar more than 14% as Trump win is seen boosting Elon Musk's electric vehicle company",
        //     description:
        //         "Tesla shares soar more than 14% as Trump win is seen boosting Elon Musk’s electric vehicle company\nTesla shares soar more than 14% as Trump win is seen boosting Elon Musk’s electric vehicle company\nNEW YORK (AP) — Shares of Tesla soared Wednesday as investors…",
        //     url: "https://biztoc.com/x/2623269811d4e2f1",
        //     urlToImage: "https://biztoc.com/cdn/807/og.png",
        //     publishedAt: "2024-11-07T01:33:54Z",
        //     content:
        //         "Tesla shares soar more than 14% as Trump win is seen boosting Elon Musks electric vehicle companyTesla shares soar more than 14% as Trump win is seen boosting Elon Musks electric vehicle companyNEW Y… [+139 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Biztoc.com",
        //     },
        //     author: "fortune.com",
        //     title:
        //         "How Elon Musk’s $130 million investment in Trump’s victory could reap a huge pay off for Tesla and the rest of his business empire",
        //     description:
        //         "The world's richest person could get a lot of help with contracts and regulatory headaches during the Trump administration. Read More",
        //     url: "https://biztoc.com/x/b11a87bc4a32af0b",
        //     urlToImage: "https://biztoc.com/cdn/807/og.png",
        //     publishedAt: "2024-11-07T01:33:17Z",
        //     content:
        //         "The world's richest person could get a lot of help with contracts and regulatory headaches during the Trump administration. Read More\r\nThis story appeared on fortune.com, 2024-11-07 01:23:54.",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "OK!",
        //     },
        //     author: "Angilene Gacute",
        //     title:
        //         "Trump Lackey Elon Musk's Biggest Controversies: From Targeting The Don's Showbiz Nemesis Taylor Swift to Bitter Attacks on Joe Biden and Kamala Harris",
        //     description:
        //         "Elon Musk has frequently sparked unrest due to his provocative statements and controversies, and he may be an even bigger voice following Trump's win.",
        //     url: "https://okmagazine.com/p/elon-musk-biggest-controversies/",
        //     urlToImage:
        //         "https://media.radaronline.com/brand-img/kbsM51EUf/1200x628/elon-musk-1730852224015.jpg",
        //     publishedAt: "2024-11-07T01:30:00Z",
        //     content:
        //         "In June 2018, 12 Thai boys and their football coach got trapped in a flooded Tham Luang cave in Thailand, immediately becoming headlines of global news organizations. The Tesla CEO offered to assist … [+816 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "CNBC",
        //     },
        //     author: null,
        //     title: "CNBC Daily Open: The Trump rally begins",
        //     description:
        //         "Donald Trump’s victory in the U.S. presidential elections is providing a tailwind to risk assets. But Wednesday's frenzy could have been a relief rally too.",
        //     url: "https://www.cnbc.com/2024/11/07/cnbc-daily-open-the-trump-rally-begins.html",
        //     urlToImage:
        //         "https://image.cnbcfm.com/api/v1/image/108059094-1730918204395-gettyimages-2182526166-AFP_36LH9ZM.jpeg?v=1730918391&w=1920&h=1080",
        //     publishedAt: "2024-11-07T01:26:36Z",
        //     content:
        //         "This report is from today's CNBC Daily Open, our international markets newsconstter. CNBC Daily Open brings investors up to speed on everything they need to know, no matter where they are. Like what yo… [+3477 chars]",
        // },
        // {
        //     source: {
        //         id: null,
        //         name: "Freerepublic.com",
        //     },
        //     author: "Yahoo! Finance",
        //     title:
        //         "Stock market today: Dow, Nasdaq, S&P 500 all soar to records after Trump triumphs in election",
        //     description:
        //         "US stocks surged to record highs on Wednesday as investors digested Donald Trump's victory in the US presidential election over Kamala Harris. The Dow Jones Industrial Average jumped 3.5%, or about 1,500 points to close at a record and post its best day since…",
        //     url: "https://freerepublic.com/focus/f-news/4276430/posts",
        //     urlToImage: null,
        //     publishedAt: "2024-11-07T01:24:53Z",
        //     content:
        //         "Skip to comments.\r\nStock market today: Dow, Nasdaq, S&amp;P 500 all soar to records after Trump triumphs in electionYahoo! Finance ^\r\n | November 6, 2024\r\n | Alexandra Canal , Josh Schafer and Ines F… [+7663 chars]",
        // },
        // {
        //     source: {
        //         id: "the-jerusalem-post",
        //         name: "The Jerusalem Post",
        //     },
        //     author: "BY ARONA MASKIL",
        //     title:
        //         "Recent tech layoffs reflect not just economic realities but cultural truths",
        //     description:
        //         "Recent layoffs expose the intersection of technology, humanity, and culture in a way that no algorithm can fully calculate.",
        //     url: "https://www.jpost.com/opinion/article-827896",
        //     urlToImage:
        //         "https://images.jpost.com/image/upload/f_auto,fl_lossy/c_fill,g_faces:center,h_407,w_690/622463",
        //     publishedAt: "2024-11-07T01:24:52Z",
        //     content:
        //         "The year 2024 has been brutal for tech workers. What started as a trickle of downsizing in 2022 has now turned into a full-blown wave of layoffs that shows no signs of stopping. From Silicon Valley t… [+6190 chars]",
        // },
        // {
        //     source: {
        //         id: "fortune",
        //         name: "Fortune",
        //     },
        //     author: "Jenn Brice",
        //     title:
        //         "How Elon Musk’s $130 million investment in Trump’s victory could reap a huge pay off for Tesla and the rest of his business empire",
        //     description:
        //         "The world's richest person could get a lot of help with contracts and regulatory headaches during the Trump administration.",
        //     url: "https://fortune.com/2024/11/06/elon-musk-donald-trump-tesla-spacex-xai-boring-neuralink/",
        //     urlToImage:
        //         "https://fortune.com/img-assets/wp-content/uploads/2024/11/GettyImages-2181962905_45ea9c-e1730941564396.jpg?resize=1200,600",
        //     publishedAt: "2024-11-07T01:23:54Z",
        //     content:
        //         "Donald Trumps election-night address to the country confirmed that one of the evenings biggest winnersin addition to himselfwas Elon Musk. Trump spent a hefty portion of his scattered victory speech … [+5853 chars]",
        // },
    ];
    capatlizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        // console.log("NewsItem constructor");
        this.state = {
            article: this.article,
            // loading: false,
            page: 1,
        };

        document.title = `${this.capatlizeFirstLetter(this.props.category)} - Current News`;
    }

    
    updateNews = async () => {
        this.setState({ loading: true });
        try {
            const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=f09a9e68a3f24cdb8384663c5ddffe75&pageSize=${this.props.pageSize}&page= ${this.state.page}`;

            const data = await fetch(url);
            const parsedData = await data.json();
            this.setState({
                article: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false,
            });
        } catch (error) {
            console.log(error);
            this.setState({ loading: false});
        
        }
    };

    async componentDidMount() {
        this.updateNews();
    }
    handlePreviousclick = async () => {
        this.setState({ page: this.state.page - 1 });
        this.setState({ loading: true });
        this.updateNews();
    };
    handleNextclick = async () => {
        this.setState({ page: this.state.page + 1 });
        this.setState({ loading: true });
        this.updateNews();
    };
    render() {
        // console.log(this.state.article);
        return (
            <div className="container justify-content-center">
                <h1 className="text-center my-2" style={{ marginTop: "30px", marginBottom: "30px" }}>Current News Headlines</h1>
                {this.state.loading && <Spinner />}
                <div
                    className="row my-3 mb-3 justify-content-center"
                    style={{ marginLeft: "40px" }}
                >
                    {!this.state.loading &&
                        this.state.article.map((e) => {
                            return (
                                <div
                                    className="col-md-4"
                                    key={e.url}
                                    style={{
                                        marginBottom: "20px",
                                        marginTop: "30px",
                                        height: "400px",
                                        width: "400px",
                                    }}
                                >
                                    <NewsItem
                                        title={e.title ? e.title.slice(0, 45) : " "}
                                        imageUrl={e.urlToImage}
                                        newsUrl={e.url}
                                        author={e.author ? e.author.slice(0, 20) : " "}
                                        publishedAt={e.publishedAt}
                                    />
                                </div>
                            );
                        })}
                </div>
                <div className="d-flex justify-content-between my-3 container">
                    <button
                        disabled={this.state.page <= 1}
                        className="btn btn-dark"
                        onClick={this.handlePreviousclick}
                    >
                        &larr; Previuos
                    </button>
                    <button
                        disabled={
                            Math.ceil(this.state.totalResults / 20) === this.state.page
                        }
                        className="btn btn-dark"
                        onClick={this.handleNextclick}
                    >
                        Next &rarr;
                    </button>
                </div>
                <Footer />
            </div>
        );
    }
}

export default News;
