(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Courthouse = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Courthouse & Market House";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Throughout the 1800s, a “market house” stood close to the courthouse.” For nearly 50 years, human beings were sold and traded at this “market house.” This slave market included the sale of women and children.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
  }

};
var _default = Courthouse;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Donate = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Donate to the Fuller Story";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerDonate.jpg");
    temp.setAttribute("alt", "Donate");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "If you would like to support this effort to tell the Fuller Story of Franklin, please click on the link to give online. All donations are tax deductible. When making a donation, please email Kevin Riggs at kevin@franklincommunitychurch.org and reference that the donation is for the Fuller Story project so we can ensure it is applied in the correct way. You can choose either Franklin Community Church or Franklin Community Development for the organization, just make sure to also send the email to Kevin.";
    div.appendChild(temp);
    let pageLink = document.createElement("a");
    pageLink.setAttribute("href", "https://franklincommunitychurch.org/giving/");
    pageLink.setAttribute("class", "link");
    pageLink.setAttribute("target", "blank");
    temp = document.createElement("p");
    temp.setAttribute("id", "donate_text");
    temp.innerHTML = "Donate Now";
    pageLink.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
    placeholder.appendChild(pageLink);
  }

};
var _default = Donate;
exports.default = _default;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Home = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = `
    <img src="images/artistRendering1.jpg" class="mainPagePic">
    <img src="images/statue.JPG" class="mainPagePic">
    <p class="mainPageTitle">The following resolution was passed on September 25, 2018. We thank everyone for their support and God for His favor.</p>
    <img src="images/resolution.jpg" class="mainPagePic">
    <p class="mainText">After the tragic events in Charlottesville, VA last August, conversations started happening in Franklin about how our city would \(or would not) react if something similar happened here. In a lot of ways, our city is like Charlottesville. These discussions led to the thought that it would be better to be “actionary” instead of “reactionary.” The result of these conversations led to the idea that instead of taking down historical markers, what if we added to them and told a     “fuller story.” Further, it was believed that the CHURCH in Franklin should lead this effort.<br><br>Over the course of this past year we have initiated further dialogue between<br><br>•…pastors and church leaders.<br>•…the historical community in Franklin and Williamson County.<br>•…the city administrator, city mayor and county mayor.<br>•…the downtown business community.<br>•…and a host of individuals.
    <br><br><br><br><br>Timeline <br><br><br>Phase 1 (four historical markers around the downtown square) – A dedication of these markers on Monday, January 14, 2019 during the CHURCHES’ annual Martin Luther King Day Celebration. <br><br>The four markers are:<br><br>•	United States Colored Troops<br>•	1867 Downtown Riot<br>•	Courthouse and Market House<br>•	Reconstruction and Jim Crow<br><br><br>Phase 2 – Erect a statue of a United States Colored Troop soldier at a yet to be determined location inside the city limits of Franklin. A dedication of this statue on Monday, January 13, 2020 during the CHURCHES’ annual Martin Luther King Day Celebration. <br><br>• Present “Fuller Story” at BOMA Workshop on Tuesday, August 14, 2018. <br>•	Present “Fuller Story” to County Commissioners on Monday, September 10, 2018.<br>• Announce fundraiser for the USCT statue September / October 2018.<br>• A fall “revival” with the CHURCHES in Franklin / Williamson County.<br><br><br><br><br>The Ask <br><br>We are asking you, the city leaders, to lend your support behind our efforts and to help us with the locations of the markers and the statue. We are not asking the city for any money. All funds will be raised through private donations.</p>
            `;
  }

};
var _default = Home;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

var _nav = _interopRequireDefault(require("./nav"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_nav.default.loadNavbar();

_home.default.main();

},{"./home":3,"./nav":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const news = [{
  href: "https://www.tennessean.com/story/news/local/williamson/2019/02/12/franklin-tn-african-american-markers-civil-war-history/2841020002/?fbclid=IwAR0gYj0xF07yjelwrUdqGwYFtabVLC81zDwT7MUY-zEhkGGFZCqCs5dDPoY",
  img: "../images/warover.png",
  date: "February 12, 2019",
  source: "The Tennessean",
  content: "'The war is over:' Franklin moves forward with location for African-American markers"
}, {
  href: "https://franklinhomepage.com/franklin-aldermen-more-open-to-fuller-story-historical-marker-plan-after-tuesday-work-session/?fbclid=IwAR2zSK3PwhKd9mLtDaK55tV01mlrtpD2wclblb6ZfPobcsdJwfdJyqQ-Nro",
  img: "../images/artistRendering2.png",
  date: "February 12, 2019",
  source: "Franklin Homepage",
  content: "Franklin aldermen more open to ‘fuller story’ historical marker plan after Tuesday work session"
}, {
  href: "http://www.williamsonherald.com/news/article_a047f9de-1efe-11e9-b913-f34c8c53b334.html",
  img: "../images/alderman.jpg",
  date: "January 23, 2019",
  source: "Williamson Herald",
  content: "Aldermen show strong opinions on 'Fuller Story' marker placement"
}, {
  href: "https://williamsonsource.com/martin-luther-king-jr-celebration-tells-fuller-story/",
  img: "../images/williamsonSource.jpg",
  date: "January 22, 2019",
  source: "Williamson Source",
  content: "Martin Luther King Jr. Celebration Shares “Fuller Story”"
}, {
  href: "http://www.williamsonherald.com/news/article_4026d0a0-1dc5-11e9-9227-2b9896f57f70.html",
  img: "../images/mlk.jpg",
  date: "January 21, 2019",
  source: "Williamson Herald",
  content: "Martin Luther King Jr.’s dream realized in 'Fuller Story' during celebrations Monday"
}, {
  href: "https://brentwoodhomepage.com/stone-of-hope-theme-inspires-mlk-day-attendees-to-consider-fuller-story-of-history/",
  img: "../images/stone.jpg",
  date: "January 21, 2019",
  source: "Brentwood Homepage",
  content: "‘Stone of Hope’ theme inspires MLK Day attendees to consider fuller story of history"
}, {
  href: "https://brentwoodhomepage.com/ceremony-for-mlk-day-in-franklin-to-include-update-on-fuller-story/",
  img: "../images/ceremony.jpg",
  date: "January 17, 2019",
  source: "Brentwood Homepage",
  content: "‘Ceremony for MLK Day in Franklin to include update on ‘fuller story’"
}, {
  href: "http://www.williamsonherald.com/news/article_b013699a-c12d-11e8-ae02-474ac8e99e7b.html?utm_medium=social&utm_source=facebook&utm_campaign=user-share",
  img: "../images/wh925.jpg",
  date: "September 25, 2018",
  source: "Williamson Herald",
  content: "Franklin BOMA approves 'The Fuller Story' proposal to install African-American historical markers"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/09/25/franklin-square-historic-markers-confederate-statute/1413243002/",
  img: "../images/tn925.jpg",
  date: "September 25, 2018",
  source: "The Tennessean",
  content: "Franklin votes to support African-American historic markers near Confederate monument"
}, {
  href: "https://brentwoodhomepage.com/resolution-to-support-fuller-story-historic-markers-unanimously-approved-will-place-on-public-land-in-town-square/",
  img: "../images/bh925.jpg",
  date: "September 25, 2018",
  source: "Brentwood Homepage",
  content: "Resolution to support \"Fuller Story\" historic markers unanimously approved, will place on public land in town square"
}, {
  href: "https://franklinhomepage.com/franklin-groups-individuals-write-letters-of-support-for-fuller-story-initiative-will-present-to-board-of-mayor-and-aldermen-tuesday/",
  img: "../images/fh925.jpeg",
  date: "September 24, 2018",
  source: "Brentwood Homepage",
  content: "Franklin groups, individuals write letters of support for \"Fuller Story\" initiative, will present to Board of Mayor and Aldermen Tuesday"
}, {
  href: "http://www.williamsonherald.com/opinion/article_b1b45d94-b6de-11e8-8ff7-3b52f453b603.html#comments",
  img: "../images/williamsoncommentary.jpg",
  date: "September 12, 2018",
  source: "Williamson Herald",
  content: "Commentary: Good idea for slavery plaques stymied by group's resistance to it"
}, {
  href: "http://www.williamsonherald.com/opinion/article_20cfe1e2-b6a0-11e8-84bd-cb9cf49817dc.html",
  img: "../images/williamsonLetter.jpg",
  date: "September 12, 2018",
  source: "Williamson Herald",
  content: "Letter to Editor: Moving forward with 'The Fuller Story' preferred by pastors"
}, {
  href: "https://franklinhomepage.com/franklin-intends-to-go-to-court-to-clarify-ownership-of-public-square/",
  img: "../images/news5.jpg",
  date: "August 29, 2018",
  source: "Franklin Homepage",
  content: "Franklin Intends to go to court to clarify ownership of Public Square"
}, {
  href: "http://www.williamsonherald.com/news/article_b1ae9be0-ab1a-11e8-a376-0727acdea1f3.html",
  img: "../images/news8.jpg",
  date: "August 28, 2018",
  source: "Williamson Herald",
  content: "UDC wants new placement for proposed Civil War markers; BOMA defers decision"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/08/28/daughters-confederacy-franklin-square-williamson-county/1126685002/",
  img: "../images/news7.jpg",
  date: "August 28, 2018",
  source: "The Tennessean",
  content: "Daughters of Confederacy want say in African-American history markers on Franklin Square"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/08/28/franklin-confederate-monument-public-square/1128457002/",
  img: "../images/news9.jpeg",
  date: "August 28, 2018",
  source: "The Tennessean",
  content: "Franklin files suit to figure out who owns land on public square"
}, {
  href: "https://franklinhomepage.com/franklin-aldermen-vote-to-slow-effort-to-add-african-american-history-markers-on-the-public-square/",
  img: "../images/news6.jpg",
  date: "August 28, 2018",
  source: "Franklin Homepage",
  content: "African American history markers on the Public Square"
}, {
  href: "https://www.stardem.com/news/national/black-pastors-confederate-descendants-share-civil-war-history-in-tennessee/article_20dcac5f-e1d8-5ece-b8c2-18295342ce33.html",
  img: "../images/theStar.jpg",
  date: "August 24, 2018",
  source: "The Star Democrat",
  content: "Black pastors, Confederate descendants share Civil War history in Tennessee town"
}, {
  href: "https://www.wkrn.com/news/group-of-franklin-pastors-hope-to-add-markers-to-confederate-monument_20180822120323/1388036676",
  img: "../images/wkrnVideo.jpg",
  date: "August 22, 2018",
  source: "WKRN",
  content: "Group of Franklin pastors hope to add markers to Confederate monument"
}, {
  href: "https://civilwartalk.com/threads/pastors-propose-historic-markers-detailing-slave-auctions-and-keeping-confederate-statue-too.149047/",
  img: "../images/civilWarTalks.jpg",
  date: "August 16, 2018",
  source: "Civil War Talk",
  content: "Pastors Propose Historic Markers Detailing Slave Auctions and Keeping Confederate Statue Too"
}, {
  href: "https://www.wsmv.com/news/pastors-push-for-diversity-in-franklin-historical-markers/article_5c3915f8-a0e0-11e8-8d2e-9b1f36f9ed69.html",
  img: "../images/wsmv.jpg",
  date: "August 15, 2018",
  source: "WSMV",
  content: "Pastors push for diversity in Franklin historical markers"
}, {
  href: "https://franklinhomepage.com/franklin-pastors-propose-historic-markers-detailing-slave-auctions-us-colored-troop-efforts/",
  img: "../images/franklinHomepage.jpg",
  date: "August 14, 2018",
  source: "Franklin Homepage",
  content: "Franklin pastors propose historic markers detailing slave auctions, African-American Civil War efforts"
}, {
  href: "https://www.tennessean.com/story/news/local/williamson/2018/08/14/franklin-confederate-monument-williamson-county-faith-leaders/993144002/",
  img: "../images/tennessean.jpg",
  date: "August 14, 2018",
  source: "The Tennessean",
  content: "Franklin faith leaders want markers next to Confederate monument"
}, {
  href: "http://www.williamsonherald.com/news/article_0a0756b6-a016-11e8-9504-8fe8eb1b677d.html",
  img: "../images/williamsonHerald.jpg",
  date: "August 14, 2018",
  source: "Williamson Herald",
  content: "Three preachers and a historian tell 'fuller story' by proposing Civil War monument, markers"
}, {
  href: "https://brentwoodhomepage.com/franklin-pastors-propose-historic-markers-detailing-slave-auctions-us-colored-troop-efforts/",
  img: "../images/brentwoodHomepage.jpg",
  date: "August 14, 2018",
  source: "Brentwood Homepage",
  content: "Franklin pastors propose historic markers detailing slave auctions, African-American Civil War efforts"
}];
const Media = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let newsSection = document.createDocumentFragment();
    news.forEach(story => {
      let article = document.createElement("article");
      article.setAttribute("class", "new_story");
      let link = document.createElement("a");
      link.setAttribute("class", "news_link");
      link.setAttribute("href", story.href);
      link.setAttribute("target", "blank");
      let image = document.createElement("img");
      image.setAttribute("class", "new_image");
      image.setAttribute("src", story.img);
      let date = document.createElement("p");
      date.setAttribute("class", "new_date");
      date.innerHTML = `${story.date} - ${story.source}`;
      let content = document.createElement("p");
      content.setAttribute("class", "new_content");
      content.innerHTML = story.content;
      link.appendChild(image);
      link.appendChild(date);
      link.appendChild(content);
      article.appendChild(link);
      newsSection.appendChild(article);
    });
    placeholder.appendChild(newsSection);
  }

};
var _default = Media;
exports.default = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _usct = _interopRequireDefault(require("./usct"));

var _courthouse = _interopRequireDefault(require("./courthouse"));

var _riot = _interopRequireDefault(require("./riot"));

var _reconstruction = _interopRequireDefault(require("./reconstruction"));

var _statue = _interopRequireDefault(require("./statue"));

var _media = _interopRequireDefault(require("./media"));

var _donate = _interopRequireDefault(require("./donate"));

var _home = _interopRequireDefault(require("./home"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let placeholder = document.getElementById("Navbar");
const navBar = {
  eventListeners(event) {
    let newPage = event.target.value;

    switch (newPage) {
      case "usct":
        navBar.hideMarkers();

        _usct.default.main();

        break;

      case "courthouse":
        navBar.hideMarkers();

        _courthouse.default.main();

        break;

      case "riot":
        navBar.hideMarkers();

        _riot.default.main();

        break;

      case "reconstruction":
        navBar.hideMarkers();

        _reconstruction.default.main();

        break;

      case "statue":
        navBar.hideMarkers();

        _statue.default.main();

        break;

      case "media":
        navBar.hideMarkers();

        _media.default.main();

        break;

      case "donate":
        navBar.hideMarkers();

        _donate.default.main();

        break;

      case "home":
        navBar.hideMarkers();

        _home.default.main();

        break;

      case "markers":
        navBar.hideMarkers();
        break;
    }
  },

  makeMarkers(value, text) {
    let btn = document.createElement("button");
    btn.addEventListener("click", navBar.eventListeners);
    btn.setAttribute("value", value);
    btn.setAttribute("class", "markers");
    btn.innerText = text;
    return btn;
  },

  makeBtn(value, text) {
    let btn = document.createElement("button");
    btn.addEventListener("click", navBar.eventListeners);
    btn.setAttribute("value", value);
    btn.setAttribute("class", "menu");
    btn.innerText = text;
    return btn;
  },

  loadNavbar() {
    let elementHolder = document.createDocumentFragment();
    let heading = document.createElement("h1");
    heading.setAttribute("id", "mainTitle");
    heading.innerText = "Telling a FULLER STORY of Franklin";
    elementHolder.appendChild(heading);
    let subHeading = document.createElement("h3");
    subHeading.setAttribute("id", "subTitle");
    subHeading.innerText = "Learning From Our Past To Reconcile Our Future";
    elementHolder.appendChild(subHeading);
    let div = document.createElement("div");
    div.setAttribute("class", "heading");
    let sect = document.createElement("section");
    sect.setAttribute("class", "home_menu");
    sect.appendChild(navBar.makeBtn("home", "Home Page"));
    div.appendChild(sect);
    sect = document.createElement("section");
    sect.setAttribute("class", "markers_menu");
    let markers = navBar.makeBtn("markers", "Menu");
    markers.setAttribute("id", "Markers");
    sect.appendChild(markers);
    sect.appendChild(navBar.makeMarkers("usct", "United States Colored Troops"));
    sect.appendChild(navBar.makeMarkers("courthouse", "Courthouse / Market House"));
    sect.appendChild(navBar.makeMarkers("riot", "1867 Riot"));
    sect.appendChild(navBar.makeMarkers("reconstruction", "Reconstruction & Jim Crow"));
    sect.appendChild(navBar.makeMarkers("statue", "USCT Statue"));
    sect.appendChild(navBar.makeMarkers("donate", "Donate"));
    div.appendChild(sect);
    sect = document.createElement("section");
    sect.setAttribute("class", "media_menu");
    sect.appendChild(navBar.makeBtn("media", "News Media"));
    div.appendChild(sect);
    elementHolder.appendChild(div);
    placeholder.appendChild(elementHolder);
    navBar.hideMarkers();
  },

  hideMarkers() {
    let Markers = document.getElementById("Markers");
    Markers.removeEventListener("click", navBar.hideMarkers);
    Markers.addEventListener("click", navBar.showMarkers);
    Markers.innerHTML = "Menu";
    $("#Markers").show();
    $(".markers").hide();
  },

  showMarkers() {
    let Markers = document.getElementById("Markers");
    Markers.removeEventListener("click", navBar.showMarkers);
    Markers.addEventListener("click", navBar.hideMarkers);
    Markers.innerHTML = "Hide Menu";
    $(".markers").show();
  }

};
var _default = navBar; // <p id="leftHeading">Seeking To Tell A &nbsp</p>
// <p id="bigHeading">Fuller Story</p>
// <p id="rightHeading">&nbsp Of Franklin</p>
// <p id="tagHeading">Learning From Our Past To Reconcile Our Future</p>

exports.default = _default;

},{"./courthouse":1,"./donate":2,"./home":3,"./media":5,"./reconstruction":7,"./riot":8,"./statue":9,"./usct":10}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Reconstruction = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "Reconstruction & Jim Crow";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Following the Civil War the 13th, 14th, and 15th Amendments were passed and ratified. In 1877 Reconstruction ended and the Jim Crow Era soon began. It was during this time that separate restrooms and separate water fountains were in Franklin.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
  }

};
var _default = Reconstruction;
exports.default = _default;

},{}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const Riot = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "1867 Riot";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "On July 6, 1867, after a delayed July 4th parade and political speeches, a race riot broke out on the square injuring several people and killing one person.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
  }

};
var _default = Riot;
exports.default = _default;

},{}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
let images = ["../images/statue.JPG", "../images/statue1.JPG", "../images/statue2.JPG", "../images/statue3.JPG"];
const Statue = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let fragment = document.createDocumentFragment();
    let mainText = document.createElement("p");
    mainText.setAttribute("id", "main_text");
    mainText.innerHTML = "United States Colored Troops Statue";
    fragment.appendChild(mainText);
    images.forEach(item => {
      let photo = document.createElement("img");
      photo.setAttribute("class", "statue_image");
      photo.setAttribute("src", item);
      fragment.appendChild(photo);
    });
    let subTitle = document.createElement("p");
    subTitle.setAttribute("id", "sub_title");
    subTitle.innerHTML = "The ultimate goal of the “Fuller Story” is to erect a statue of a USCT Soldier. <br><br>The goal is for this soldier to be placed inside the City Limits.<br><br>The exact location has yet to be determined.";
    fragment.appendChild(subTitle);
    placeholder.appendChild(fragment);
  }

};
var _default = Statue;
exports.default = _default;

},{}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let placeholder = document.getElementById("Main");
const USCT = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = "";
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute("class", "marker_div");
    let div = document.createElement("div");
    div.setAttribute("class", "marker_text_div");
    let temp = document.createElement("p");
    temp.setAttribute("id", "main_text");
    temp.innerHTML = "United States Colored Troops";
    placeholder.appendChild(temp);
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/fullerStoryPlaque.jpg");
    temp.setAttribute("alt", "Historical Plaque");
    temp.setAttribute("class", "markerPagePic");
    mainDiv.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("id", "sub_title");
    temp.innerHTML = "Around 300 Williamson County residents, who were either freed slaves or escaped slaves, served in the Union Army during the Civil War.<br><br>Their story is just now being told.<br><br>Their story needs to be heard.";
    div.appendChild(temp);
    mainDiv.appendChild(div);
    placeholder.appendChild(mainDiv);
    let pageLink = document.createElement("a");
    pageLink.setAttribute("href", "http://www.slavestosoldiers.com");
    pageLink.setAttribute("class", "link");
    pageLink.setAttribute("target", "blank");
    temp = document.createElement("img");
    temp.setAttribute("src", "./images/slaveToSoldiers.jpg");
    temp.setAttribute("alt", "Slave To Soldiers Pic");
    temp.setAttribute("id", "USCTPic");
    pageLink.appendChild(temp);
    temp = document.createElement("p");
    temp.setAttribute("class", "linkText");
    temp.innerHTML = "Click here to learn more.";
    pageLink.appendChild(temp);
    placeholder.appendChild(pageLink);
  }

};
var _default = USCT;
exports.default = _default;

},{}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvdXJ0aG91c2UuanMiLCIuLi9zY3JpcHRzL2RvbmF0ZS5qcyIsIi4uL3NjcmlwdHMvaG9tZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbWVkaWEuanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcmVjb25zdHJ1Y3Rpb24uanMiLCIuLi9zY3JpcHRzL3Jpb3QuanMiLCIuLi9zY3JpcHRzL3N0YXR1ZS5qcyIsIi4uL3NjcmlwdHMvdXNjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFakIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixFQUF4QjtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLE9BQXJCLEVBQThCLFlBQTlCO0FBQ0EsUUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLElBQUEsR0FBRyxDQUFDLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsaUJBQTFCO0FBQ0EsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsV0FBeEI7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSxJQUFBLElB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LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgQ291cnRob3VzZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl9kaXZcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl90ZXh0X2RpdlwiKVxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkNvdXJ0aG91c2UgJiBNYXJrZXQgSG91c2VcIlxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL2Z1bGxlclN0b3J5UGxhcXVlLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiSGlzdG9yaWNhbCBQbGFxdWVcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyUGFnZVBpY1wiKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIlRocm91Z2hvdXQgdGhlIDE4MDBzLCBhIOKAnG1hcmtldCBob3VzZeKAnSBzdG9vZCBjbG9zZSB0byB0aGUgY291cnRob3VzZS7igJ0gRm9yIG5lYXJseSA1MCB5ZWFycywgaHVtYW4gYmVpbmdzIHdlcmUgc29sZCBhbmQgdHJhZGVkIGF0IHRoaXMg4oCcbWFya2V0IGhvdXNlLuKAnSBUaGlzIHNsYXZlIG1hcmtldCBpbmNsdWRlZCB0aGUgc2FsZSBvZiB3b21lbiBhbmQgY2hpbGRyZW4uXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChtYWluRGl2KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdXJ0aG91c2UiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgRG9uYXRlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX2RpdlwiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX3RleHRfZGl2XCIpXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiRG9uYXRlIHRvIHRoZSBGdWxsZXIgU3RvcnlcIlxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL2Z1bGxlckRvbmF0ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkRvbmF0ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiSWYgeW91IHdvdWxkIGxpa2UgdG8gc3VwcG9ydCB0aGlzIGVmZm9ydCB0byB0ZWxsIHRoZSBGdWxsZXIgU3Rvcnkgb2YgRnJhbmtsaW4sIHBsZWFzZSBjbGljayBvbiB0aGUgbGluayB0byBnaXZlIG9ubGluZS4gQWxsIGRvbmF0aW9ucyBhcmUgdGF4IGRlZHVjdGlibGUuIFdoZW4gbWFraW5nIGEgZG9uYXRpb24sIHBsZWFzZSBlbWFpbCBLZXZpbiBSaWdncyBhdCBrZXZpbkBmcmFua2xpbmNvbW11bml0eWNodXJjaC5vcmcgYW5kIHJlZmVyZW5jZSB0aGF0IHRoZSBkb25hdGlvbiBpcyBmb3IgdGhlIEZ1bGxlciBTdG9yeSBwcm9qZWN0IHNvIHdlIGNhbiBlbnN1cmUgaXQgaXMgYXBwbGllZCBpbiB0aGUgY29ycmVjdCB3YXkuIFlvdSBjYW4gY2hvb3NlIGVpdGhlciBGcmFua2xpbiBDb21tdW5pdHkgQ2h1cmNoIG9yIEZyYW5rbGluIENvbW11bml0eSBEZXZlbG9wbWVudCBmb3IgdGhlIG9yZ2FuaXphdGlvbiwganVzdCBtYWtlIHN1cmUgdG8gYWxzbyBzZW5kIHRoZSBlbWFpbCB0byBLZXZpbi5cIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIGxldCBwYWdlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZnJhbmtsaW5jb21tdW5pdHljaHVyY2gub3JnL2dpdmluZy9cIilcbiAgICBwYWdlTGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtcIilcbiAgICBwYWdlTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJibGFua1wiKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkb25hdGVfdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJEb25hdGUgTm93XCJcbiAgICBwYWdlTGluay5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG1haW5EaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQocGFnZUxpbmspXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9uYXRlIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IEhvbWUgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gYFxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2FydGlzdFJlbmRlcmluZzEuanBnXCIgY2xhc3M9XCJtYWluUGFnZVBpY1wiPlxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3N0YXR1ZS5KUEdcIiBjbGFzcz1cIm1haW5QYWdlUGljXCI+XG4gICAgPHAgY2xhc3M9XCJtYWluUGFnZVRpdGxlXCI+VGhlIGZvbGxvd2luZyByZXNvbHV0aW9uIHdhcyBwYXNzZWQgb24gU2VwdGVtYmVyIDI1LCAyMDE4LiBXZSB0aGFuayBldmVyeW9uZSBmb3IgdGhlaXIgc3VwcG9ydCBhbmQgR29kIGZvciBIaXMgZmF2b3IuPC9wPlxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3Jlc29sdXRpb24uanBnXCIgY2xhc3M9XCJtYWluUGFnZVBpY1wiPlxuICAgIDxwIGNsYXNzPVwibWFpblRleHRcIj5BZnRlciB0aGUgdHJhZ2ljIGV2ZW50cyBpbiBDaGFybG90dGVzdmlsbGUsIFZBIGxhc3QgQXVndXN0LCBjb252ZXJzYXRpb25zIHN0YXJ0ZWQgaGFwcGVuaW5nIGluIEZyYW5rbGluIGFib3V0IGhvdyBvdXIgY2l0eSB3b3VsZCBcXChvciB3b3VsZCBub3QpIHJlYWN0IGlmIHNvbWV0aGluZyBzaW1pbGFyIGhhcHBlbmVkIGhlcmUuIEluIGEgbG90IG9mIHdheXMsIG91ciBjaXR5IGlzIGxpa2UgQ2hhcmxvdHRlc3ZpbGxlLiBUaGVzZSBkaXNjdXNzaW9ucyBsZWQgdG8gdGhlIHRob3VnaHQgdGhhdCBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gYmUg4oCcYWN0aW9uYXJ54oCdIGluc3RlYWQgb2Yg4oCccmVhY3Rpb25hcnku4oCdIFRoZSByZXN1bHQgb2YgdGhlc2UgY29udmVyc2F0aW9ucyBsZWQgdG8gdGhlIGlkZWEgdGhhdCBpbnN0ZWFkIG9mIHRha2luZyBkb3duIGhpc3RvcmljYWwgbWFya2Vycywgd2hhdCBpZiB3ZSBhZGRlZCB0byB0aGVtIGFuZCB0b2xkIGEgICAgIOKAnGZ1bGxlciBzdG9yeS7igJ0gRnVydGhlciwgaXQgd2FzIGJlbGlldmVkIHRoYXQgdGhlIENIVVJDSCBpbiBGcmFua2xpbiBzaG91bGQgbGVhZCB0aGlzIGVmZm9ydC48YnI+PGJyPk92ZXIgdGhlIGNvdXJzZSBvZiB0aGlzIHBhc3QgeWVhciB3ZSBoYXZlIGluaXRpYXRlZCBmdXJ0aGVyIGRpYWxvZ3VlIGJldHdlZW48YnI+PGJyPuKAouKApnBhc3RvcnMgYW5kIGNodXJjaCBsZWFkZXJzLjxicj7igKLigKZ0aGUgaGlzdG9yaWNhbCBjb21tdW5pdHkgaW4gRnJhbmtsaW4gYW5kIFdpbGxpYW1zb24gQ291bnR5Ljxicj7igKLigKZ0aGUgY2l0eSBhZG1pbmlzdHJhdG9yLCBjaXR5IG1heW9yIGFuZCBjb3VudHkgbWF5b3IuPGJyPuKAouKApnRoZSBkb3dudG93biBidXNpbmVzcyBjb21tdW5pdHkuPGJyPuKAouKApmFuZCBhIGhvc3Qgb2YgaW5kaXZpZHVhbHMuXG4gICAgPGJyPjxicj48YnI+PGJyPjxicj5UaW1lbGluZSA8YnI+PGJyPjxicj5QaGFzZSAxIChmb3VyIGhpc3RvcmljYWwgbWFya2VycyBhcm91bmQgdGhlIGRvd250b3duIHNxdWFyZSkg4oCTIEEgZGVkaWNhdGlvbiBvZiB0aGVzZSBtYXJrZXJzIG9uIE1vbmRheSwgSmFudWFyeSAxNCwgMjAxOSBkdXJpbmcgdGhlIENIVVJDSEVT4oCZIGFubnVhbCBNYXJ0aW4gTHV0aGVyIEtpbmcgRGF5IENlbGVicmF0aW9uLiA8YnI+PGJyPlRoZSBmb3VyIG1hcmtlcnMgYXJlOjxicj48YnI+4oCiXHRVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzPGJyPuKAolx0MTg2NyBEb3dudG93biBSaW90PGJyPuKAolx0Q291cnRob3VzZSBhbmQgTWFya2V0IEhvdXNlPGJyPuKAolx0UmVjb25zdHJ1Y3Rpb24gYW5kIEppbSBDcm93PGJyPjxicj48YnI+UGhhc2UgMiDigJMgRXJlY3QgYSBzdGF0dWUgb2YgYSBVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3Agc29sZGllciBhdCBhIHlldCB0byBiZSBkZXRlcm1pbmVkIGxvY2F0aW9uIGluc2lkZSB0aGUgY2l0eSBsaW1pdHMgb2YgRnJhbmtsaW4uIEEgZGVkaWNhdGlvbiBvZiB0aGlzIHN0YXR1ZSBvbiBNb25kYXksIEphbnVhcnkgMTMsIDIwMjAgZHVyaW5nIHRoZSBDSFVSQ0hFU+KAmSBhbm51YWwgTWFydGluIEx1dGhlciBLaW5nIERheSBDZWxlYnJhdGlvbi4gPGJyPjxicj7igKIgUHJlc2VudCDigJxGdWxsZXIgU3RvcnnigJ0gYXQgQk9NQSBXb3Jrc2hvcCBvbiBUdWVzZGF5LCBBdWd1c3QgMTQsIDIwMTguIDxicj7igKJcdFByZXNlbnQg4oCcRnVsbGVyIFN0b3J54oCdIHRvIENvdW50eSBDb21taXNzaW9uZXJzIG9uIE1vbmRheSwgU2VwdGVtYmVyIDEwLCAyMDE4Ljxicj7igKIgQW5ub3VuY2UgZnVuZHJhaXNlciBmb3IgdGhlIFVTQ1Qgc3RhdHVlIFNlcHRlbWJlciAvIE9jdG9iZXIgMjAxOC48YnI+4oCiIEEgZmFsbCDigJxyZXZpdmFs4oCdIHdpdGggdGhlIENIVVJDSEVTIGluIEZyYW5rbGluIC8gV2lsbGlhbXNvbiBDb3VudHkuPGJyPjxicj48YnI+PGJyPjxicj5UaGUgQXNrIDxicj48YnI+V2UgYXJlIGFza2luZyB5b3UsIHRoZSBjaXR5IGxlYWRlcnMsIHRvIGxlbmQgeW91ciBzdXBwb3J0IGJlaGluZCBvdXIgZWZmb3J0cyBhbmQgdG8gaGVscCB1cyB3aXRoIHRoZSBsb2NhdGlvbnMgb2YgdGhlIG1hcmtlcnMgYW5kIHRoZSBzdGF0dWUuIFdlIGFyZSBub3QgYXNraW5nIHRoZSBjaXR5IGZvciBhbnkgbW9uZXkuIEFsbCBmdW5kcyB3aWxsIGJlIHJhaXNlZCB0aHJvdWdoIHByaXZhdGUgZG9uYXRpb25zLjwvcD5cbiAgICAgICAgICAgIGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0IG5hdkJhciBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxubmF2QmFyLmxvYWROYXZiYXIoKVxuSG9tZS5tYWluKCkiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcbmNvbnN0IG5ld3MgPSBbXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE5LzAyLzEyL2ZyYW5rbGluLXRuLWFmcmljYW4tYW1lcmljYW4tbWFya2Vycy1jaXZpbC13YXItaGlzdG9yeS8yODQxMDIwMDAyLz9mYmNsaWQ9SXdBUjBnWWoweEYwN3lqZWx3clVkcUd3WUZ0YWJWTEM4MXpEd1Q3TVVZLXpFaGtHR0ZaQ3FDczVkRFBvWVwiLCBpbWc6IFwiLi4vaW1hZ2VzL3dhcm92ZXIucG5nXCIsIGRhdGU6IFwiRmVicnVhcnkgMTIsIDIwMTlcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiJ1RoZSB3YXIgaXMgb3ZlcjonIEZyYW5rbGluIG1vdmVzIGZvcndhcmQgd2l0aCBsb2NhdGlvbiBmb3IgQWZyaWNhbi1BbWVyaWNhbiBtYXJrZXJzXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2ZyYW5rbGluaG9tZXBhZ2UuY29tL2ZyYW5rbGluLWFsZGVybWVuLW1vcmUtb3Blbi10by1mdWxsZXItc3RvcnktaGlzdG9yaWNhbC1tYXJrZXItcGxhbi1hZnRlci10dWVzZGF5LXdvcmstc2Vzc2lvbi8/ZmJjbGlkPUl3QVIyelNLM1B3aEtkOW1MdERhSzU1dFYwMW1scnRwRDJ3Y2xibGI2WmZQb2Jjc2RKd2ZkSnlxUS1Ocm9cIiwgaW1nOiBcIi4uL2ltYWdlcy9hcnRpc3RSZW5kZXJpbmcyLnBuZ1wiLCBkYXRlOiBcIkZlYnJ1YXJ5IDEyLCAyMDE5XCIsIHNvdXJjZTogXCJGcmFua2xpbiBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIGFsZGVybWVuIG1vcmUgb3BlbiB0byDigJhmdWxsZXIgc3RvcnnigJkgaGlzdG9yaWNhbCBtYXJrZXIgcGxhbiBhZnRlciBUdWVzZGF5IHdvcmsgc2Vzc2lvblwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfYTA0N2Y5ZGUtMWVmZS0xMWU5LWI5MTMtZjM0YzhjNTNiMzM0Lmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy9hbGRlcm1hbi5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIzLCAyMDE5XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIkFsZGVybWVuIHNob3cgc3Ryb25nIG9waW5pb25zIG9uICdGdWxsZXIgU3RvcnknIG1hcmtlciBwbGFjZW1lbnRcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd2lsbGlhbXNvbnNvdXJjZS5jb20vbWFydGluLWx1dGhlci1raW5nLWpyLWNlbGVicmF0aW9uLXRlbGxzLWZ1bGxlci1zdG9yeS9cIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uU291cmNlLmpwZ1wiLCBkYXRlOiBcIkphbnVhcnkgMjIsIDIwMTlcIiwgc291cmNlOiBcIldpbGxpYW1zb24gU291cmNlXCIsIGNvbnRlbnQ6IFwiTWFydGluIEx1dGhlciBLaW5nIEpyLiBDZWxlYnJhdGlvbiBTaGFyZXMg4oCcRnVsbGVyIFN0b3J54oCdXCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL25ld3MvYXJ0aWNsZV80MDI2ZDBhMC0xZGM1LTExZTktOTIyNy0yYjk4OTZmNTdmNzAuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL21say5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIxLCAyMDE5XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIk1hcnRpbiBMdXRoZXIgS2luZyBKci7igJlzIGRyZWFtIHJlYWxpemVkIGluICdGdWxsZXIgU3RvcnknIGR1cmluZyBjZWxlYnJhdGlvbnMgTW9uZGF5XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2JyZW50d29vZGhvbWVwYWdlLmNvbS9zdG9uZS1vZi1ob3BlLXRoZW1lLWluc3BpcmVzLW1say1kYXktYXR0ZW5kZWVzLXRvLWNvbnNpZGVyLWZ1bGxlci1zdG9yeS1vZi1oaXN0b3J5L1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3N0b25lLmpwZ1wiLCBkYXRlOiBcIkphbnVhcnkgMjEsIDIwMTlcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIuKAmFN0b25lIG9mIEhvcGXigJkgdGhlbWUgaW5zcGlyZXMgTUxLIERheSBhdHRlbmRlZXMgdG8gY29uc2lkZXIgZnVsbGVyIHN0b3J5IG9mIGhpc3RvcnlcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vYnJlbnR3b29kaG9tZXBhZ2UuY29tL2NlcmVtb255LWZvci1tbGstZGF5LWluLWZyYW5rbGluLXRvLWluY2x1ZGUtdXBkYXRlLW9uLWZ1bGxlci1zdG9yeS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9jZXJlbW9ueS5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDE3LCAyMDE5XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCLigJhDZXJlbW9ueSBmb3IgTUxLIERheSBpbiBGcmFua2xpbiB0byBpbmNsdWRlIHVwZGF0ZSBvbiDigJhmdWxsZXIgc3RvcnnigJlcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlX2IwMTM2OTlhLWMxMmQtMTFlOC1hZTAyLTQ3NGFjOGU5OWU3Yi5odG1sP3V0bV9tZWRpdW09c29jaWFsJnV0bV9zb3VyY2U9ZmFjZWJvb2smdXRtX2NhbXBhaWduPXVzZXItc2hhcmVcIiwgaW1nOiBcIi4uL2ltYWdlcy93aDkyNS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMjUsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gQk9NQSBhcHByb3ZlcyAnVGhlIEZ1bGxlciBTdG9yeScgcHJvcG9zYWwgdG8gaW5zdGFsbCBBZnJpY2FuLUFtZXJpY2FuIGhpc3RvcmljYWwgbWFya2Vyc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDkvMjUvZnJhbmtsaW4tc3F1YXJlLWhpc3RvcmljLW1hcmtlcnMtY29uZmVkZXJhdGUtc3RhdHV0ZS8xNDEzMjQzMDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3RuOTI1LmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAyNSwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCJGcmFua2xpbiB2b3RlcyB0byBzdXBwb3J0IEFmcmljYW4tQW1lcmljYW4gaGlzdG9yaWMgbWFya2VycyBuZWFyIENvbmZlZGVyYXRlIG1vbnVtZW50XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2JyZW50d29vZGhvbWVwYWdlLmNvbS9yZXNvbHV0aW9uLXRvLXN1cHBvcnQtZnVsbGVyLXN0b3J5LWhpc3RvcmljLW1hcmtlcnMtdW5hbmltb3VzbHktYXBwcm92ZWQtd2lsbC1wbGFjZS1vbi1wdWJsaWMtbGFuZC1pbi10b3duLXNxdWFyZS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9iaDkyNS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMjUsIDIwMThcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIlJlc29sdXRpb24gdG8gc3VwcG9ydCBcXFwiRnVsbGVyIFN0b3J5XFxcIiBoaXN0b3JpYyBtYXJrZXJzIHVuYW5pbW91c2x5IGFwcHJvdmVkLCB3aWxsIHBsYWNlIG9uIHB1YmxpYyBsYW5kIGluIHRvd24gc3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2ZyYW5rbGluaG9tZXBhZ2UuY29tL2ZyYW5rbGluLWdyb3Vwcy1pbmRpdmlkdWFscy13cml0ZS1sZXR0ZXJzLW9mLXN1cHBvcnQtZm9yLWZ1bGxlci1zdG9yeS1pbml0aWF0aXZlLXdpbGwtcHJlc2VudC10by1ib2FyZC1vZi1tYXlvci1hbmQtYWxkZXJtZW4tdHVlc2RheS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9maDkyNS5qcGVnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDI0LCAyMDE4XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBncm91cHMsIGluZGl2aWR1YWxzIHdyaXRlIGxldHRlcnMgb2Ygc3VwcG9ydCBmb3IgXFxcIkZ1bGxlciBTdG9yeVxcXCIgaW5pdGlhdGl2ZSwgd2lsbCBwcmVzZW50IHRvIEJvYXJkIG9mIE1heW9yIGFuZCBBbGRlcm1lbiBUdWVzZGF5XCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL29waW5pb24vYXJ0aWNsZV9iMWI0NWQ5NC1iNmRlLTExZTgtOGZmNy0zYjUyZjQ1M2I2MDMuaHRtbCNjb21tZW50c1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3dpbGxpYW1zb25jb21tZW50YXJ5LmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAxMiwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJDb21tZW50YXJ5OiBHb29kIGlkZWEgZm9yIHNsYXZlcnkgcGxhcXVlcyBzdHltaWVkIGJ5IGdyb3VwJ3MgcmVzaXN0YW5jZSB0byBpdFwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9vcGluaW9uL2FydGljbGVfMjBjZmUxZTItYjZhMC0xMWU4LTg0YmQtY2I5Y2Y0OTgxN2RjLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uTGV0dGVyLmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAxMiwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJMZXR0ZXIgdG8gRWRpdG9yOiBNb3ZpbmcgZm9yd2FyZCB3aXRoICdUaGUgRnVsbGVyIFN0b3J5JyBwcmVmZXJyZWQgYnkgcGFzdG9yc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1pbnRlbmRzLXRvLWdvLXRvLWNvdXJ0LXRvLWNsYXJpZnktb3duZXJzaGlwLW9mLXB1YmxpYy1zcXVhcmUvXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czUuanBnXCIsIGRhdGU6IFwiQXVndXN0IDI5LCAyMDE4XCIsIHNvdXJjZTogXCJGcmFua2xpbiBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIEludGVuZHMgdG8gZ28gdG8gY291cnQgdG8gY2xhcmlmeSBvd25lcnNoaXAgb2YgUHVibGljIFNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfYjFhZTliZTAtYWIxYS0xMWU4LWEzNzYtMDcyN2FjZGVhMWYzLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzOC5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiVURDIHdhbnRzIG5ldyBwbGFjZW1lbnQgZm9yIHByb3Bvc2VkIENpdmlsIFdhciBtYXJrZXJzOyBCT01BIGRlZmVycyBkZWNpc2lvblwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDgvMjgvZGF1Z2h0ZXJzLWNvbmZlZGVyYWN5LWZyYW5rbGluLXNxdWFyZS13aWxsaWFtc29uLWNvdW50eS8xMTI2Njg1MDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M3LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOCwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCJEYXVnaHRlcnMgb2YgQ29uZmVkZXJhY3kgd2FudCBzYXkgaW4gQWZyaWNhbi1BbWVyaWNhbiBoaXN0b3J5IG1hcmtlcnMgb24gRnJhbmtsaW4gU3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy50ZW5uZXNzZWFuLmNvbS9zdG9yeS9uZXdzL2xvY2FsL3dpbGxpYW1zb24vMjAxOC8wOC8yOC9mcmFua2xpbi1jb25mZWRlcmF0ZS1tb251bWVudC1wdWJsaWMtc3F1YXJlLzExMjg0NTcwMDIvXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czkuanBlZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOCwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCJGcmFua2xpbiBmaWxlcyBzdWl0IHRvIGZpZ3VyZSBvdXQgd2hvIG93bnMgbGFuZCBvbiBwdWJsaWMgc3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2ZyYW5rbGluaG9tZXBhZ2UuY29tL2ZyYW5rbGluLWFsZGVybWVuLXZvdGUtdG8tc2xvdy1lZmZvcnQtdG8tYWRkLWFmcmljYW4tYW1lcmljYW4taGlzdG9yeS1tYXJrZXJzLW9uLXRoZS1wdWJsaWMtc3F1YXJlL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M2LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOCwgMjAxOFwiLCBzb3VyY2U6IFwiRnJhbmtsaW4gSG9tZXBhZ2VcIiwgY29udGVudDogXCJBZnJpY2FuIEFtZXJpY2FuIGhpc3RvcnkgbWFya2VycyBvbiB0aGUgUHVibGljIFNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cuc3RhcmRlbS5jb20vbmV3cy9uYXRpb25hbC9ibGFjay1wYXN0b3JzLWNvbmZlZGVyYXRlLWRlc2NlbmRhbnRzLXNoYXJlLWNpdmlsLXdhci1oaXN0b3J5LWluLXRlbm5lc3NlZS9hcnRpY2xlXzIwZGNhYzVmLWUxZDgtNWVjZS1iOGMyLTE4Mjk1MzQyY2UzMy5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvdGhlU3Rhci5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjQsIDIwMThcIiwgc291cmNlOiBcIlRoZSBTdGFyIERlbW9jcmF0XCIsIGNvbnRlbnQ6IFwiQmxhY2sgcGFzdG9ycywgQ29uZmVkZXJhdGUgZGVzY2VuZGFudHMgc2hhcmUgQ2l2aWwgV2FyIGhpc3RvcnkgaW4gVGVubmVzc2VlIHRvd25cIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3Lndrcm4uY29tL25ld3MvZ3JvdXAtb2YtZnJhbmtsaW4tcGFzdG9ycy1ob3BlLXRvLWFkZC1tYXJrZXJzLXRvLWNvbmZlZGVyYXRlLW1vbnVtZW50XzIwMTgwODIyMTIwMzIzLzEzODgwMzY2NzZcIiwgaW1nOiBcIi4uL2ltYWdlcy93a3JuVmlkZW8uanBnXCIsIGRhdGU6IFwiQXVndXN0IDIyLCAyMDE4XCIsIHNvdXJjZTogXCJXS1JOXCIsIGNvbnRlbnQ6IFwiR3JvdXAgb2YgRnJhbmtsaW4gcGFzdG9ycyBob3BlIHRvIGFkZCBtYXJrZXJzIHRvIENvbmZlZGVyYXRlIG1vbnVtZW50XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2Npdmlsd2FydGFsay5jb20vdGhyZWFkcy9wYXN0b3JzLXByb3Bvc2UtaGlzdG9yaWMtbWFya2Vycy1kZXRhaWxpbmctc2xhdmUtYXVjdGlvbnMtYW5kLWtlZXBpbmctY29uZmVkZXJhdGUtc3RhdHVlLXRvby4xNDkwNDcvXCIsIGltZzogXCIuLi9pbWFnZXMvY2l2aWxXYXJUYWxrcy5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTYsIDIwMThcIiwgc291cmNlOiBcIkNpdmlsIFdhciBUYWxrXCIsIGNvbnRlbnQ6IFwiUGFzdG9ycyBQcm9wb3NlIEhpc3RvcmljIE1hcmtlcnMgRGV0YWlsaW5nIFNsYXZlIEF1Y3Rpb25zIGFuZCBLZWVwaW5nIENvbmZlZGVyYXRlIFN0YXR1ZSBUb29cIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LndzbXYuY29tL25ld3MvcGFzdG9ycy1wdXNoLWZvci1kaXZlcnNpdHktaW4tZnJhbmtsaW4taGlzdG9yaWNhbC1tYXJrZXJzL2FydGljbGVfNWMzOTE1ZjgtYTBlMC0xMWU4LThkMmUtOWIxZjM2ZjllZDY5Lmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy93c212LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNSwgMjAxOFwiLCBzb3VyY2U6IFwiV1NNVlwiLCBjb250ZW50OiBcIlBhc3RvcnMgcHVzaCBmb3IgZGl2ZXJzaXR5IGluIEZyYW5rbGluIGhpc3RvcmljYWwgbWFya2Vyc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1wYXN0b3JzLXByb3Bvc2UtaGlzdG9yaWMtbWFya2Vycy1kZXRhaWxpbmctc2xhdmUtYXVjdGlvbnMtdXMtY29sb3JlZC10cm9vcC1lZmZvcnRzL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2ZyYW5rbGluSG9tZXBhZ2UuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE0LCAyMDE4XCIsIHNvdXJjZTogXCJGcmFua2xpbiBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIHBhc3RvcnMgcHJvcG9zZSBoaXN0b3JpYyBtYXJrZXJzIGRldGFpbGluZyBzbGF2ZSBhdWN0aW9ucywgQWZyaWNhbi1BbWVyaWNhbiBDaXZpbCBXYXIgZWZmb3J0c1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDgvMTQvZnJhbmtsaW4tY29uZmVkZXJhdGUtbW9udW1lbnQtd2lsbGlhbXNvbi1jb3VudHktZmFpdGgtbGVhZGVycy85OTMxNDQwMDIvXCIsIGltZzogXCIuLi9pbWFnZXMvdGVubmVzc2Vhbi5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTQsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gZmFpdGggbGVhZGVycyB3YW50IG1hcmtlcnMgbmV4dCB0byBDb25mZWRlcmF0ZSBtb251bWVudFwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfMGEwNzU2YjYtYTAxNi0xMWU4LTk1MDQtOGZlOGViMWI2NzdkLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uSGVyYWxkLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNCwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJUaHJlZSBwcmVhY2hlcnMgYW5kIGEgaGlzdG9yaWFuIHRlbGwgJ2Z1bGxlciBzdG9yeScgYnkgcHJvcG9zaW5nIENpdmlsIFdhciBtb251bWVudCwgbWFya2Vyc1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9icmVudHdvb2Rob21lcGFnZS5jb20vZnJhbmtsaW4tcGFzdG9ycy1wcm9wb3NlLWhpc3RvcmljLW1hcmtlcnMtZGV0YWlsaW5nLXNsYXZlLWF1Y3Rpb25zLXVzLWNvbG9yZWQtdHJvb3AtZWZmb3J0cy9cIiwgaW1nOiBcIi4uL2ltYWdlcy9icmVudHdvb2RIb21lcGFnZS5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTQsIDIwMThcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIHBhc3RvcnMgcHJvcG9zZSBoaXN0b3JpYyBtYXJrZXJzIGRldGFpbGluZyBzbGF2ZSBhdWN0aW9ucywgQWZyaWNhbi1BbWVyaWNhbiBDaXZpbCBXYXIgZWZmb3J0c1wifSxcbl1cblxuY29uc3QgTWVkaWEgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBuZXdzU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIG5ld3MuZm9yRWFjaChzdG9yeSA9PiB7XG4gICAgICBsZXQgYXJ0aWNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIpXG4gICAgICBhcnRpY2xlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3X3N0b3J5XCIpXG4gICAgICBsZXQgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3c19saW5rXCIpXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgc3RvcnkuaHJlZilcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICAgIGxldCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3X2ltYWdlXCIpXG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgc3RvcnkuaW1nKVxuICAgICAgbGV0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgZGF0ZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19kYXRlXCIpXG4gICAgICBkYXRlLmlubmVySFRNTCA9IGAke3N0b3J5LmRhdGV9IC0gJHtzdG9yeS5zb3VyY2V9YFxuICAgICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgY29udGVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19jb250ZW50XCIpXG4gICAgICBjb250ZW50LmlubmVySFRNTCA9IHN0b3J5LmNvbnRlbnRcbiAgICAgIGxpbmsuYXBwZW5kQ2hpbGQoaW1hZ2UpXG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGRhdGUpXG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGNvbnRlbnQpXG4gICAgICBhcnRpY2xlLmFwcGVuZENoaWxkKGxpbmspXG4gICAgICBuZXdzU2VjdGlvbi5hcHBlbmRDaGlsZChhcnRpY2xlKVxuICAgIH0pXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobmV3c1NlY3Rpb24pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVkaWEiLCJpbXBvcnQgVVNDVCBmcm9tIFwiLi91c2N0XCJcbmltcG9ydCBDb3VydGhvdXNlIGZyb20gXCIuL2NvdXJ0aG91c2VcIlxuaW1wb3J0IFJpb3QgZnJvbSBcIi4vcmlvdFwiXG5pbXBvcnQgUmVjb25zdHJ1Y3Rpb24gZnJvbSBcIi4vcmVjb25zdHJ1Y3Rpb25cIlxuaW1wb3J0IFN0YXR1ZSBmcm9tIFwiLi9zdGF0dWVcIlxuaW1wb3J0IE1lZGlhIGZyb20gXCIuL21lZGlhXCJcbmltcG9ydCBEb25hdGUgZnJvbSBcIi4vZG9uYXRlXCJcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIlxuXG5sZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk5hdmJhclwiKVxuXG5cbmNvbnN0IG5hdkJhciA9IHtcblxuICBldmVudExpc3RlbmVycyhldmVudCkge1xuICAgIGxldCBuZXdQYWdlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHN3aXRjaChuZXdQYWdlKSB7XG4gICAgICBjYXNlIFwidXNjdFwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBVU0NULm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjb3VydGhvdXNlXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIENvdXJ0aG91c2UubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpb3RcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgUmlvdC5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmVjb25zdHJ1Y3Rpb25cIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgUmVjb25zdHJ1Y3Rpb24ubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0YXR1ZVwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBTdGF0dWUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1lZGlhXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIE1lZGlhLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb25hdGVcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgRG9uYXRlLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJob21lXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIEhvbWUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIm1hcmtlcnNcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgYnJlYWs7XG5cbiAgICB9XG4gIH0sXG5cbiAgbWFrZU1hcmtlcnModmFsdWUsIHRleHQpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLmV2ZW50TGlzdGVuZXJzKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSlcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJzXCIpXG4gICAgYnRuLmlubmVyVGV4dCA9IHRleHRcbiAgICByZXR1cm4gYnRuXG4gIH0sXG5cbiAgbWFrZUJ0bih2YWx1ZSwgdGV4dCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuZXZlbnRMaXN0ZW5lcnMpXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIilcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dFxuICAgIHJldHVybiBidG5cbiAgfSxcblxuICBsb2FkTmF2YmFyKCkge1xuICAgIGxldCBlbGVtZW50SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcbiAgICBoZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblRpdGxlXCIpXG4gICAgaGVhZGluZy5pbm5lclRleHQgPSBcIlRlbGxpbmcgYSBGVUxMRVIgU1RPUlkgb2YgRnJhbmtsaW5cIlxuICAgIGVsZW1lbnRIb2xkZXIuYXBwZW5kQ2hpbGQoaGVhZGluZylcbiAgICBsZXQgc3ViSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgIHN1YkhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJUaXRsZVwiKVxuICAgIHN1YkhlYWRpbmcuaW5uZXJUZXh0ID0gXCJMZWFybmluZyBGcm9tIE91ciBQYXN0IFRvIFJlY29uY2lsZSBPdXIgRnV0dXJlXCJcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKHN1YkhlYWRpbmcpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJoZWFkaW5nXCIpXG4gICAgbGV0IHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJob21lX21lbnVcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwiaG9tZVwiLCBcIkhvbWUgUGFnZVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBzZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICBzZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2Vyc19tZW51XCIpXG4gICAgbGV0IG1hcmtlcnMgPSBuYXZCYXIubWFrZUJ0bihcIm1hcmtlcnNcIiwgXCJNZW51XCIpXG4gICAgbWFya2Vycy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIk1hcmtlcnNcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG1hcmtlcnMpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZU1hcmtlcnMoXCJ1c2N0XCIsIFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wc1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcImNvdXJ0aG91c2VcIiwgXCJDb3VydGhvdXNlIC8gTWFya2V0IEhvdXNlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwicmlvdFwiLCBcIjE4NjcgUmlvdFwiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInJlY29uc3RydWN0aW9uXCIsIFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInN0YXR1ZVwiLCBcIlVTQ1QgU3RhdHVlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwiZG9uYXRlXCIsIFwiRG9uYXRlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWN0KVxuICAgIHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZWRpYV9tZW51XCIpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcIm1lZGlhXCIsIFwiTmV3cyBNZWRpYVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChlbGVtZW50SG9sZGVyKVxuICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gIH0sXG5cbiAgaGlkZU1hcmtlcnMoKSB7XG4gICAgbGV0IE1hcmtlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcmtlcnNcIilcbiAgICBNYXJrZXJzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuaGlkZU1hcmtlcnMpXG4gICAgTWFya2Vycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuaW5uZXJIVE1MID0gXCJNZW51XCJcbiAgICAkKFwiI01hcmtlcnNcIikuc2hvdygpXG4gICAgJChcIi5tYXJrZXJzXCIpLmhpZGUoKVxuICB9LFxuXG4gIHNob3dNYXJrZXJzKCkge1xuICAgIGxldCBNYXJrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJrZXJzXCIpXG4gICAgTWFya2Vycy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5oaWRlTWFya2VycylcbiAgICBNYXJrZXJzLmlubmVySFRNTCA9IFwiSGlkZSBNZW51XCJcbiAgICAkKFwiLm1hcmtlcnNcIikuc2hvdygpXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhclxuXG4gICAgLy8gPHAgaWQ9XCJsZWZ0SGVhZGluZ1wiPlNlZWtpbmcgVG8gVGVsbCBBICZuYnNwPC9wPlxuICAgIC8vIDxwIGlkPVwiYmlnSGVhZGluZ1wiPkZ1bGxlciBTdG9yeTwvcD5cbiAgICAvLyA8cCBpZD1cInJpZ2h0SGVhZGluZ1wiPiZuYnNwIE9mIEZyYW5rbGluPC9wPlxuICAgIC8vIDxwIGlkPVwidGFnSGVhZGluZ1wiPkxlYXJuaW5nIEZyb20gT3VyIFBhc3QgVG8gUmVjb25jaWxlIE91ciBGdXR1cmU8L3A+IiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFJlY29uc3RydWN0aW9uID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX2RpdlwiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX3RleHRfZGl2XCIpXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiRm9sbG93aW5nIHRoZSBDaXZpbCBXYXIgdGhlIDEzdGgsIDE0dGgsIGFuZCAxNXRoIEFtZW5kbWVudHMgd2VyZSBwYXNzZWQgYW5kIHJhdGlmaWVkLiBJbiAxODc3IFJlY29uc3RydWN0aW9uIGVuZGVkIGFuZCB0aGUgSmltIENyb3cgRXJhIHNvb24gYmVnYW4uIEl0IHdhcyBkdXJpbmcgdGhpcyB0aW1lIHRoYXQgc2VwYXJhdGUgcmVzdHJvb21zIGFuZCBzZXBhcmF0ZSB3YXRlciBmb3VudGFpbnMgd2VyZSBpbiBGcmFua2xpbi5cIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG1haW5EaXYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb25zdHJ1Y3Rpb24iLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgUmlvdCA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl9kaXZcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl90ZXh0X2RpdlwiKVxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIjE4NjcgUmlvdFwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiT24gSnVseSA2LCAxODY3LCBhZnRlciBhIGRlbGF5ZWQgSnVseSA0dGggcGFyYWRlIGFuZCBwb2xpdGljYWwgc3BlZWNoZXMsIGEgcmFjZSByaW90IGJyb2tlIG91dCBvbiB0aGUgc3F1YXJlIGluanVyaW5nIHNldmVyYWwgcGVvcGxlIGFuZCBraWxsaW5nIG9uZSBwZXJzb24uXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChtYWluRGl2KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpb3QiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcbmxldCBpbWFnZXMgPSBbXCIuLi9pbWFnZXMvc3RhdHVlLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUxLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUyLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUzLkpQR1wiXVxuXG5cbmNvbnN0IFN0YXR1ZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbGV0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBtYWluVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIG1haW5UZXh0LmlubmVySFRNTCA9IFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wcyBTdGF0dWVcIlxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1haW5UZXh0KVxuICAgIGltYWdlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgcGhvdG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdGF0dWVfaW1hZ2VcIilcbiAgICAgIHBob3RvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpdGVtKVxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocGhvdG8pXG4gICAgfSlcbiAgICBsZXQgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHN1YlRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgc3ViVGl0bGUuaW5uZXJIVE1MID0gXCJUaGUgdWx0aW1hdGUgZ29hbCBvZiB0aGUg4oCcRnVsbGVyIFN0b3J54oCdIGlzIHRvIGVyZWN0IGEgc3RhdHVlIG9mIGEgVVNDVCBTb2xkaWVyLiA8YnI+PGJyPlRoZSBnb2FsIGlzIGZvciB0aGlzIHNvbGRpZXIgdG8gYmUgcGxhY2VkIGluc2lkZSB0aGUgQ2l0eSBMaW1pdHMuPGJyPjxicj5UaGUgZXhhY3QgbG9jYXRpb24gaGFzIHlldCB0byBiZSBkZXRlcm1pbmVkLlwiXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVlIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFVTQ1QgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfZGl2XCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfdGV4dF9kaXZcIilcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzXCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJBcm91bmQgMzAwIFdpbGxpYW1zb24gQ291bnR5IHJlc2lkZW50cywgd2hvIHdlcmUgZWl0aGVyIGZyZWVkIHNsYXZlcyBvciBlc2NhcGVkIHNsYXZlcywgc2VydmVkIGluIHRoZSBVbmlvbiBBcm15IGR1cmluZyB0aGUgQ2l2aWwgV2FyLjxicj48YnI+VGhlaXIgc3RvcnkgaXMganVzdCBub3cgYmVpbmcgdG9sZC48YnI+PGJyPlRoZWlyIHN0b3J5IG5lZWRzIHRvIGJlIGhlYXJkLlwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICBsZXQgcGFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwOi8vd3d3LnNsYXZlc3Rvc29sZGllcnMuY29tXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvc2xhdmVUb1NvbGRpZXJzLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiU2xhdmUgVG8gU29sZGllcnMgUGljXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlVTQ1RQaWNcIilcbiAgICBwYWdlTGluay5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rVGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJDbGljayBoZXJlIHRvIGxlYXJuIG1vcmUuXCJcbiAgICBwYWdlTGluay5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHBhZ2VMaW5rKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVTQ1QiXX0=
