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
let resolution = "../../public/images/resolution.jpg";
const Home = {
  main() {
    window.scrollTo(0, 0);
    placeholder.innerHTML = `
    <img src="images/artistRendering.jpg" class="mainPageFlier">
    <img src="images/fullerStoryPrayer.jpg" class="mainPageFlier">
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
    sect.setAttribute("class", "navbar_menu");
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
    sect.setAttribute("class", "navbar_menu");
    sect.appendChild(navBar.makeBtn("media", "News Media"));
    div.appendChild(sect);
    sect = document.createElement("section");
    sect.setAttribute("class", "navbar_menu");
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
    let newImage = document.createElement("img");
    newImage.setAttribute("class", "mainPageFlier");
    newImage.setAttribute("src", "../images/artistRendering.jpg");
    fragment.appendChild(newImage);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2NvdXJ0aG91c2UuanMiLCIuLi9zY3JpcHRzL2RvbmF0ZS5qcyIsIi4uL3NjcmlwdHMvaG9tZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyIsIi4uL3NjcmlwdHMvbWVkaWEuanMiLCIuLi9zY3JpcHRzL25hdi5qcyIsIi4uL3NjcmlwdHMvcmVjb25zdHJ1Y3Rpb24uanMiLCIuLi9zY3JpcHRzL3Jpb3QuanMiLCIuLi9zY3JpcHRzL3N0YXR1ZS5qcyIsIi4uL3NjcmlwdHMvdXNjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLE1BQXhCLENBQWxCO0FBRUEsTUFBTSxVQUFVLEdBQUc7QUFFakIsRUFBQSxJQUFJLEdBQUc7QUFDTCxJQUFBLE1BQU0sQ0FBQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0EsSUFBQSxXQUFXLENBQUMsU0FBWixHQUF3QixFQUF4QjtBQUNBLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQSxJQUFBLE9BQU8sQ0FBQyxZQUFSLENBQXFCLE9BQXJCLEVBQThCLFlBQTlCO0FBQ0EsUUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLElBQUEsR0FBRyxDQUFDLFlBQUosQ0FBaUIsT0FBakIsRUFBMEIsaUJBQTFCO0FBQ0EsUUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWDtBQUNBLElBQUEsSUFBSSxDQUFDLFlBQUwsQ0FBa0IsSUFBbEIsRUFBd0IsV0FBeEI7QUFDQSxJQUFBLElBQUksQ0FBQyxTQUFMLEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsV0FBVyxDQUFDLFdBQVosQ0FBd0IsSUFBeEI7QUFDQSxJQUFBLElB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LEdBQWlCLDJCQUFqQjtBQUNBLElBQUEsUUFBUSxDQUFDLFdBQVQsQ0FBcUIsSUFBckI7QUFDQSxJQUFBLFdBQVcsQ0FBQyxXQUFaLENBQXdCLFFBQXhCO0FBQ0Q7O0FBdENVLENBQWI7ZUF5Q2UsSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBDb3VydGhvdXNlID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX2RpdlwiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX3RleHRfZGl2XCIpXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiQ291cnRob3VzZSAmIE1hcmtldCBIb3VzZVwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiVGhyb3VnaG91dCB0aGUgMTgwMHMsIGEg4oCcbWFya2V0IGhvdXNl4oCdIHN0b29kIGNsb3NlIHRvIHRoZSBjb3VydGhvdXNlLuKAnSBGb3IgbmVhcmx5IDUwIHllYXJzLCBodW1hbiBiZWluZ3Mgd2VyZSBzb2xkIGFuZCB0cmFkZWQgYXQgdGhpcyDigJxtYXJrZXQgaG91c2Uu4oCdIFRoaXMgc2xhdmUgbWFya2V0IGluY2x1ZGVkIHRoZSBzYWxlIG9mIHdvbWVuIGFuZCBjaGlsZHJlbi5cIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG1haW5EaXYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ291cnRob3VzZSIsImxldCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWFpblwiKVxuXG5jb25zdCBEb25hdGUgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfZGl2XCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfdGV4dF9kaXZcIilcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJEb25hdGUgdG8gdGhlIEZ1bGxlciBTdG9yeVwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyRG9uYXRlLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiRG9uYXRlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJJZiB5b3Ugd291bGQgbGlrZSB0byBzdXBwb3J0IHRoaXMgZWZmb3J0IHRvIHRlbGwgdGhlIEZ1bGxlciBTdG9yeSBvZiBGcmFua2xpbiwgcGxlYXNlIGNsaWNrIG9uIHRoZSBsaW5rIHRvIGdpdmUgb25saW5lLiBBbGwgZG9uYXRpb25zIGFyZSB0YXggZGVkdWN0aWJsZS4gV2hlbiBtYWtpbmcgYSBkb25hdGlvbiwgcGxlYXNlIGVtYWlsIEtldmluIFJpZ2dzIGF0IGtldmluQGZyYW5rbGluY29tbXVuaXR5Y2h1cmNoLm9yZyBhbmQgcmVmZXJlbmNlIHRoYXQgdGhlIGRvbmF0aW9uIGlzIGZvciB0aGUgRnVsbGVyIFN0b3J5IHByb2plY3Qgc28gd2UgY2FuIGVuc3VyZSBpdCBpcyBhcHBsaWVkIGluIHRoZSBjb3JyZWN0IHdheS4gWW91IGNhbiBjaG9vc2UgZWl0aGVyIEZyYW5rbGluIENvbW11bml0eSBDaHVyY2ggb3IgRnJhbmtsaW4gQ29tbXVuaXR5IERldmVsb3BtZW50IGZvciB0aGUgb3JnYW5pemF0aW9uLCBqdXN0IG1ha2Ugc3VyZSB0byBhbHNvIHNlbmQgdGhlIGVtYWlsIHRvIEtldmluLlwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgbGV0IHBhZ2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBwYWdlTGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9mcmFua2xpbmNvbW11bml0eWNodXJjaC5vcmcvZ2l2aW5nL1wiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlua1wiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcImJsYW5rXCIpXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvbmF0ZV90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIkRvbmF0ZSBOb3dcIlxuICAgIHBhZ2VMaW5rLmFwcGVuZENoaWxkKHRlbXApXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChwYWdlTGluaylcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEb25hdGUiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcbmxldCByZXNvbHV0aW9uID0gXCIuLi8uLi9wdWJsaWMvaW1hZ2VzL3Jlc29sdXRpb24uanBnXCJcblxuY29uc3QgSG9tZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBgXG4gICAgPGltZyBzcmM9XCJpbWFnZXMvYXJ0aXN0UmVuZGVyaW5nLmpwZ1wiIGNsYXNzPVwibWFpblBhZ2VGbGllclwiPlxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL2Z1bGxlclN0b3J5UHJheWVyLmpwZ1wiIGNsYXNzPVwibWFpblBhZ2VGbGllclwiPlxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3N0YXR1ZS5KUEdcIiBjbGFzcz1cIm1haW5QYWdlUGljXCI+XG4gICAgPHAgY2xhc3M9XCJtYWluUGFnZVRpdGxlXCI+VGhlIGZvbGxvd2luZyByZXNvbHV0aW9uIHdhcyBwYXNzZWQgb24gU2VwdGVtYmVyIDI1LCAyMDE4LiBXZSB0aGFuayBldmVyeW9uZSBmb3IgdGhlaXIgc3VwcG9ydCBhbmQgR29kIGZvciBIaXMgZmF2b3IuPC9wPlxuICAgIDxpbWcgc3JjPVwiaW1hZ2VzL3Jlc29sdXRpb24uanBnXCIgY2xhc3M9XCJtYWluUGFnZVBpY1wiPlxuICAgIDxwIGNsYXNzPVwibWFpblRleHRcIj5BZnRlciB0aGUgdHJhZ2ljIGV2ZW50cyBpbiBDaGFybG90dGVzdmlsbGUsIFZBIGxhc3QgQXVndXN0LCBjb252ZXJzYXRpb25zIHN0YXJ0ZWQgaGFwcGVuaW5nIGluIEZyYW5rbGluIGFib3V0IGhvdyBvdXIgY2l0eSB3b3VsZCBcXChvciB3b3VsZCBub3QpIHJlYWN0IGlmIHNvbWV0aGluZyBzaW1pbGFyIGhhcHBlbmVkIGhlcmUuIEluIGEgbG90IG9mIHdheXMsIG91ciBjaXR5IGlzIGxpa2UgQ2hhcmxvdHRlc3ZpbGxlLiBUaGVzZSBkaXNjdXNzaW9ucyBsZWQgdG8gdGhlIHRob3VnaHQgdGhhdCBpdCB3b3VsZCBiZSBiZXR0ZXIgdG8gYmUg4oCcYWN0aW9uYXJ54oCdIGluc3RlYWQgb2Yg4oCccmVhY3Rpb25hcnku4oCdIFRoZSByZXN1bHQgb2YgdGhlc2UgY29udmVyc2F0aW9ucyBsZWQgdG8gdGhlIGlkZWEgdGhhdCBpbnN0ZWFkIG9mIHRha2luZyBkb3duIGhpc3RvcmljYWwgbWFya2Vycywgd2hhdCBpZiB3ZSBhZGRlZCB0byB0aGVtIGFuZCB0b2xkIGEgICAgIOKAnGZ1bGxlciBzdG9yeS7igJ0gRnVydGhlciwgaXQgd2FzIGJlbGlldmVkIHRoYXQgdGhlIENIVVJDSCBpbiBGcmFua2xpbiBzaG91bGQgbGVhZCB0aGlzIGVmZm9ydC48YnI+PGJyPk92ZXIgdGhlIGNvdXJzZSBvZiB0aGlzIHBhc3QgeWVhciB3ZSBoYXZlIGluaXRpYXRlZCBmdXJ0aGVyIGRpYWxvZ3VlIGJldHdlZW48YnI+PGJyPuKAouKApnBhc3RvcnMgYW5kIGNodXJjaCBsZWFkZXJzLjxicj7igKLigKZ0aGUgaGlzdG9yaWNhbCBjb21tdW5pdHkgaW4gRnJhbmtsaW4gYW5kIFdpbGxpYW1zb24gQ291bnR5Ljxicj7igKLigKZ0aGUgY2l0eSBhZG1pbmlzdHJhdG9yLCBjaXR5IG1heW9yIGFuZCBjb3VudHkgbWF5b3IuPGJyPuKAouKApnRoZSBkb3dudG93biBidXNpbmVzcyBjb21tdW5pdHkuPGJyPuKAouKApmFuZCBhIGhvc3Qgb2YgaW5kaXZpZHVhbHMuXG4gICAgPGJyPjxicj48YnI+PGJyPjxicj5UaW1lbGluZSA8YnI+PGJyPjxicj5QaGFzZSAxIChmb3VyIGhpc3RvcmljYWwgbWFya2VycyBhcm91bmQgdGhlIGRvd250b3duIHNxdWFyZSkg4oCTIEEgZGVkaWNhdGlvbiBvZiB0aGVzZSBtYXJrZXJzIG9uIE1vbmRheSwgSmFudWFyeSAxNCwgMjAxOSBkdXJpbmcgdGhlIENIVVJDSEVT4oCZIGFubnVhbCBNYXJ0aW4gTHV0aGVyIEtpbmcgRGF5IENlbGVicmF0aW9uLiA8YnI+PGJyPlRoZSBmb3VyIG1hcmtlcnMgYXJlOjxicj48YnI+4oCiXHRVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzPGJyPuKAolx0MTg2NyBEb3dudG93biBSaW90PGJyPuKAolx0Q291cnRob3VzZSBhbmQgTWFya2V0IEhvdXNlPGJyPuKAolx0UmVjb25zdHJ1Y3Rpb24gYW5kIEppbSBDcm93PGJyPjxicj48YnI+UGhhc2UgMiDigJMgRXJlY3QgYSBzdGF0dWUgb2YgYSBVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3Agc29sZGllciBhdCBhIHlldCB0byBiZSBkZXRlcm1pbmVkIGxvY2F0aW9uIGluc2lkZSB0aGUgY2l0eSBsaW1pdHMgb2YgRnJhbmtsaW4uIEEgZGVkaWNhdGlvbiBvZiB0aGlzIHN0YXR1ZSBvbiBNb25kYXksIEphbnVhcnkgMTMsIDIwMjAgZHVyaW5nIHRoZSBDSFVSQ0hFU+KAmSBhbm51YWwgTWFydGluIEx1dGhlciBLaW5nIERheSBDZWxlYnJhdGlvbi4gPGJyPjxicj7igKIgUHJlc2VudCDigJxGdWxsZXIgU3RvcnnigJ0gYXQgQk9NQSBXb3Jrc2hvcCBvbiBUdWVzZGF5LCBBdWd1c3QgMTQsIDIwMTguIDxicj7igKJcdFByZXNlbnQg4oCcRnVsbGVyIFN0b3J54oCdIHRvIENvdW50eSBDb21taXNzaW9uZXJzIG9uIE1vbmRheSwgU2VwdGVtYmVyIDEwLCAyMDE4Ljxicj7igKIgQW5ub3VuY2UgZnVuZHJhaXNlciBmb3IgdGhlIFVTQ1Qgc3RhdHVlIFNlcHRlbWJlciAvIE9jdG9iZXIgMjAxOC48YnI+4oCiIEEgZmFsbCDigJxyZXZpdmFs4oCdIHdpdGggdGhlIENIVVJDSEVTIGluIEZyYW5rbGluIC8gV2lsbGlhbXNvbiBDb3VudHkuPGJyPjxicj48YnI+PGJyPjxicj5UaGUgQXNrIDxicj48YnI+V2UgYXJlIGFza2luZyB5b3UsIHRoZSBjaXR5IGxlYWRlcnMsIHRvIGxlbmQgeW91ciBzdXBwb3J0IGJlaGluZCBvdXIgZWZmb3J0cyBhbmQgdG8gaGVscCB1cyB3aXRoIHRoZSBsb2NhdGlvbnMgb2YgdGhlIG1hcmtlcnMgYW5kIHRoZSBzdGF0dWUuIFdlIGFyZSBub3QgYXNraW5nIHRoZSBjaXR5IGZvciBhbnkgbW9uZXkuIEFsbCBmdW5kcyB3aWxsIGJlIHJhaXNlZCB0aHJvdWdoIHByaXZhdGUgZG9uYXRpb25zLjwvcD5cbiAgICAgICAgICAgIGBcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lIiwiaW1wb3J0IG5hdkJhciBmcm9tIFwiLi9uYXZcIjtcbmltcG9ydCBIb21lIGZyb20gXCIuL2hvbWVcIjtcblxubmF2QmFyLmxvYWROYXZiYXIoKVxuSG9tZS5tYWluKCkiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcbmNvbnN0IG5ld3MgPSBbXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlX2EwNDdmOWRlLTFlZmUtMTFlOS1iOTEzLWYzNGM4YzUzYjMzNC5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvYWxkZXJtYW4uanBnXCIsIGRhdGU6IFwiSmFudWFyeSAyMywgMjAxOVwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJBbGRlcm1lbiBzaG93IHN0cm9uZyBvcGluaW9ucyBvbiAnRnVsbGVyIFN0b3J5JyBtYXJrZXIgcGxhY2VtZW50XCJ9LFxuICB7aHJlZjogXCJodHRwczovL3dpbGxpYW1zb25zb3VyY2UuY29tL21hcnRpbi1sdXRoZXIta2luZy1qci1jZWxlYnJhdGlvbi10ZWxscy1mdWxsZXItc3RvcnkvXCIsIGltZzogXCIuLi9pbWFnZXMvd2lsbGlhbXNvblNvdXJjZS5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIyLCAyMDE5XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIFNvdXJjZVwiLCBjb250ZW50OiBcIk1hcnRpbiBMdXRoZXIgS2luZyBKci4gQ2VsZWJyYXRpb24gU2hhcmVzIOKAnEZ1bGxlciBTdG9yeeKAnVwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9uZXdzL2FydGljbGVfNDAyNmQwYTAtMWRjNS0xMWU5LTkyMjctMmI5ODk2ZjU3ZjcwLmh0bWxcIiwgaW1nOiBcIi4uL2ltYWdlcy9tbGsuanBnXCIsIGRhdGU6IFwiSmFudWFyeSAyMSwgMjAxOVwiLCBzb3VyY2U6IFwiV2lsbGlhbXNvbiBIZXJhbGRcIiwgY29udGVudDogXCJNYXJ0aW4gTHV0aGVyIEtpbmcgSnIu4oCZcyBkcmVhbSByZWFsaXplZCBpbiAnRnVsbGVyIFN0b3J5JyBkdXJpbmcgY2VsZWJyYXRpb25zIE1vbmRheVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9icmVudHdvb2Rob21lcGFnZS5jb20vc3RvbmUtb2YtaG9wZS10aGVtZS1pbnNwaXJlcy1tbGstZGF5LWF0dGVuZGVlcy10by1jb25zaWRlci1mdWxsZXItc3Rvcnktb2YtaGlzdG9yeS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9zdG9uZS5qcGdcIiwgZGF0ZTogXCJKYW51YXJ5IDIxLCAyMDE5XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCLigJhTdG9uZSBvZiBIb3Bl4oCZIHRoZW1lIGluc3BpcmVzIE1MSyBEYXkgYXR0ZW5kZWVzIHRvIGNvbnNpZGVyIGZ1bGxlciBzdG9yeSBvZiBoaXN0b3J5XCJ9LFxuICB7aHJlZjogXCJodHRwczovL2JyZW50d29vZGhvbWVwYWdlLmNvbS9jZXJlbW9ueS1mb3ItbWxrLWRheS1pbi1mcmFua2xpbi10by1pbmNsdWRlLXVwZGF0ZS1vbi1mdWxsZXItc3RvcnkvXCIsIGltZzogXCIuLi9pbWFnZXMvY2VyZW1vbnkuanBnXCIsIGRhdGU6IFwiSmFudWFyeSAxNywgMjAxOVwiLCBzb3VyY2U6IFwiQnJlbnR3b29kIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwi4oCYQ2VyZW1vbnkgZm9yIE1MSyBEYXkgaW4gRnJhbmtsaW4gdG8gaW5jbHVkZSB1cGRhdGUgb24g4oCYZnVsbGVyIHN0b3J54oCZXCJ9LFxuICB7aHJlZjogXCJodHRwOi8vd3d3LndpbGxpYW1zb25oZXJhbGQuY29tL25ld3MvYXJ0aWNsZV9iMDEzNjk5YS1jMTJkLTExZTgtYWUwMi00NzRhYzhlOTllN2IuaHRtbD91dG1fbWVkaXVtPXNvY2lhbCZ1dG1fc291cmNlPWZhY2Vib29rJnV0bV9jYW1wYWlnbj11c2VyLXNoYXJlXCIsIGltZzogXCIuLi9pbWFnZXMvd2g5MjUuanBnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDI1LCAyMDE4XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIkZyYW5rbGluIEJPTUEgYXBwcm92ZXMgJ1RoZSBGdWxsZXIgU3RvcnknIHByb3Bvc2FsIHRvIGluc3RhbGwgQWZyaWNhbi1BbWVyaWNhbiBoaXN0b3JpY2FsIG1hcmtlcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE4LzA5LzI1L2ZyYW5rbGluLXNxdWFyZS1oaXN0b3JpYy1tYXJrZXJzLWNvbmZlZGVyYXRlLXN0YXR1dGUvMTQxMzI0MzAwMi9cIiwgaW1nOiBcIi4uL2ltYWdlcy90bjkyNS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMjUsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gdm90ZXMgdG8gc3VwcG9ydCBBZnJpY2FuLUFtZXJpY2FuIGhpc3RvcmljIG1hcmtlcnMgbmVhciBDb25mZWRlcmF0ZSBtb251bWVudFwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9icmVudHdvb2Rob21lcGFnZS5jb20vcmVzb2x1dGlvbi10by1zdXBwb3J0LWZ1bGxlci1zdG9yeS1oaXN0b3JpYy1tYXJrZXJzLXVuYW5pbW91c2x5LWFwcHJvdmVkLXdpbGwtcGxhY2Utb24tcHVibGljLWxhbmQtaW4tdG93bi1zcXVhcmUvXCIsIGltZzogXCIuLi9pbWFnZXMvYmg5MjUuanBnXCIsIGRhdGU6IFwiU2VwdGVtYmVyIDI1LCAyMDE4XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCJSZXNvbHV0aW9uIHRvIHN1cHBvcnQgXFxcIkZ1bGxlciBTdG9yeVxcXCIgaGlzdG9yaWMgbWFya2VycyB1bmFuaW1vdXNseSBhcHByb3ZlZCwgd2lsbCBwbGFjZSBvbiBwdWJsaWMgbGFuZCBpbiB0b3duIHNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1ncm91cHMtaW5kaXZpZHVhbHMtd3JpdGUtbGV0dGVycy1vZi1zdXBwb3J0LWZvci1mdWxsZXItc3RvcnktaW5pdGlhdGl2ZS13aWxsLXByZXNlbnQtdG8tYm9hcmQtb2YtbWF5b3ItYW5kLWFsZGVybWVuLXR1ZXNkYXkvXCIsIGltZzogXCIuLi9pbWFnZXMvZmg5MjUuanBlZ1wiLCBkYXRlOiBcIlNlcHRlbWJlciAyNCwgMjAxOFwiLCBzb3VyY2U6IFwiQnJlbnR3b29kIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gZ3JvdXBzLCBpbmRpdmlkdWFscyB3cml0ZSBsZXR0ZXJzIG9mIHN1cHBvcnQgZm9yIFxcXCJGdWxsZXIgU3RvcnlcXFwiIGluaXRpYXRpdmUsIHdpbGwgcHJlc2VudCB0byBCb2FyZCBvZiBNYXlvciBhbmQgQWxkZXJtZW4gVHVlc2RheVwifSxcbiAge2hyZWY6IFwiaHR0cDovL3d3dy53aWxsaWFtc29uaGVyYWxkLmNvbS9vcGluaW9uL2FydGljbGVfYjFiNDVkOTQtYjZkZS0xMWU4LThmZjctM2I1MmY0NTNiNjAzLmh0bWwjY29tbWVudHNcIiwgaW1nOiBcIi4uL2ltYWdlcy93aWxsaWFtc29uY29tbWVudGFyeS5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMTIsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiQ29tbWVudGFyeTogR29vZCBpZGVhIGZvciBzbGF2ZXJ5IHBsYXF1ZXMgc3R5bWllZCBieSBncm91cCdzIHJlc2lzdGFuY2UgdG8gaXRcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vb3Bpbmlvbi9hcnRpY2xlXzIwY2ZlMWUyLWI2YTAtMTFlOC04NGJkLWNiOWNmNDk4MTdkYy5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvd2lsbGlhbXNvbkxldHRlci5qcGdcIiwgZGF0ZTogXCJTZXB0ZW1iZXIgMTIsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiTGV0dGVyIHRvIEVkaXRvcjogTW92aW5nIGZvcndhcmQgd2l0aCAnVGhlIEZ1bGxlciBTdG9yeScgcHJlZmVycmVkIGJ5IHBhc3RvcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vZnJhbmtsaW5ob21lcGFnZS5jb20vZnJhbmtsaW4taW50ZW5kcy10by1nby10by1jb3VydC10by1jbGFyaWZ5LW93bmVyc2hpcC1vZi1wdWJsaWMtc3F1YXJlL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M1LmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyOSwgMjAxOFwiLCBzb3VyY2U6IFwiRnJhbmtsaW4gSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBJbnRlbmRzIHRvIGdvIHRvIGNvdXJ0IHRvIGNsYXJpZnkgb3duZXJzaGlwIG9mIFB1YmxpYyBTcXVhcmVcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlX2IxYWU5YmUwLWFiMWEtMTFlOC1hMzc2LTA3MjdhY2RlYTFmMy5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvbmV3czguanBnXCIsIGRhdGU6IFwiQXVndXN0IDI4LCAyMDE4XCIsIHNvdXJjZTogXCJXaWxsaWFtc29uIEhlcmFsZFwiLCBjb250ZW50OiBcIlVEQyB3YW50cyBuZXcgcGxhY2VtZW50IGZvciBwcm9wb3NlZCBDaXZpbCBXYXIgbWFya2VyczsgQk9NQSBkZWZlcnMgZGVjaXNpb25cIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE4LzA4LzI4L2RhdWdodGVycy1jb25mZWRlcmFjeS1mcmFua2xpbi1zcXVhcmUtd2lsbGlhbXNvbi1jb3VudHkvMTEyNjY4NTAwMi9cIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzNy5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRGF1Z2h0ZXJzIG9mIENvbmZlZGVyYWN5IHdhbnQgc2F5IGluIEFmcmljYW4tQW1lcmljYW4gaGlzdG9yeSBtYXJrZXJzIG9uIEZyYW5rbGluIFNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly93d3cudGVubmVzc2Vhbi5jb20vc3RvcnkvbmV3cy9sb2NhbC93aWxsaWFtc29uLzIwMTgvMDgvMjgvZnJhbmtsaW4tY29uZmVkZXJhdGUtbW9udW1lbnQtcHVibGljLXNxdWFyZS8xMTI4NDU3MDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL25ld3M5LmpwZWdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIlRoZSBUZW5uZXNzZWFuXCIsIGNvbnRlbnQ6IFwiRnJhbmtsaW4gZmlsZXMgc3VpdCB0byBmaWd1cmUgb3V0IHdobyBvd25zIGxhbmQgb24gcHVibGljIHNxdWFyZVwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9mcmFua2xpbmhvbWVwYWdlLmNvbS9mcmFua2xpbi1hbGRlcm1lbi12b3RlLXRvLXNsb3ctZWZmb3J0LXRvLWFkZC1hZnJpY2FuLWFtZXJpY2FuLWhpc3RvcnktbWFya2Vycy1vbi10aGUtcHVibGljLXNxdWFyZS9cIiwgaW1nOiBcIi4uL2ltYWdlcy9uZXdzNi5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMjgsIDIwMThcIiwgc291cmNlOiBcIkZyYW5rbGluIEhvbWVwYWdlXCIsIGNvbnRlbnQ6IFwiQWZyaWNhbiBBbWVyaWNhbiBoaXN0b3J5IG1hcmtlcnMgb24gdGhlIFB1YmxpYyBTcXVhcmVcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnN0YXJkZW0uY29tL25ld3MvbmF0aW9uYWwvYmxhY2stcGFzdG9ycy1jb25mZWRlcmF0ZS1kZXNjZW5kYW50cy1zaGFyZS1jaXZpbC13YXItaGlzdG9yeS1pbi10ZW5uZXNzZWUvYXJ0aWNsZV8yMGRjYWM1Zi1lMWQ4LTVlY2UtYjhjMi0xODI5NTM0MmNlMzMuaHRtbFwiLCBpbWc6IFwiLi4vaW1hZ2VzL3RoZVN0YXIuanBnXCIsIGRhdGU6IFwiQXVndXN0IDI0LCAyMDE4XCIsIHNvdXJjZTogXCJUaGUgU3RhciBEZW1vY3JhdFwiLCBjb250ZW50OiBcIkJsYWNrIHBhc3RvcnMsIENvbmZlZGVyYXRlIGRlc2NlbmRhbnRzIHNoYXJlIENpdmlsIFdhciBoaXN0b3J5IGluIFRlbm5lc3NlZSB0b3duXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy53a3JuLmNvbS9uZXdzL2dyb3VwLW9mLWZyYW5rbGluLXBhc3RvcnMtaG9wZS10by1hZGQtbWFya2Vycy10by1jb25mZWRlcmF0ZS1tb251bWVudF8yMDE4MDgyMjEyMDMyMy8xMzg4MDM2Njc2XCIsIGltZzogXCIuLi9pbWFnZXMvd2tyblZpZGVvLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAyMiwgMjAxOFwiLCBzb3VyY2U6IFwiV0tSTlwiLCBjb250ZW50OiBcIkdyb3VwIG9mIEZyYW5rbGluIHBhc3RvcnMgaG9wZSB0byBhZGQgbWFya2VycyB0byBDb25mZWRlcmF0ZSBtb251bWVudFwifSxcbiAge2hyZWY6IFwiaHR0cHM6Ly9jaXZpbHdhcnRhbGsuY29tL3RocmVhZHMvcGFzdG9ycy1wcm9wb3NlLWhpc3RvcmljLW1hcmtlcnMtZGV0YWlsaW5nLXNsYXZlLWF1Y3Rpb25zLWFuZC1rZWVwaW5nLWNvbmZlZGVyYXRlLXN0YXR1ZS10b28uMTQ5MDQ3L1wiLCBpbWc6IFwiLi4vaW1hZ2VzL2NpdmlsV2FyVGFsa3MuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE2LCAyMDE4XCIsIHNvdXJjZTogXCJDaXZpbCBXYXIgVGFsa1wiLCBjb250ZW50OiBcIlBhc3RvcnMgUHJvcG9zZSBIaXN0b3JpYyBNYXJrZXJzIERldGFpbGluZyBTbGF2ZSBBdWN0aW9ucyBhbmQgS2VlcGluZyBDb25mZWRlcmF0ZSBTdGF0dWUgVG9vXCJ9LFxuICB7aHJlZjogXCJodHRwczovL3d3dy53c212LmNvbS9uZXdzL3Bhc3RvcnMtcHVzaC1mb3ItZGl2ZXJzaXR5LWluLWZyYW5rbGluLWhpc3RvcmljYWwtbWFya2Vycy9hcnRpY2xlXzVjMzkxNWY4LWEwZTAtMTFlOC04ZDJlLTliMWYzNmY5ZWQ2OS5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvd3Ntdi5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTUsIDIwMThcIiwgc291cmNlOiBcIldTTVZcIiwgY29udGVudDogXCJQYXN0b3JzIHB1c2ggZm9yIGRpdmVyc2l0eSBpbiBGcmFua2xpbiBoaXN0b3JpY2FsIG1hcmtlcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vZnJhbmtsaW5ob21lcGFnZS5jb20vZnJhbmtsaW4tcGFzdG9ycy1wcm9wb3NlLWhpc3RvcmljLW1hcmtlcnMtZGV0YWlsaW5nLXNsYXZlLWF1Y3Rpb25zLXVzLWNvbG9yZWQtdHJvb3AtZWZmb3J0cy9cIiwgaW1nOiBcIi4uL2ltYWdlcy9mcmFua2xpbkhvbWVwYWdlLmpwZ1wiLCBkYXRlOiBcIkF1Z3VzdCAxNCwgMjAxOFwiLCBzb3VyY2U6IFwiRnJhbmtsaW4gSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBwYXN0b3JzIHByb3Bvc2UgaGlzdG9yaWMgbWFya2VycyBkZXRhaWxpbmcgc2xhdmUgYXVjdGlvbnMsIEFmcmljYW4tQW1lcmljYW4gQ2l2aWwgV2FyIGVmZm9ydHNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vd3d3LnRlbm5lc3NlYW4uY29tL3N0b3J5L25ld3MvbG9jYWwvd2lsbGlhbXNvbi8yMDE4LzA4LzE0L2ZyYW5rbGluLWNvbmZlZGVyYXRlLW1vbnVtZW50LXdpbGxpYW1zb24tY291bnR5LWZhaXRoLWxlYWRlcnMvOTkzMTQ0MDAyL1wiLCBpbWc6IFwiLi4vaW1hZ2VzL3Rlbm5lc3NlYW4uanBnXCIsIGRhdGU6IFwiQXVndXN0IDE0LCAyMDE4XCIsIHNvdXJjZTogXCJUaGUgVGVubmVzc2VhblwiLCBjb250ZW50OiBcIkZyYW5rbGluIGZhaXRoIGxlYWRlcnMgd2FudCBtYXJrZXJzIG5leHQgdG8gQ29uZmVkZXJhdGUgbW9udW1lbnRcIn0sXG4gIHtocmVmOiBcImh0dHA6Ly93d3cud2lsbGlhbXNvbmhlcmFsZC5jb20vbmV3cy9hcnRpY2xlXzBhMDc1NmI2LWEwMTYtMTFlOC05NTA0LThmZThlYjFiNjc3ZC5odG1sXCIsIGltZzogXCIuLi9pbWFnZXMvd2lsbGlhbXNvbkhlcmFsZC5qcGdcIiwgZGF0ZTogXCJBdWd1c3QgMTQsIDIwMThcIiwgc291cmNlOiBcIldpbGxpYW1zb24gSGVyYWxkXCIsIGNvbnRlbnQ6IFwiVGhyZWUgcHJlYWNoZXJzIGFuZCBhIGhpc3RvcmlhbiB0ZWxsICdmdWxsZXIgc3RvcnknIGJ5IHByb3Bvc2luZyBDaXZpbCBXYXIgbW9udW1lbnQsIG1hcmtlcnNcIn0sXG4gIHtocmVmOiBcImh0dHBzOi8vYnJlbnR3b29kaG9tZXBhZ2UuY29tL2ZyYW5rbGluLXBhc3RvcnMtcHJvcG9zZS1oaXN0b3JpYy1tYXJrZXJzLWRldGFpbGluZy1zbGF2ZS1hdWN0aW9ucy11cy1jb2xvcmVkLXRyb29wLWVmZm9ydHMvXCIsIGltZzogXCIuLi9pbWFnZXMvYnJlbnR3b29kSG9tZXBhZ2UuanBnXCIsIGRhdGU6IFwiQXVndXN0IDE0LCAyMDE4XCIsIHNvdXJjZTogXCJCcmVudHdvb2QgSG9tZXBhZ2VcIiwgY29udGVudDogXCJGcmFua2xpbiBwYXN0b3JzIHByb3Bvc2UgaGlzdG9yaWMgbWFya2VycyBkZXRhaWxpbmcgc2xhdmUgYXVjdGlvbnMsIEFmcmljYW4tQW1lcmljYW4gQ2l2aWwgV2FyIGVmZm9ydHNcIn0sXG5dXG5cbmNvbnN0IE1lZGlhID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbmV3c1NlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KClcbiAgICBuZXdzLmZvckVhY2goc3RvcnkgPT4ge1xuICAgICAgbGV0IGFydGljbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiKVxuICAgICAgYXJ0aWNsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19zdG9yeVwiKVxuICAgICAgbGV0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld3NfbGlua1wiKVxuICAgICAgbGluay5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIHN0b3J5LmhyZWYpXG4gICAgICBsaW5rLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcImJsYW5rXCIpXG4gICAgICBsZXQgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5ld19pbWFnZVwiKVxuICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwic3JjXCIsIHN0b3J5LmltZylcbiAgICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgIGRhdGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXdfZGF0ZVwiKVxuICAgICAgZGF0ZS5pbm5lckhUTUwgPSBgJHtzdG9yeS5kYXRlfSAtICR7c3Rvcnkuc291cmNlfWBcbiAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXdfY29udGVudFwiKVxuICAgICAgY29udGVudC5pbm5lckhUTUwgPSBzdG9yeS5jb250ZW50XG4gICAgICBsaW5rLmFwcGVuZENoaWxkKGltYWdlKVxuICAgICAgbGluay5hcHBlbmRDaGlsZChkYXRlKVxuICAgICAgbGluay5hcHBlbmRDaGlsZChjb250ZW50KVxuICAgICAgYXJ0aWNsZS5hcHBlbmRDaGlsZChsaW5rKVxuICAgICAgbmV3c1NlY3Rpb24uYXBwZW5kQ2hpbGQoYXJ0aWNsZSlcbiAgICB9KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG5ld3NTZWN0aW9uKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhIiwiaW1wb3J0IFVTQ1QgZnJvbSBcIi4vdXNjdFwiXG5pbXBvcnQgQ291cnRob3VzZSBmcm9tIFwiLi9jb3VydGhvdXNlXCJcbmltcG9ydCBSaW90IGZyb20gXCIuL3Jpb3RcIlxuaW1wb3J0IFJlY29uc3RydWN0aW9uIGZyb20gXCIuL3JlY29uc3RydWN0aW9uXCJcbmltcG9ydCBTdGF0dWUgZnJvbSBcIi4vc3RhdHVlXCJcbmltcG9ydCBNZWRpYSBmcm9tIFwiLi9tZWRpYVwiXG5pbXBvcnQgRG9uYXRlIGZyb20gXCIuL2RvbmF0ZVwiXG5pbXBvcnQgSG9tZSBmcm9tIFwiLi9ob21lXCJcblxubGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJOYXZiYXJcIilcblxuXG5jb25zdCBuYXZCYXIgPSB7XG5cbiAgZXZlbnRMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICBsZXQgbmV3UGFnZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzd2l0Y2gobmV3UGFnZSkge1xuICAgICAgY2FzZSBcInVzY3RcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgVVNDVC5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiY291cnRob3VzZVwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBDb3VydGhvdXNlLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaW90XCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIFJpb3QubWFpbigpXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJlY29uc3RydWN0aW9uXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIFJlY29uc3RydWN0aW9uLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdGF0dWVcIjpcbiAgICAgICAgbmF2QmFyLmhpZGVNYXJrZXJzKClcbiAgICAgICAgU3RhdHVlLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtZWRpYVwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBNZWRpYS5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG9uYXRlXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIERvbmF0ZS5tYWluKClcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaG9tZVwiOlxuICAgICAgICBuYXZCYXIuaGlkZU1hcmtlcnMoKVxuICAgICAgICBIb21lLm1haW4oKVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJtYXJrZXJzXCI6XG4gICAgICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gICAgICAgIGJyZWFrO1xuXG4gICAgfVxuICB9LFxuXG4gIG1ha2VNYXJrZXJzKHZhbHVlLCB0ZXh0KSB7XG4gICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5ldmVudExpc3RlbmVycylcbiAgICBidG4uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgdmFsdWUpXG4gICAgYnRuLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2Vyc1wiKVxuICAgIGJ0bi5pbm5lclRleHQgPSB0ZXh0XG4gICAgcmV0dXJuIGJ0blxuICB9LFxuXG4gIG1ha2VCdG4odmFsdWUsIHRleHQpIHtcbiAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLmV2ZW50TGlzdGVuZXJzKVxuICAgIGJ0bi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCB2YWx1ZSlcbiAgICBidG4uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtZW51XCIpXG4gICAgYnRuLmlubmVyVGV4dCA9IHRleHRcbiAgICByZXR1cm4gYnRuXG4gIH0sXG5cbiAgbG9hZE5hdmJhcigpIHtcbiAgICBsZXQgZWxlbWVudEhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxuICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpXG4gICAgaGVhZGluZy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5UaXRsZVwiKVxuICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gXCJUZWxsaW5nIGEgRlVMTEVSIFNUT1JZIG9mIEZyYW5rbGluXCJcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpXG4gICAgbGV0IHN1YkhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIilcbiAgICBzdWJIZWFkaW5nLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViVGl0bGVcIilcbiAgICBzdWJIZWFkaW5nLmlubmVyVGV4dCA9IFwiTGVhcm5pbmcgRnJvbSBPdXIgUGFzdCBUbyBSZWNvbmNpbGUgT3VyIEZ1dHVyZVwiXG4gICAgZWxlbWVudEhvbGRlci5hcHBlbmRDaGlsZChzdWJIZWFkaW5nKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaGVhZGluZ1wiKVxuICAgIGxldCBzZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICBzZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmF2YmFyX21lbnVcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlQnRuKFwiaG9tZVwiLCBcIkhvbWUgUGFnZVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBzZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIilcbiAgICBzZWN0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2Vyc19tZW51XCIpXG4gICAgbGV0IG1hcmtlcnMgPSBuYXZCYXIubWFrZUJ0bihcIm1hcmtlcnNcIiwgXCJNZW51XCIpXG4gICAgbWFya2Vycy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIk1hcmtlcnNcIilcbiAgICBzZWN0LmFwcGVuZENoaWxkKG1hcmtlcnMpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZU1hcmtlcnMoXCJ1c2N0XCIsIFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wc1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcImNvdXJ0aG91c2VcIiwgXCJDb3VydGhvdXNlIC8gTWFya2V0IEhvdXNlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwicmlvdFwiLCBcIjE4NjcgUmlvdFwiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInJlY29uc3RydWN0aW9uXCIsIFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiKSlcbiAgICBzZWN0LmFwcGVuZENoaWxkKG5hdkJhci5tYWtlTWFya2VycyhcInN0YXR1ZVwiLCBcIlVTQ1QgU3RhdHVlXCIpKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VNYXJrZXJzKFwiZG9uYXRlXCIsIFwiRG9uYXRlXCIpKVxuICAgIGRpdi5hcHBlbmRDaGlsZChzZWN0KVxuICAgIHNlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKVxuICAgIHNlY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYXZiYXJfbWVudVwiKVxuICAgIHNlY3QuYXBwZW5kQ2hpbGQobmF2QmFyLm1ha2VCdG4oXCJtZWRpYVwiLCBcIk5ld3MgTWVkaWFcIikpXG4gICAgZGl2LmFwcGVuZENoaWxkKHNlY3QpXG4gICAgc2VjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpXG4gICAgc2VjdC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdmJhcl9tZW51XCIpXG4gICAgc2VjdC5hcHBlbmRDaGlsZChuYXZCYXIubWFrZUJ0bihcImRvbmF0ZVwiLCBcIkRvbmF0ZVwiKSlcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc2VjdClcbiAgICBlbGVtZW50SG9sZGVyLmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChlbGVtZW50SG9sZGVyKVxuICAgIG5hdkJhci5oaWRlTWFya2VycygpXG4gIH0sXG5cbiAgaGlkZU1hcmtlcnMoKSB7XG4gICAgbGV0IE1hcmtlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1hcmtlcnNcIilcbiAgICBNYXJrZXJzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuYXZCYXIuaGlkZU1hcmtlcnMpXG4gICAgTWFya2Vycy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuaW5uZXJIVE1MID0gXCJNZW51XCJcbiAgICAkKFwiI01hcmtlcnNcIikuc2hvdygpXG4gICAgJChcIi5tYXJrZXJzXCIpLmhpZGUoKVxuICB9LFxuXG4gIHNob3dNYXJrZXJzKCkge1xuICAgIGxldCBNYXJrZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYXJrZXJzXCIpXG4gICAgTWFya2Vycy5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmF2QmFyLnNob3dNYXJrZXJzKVxuICAgIE1hcmtlcnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5hdkJhci5oaWRlTWFya2VycylcbiAgICBNYXJrZXJzLmlubmVySFRNTCA9IFwiSGlkZSBNZW51XCJcbiAgICAkKFwiLm1hcmtlcnNcIikuc2hvdygpXG4gIH1cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdkJhclxuXG4gICAgLy8gPHAgaWQ9XCJsZWZ0SGVhZGluZ1wiPlNlZWtpbmcgVG8gVGVsbCBBICZuYnNwPC9wPlxuICAgIC8vIDxwIGlkPVwiYmlnSGVhZGluZ1wiPkZ1bGxlciBTdG9yeTwvcD5cbiAgICAvLyA8cCBpZD1cInJpZ2h0SGVhZGluZ1wiPiZuYnNwIE9mIEZyYW5rbGluPC9wPlxuICAgIC8vIDxwIGlkPVwidGFnSGVhZGluZ1wiPkxlYXJuaW5nIEZyb20gT3VyIFBhc3QgVG8gUmVjb25jaWxlIE91ciBGdXR1cmU8L3A+IiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFJlY29uc3RydWN0aW9uID0ge1xuXG4gIG1haW4oKSB7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IFwiXCJcbiAgICBsZXQgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX2RpdlwiKVxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWFya2VyX3RleHRfZGl2XCIpXG4gICAgbGV0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluX3RleHRcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiUmVjb25zdHJ1Y3Rpb24gJiBKaW0gQ3Jvd1wiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiRm9sbG93aW5nIHRoZSBDaXZpbCBXYXIgdGhlIDEzdGgsIDE0dGgsIGFuZCAxNXRoIEFtZW5kbWVudHMgd2VyZSBwYXNzZWQgYW5kIHJhdGlmaWVkLiBJbiAxODc3IFJlY29uc3RydWN0aW9uIGVuZGVkIGFuZCB0aGUgSmltIENyb3cgRXJhIHNvb24gYmVnYW4uIEl0IHdhcyBkdXJpbmcgdGhpcyB0aW1lIHRoYXQgc2VwYXJhdGUgcmVzdHJvb21zIGFuZCBzZXBhcmF0ZSB3YXRlciBmb3VudGFpbnMgd2VyZSBpbiBGcmFua2xpbi5cIlxuICAgIGRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoZGl2KVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKG1haW5EaXYpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVjb25zdHJ1Y3Rpb24iLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcblxuY29uc3QgUmlvdCA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl9kaXZcIilcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlcl90ZXh0X2RpdlwiKVxuICAgIGxldCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbl90ZXh0XCIpXG4gICAgdGVtcC5pbm5lckhUTUwgPSBcIjE4NjcgUmlvdFwiXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQodGVtcClcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvZnVsbGVyU3RvcnlQbGFxdWUuanBnXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJIaXN0b3JpY2FsIFBsYXF1ZVwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJQYWdlUGljXCIpXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzdWJfdGl0bGVcIilcbiAgICB0ZW1wLmlubmVySFRNTCA9IFwiT24gSnVseSA2LCAxODY3LCBhZnRlciBhIGRlbGF5ZWQgSnVseSA0dGggcGFyYWRlIGFuZCBwb2xpdGljYWwgc3BlZWNoZXMsIGEgcmFjZSByaW90IGJyb2tlIG91dCBvbiB0aGUgc3F1YXJlIGluanVyaW5nIHNldmVyYWwgcGVvcGxlIGFuZCBraWxsaW5nIG9uZSBwZXJzb24uXCJcbiAgICBkaXYuYXBwZW5kQ2hpbGQodGVtcClcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGRpdilcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChtYWluRGl2KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJpb3QiLCJsZXQgcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk1haW5cIilcbmxldCBpbWFnZXMgPSBbXCIuLi9pbWFnZXMvc3RhdHVlLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUxLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUyLkpQR1wiLCBcIi4uL2ltYWdlcy9zdGF0dWUzLkpQR1wiXVxuXG5cbmNvbnN0IFN0YXR1ZSA9IHtcblxuICBtYWluKCkge1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcbiAgICBwbGFjZWhvbGRlci5pbm5lckhUTUwgPSBcIlwiXG4gICAgbGV0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpXG4gICAgbGV0IG1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBtYWluVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIG1haW5UZXh0LmlubmVySFRNTCA9IFwiVW5pdGVkIFN0YXRlcyBDb2xvcmVkIFRyb29wcyBTdGF0dWVcIlxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG1haW5UZXh0KVxuICAgIGxldCBuZXdJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIilcbiAgICBuZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1haW5QYWdlRmxpZXJcIilcbiAgICBuZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9pbWFnZXMvYXJ0aXN0UmVuZGVyaW5nLmpwZ1wiKVxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5ld0ltYWdlKVxuICAgIGltYWdlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgbGV0IHBob3RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgICAgcGhvdG8uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdGF0dWVfaW1hZ2VcIilcbiAgICAgIHBob3RvLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpdGVtKVxuICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocGhvdG8pXG4gICAgfSlcbiAgICBsZXQgc3ViVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHN1YlRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3ViX3RpdGxlXCIpXG4gICAgc3ViVGl0bGUuaW5uZXJIVE1MID0gXCJUaGUgdWx0aW1hdGUgZ29hbCBvZiB0aGUg4oCcRnVsbGVyIFN0b3J54oCdIGlzIHRvIGVyZWN0IGEgc3RhdHVlIG9mIGEgVVNDVCBTb2xkaWVyLiA8YnI+PGJyPlRoZSBnb2FsIGlzIGZvciB0aGlzIHNvbGRpZXIgdG8gYmUgcGxhY2VkIGluc2lkZSB0aGUgQ2l0eSBMaW1pdHMuPGJyPjxicj5UaGUgZXhhY3QgbG9jYXRpb24gaGFzIHlldCB0byBiZSBkZXRlcm1pbmVkLlwiXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc3ViVGl0bGUpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RhdHVlIiwibGV0IHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNYWluXCIpXG5cbmNvbnN0IFVTQ1QgPSB7XG5cbiAgbWFpbigpIHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gXCJcIlxuICAgIGxldCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfZGl2XCIpXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtYXJrZXJfdGV4dF9kaXZcIilcbiAgICBsZXQgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5fdGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJVbml0ZWQgU3RhdGVzIENvbG9yZWQgVHJvb3BzXCJcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuL2ltYWdlcy9mdWxsZXJTdG9yeVBsYXF1ZS5qcGdcIilcbiAgICB0ZW1wLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIkhpc3RvcmljYWwgUGxhcXVlXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1hcmtlclBhZ2VQaWNcIilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Yl90aXRsZVwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJBcm91bmQgMzAwIFdpbGxpYW1zb24gQ291bnR5IHJlc2lkZW50cywgd2hvIHdlcmUgZWl0aGVyIGZyZWVkIHNsYXZlcyBvciBlc2NhcGVkIHNsYXZlcywgc2VydmVkIGluIHRoZSBVbmlvbiBBcm15IGR1cmluZyB0aGUgQ2l2aWwgV2FyLjxicj48YnI+VGhlaXIgc3RvcnkgaXMganVzdCBub3cgYmVpbmcgdG9sZC48YnI+PGJyPlRoZWlyIHN0b3J5IG5lZWRzIHRvIGJlIGhlYXJkLlwiXG4gICAgZGl2LmFwcGVuZENoaWxkKHRlbXApXG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZChkaXYpXG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQobWFpbkRpdilcbiAgICBsZXQgcGFnZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIHBhZ2VMaW5rLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwOi8vd3d3LnNsYXZlc3Rvc29sZGllcnMuY29tXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpXG4gICAgcGFnZUxpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiYmxhbmtcIilcbiAgICB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi9pbWFnZXMvc2xhdmVUb1NvbGRpZXJzLmpwZ1wiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiU2xhdmUgVG8gU29sZGllcnMgUGljXCIpXG4gICAgdGVtcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIlVTQ1RQaWNcIilcbiAgICBwYWdlTGluay5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIHRlbXAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rVGV4dFwiKVxuICAgIHRlbXAuaW5uZXJIVE1MID0gXCJDbGljayBoZXJlIHRvIGxlYXJuIG1vcmUuXCJcbiAgICBwYWdlTGluay5hcHBlbmRDaGlsZCh0ZW1wKVxuICAgIHBsYWNlaG9sZGVyLmFwcGVuZENoaWxkKHBhZ2VMaW5rKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVTQ1QiXX0=
