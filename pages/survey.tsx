import Head from "next/head";
import { ReactNode, SetStateAction, useEffect, useState } from "react";
import InputGroup from "../components/InputGroup";
import ToggleButton from "../components/ToggleButton";
import { AccountType } from "../util/types";

//page for collecting additional information about the user
export default function Survey() {
    const [account, setAccount] = useState<AccountType>();
    const [page, setPage] = useState(0);

    const [interests, setInterests] = useState([""]); //which interest options are selected
    const [freeDay, setFreeDay] = useState(""); //which free day option is selected
    const [groupWork, setGroupWork] = useState(""); //which group work option is selected
    const [races, setRaces] = useState([""]); //which race options are selected
    const [pronoun, setPronoun] = useState(""); //which pronoun option is selected

    const interestOptions = [
        "Balenciaga",
        "GUCCI",
        "Louis Vuitton",
        "Armani",
        "Prada",
        "Chanel",
        "Versace",
        "Cartier",
        "Hermes",
    ];
    const freeDayOptions = [
        "Spend time outside with friends",
        "Go meet with other family members",
        "Chill at home",
        "What's free time? I'm always working",
        "Go out on a date",
    ];
    const groupWorkOptions = [
        "I like to work in a large group fosho",
        "I like to work in a small group",
        "I like to work independently",
    ];
    const raceOptions = [
        "White",
        "Latinx",
        "Asian (including subcontinent India)",
        "African-American",
        "Native American",
        "Russian",
        "Eastern European",
        "Middle Eastern",
        "African",
        "British",
        "French",
        "Spanish",
        "Scandanavian",
        "German",
        "Other",
    ];
    const pronounOptions = [
        "he/him",
        "she/her",
        "they/them",
        "he/them",
        "she/them",
        "other",
    ];

    const [start, setStart] = useState(0);
    const [millis, setMillis] = useState<number>(); //initial values before adding from this page
    const [newMillis, setNewMillis] = useState<number>(); //new amount of milliseconds to add

    //timer and click counter
    useEffect(() => {
        const x = localStorage.getItem("survey");
        if (x === null || x === "{}") { //if localstorage key doesn't exist, create it
            localStorage.setItem("survey", JSON.stringify({millis: 0, clicks: 0}));
        } else {
            const x2 = JSON.parse(x);
            setMillis(x2.millis);
        }
        setNewMillis(0);
        setStart(Date.now);
        document.addEventListener("mousedown", handleClick);
        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    }, []);

    //update millis roughly once per second
    useEffect(() => {
        if (start && millis !== undefined && newMillis !== undefined) {
            setTimeout(() => {
                setNewMillis(Date.now() - start);
                const x = localStorage.getItem("survey");
                if (x !== null) {
                    let x2 = JSON.parse(x);
                    x2.millis = millis + newMillis;
                    localStorage.setItem("survey", JSON.stringify(x2));
                }
            }, 1000);
        }
    }, [newMillis]);

    //handle click event
    const handleClick = () => {
        const x = localStorage.getItem("survey");
        if (x !== null) {
            let x2 = JSON.parse(x);
            x2.clicks += 1;
            localStorage.setItem("survey", JSON.stringify(x2));
        }
    }

    //get account info from localStorage; if it doesn't exist, send user to login page
    useEffect(() => {
        if (!account) {
            const acc = localStorage.getItem("shtemAccount");
            if (acc === "undefined" || acc === null) {
                location.href = "/login";
            } else {
                setAccount(JSON.parse(acc));
            }
        }
    });

    //function to add/remove an interest
    const updateInterests = (name: string, on: boolean) => {
        if (on) {
            setInterests([...interests, name].filter(e => e !== ""));
        } else {
            setInterests(interests.filter(e => e !== name));
        }
    }

    //function to add/remove a race
    const updateRaces = (name: string, on: boolean) => {
        if (on) {
            setRaces([...races, name].filter(e => e !== ""));
        } else {
            setRaces(races.filter(e => e !== name));
        }
    }

    const pages: ReactNode[] = [
        <>
            <h1 className="text-2xl font-bold text-center">
                We{"'"}d love to make this shopping experience perfect for <em>you</em>!
            </h1>
            <h1 className="text-xl font-bold text-center whitespace-nowrap mt-4">
                Let us know what your interests are
            </h1>
            <p className="italic text-center">
                Click to select any number of interests
            </p>
            <div className="flex flex-wrap gap-1 justify-center">
                {interestOptions.map((x, i) =>
                    <ToggleButton
                        key={i}
                        label={x}
                        callback={updateInterests}
                        offBg="bg-amber-100 hover:bg-amber-200"
                    />
                )}
            </div>
        </>,
        <>
            <h1 className="text-2xl font-bold text-center">
                We would love to get some more information about you so that we can provide a more pleasurable user experience!
            </h1>
            <h1 className="text-xl font-bold text-center whitespace-nowrap mt-4">
                You have a free day. What do you do on this day?
            </h1>
            <p className="italic text-center">
                One answer only. 
            </p>
            <div className="flex flex-wrap gap-1 justify-center">
                {freeDayOptions.map((x, i) =>
                    <ToggleButton
                        key={i}
                        noToggle
                        isOn={freeDay === x}
                        label={x}
                        callback={() => setFreeDay(x)}
                        offBg="bg-amber-100 hover:bg-amber-200"
                    />
                )}
            </div>
        </>,
        <>
            <h1 className="text-2xl font-bold text-center">
                We would love to get some more information about you so that we can provide a more pleasurable user experience!
            </h1>
            <h1 className="text-xl font-bold text-center whitespace-nowrap mt-4">
                You have a project in school. Your teacher has given you an option to either work in a large group, small group or by youself? Which one do you decide upon?
            </h1>
            <p className="italic text-center">
                One answer only. 
            </p>
            <div className="flex flex-wrap gap-1 justify-center">
                {groupWorkOptions.map((x, i) =>
                    <ToggleButton
                        key={i}
                        noToggle
                        isOn={groupWork === x}
                        label={x}
                        callback={() => setGroupWork(x)}
                        offBg="bg-amber-100 hover:bg-amber-200"
                    />
                )}
            </div>
        </>,
        <>
            <h1 className="text-2xl font-bold text-center">
                We would love to get some more information about you so that we can provide a more pleasurable user experience!
            </h1>
            <h1 className="text-xl font-bold text-center whitespace-nowrap mt-4">
                In order to curate a feed that is personally designed for you, we have to know: what is your ethnicity?
            </h1>
            <div className="flex flex-wrap gap-1 justify-center">
                {raceOptions.map((x, i) =>
                    <ToggleButton
                        key={i}
                        label={x}
                        callback={updateRaces}
                        offBg="bg-amber-100 hover:bg-amber-200"
                    />
                )}
            </div>
        </>,
        <>
            <h1 className="text-2xl font-bold text-center">
                We would love to get some more information about you so that we can provide a more pleasurable user experience!
            </h1>
            <h1 className="text-xl font-bold text-center whitespace-nowrap mt-4">
                To finalize your feed, we also need to know: what are your preferred pronouns?
            </h1>
            <div className="flex flex-wrap gap-1 justify-center">
                {pronounOptions.map((x, i) =>
                    <ToggleButton
                        key={i}
                        noToggle
                        isOn={pronoun === x}
                        label={x}
                        callback={() => setPronoun(x)}
                        offBg="bg-amber-100 hover:bg-amber-200"
                    />
                )}
            </div>
        </>,
    ];

    //function to go to next page
    const advance = () => {
        if (page === pages.length - 1) {
            handleSubmit();
        } else {
            setPage(page + 1);
        }
    }

    //set localStorage and go to index
    const handleSubmit = () => {
        localStorage.setItem("shtemInterests", JSON.stringify(interests));
        localStorage.setItem("shtemInfo1", JSON.stringify(freeDay));
        localStorage.setItem("shtemInfo2", JSON.stringify(groupWork));
        localStorage.setItem("shtemInfo3", JSON.stringify(races));
        localStorage.setItem("shtemInfo4", JSON.stringify(pronoun));
        location.href = "/home";
    }

    return (
        <div className="w-screen h-screen bg-blue-100">
            <Head>
                <title>SHTEM Website | Survey</title>
                <meta name="description" content="Survey" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        
            <main className="container h-4/5 flex justify-center items-center">
                <div className="bg-white p-6 pb-4 rounded-lg flex flex-col gap-3 text-lg max-w-min">
                    {pages[page]}
                    <div className="flex mt-2 justify-center">
                        <button
                            onClick={() => advance()}
                            className="bg-blue-500 rounded-lg px-3 pt-1 pb-1.5 text-white" >
                            {page === pages.length - 1 ? "Submit" : "Next"}
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}