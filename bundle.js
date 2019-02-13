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
    sect.appendChild(navBar.makeMarkers("reconstruction", "Reconstruction"));
    sect.appendChild(navBar.makeMarkers("statue", "USCT Statue"));
    sect.appendChild(navBar.makeMarkers("donate", "Donate"));
    div.appendChild(sect);
    sect = document.createElement("section");
    sect.setAttribute("class", "media_menu");
    sect.appendChild(navBar.makeBtn("media", "News Media"));
    div.appendChild(sect);
    sect = document.createElement("section");
    sect.setAttribute("class", "media_menu");
    sect.appendChild(navBar.makeBtn("donate", "Donate"));
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
    temp.innerHTML = "Reconstruction";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvdXJ0aG91c2UuanMiLCIuLi9zY3JpcHRzL2RvbmF0ZS5qcyIsIi4uL3NjcmlwdHMvaG9tZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbWVkaWEuanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcmVjb25zdHJ1Y3Rpb24uanMiLCIuLi9zY3JpcHRzL3Jpb3QuanMiLCIuLi9zY3JpcHRzL3N0YXR1ZS5qcyIsIi4uL3NjcmlwdHMvdXNjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFakIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixFQUF4QjtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLE9BQXJCLEVBQThCLFlBQTlCO0FBQ0EsUUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLElBQUEsR0FBRyxDQUFDLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsaUJBQTFCO0FBQ0EsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsV0FBeEI7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSxJQUFBLElB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dkIsQ0FBUDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkIsVUFBM0I7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsSUFBckI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFFBQXhCO0FBQ0Q7O0FBdENVLENBQWI7ZUF5Q2UsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBDb3VydGhvdXNlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX2RpdlwiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX3RleHRfZGl2XCIpXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiQ291cnRob3VzZSAmIE1hcmtldCBIb3VzZVwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiVGhyb3VnaG91dCB0aGUgMTgwMHMsIGEg4oCcbWFya2V0IGhvdXNl4oCdIHN0b29kIGNsb3NlIHRvIHRoZSBjb3VydGhvdXNlLuKAnSBGb3IgbmVhcmx5IDUwIHllYXJzLCBodW1hbiBiZWluZ3Mgd2VyZSBzb2xkIGFuZCB0cmFkZWQgYXQgdGhpcyDigJxtYXJrZXQgaG91c2Uu4oCdIFRoaXMgc2xhdmUgbWFya2V0IGluY2x1ZGVkIHRoZSBzYWxlIG9mIHdvbWVuIGFuZCBjaGlsZHJlbi5cIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG1haW5EaXYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291cnRob3VzZSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBEb25hdGUgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfZGl2XCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfdGV4dF9kaXZcIilcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJEb25hdGUgdG8gdGhlIEZ1bGxlciBTdG9yeVwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyRG9uYXRlLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiRG9uYXRlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJJZiB5b3Ugd291bGQgbGlrZSB0byBzdXBwb3J0IHRoaXMgZWZmb3J0IHRvIHRlbGwgdGhlIEZ1bGxlciBTdG9yeSBvZiBGcmFua2xpbiwgcGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5rIHRvIGdpdmUgb25saW5lLiBBbGwgZG9uYXRpb25zIGFyZSB0YXggZGVkdWN0aWJsZS4gV2hlbiBtYWtpbmcgYSBkb25hdGlvbiwgcGxlYXNlIGVtYWlsIEtldmluIFJpZ2dzIGF0IGtldmluQGZyYW5rbGluY29tbXVuaXR5Y2h1cmNoLm9yZyBhbmQgcmVmZXJlbmNlIHRoYXQgdGhlIGRvbmF0aW9uIGlzIGZvciB0aGUgRnVsbGVyIFN0b3J5IHByb2plY3Qgc28gd2UgY2FuIGVuc3VyZSBpdCBpcyBhcHBsaWVkIGluIHRoZSBjb3JyZWN0IHdheS4gWW91IGNhbiBjaG9vc2UgZWl0aGVyIEZyYW5rbGluIENvbW11bml0eSBDaHVyY2ggb3IgRnJhbmtsaW4gQ29tbXVuaXR5IERldmVsb3BtZW50IGZvciB0aGUgb3JnYW5pemF0aW9uLCBqdXN0IG1ha2Ugc3VyZSB0byBhbHNvIHNlbmQgdGhlIGVtYWlsIHRvIEtldmluLlwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgbGV0IHBhZ2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBwYWdlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9mcmFua2xpbmNvbW11bml0eWNodXJjaC5vcmcvZ2l2aW5nL1wiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlua1wiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcImJsYW5rXCIpXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvbmF0ZV90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkRvbmF0ZSBOb3dcIlxuICAgIHBhZ2VMaW5rLmFwcGVuZENoaWxkKHRlbXApXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChwYWdlTGluaylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb25hdGUiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgSG9tZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9XCJpbWFnZXMvYXJ0aXN0UmVuZGVyaW5nMS5qcGdcIiBjbGFzcz1cIm1haW5QYWdlUGljXCI+XG4gICAgPGltZyBzcmM9XCJpbWFnZXMvc3RhdHVlLkpQR1wiIGNsYXNzPVwibWFpblBhZ2VQaWNcIj5cbiAgICA8cCBjbGFzcz1cIm1haW5QYWdlVGl0bGVcIj5UaGUgZm9sbG93aW5nIHJlc29sdXRpb24gd2FzIHBhc3NlZCBvbiBTZXB0ZW1iZXIgMjUsIDIwMTguIFdlIHRoYW5rIGV2ZXJ5b25lIGZvciB0aGVpciBzdXBwb3J0IGFuZCBHb2QgZm9yIEhpcyBmYXZvci48L3A+XG4gICAgPGltZyBzcmM9XCJpbWFnZXMvcmVzb2x1dGlvbi5qcGdcIiBjbGFzcz1cIm1haW5QYWdlUGljXCI+XG4gICAgPHAgY2xhc3M9XCJtYWluVGV4dFwiPkFmdGVyIHRoZSB0cmFnaWMgZXZlbnRzIGluIENoYXJsb3R0ZXN2aWxsZSwgVkEgbGFzdCBBdWd1c3QsIGNvbnZlcnNhdGlvbnMgc3RhcnRlZCBoYXBwZW5pbmcgaW4gRnJhbmtsaW4gYWJvdXQgaG93IG91ciBjaXR5IHdvdWxkIFxcKG9yIHdvdWxkIG5vdCkgcmVhY3QgaWYgc29tZXRoaW5nIHNpbWlsYXIgaGFwcGVuZWQgaGVyZS4gSW4gYSBsb3Qgb2Ygd2F5cywgb3VyIGNpdHkgaXMgbGlrZSBDaGFybG90dGVzdmlsbGUuIFRoZXNlIGRpc2N1c3Npb25zIGxlZCB0byB0aGUgdGhvdWdodCB0aGF0IGl0IHdvdWxkIGJlIGJldHRlciB0byBiZSDigJxhY3Rpb25hcnnigJ0gaW5zdGVhZCBvZiDigJxyZWFjdGlvbmFyeS7igJ0gVGhlIHJlc3VsdCBvZiB0aGVzZSBjb252ZXJzYXRpb25zIGxlZCB0byB0aGUgaWRlYSB0aGF0IGluc3RlYWQgb2YgdGFraW5nIGRvd24gaGlzdG9yaWNhbCBtYXJrZXJzLCB3aGF0IGlmIHdlIGFkZGVkIHRvIHRoZW0gYW5kIHRvbGQgYSAgICAg4oCcZnVsbGVyIHN0b3J5LuKAnSBGdXJ0aGVyLCBpdCB3YXMgYmVsaWV2ZWQgdGhhdCB0aGUgQ0hVUkNIIGluIEZyYW5rbGluIHNob3VsZCBsZWFkIHRoaXMgZWZmb3J0Ljxicj48YnI+T3ZlciB0aGUgY291cnNlIG9mIHRoaXMgcGFzdCB5ZWFyIHdlIGhhdmUgaW5pdGlhdGVkIGZ1cnRoZXIgZGlhbG9ndWUgYmV0d2Vlbjxicj48YnI+4oCi4oCmcGFzdG9ycyBhbmQgY2h1cmNoIGxlYWRlcnMuPGJyPuKAouKApnRoZSBoaXN0b3JpY2FsIGNvbW11bml0eSBpbiBGcmFua2xpbiBhbmQgV2lsbGlhbXNvbiBDb3VudHkuPGJyPuKAouKApnRoZSBjaXR5IGFkbWluaXN0cmF0b3IsIGNpdHkgbWF5b3IgYW5kIGNvdW50eSBtYXlvci48YnI+4oCi4oCmdGhlIGRvd250b3duIGJ1c2luZXNzIGNvbW11bml0eS48YnI+4oCi4oCmYW5kIGEgaG9zdCBvZiBpbmRpdmlkdWFscy5cbiAgICA8YnI+PGJyPjxicj48YnI+PGJyPlRpbWVsaW5lIDxicj48YnI+PGJyPlBoYXNlIDEgKGZvdXIgaGlzdG9yaWNhbCBtYXJrZXJzIGFyb3VuZCB0aGUgZG93bnRvd24gc3F1YXJlKSDigJMgQSBkZWRpY2F0aW9uIG9mIHRoZXNlIG1hcmtlcnMgb24gTW9uZGF5LCBKYW51YXJ5IDE0LCAyMDE5IGR1cmluZyB0aGUgQ0hVUkNIRVPigJkgYW5udWFsIE1hcnRpbiBMdXRoZXIgS2luZyBEYXkgQ2VsZWJyYXRpb24uIDxicj48YnI+VGhlIGZvdXIgbWFya2VycyBhcmU6PGJyPjxicj7igKJcdFVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcHM8YnI+4oCiXHQxODY3IERvd250b3duIFJpb3Q8YnI+4oCiXHRDb3VydGhvdXNlIGFuZCBNYXJrZXQgSG91c2U8YnI+4oCiXHRSZWNvbnN0cnVjdGlvbiBhbmQgSmltIENyb3c8YnI+PGJyPjxicj5QaGFzZSAyIOKAkyBFcmVjdCBhIHN0YXR1ZSBvZiBhIFVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcCBzb2xkaWVyIGF0IGEgeWV0IHRvIGJlIGRldGVybWluZWQgbG9jYXRpb24gaW5zaWRlIHRoZSBjaXR5IGxpbWl0cyBvZiBGcmFua2xpbi4gQSBkZWRpY2F0aW9uIG9mIHRoaXMgc3RhdHVlIG9uIE1vbmRheSwgSmFudWFyeSAxMywgMjAyMCBkdXJpbmcgdGhlIENIVVJDSEVT4oCZIGFubnVhbCBNYXJ0aW4gTHV0aGVyIEtpbmcgRGF5IENlbGVicmF0aW9uLiA8YnI+PGJyPuKAoiBQcmVzZW50IOKAnEZ1bGxlciBTdG9yeeKAnSBhdCBCT01BIFdvcmtzaG9wIG9uIFR1ZXNkYXksIEF1Z3VzdCAxNCwgMjAxOC4gPGJyPuKAolx0UHJlc2VudCDigJxGdWxsZXIgU3RvcnnigJ0gdG8gQ291bnR5IENvbW1pc3Npb25lcnMgb24gTW9uZGF5LCBTZXB0ZW1iZXIgMTAsIDIwMTguPGJyPuKAoiBBbm5vdW5jZSBmdW5kcmFpc2VyIGZvciB0aGUgVVNDVCBzdGF0dWUgU2VwdGVtYmVyIC8gT2N0b2JlciAyMDE4Ljxicj7igKIgQSBmYWxsIOKAnHJldml2YWzigJ0gd2l0aCB0aGUgQ0hVUkNIRVMgaW4gRnJhbmtsaW4gLyBXaWxsaWFtc29uIENvdW50eS48YnI+PGJyPjxicj48YnI+PGJyPlRoZSBBc2sgPGJyPjxicj5XZSBhcmUgYXNraW5nIHlvdSwgdGhlIGNpdHkgbGVhZGVycywgdG8gbGVuZCB5b3VyIHN1cHBvcnQgYmVoaW5kIG91ciBlZmZvcnRzIGFuZCB0byBoZWxwIHVzIHdpdGggdGhlIGxvY2F0aW9ucyBvZiB0aGUgbWFya2VycyBhbmQgdGhlIHN0YXR1ZS4gV2UgYXJlIG5vdCBhc2tpbmcgdGhlIGNpdHkgZm9yIGFueSBtb25leS4gQWxsIGZ1bmRzIHdpbGwgYmUgcmFpc2VkIHRocm91Z2ggcHJpdmF0ZSBkb25hdGlvbnMuPC9wPlxuICAgICAgICAgICAgYFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWUiLCJpbXBvcnQgbmF2QmFyIGZyb20gXCIuL25hdlwiO1xuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiO1xuXG5uYXZCYXIubG9hZE5hdmJhcigpXG5Ib21lLm1haW4oKSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuY29uc3QgbmV3cyA9IFtcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTkvMDIvMTIvZnJhbmtsaW4tdG4tYWZyaWNhbi1hbWVyaWNhbi1tYXJrZXJzLWNpdmlsLXdhci1oaXN0b3J5LzI4NDEwMjAwMDIvP2ZiY2xpZD1Jd0FSMGdZajB4RjA3eWplbHdyVWRxR3dZRnRhYlZMQzgxekR3VDdNVVktekVoa0dHRlpDcUNzNWREUG9ZXCIsIGltZzogXCIuLi9pbWFnZXMvd2Fyb3Zlci5wbmdcIiwgZGF0ZTogXCJGZWJydWFyeSAxMiwgMjAxOVwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCInVGhlIHdhciBpcyBvdmVyOicgRnJhbmtsaW4gbW92ZXMgZm9yd2FyZCB3aXRoIGxvY2F0aW9uIGZvciBBZnJpY2FuLUFtZXJpY2FuIG1hcmtlcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vZnJhbmtsaW5ob21lcGFnZS5jb20vZnJhbmtsaW4tYWxkZXJtZW4tbW9yZS1vcGVuLXRvLWZ1bGxlci1zdG9yeS1oaXN0b3JpY2FsLW1hcmtlci1wbGFuLWFmdGVyLXR1ZXNkYXktd29yay1zZXNzaW9uLz9mYmNsaWQ9SXdBUjJ6U0szUHdoS2Q5bUx0RGFLNTV0VjAxbWxydHBEMndjbGJsYjZaZlBvYmNzZEp3ZmRKeXFRLU5yb1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2FydGlzdFJlbmRlcmluZzIucG5nXCIsIGRhdGU6IFwiRmVicnVhcnkgMTIsIDIwMTlcIiwgc291cmNlOiBcIkZyYW5rbGluIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gYWxkZXJtZW4gbW9yZSBvcGVuIHRvIOKAmGZ1bGxlciBzdG9yeeKAmSBoaXN0b3JpY2FsIG1hcmtlciBwbGFuIGFmdGVyIFR1ZXNkYXkgd29yayBzZXNzaW9uXCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL25ld3MvYXJ0aWNsZV9hMDQ3ZjlkZS0xZWZlLTExZTktYjkxMy1mMzRjOGM1M2IzMzQuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL2FsZGVybWFuLmpwZ1wiLCBkYXRlOiBcIkphbnVhcnkgMjMsIDIwMTlcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiQWxkZXJtZW4gc2hvdyBzdHJvbmcgb3BpbmlvbnMgb24gJ0Z1bGxlciBTdG9yeScgbWFya2VyIHBsYWNlbWVudFwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93aWxsaWFtc29uc291cmNlLmNvbS9tYXJ0aW4tbHV0aGVyLWtpbmctanItY2VsZWJyYXRpb24tdGVsbHMtZnVsbGVyLXN0b3J5L1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3dpbGxpYW1zb25Tb3VyY2UuanBnXCIsIGRhdGU6IFwiSmFudWFyeSAyMiwgMjAxOVwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBTb3VyY2VcIiwgY29udGVudDogXCJNYXJ0aW4gTHV0aGVyIEtpbmcgSnIuIENlbGVicmF0aW9uIFNoYXJlcyDigJxGdWxsZXIgU3RvcnnigJ1cIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlXzQwMjZkMGEwLTFkYzUtMTFlOS05MjI3LTJiOTg5NmY1N2Y3MC5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvbWxrLmpwZ1wiLCBkYXRlOiBcIkphbnVhcnkgMjEsIDIwMTlcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiTWFydGluIEx1dGhlciBLaW5nIEpyLuKAmXMgZHJlYW0gcmVhbGl6ZWQgaW4gJ0Z1bGxlciBTdG9yeScgZHVyaW5nIGNlbGVicmF0aW9ucyBNb25kYXlcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vYnJlbnR3b29kaG9tZXBhZ2UuY29tL3N0b25lLW9mLWhvcGUtdGhlbWUtaW5zcGlyZXMtbWxrLWRheS1hdHRlbmRlZXMtdG8tY29uc2lkZXItZnVsbGVyLXN0b3J5LW9mLWhpc3RvcnkvXCIsIGltZzogXCIuLi9pbWFnZXMvc3RvbmUuanBnXCIsIGRhdGU6IFwiSmFudWFyeSAyMSwgMjAxOVwiLCBzb3VyY2U6IFwiQnJlbnR3b29kIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwi4oCYU3RvbmUgb2YgSG9wZeKAmSB0aGVtZSBpbnNwaXJlcyBNTEsgRGF5IGF0dGVuZGVlcyB0byBjb25zaWRlciBmdWxsZXIgc3Rvcnkgb2YgaGlzdG9yeVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9icmVudHdvb2Rob21lcGFnZS5jb20vY2VyZW1vbnktZm9yLW1say1kYXktaW4tZnJhbmtsaW4tdG8taW5jbHVkZS11cGRhdGUtb24tZnVsbGVyLXN0b3J5L1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2NlcmVtb255LmpwZ1wiLCBkYXRlOiBcIkphbnVhcnkgMTcsIDIwMTlcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIuKAmENlcmVtb255IGZvciBNTEsgRGF5IGluIEZyYW5rbGluIHRvIGluY2x1ZGUgdXBkYXRlIG9uIOKAmGZ1bGxlciBzdG9yeeKAmVwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfYjAxMzY5OWEtYzEyZC0xMWU4LWFlMDItNDc0YWM4ZTk5ZTdiLmh0bWw/dXRtX21lZGl1bT1zb2NpYWwmdXRtX3NvdXJjZT1mYWNlYm9vayZ1dG1fY2FtcGFpZ249dXNlci1zaGFyZVwiLCBpbWc6IFwiLi4vaW1hZ2VzL3doOTI1LmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAyNSwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJGcmFua2xpbiBCT01BIGFwcHJvdmVzICdUaGUgRnVsbGVyIFN0b3J5JyBwcm9wb3NhbCB0byBpbnN0YWxsIEFmcmljYW4tQW1lcmljYW4gaGlzdG9yaWNhbCBtYXJrZXJzXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy50ZW5uZXNzZWFuLmNvbS9zdG9yeS9uZXdzL2xvY2FsL3dpbGxpYW1zb24vMjAxOC8wOS8yNS9mcmFua2xpbi1zcXVhcmUtaGlzdG9yaWMtbWFya2Vycy1jb25mZWRlcmF0ZS1zdGF0dXRlLzE0MTMyNDMwMDIvXCIsIGltZzogXCIuLi9pbWFnZXMvdG45MjUuanBnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDI1LCAyMDE4XCIsIHNvdXJjZTogXCJUaGUgVGVubmVzc2VhblwiLCBjb250ZW50OiBcIkZyYW5rbGluIHZvdGVzIHRvIHN1cHBvcnQgQWZyaWNhbi1BbWVyaWNhbiBoaXN0b3JpYyBtYXJrZXJzIG5lYXIgQ29uZmVkZXJhdGUgbW9udW1lbnRcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vYnJlbnR3b29kaG9tZXBhZ2UuY29tL3Jlc29sdXRpb24tdG8tc3VwcG9ydC1mdWxsZXItc3RvcnktaGlzdG9yaWMtbWFya2Vycy11bmFuaW1vdXNseS1hcHByb3ZlZC13aWxsLXBsYWNlLW9uLXB1YmxpYy1sYW5kLWluLXRvd24tc3F1YXJlL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2JoOTI1LmpwZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAyNSwgMjAxOFwiLCBzb3VyY2U6IFwiQnJlbnR3b29kIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiUmVzb2x1dGlvbiB0byBzdXBwb3J0IFxcXCJGdWxsZXIgU3RvcnlcXFwiIGhpc3RvcmljIG1hcmtlcnMgdW5hbmltb3VzbHkgYXBwcm92ZWQsIHdpbGwgcGxhY2Ugb24gcHVibGljIGxhbmQgaW4gdG93biBzcXVhcmVcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vZnJhbmtsaW5ob21lcGFnZS5jb20vZnJhbmtsaW4tZ3JvdXBzLWluZGl2aWR1YWxzLXdyaXRlLWxldHRlcnMtb2Ytc3VwcG9ydC1mb3ItZnVsbGVyLXN0b3J5LWluaXRpYXRpdmUtd2lsbC1wcmVzZW50LXRvLWJvYXJkLW9mLW1heW9yLWFuZC1hbGRlcm1lbi10dWVzZGF5L1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2ZoOTI1LmpwZWdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMjQsIDIwMThcIiwgc291cmNlOiBcIkJyZW50d29vZCBIb21lcGFnZVwiLCBjb250ZW50OiBcIkZyYW5rbGluIGdyb3VwcywgaW5kaXZpZHVhbHMgd3JpdGUgbGV0dGVycyBvZiBzdXBwb3J0IGZvciBcXFwiRnVsbGVyIFN0b3J5XFxcIiBpbml0aWF0aXZlLCB3aWxsIHByZXNlbnQgdG8gQm9hcmQgb2YgTWF5b3IgYW5kIEFsZGVybWVuIFR1ZXNkYXlcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vb3Bpbmlvbi9hcnRpY2xlX2IxYjQ1ZDk0LWI2ZGUtMTFlOC04ZmY3LTNiNTJmNDUzYjYwMy5odG1sI2NvbW1lbnRzXCIsIGltZzogXCIuLi9pbWFnZXMvd2lsbGlhbXNvbmNvbW1lbnRhcnkuanBnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDEyLCAyMDE4XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIkNvbW1lbnRhcnk6IEdvb2QgaWRlYSBmb3Igc2xhdmVyeSBwbGFxdWVzIHN0eW1pZWQgYnkgZ3JvdXAncyByZXNpc3RhbmNlIHRvIGl0XCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL29waW5pb24vYXJ0aWNsZV8yMGNmZTFlMi1iNmEwLTExZTgtODRiZC1jYjljZjQ5ODE3ZGMuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL3dpbGxpYW1zb25MZXR0ZXIuanBnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDEyLCAyMDE4XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIkxldHRlciB0byBFZGl0b3I6IE1vdmluZyBmb3J3YXJkIHdpdGggJ1RoZSBGdWxsZXIgU3RvcnknIHByZWZlcnJlZCBieSBwYXN0b3JzXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2ZyYW5rbGluaG9tZXBhZ2UuY29tL2ZyYW5rbGluLWludGVuZHMtdG8tZ28tdG8tY291cnQtdG8tY2xhcmlmeS1vd25lcnNoaXAtb2YtcHVibGljLXNxdWFyZS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzNS5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjksIDIwMThcIiwgc291cmNlOiBcIkZyYW5rbGluIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gSW50ZW5kcyB0byBnbyB0byBjb3VydCB0byBjbGFyaWZ5IG93bmVyc2hpcCBvZiBQdWJsaWMgU3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL25ld3MvYXJ0aWNsZV9iMWFlOWJlMC1hYjFhLTExZTgtYTM3Ni0wNzI3YWNkZWExZjMuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M4LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOCwgMjAxOFwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJVREMgd2FudHMgbmV3IHBsYWNlbWVudCBmb3IgcHJvcG9zZWQgQ2l2aWwgV2FyIG1hcmtlcnM7IEJPTUEgZGVmZXJzIGRlY2lzaW9uXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy50ZW5uZXNzZWFuLmNvbS9zdG9yeS9uZXdzL2xvY2FsL3dpbGxpYW1zb24vMjAxOC8wOC8yOC9kYXVnaHRlcnMtY29uZmVkZXJhY3ktZnJhbmtsaW4tc3F1YXJlLXdpbGxpYW1zb24tY291bnR5LzExMjY2ODUwMDIvXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czcuanBnXCIsIGRhdGU6IFwiQXVndXN0IDI4LCAyMDE4XCIsIHNvdXJjZTogXCJUaGUgVGVubmVzc2VhblwiLCBjb250ZW50OiBcIkRhdWdodGVycyBvZiBDb25mZWRlcmFjeSB3YW50IHNheSBpbiBBZnJpY2FuLUFtZXJpY2FuIGhpc3RvcnkgbWFya2VycyBvbiBGcmFua2xpbiBTcXVhcmVcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE4LzA4LzI4L2ZyYW5rbGluLWNvbmZlZGVyYXRlLW1vbnVtZW50LXB1YmxpYy1zcXVhcmUvMTEyODQ1NzAwMi9cIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzOS5qcGVnXCIsIGRhdGU6IFwiQXVndXN0IDI4LCAyMDE4XCIsIHNvdXJjZTogXCJUaGUgVGVubmVzc2VhblwiLCBjb250ZW50OiBcIkZyYW5rbGluIGZpbGVzIHN1aXQgdG8gZmlndXJlIG91dCB3aG8gb3ducyBsYW5kIG9uIHB1YmxpYyBzcXVhcmVcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vZnJhbmtsaW5ob21lcGFnZS5jb20vZnJhbmtsaW4tYWxkZXJtZW4tdm90ZS10by1zbG93LWVmZm9ydC10by1hZGQtYWZyaWNhbi1hbWVyaWNhbi1oaXN0b3J5LW1hcmtlcnMtb24tdGhlLXB1YmxpYy1zcXVhcmUvXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czYuanBnXCIsIGRhdGU6IFwiQXVndXN0IDI4LCAyMDE4XCIsIHNvdXJjZTogXCJGcmFua2xpbiBIb21lcGFnZVwiLCBjb250ZW50OiBcIkFmcmljYW4gQW1lcmljYW4gaGlzdG9yeSBtYXJrZXJzIG9uIHRoZSBQdWJsaWMgU3F1YXJlXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy5zdGFyZGVtLmNvbS9uZXdzL25hdGlvbmFsL2JsYWNrLXBhc3RvcnMtY29uZmVkZXJhdGUtZGVzY2VuZGFudHMtc2hhcmUtY2l2aWwtd2FyLWhpc3RvcnktaW4tdGVubmVzc2VlL2FydGljbGVfMjBkY2FjNWYtZTFkOC01ZWNlLWI4YzItMTgyOTUzNDJjZTMzLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy90aGVTdGFyLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyNCwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFN0YXIgRGVtb2NyYXRcIiwgY29udGVudDogXCJCbGFjayBwYXN0b3JzLCBDb25mZWRlcmF0ZSBkZXNjZW5kYW50cyBzaGFyZSBDaXZpbCBXYXIgaGlzdG9yeSBpbiBUZW5uZXNzZWUgdG93blwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cud2tybi5jb20vbmV3cy9ncm91cC1vZi1mcmFua2xpbi1wYXN0b3JzLWhvcGUtdG8tYWRkLW1hcmtlcnMtdG8tY29uZmVkZXJhdGUtbW9udW1lbnRfMjAxODA4MjIxMjAzMjMvMTM4ODAzNjY3NlwiLCBpbWc6IFwiLi4vaW1hZ2VzL3drcm5WaWRlby5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjIsIDIwMThcIiwgc291cmNlOiBcIldLUk5cIiwgY29udGVudDogXCJHcm91cCBvZiBGcmFua2xpbiBwYXN0b3JzIGhvcGUgdG8gYWRkIG1hcmtlcnMgdG8gQ29uZmVkZXJhdGUgbW9udW1lbnRcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vY2l2aWx3YXJ0YWxrLmNvbS90aHJlYWRzL3Bhc3RvcnMtcHJvcG9zZS1oaXN0b3JpYy1tYXJrZXJzLWRldGFpbGluZy1zbGF2ZS1hdWN0aW9ucy1hbmQta2VlcGluZy1jb25mZWRlcmF0ZS1zdGF0dWUtdG9vLjE0OTA0Ny9cIiwgaW1nOiBcIi4uL2ltYWdlcy9jaXZpbFdhclRhbGtzLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNiwgMjAxOFwiLCBzb3VyY2U6IFwiQ2l2aWwgV2FyIFRhbGtcIiwgY29udGVudDogXCJQYXN0b3JzIFByb3Bvc2UgSGlzdG9yaWMgTWFya2VycyBEZXRhaWxpbmcgU2xhdmUgQXVjdGlvbnMgYW5kIEtlZXBpbmcgQ29uZmVkZXJhdGUgU3RhdHVlIFRvb1wifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cud3Ntdi5jb20vbmV3cy9wYXN0b3JzLXB1c2gtZm9yLWRpdmVyc2l0eS1pbi1mcmFua2xpbi1oaXN0b3JpY2FsLW1hcmtlcnMvYXJ0aWNsZV81YzM5MTVmOC1hMGUwLTExZTgtOGQyZS05YjFmMzZmOWVkNjkuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL3dzbXYuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE1LCAyMDE4XCIsIHNvdXJjZTogXCJXU01WXCIsIGNvbnRlbnQ6IFwiUGFzdG9ycyBwdXNoIGZvciBkaXZlcnNpdHkgaW4gRnJhbmtsaW4gaGlzdG9yaWNhbCBtYXJrZXJzXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2ZyYW5rbGluaG9tZXBhZ2UuY29tL2ZyYW5rbGluLXBhc3RvcnMtcHJvcG9zZS1oaXN0b3JpYy1tYXJrZXJzLWRldGFpbGluZy1zbGF2ZS1hdWN0aW9ucy11cy1jb2xvcmVkLXRyb29wLWVmZm9ydHMvXCIsIGltZzogXCIuLi9pbWFnZXMvZnJhbmtsaW5Ib21lcGFnZS5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTQsIDIwMThcIiwgc291cmNlOiBcIkZyYW5rbGluIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gcGFzdG9ycyBwcm9wb3NlIGhpc3RvcmljIG1hcmtlcnMgZGV0YWlsaW5nIHNsYXZlIGF1Y3Rpb25zLCBBZnJpY2FuLUFtZXJpY2FuIENpdmlsIFdhciBlZmZvcnRzXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy50ZW5uZXNzZWFuLmNvbS9zdG9yeS9uZXdzL2xvY2FsL3dpbGxpYW1zb24vMjAxOC8wOC8xNC9mcmFua2xpbi1jb25mZWRlcmF0ZS1tb251bWVudC13aWxsaWFtc29uLWNvdW50eS1mYWl0aC1sZWFkZXJzLzk5MzE0NDAwMi9cIiwgaW1nOiBcIi4uL2ltYWdlcy90ZW5uZXNzZWFuLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNCwgMjAxOFwiLCBzb3VyY2U6IFwiVGhlIFRlbm5lc3NlYW5cIiwgY29udGVudDogXCJGcmFua2xpbiBmYWl0aCBsZWFkZXJzIHdhbnQgbWFya2VycyBuZXh0IHRvIENvbmZlZGVyYXRlIG1vbnVtZW50XCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL25ld3MvYXJ0aWNsZV8wYTA3NTZiNi1hMDE2LTExZTgtOTUwNC04ZmU4ZWIxYjY3N2QuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL3dpbGxpYW1zb25IZXJhbGQuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE0LCAyMDE4XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIlRocmVlIHByZWFjaGVycyBhbmQgYSBoaXN0b3JpYW4gdGVsbCAnZnVsbGVyIHN0b3J5JyBieSBwcm9wb3NpbmcgQ2l2aWwgV2FyIG1vbnVtZW50LCBtYXJrZXJzXCJ9LFxuICB7aHJlZjogXCJodHRwczovL2JyZW50d29vZGhvbWVwYWdlLmNvbS9mcmFua2xpbi1wYXN0b3JzLXByb3Bvc2UtaGlzdG9yaWMtbWFya2Vycy1kZXRhaWxpbmctc2xhdmUtYXVjdGlvbnMtdXMtY29sb3JlZC10cm9vcC1lZmZvcnRzL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2JyZW50d29vZEhvbWVwYWdlLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNCwgMjAxOFwiLCBzb3VyY2U6IFwiQnJlbnR3b29kIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gcGFzdG9ycyBwcm9wb3NlIGhpc3RvcmljIG1hcmtlcnMgZGV0YWlsaW5nIHNsYXZlIGF1Y3Rpb25zLCBBZnJpY2FuLUFtZXJpY2FuIENpdmlsIFdhciBlZmZvcnRzXCJ9LFxuXVxuXG5jb25zdCBNZWRpYSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG5ld3NTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbmV3cy5mb3JFYWNoKHN0b3J5ID0+IHtcbiAgICAgIGxldCBhcnRpY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFydGljbGVcIilcbiAgICAgIGFydGljbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXdfc3RvcnlcIilcbiAgICAgIGxldCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXdzX2xpbmtcIilcbiAgICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBzdG9yeS5ocmVmKVxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJibGFua1wiKVxuICAgICAgbGV0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXdfaW1hZ2VcIilcbiAgICAgIGltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBzdG9yeS5pbWcpXG4gICAgICBsZXQgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICBkYXRlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3X2RhdGVcIilcbiAgICAgIGRhdGUuaW5uZXJIVE1MID0gYCR7c3RvcnkuZGF0ZX0gLSAke3N0b3J5LnNvdXJjZX1gXG4gICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICBjb250ZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmV3X2NvbnRlbnRcIilcbiAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gc3RvcnkuY29udGVudFxuICAgICAgbGluay5hcHBlbmRDaGlsZChpbWFnZSlcbiAgICAgIGxpbmsuYXBwZW5kQ2hpbGQoZGF0ZSlcbiAgICAgIGxpbmsuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICAgIGFydGljbGUuYXBwZW5kQ2hpbGQobGluaylcbiAgICAgIG5ld3NTZWN0aW9uLmFwcGVuZENoaWxkKGFydGljbGUpXG4gICAgfSlcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChuZXdzU2VjdGlvbilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNZWRpYSIsImltcG9ydCBVU0NUIGZyb20gXCIuL3VzY3RcIlxuaW1wb3J0IENvdXJ0aG91c2UgZnJvbSBcIi4vY291cnRob3VzZVwiXG5pbXBvcnQgUmlvdCBmcm9tIFwiLi9yaW90XCJcbmltcG9ydCBSZWNvbnN0cnVjdGlvbiBmcm9tIFwiLi9yZWNvbnN0cnVjdGlvblwiXG5pbXBvcnQgU3RhdHVlIGZyb20gXCIuL3N0YXR1ZVwiXG5pbXBvcnQgTWVkaWEgZnJvbSBcIi4vbWVkaWFcIlxuaW1wb3J0IERvbmF0ZSBmcm9tIFwiLi9kb25hdGVcIlxuaW1wb3J0IEhvbWUgZnJvbSBcIi4vaG9tZVwiXG5cbmxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTmF2YmFyXCIpXG5cblxuY29uc3QgbmF2QmFyID0ge1xuXG4gIGV2ZW50TGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgbGV0IG5ld1BhZ2UgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgc3dpdGNoKG5ld1BhZ2UpIHtcbiAgICAgIGNhc2UgXCJ1c2N0XCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIFVTQ1QubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImNvdXJ0aG91c2VcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgQ291cnRob3VzZS5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlvdFwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBSaW90Lm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyZWNvbnN0cnVjdGlvblwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBSZWNvbnN0cnVjdGlvbi5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RhdHVlXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIFN0YXR1ZS5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWVkaWFcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgTWVkaWEubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvbmF0ZVwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBEb25hdGUubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhvbWVcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgSG9tZS5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibWFya2Vyc1wiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBicmVhaztcblxuICAgIH1cbiAgfSxcblxuICBtYWtlTWFya2Vycyh2YWx1ZSwgdGV4dCkge1xuICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuZXZlbnRMaXN0ZW5lcnMpXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIHZhbHVlKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcnNcIilcbiAgICBidG4uaW5uZXJUZXh0ID0gdGV4dFxuICAgIHJldHVybiBidG5cbiAgfSxcblxuICBtYWtlQnRuKHZhbHVlLCB0ZXh0KSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5ldmVudExpc3RlbmVycylcbiAgICBidG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudVwiKVxuICAgIGJ0bi5pbm5lclRleHQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ0blxuICB9LFxuXG4gIGxvYWROYXZiYXIoKSB7XG4gICAgbGV0IGVsZW1lbnRIb2xkZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKVxuICAgIGhlYWRpbmcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluVGl0bGVcIilcbiAgICBoZWFkaW5nLmlubmVyVGV4dCA9IFwiVGVsbGluZyBhIEZVTExFUiBTVE9SWSBvZiBGcmFua2xpblwiXG4gICAgZWxlbWVudEhvbGRlci5hcHBlbmRDaGlsZChoZWFkaW5nKVxuICAgIGxldCBzdWJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpXG4gICAgc3ViSGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1YlRpdGxlXCIpXG4gICAgc3ViSGVhZGluZy5pbm5lclRleHQgPSBcIkxlYXJuaW5nIEZyb20gT3VyIFBhc3QgVG8gUmVjb25jaWxlIE91ciBGdXR1cmVcIlxuICAgIGVsZW1lbnRIb2xkZXIuYXBwZW5kQ2hpbGQoc3ViSGVhZGluZylcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhlYWRpbmdcIilcbiAgICBsZXQgc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgc2VjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImhvbWVfbWVudVwiKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VCdG4oXCJob21lXCIsIFwiSG9tZSBQYWdlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWN0KVxuICAgIHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJzX21lbnVcIilcbiAgICBsZXQgbWFya2VycyA9IG5hdkJhci5tYWtlQnRuKFwibWFya2Vyc1wiLCBcIk1lbnVcIilcbiAgICBtYXJrZXJzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiTWFya2Vyc1wiKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobWFya2VycylcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInVzY3RcIiwgXCJVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwiY291cnRob3VzZVwiLCBcIkNvdXJ0aG91c2UgLyBNYXJrZXQgSG91c2VcIikpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZU1hcmtlcnMoXCJyaW90XCIsIFwiMTg2NyBSaW90XCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwicmVjb25zdHJ1Y3Rpb25cIiwgXCJSZWNvbnN0cnVjdGlvblwiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInN0YXR1ZVwiLCBcIlVTQ1QgU3RhdHVlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwiZG9uYXRlXCIsIFwiRG9uYXRlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWN0KVxuICAgIHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZWRpYV9tZW51XCIpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcIm1lZGlhXCIsIFwiTmV3cyBNZWRpYVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBzZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICBzZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVkaWFfbWVudVwiKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VCdG4oXCJkb25hdGVcIiwgXCJEb25hdGVcIikpXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlY3QpXG4gICAgZWxlbWVudEhvbGRlci5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoZWxlbWVudEhvbGRlcilcbiAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICB9LFxuXG4gIGhpZGVNYXJrZXJzKCkge1xuICAgIGxldCBNYXJrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJrZXJzXCIpXG4gICAgTWFya2Vycy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLmhpZGVNYXJrZXJzKVxuICAgIE1hcmtlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5zaG93TWFya2VycylcbiAgICBNYXJrZXJzLmlubmVySFRNTCA9IFwiTWVudVwiXG4gICAgJChcIiNNYXJrZXJzXCIpLnNob3coKVxuICAgICQoXCIubWFya2Vyc1wiKS5oaWRlKClcbiAgfSxcblxuICBzaG93TWFya2VycygpIHtcbiAgICBsZXQgTWFya2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFya2Vyc1wiKVxuICAgIE1hcmtlcnMucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5zaG93TWFya2VycylcbiAgICBNYXJrZXJzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuaGlkZU1hcmtlcnMpXG4gICAgTWFya2Vycy5pbm5lckhUTUwgPSBcIkhpZGUgTWVudVwiXG4gICAgJChcIi5tYXJrZXJzXCIpLnNob3coKVxuICB9XG5cblxufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXJcblxuICAgIC8vIDxwIGlkPVwibGVmdEhlYWRpbmdcIj5TZWVraW5nIFRvIFRlbGwgQSAmbmJzcDwvcD5cbiAgICAvLyA8cCBpZD1cImJpZ0hlYWRpbmdcIj5GdWxsZXIgU3Rvcnk8L3A+XG4gICAgLy8gPHAgaWQ9XCJyaWdodEhlYWRpbmdcIj4mbmJzcCBPZiBGcmFua2xpbjwvcD5cbiAgICAvLyA8cCBpZD1cInRhZ0hlYWRpbmdcIj5MZWFybmluZyBGcm9tIE91ciBQYXN0IFRvIFJlY29uY2lsZSBPdXIgRnV0dXJlPC9wPiIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBSZWNvbnN0cnVjdGlvbiA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl9kaXZcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl90ZXh0X2RpdlwiKVxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIlJlY29uc3RydWN0aW9uXCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJGb2xsb3dpbmcgdGhlIENpdmlsIFdhciB0aGUgMTN0aCwgMTR0aCwgYW5kIDE1dGggQW1lbmRtZW50cyB3ZXJlIHBhc3NlZCBhbmQgcmF0aWZpZWQuIEluIDE4NzcgUmVjb25zdHJ1Y3Rpb24gZW5kZWQgYW5kIHRoZSBKaW0gQ3JvdyBFcmEgc29vbiBiZWdhbi4gSXQgd2FzIGR1cmluZyB0aGlzIHRpbWUgdGhhdCBzZXBhcmF0ZSByZXN0cm9vbXMgYW5kIHNlcGFyYXRlIHdhdGVyIGZvdW50YWlucyB3ZXJlIGluIEZyYW5rbGluLlwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNvbnN0cnVjdGlvbiIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBSaW90ID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX2RpdlwiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX3RleHRfZGl2XCIpXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiMTg2NyBSaW90XCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJPbiBKdWx5IDYsIDE4NjcsIGFmdGVyIGEgZGVsYXllZCBKdWx5IDR0aCBwYXJhZGUgYW5kIHBvbGl0aWNhbCBzcGVlY2hlcywgYSByYWNlIHJpb3QgYnJva2Ugb3V0IG9uIHRoZSBzcXVhcmUgaW5qdXJpbmcgc2V2ZXJhbCBwZW9wbGUgYW5kIGtpbGxpbmcgb25lIHBlcnNvbi5cIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG1haW5EaXYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmlvdCIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxubGV0IGltYWdlcyA9IFtcIi4uL2ltYWdlcy9zdGF0dWUuSlBHXCIsIFwiLi4vaW1hZ2VzL3N0YXR1ZTEuSlBHXCIsIFwiLi4vaW1hZ2VzL3N0YXR1ZTIuSlBHXCIsIFwiLi4vaW1hZ2VzL3N0YXR1ZTMuSlBHXCJdXG5cblxuY29uc3QgU3RhdHVlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICBsZXQgbWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIG1haW5UZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgbWFpblRleHQuaW5uZXJIVE1MID0gXCJVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzIFN0YXR1ZVwiXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobWFpblRleHQpXG4gICAgaW1hZ2VzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBsZXQgcGhvdG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICBwaG90by5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN0YXR1ZV9pbWFnZVwiKVxuICAgICAgcGhvdG8uc2V0QXR0cmlidXRlKFwic3JjXCIsIGl0ZW0pXG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChwaG90bylcbiAgICB9KVxuICAgIGxldCBzdWJUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgc3ViVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICBzdWJUaXRsZS5pbm5lckhUTUwgPSBcIlRoZSB1bHRpbWF0ZSBnb2FsIG9mIHRoZSDigJxGdWxsZXIgU3RvcnnigJ0gaXMgdG8gZXJlY3QgYSBzdGF0dWUgb2YgYSBVU0NUIFNvbGRpZXIuIDxicj48YnI+VGhlIGdvYWwgaXMgZm9yIHRoaXMgc29sZGllciB0byBiZSBwbGFjZWQgaW5zaWRlIHRoZSBDaXR5IExpbWl0cy48YnI+PGJyPlRoZSBleGFjdCBsb2NhdGlvbiBoYXMgeWV0IHRvIGJlIGRldGVybWluZWQuXCJcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzdWJUaXRsZSlcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChmcmFnbWVudClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTdGF0dWUiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgVVNDVCA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl9kaXZcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl90ZXh0X2RpdlwiKVxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIlVuaXRlZCBTdGF0ZXMgQ29sb3JlZCBUcm9vcHNcIlxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4vaW1hZ2VzL2Z1bGxlclN0b3J5UGxhcXVlLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiSGlzdG9yaWNhbCBQbGFxdWVcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyUGFnZVBpY1wiKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkFyb3VuZCAzMDAgV2lsbGlhbXNvbiBDb3VudHkgcmVzaWRlbnRzLCB3aG8gd2VyZSBlaXRoZXIgZnJlZWQgc2xhdmVzIG9yIGVzY2FwZWQgc2xhdmVzLCBzZXJ2ZWQgaW4gdGhlIFVuaW9uIEFybXkgZHVyaW5nIHRoZSBDaXZpbCBXYXIuPGJyPjxicj5UaGVpciBzdG9yeSBpcyBqdXN0IG5vdyBiZWluZyB0b2xkLjxicj48YnI+VGhlaXIgc3RvcnkgbmVlZHMgdG8gYmUgaGVhcmQuXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChtYWluRGl2KVxuICAgIGxldCBwYWdlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHA6Ly93d3cuc2xhdmVzdG9zb2xkaWVycy5jb21cIilcbiAgICBwYWdlTGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtcIilcbiAgICBwYWdlTGluay5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJibGFua1wiKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9zbGF2ZVRvU29sZGllcnMuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJTbGF2ZSBUbyBTb2xkaWVycyBQaWNcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiVVNDVFBpY1wiKVxuICAgIHBhZ2VMaW5rLmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtUZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkNsaWNrIGhlcmUgdG8gbGVhcm4gbW9yZS5cIlxuICAgIHBhZ2VMaW5rLmFwcGVuZENoaWxkKHRlbXApXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQocGFnZUxpbmspXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVVNDVCJdfQ==
