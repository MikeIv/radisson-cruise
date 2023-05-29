import axios from "axios";

export default async (context, locale) => {
/*  return await Promise.resolve({
    footer: {
      titleNewsSubscribe: 'Newsletter',
    },
    header: {
      buttons: {
        shedulerYachts: 'Yacht schedule',
        shedulerTram: 'Tram schedule',
      },
    },
    pages: {
      shedule: {
        titleTest: 'Schedule Yacht - need translate',
      },
    },
    welcome: 'Welcome',
  });*/


  /*return {
    breadCrumb: {
      index: "Home",
      yachts: 'Yachts',
      yachts_schedule: 'Yachts schedule',
      yachts_tickets: 'Yachts tickets',
      yachts_buy: 'Buy ticket for yacht',
      about: 'About us',
      rent: 'Rent a yacht',
      rules: 'Rules',
      news: 'News and promotions',
      categories: "Saloon categories",
      menu: 'Menu',
      politic: "Privacy politic",
      contacts: "Contacts",
      trams: "Trams",
      trams_schedule: 'Trams schedule',
      trams_tickets: 'Trams tickets',
      theatrical: 'Theatrical flights',
      flights: 'Thematic flights',
      refund: 'Refund tickets',
    },
    footer: {
      titleNewsSubscribe: 'Newsletter',
    },
    header: {
      info: {
        official: 'Official site',
        people: 'Over 2.6 million passengers',
      },
      buttons: {
        shedulerYachts: 'Yacht schedule',
        shedulerTram: 'Tram schedule',
      },
    },
    /!*pages: {
      schedule: {
        yacht:{
          title: 'Schedule Yacht',
        },
        trolley:{
          title: 'Schedule Trolley',
        },
      },
      categories: {
        title: 'Salon categories',
        tabs: {
          all: 'all',
          main: 'Main hall',
          royal: 'Royal class',
          first: 'First class',
          erwin: 'Erwin.river',
        }
      },
      tickets: {
        certificates: {
          breadCrumb: {
            link: "Gift certificates"
          },
          title: "Gift certificates",
          description: 'Certificates for cruises on white yachts of the Radisson Royal Flotilla '+
            'Is a universal gift for relatives, colleagues and friends. Impressions, '+
            'received from the cruise, will remain in memory for a long time, and the photos are amazing' +
            'views of the historical center of Moscow - in photographic film.',
          subtitle: 'Select your Open Date Flotilla Gift Certificate:'
        },
        yacht: {
          title: 'Buying tickets for yachts'
        },
        trolley: {
          title: `Buying tickets for trams`
        },
        flights: {
          title: `Thematic flights`
        },
        thematic: {
          title: `Theater cruises`
        }
      },
      menu: {
        title: 'Restaurant menus',
        places: {
          cart: {
            title:'A la carte menu',
            description: 'Gastronomic cruises - a new level of pleasure 365 days a year.',
          },
          vine: {
            title: 'Wine menu',
            description: 'For you we have selected drinks for every taste - light and complex, fresh and warming, young and mature',
          },
          pub: 'Bar menu',
          royal: {
            title: 'Royal class',
            description: `A gastronomic pleasure.`,
          },
          erwin: {
            title: 'Erwin.River',
            description: 'Seafood restaurant',
          },
          cocktail:'Cocktail menu',
          child: 'Children\'s menu',
          season: 'Seasonal menu',
          desert: 'Dessert menu',
        },
        button: 'View Menu'
      },
      yachts: {
        title: 'Yachts of the «radisson royal» flotilla'
      },
      trams: {
        title: 'RIVER TRAMS - \ ' +
          'NEW AGENCY LEVEL \ ' +
          'TRADITION!'
      },
      rent: {
        title:
          'YOUR UNFORGETTABLE \n' +
          'EVENT \n' +
          'ON A WHITE YACHT',
        subInfo:'To add a touch of originality to the celebration, to make it memorable and bright will help to rent a yacht',
        button: 'make a calculation',
        tabNav: {

        }
      },
      contacts: {
        title: 'Contacts'
      },
      about: {
        title: 'About company'
      },
      rules: {
        title: 'Terms and conditions',
      },
      news: {
        title: `News and promotions`,
      },
      politic:{
        title: 'Privacy Policy'
      },
      theatrical: 'Theatrical flights',
      thematic: 'Thematic flights',
      refund: 'Refund tickets',
    },*!/
    welcome: 'Welcome',

    pages: {
      index: {
        first: 'Home',
        second: 'Нэйм раздела',
        yachtsSchedule: 'Yachts schedule',
        tramsSchedule: 'Trams schedule',
        yachtsBuy: 'Buy ticket for yacht',
        tramsBuy: 'Buy ticket for tram',
        news: 'News and promotions',
        allNews: 'All news',
        actions: 'Actions',
        showMore: 'Show more',
      },
      footer: {

      }
    }
  };*/
  return await axios.get(`${context.$config.baseURL}locale?lang=en`).then((res) => {
    return res.data.locale
  });
};
