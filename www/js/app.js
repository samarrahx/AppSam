
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
         StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
      })

      .state('app.alphabetquiz', {
          url: '/alphabetquiz',
          views: {
              'menuContent': {
                  templateUrl: 'templates/alphabetquiz.html'
              }
          }
      })
      .state('app.numbersquiz', {
          url: '/numbersquiz',
          views: {
              'menuContent': {
                  templateUrl: 'templates/numbersquiz.html'
              }
          }
      })
      .state('app.shortphrasesquiz', {
          url: '/shortphrasesquiz',
          views: {
              'menuContent': {
                  templateUrl: 'templates/shortphrasesquiz.html'
              }
          }
      })
      .state('app.logindetail', {
          url: '/logindetail',
          views: {
              'menuContent': {
                  templateUrl: 'templates/logindetail.html'
              }
          }
      })

  .state('app.alphabet', {
    url: '/alphabet',
    views: {
      'menuContent': {
        templateUrl: 'templates/alphabet.html'
      }
    }
  })

  .state('app.login', {
      url: '/login',
      views: {
        'menuContent': {
          templateUrl: 'templates/login.html'
        }
      }
    })
    .state('app.numbers', {
      url: '/numbers',
      views: {
        'menuContent': {
          templateUrl: 'templates/numbers.html',
        }
      }
      })
  .state('app.quiz', {
          url: '/quiz',
          views: {
              'menuContent': {
                  templateUrl: 'templates/quiz.html',
              }
          }
      })
      .state('app.registration', {
          url: '/registration',
          views: {
              'menuContent': {
                  templateUrl: 'templates/registration.html',
              }
          }
      })
      .state('app.main', {
          url: '/main',
          views: {
              'menuContent': {
                  templateUrl: 'templates/main.html',
                  controller: 'AppCtrl'
              }
          }
      })

      .state('app.shortphrases', {
          url: '/shortphrases',
          views: {
              'menuContent': {
                  templateUrl: 'templates/shortphrases.html',
              }
          }
      })
      .state('app.SignA', {
          url: '/SignA',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignA.html',
              }
          }
      })
      .state('app.SignB', {
          url: '/SignB',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignB.html',
              }
          }
      })
      .state('app.SignC', {
          url: '/SignC',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignC.html',
              }
          }
      })
      .state('app.SignD', {
          url: '/SignD',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignD.html',
              }
          }
      })
      .state('app.SignE', {
          url: '/SignE',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignE.html',
              }
          }
      })
      .state('app.SignF', {
          url: '/SignF',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignF.html',
              }
          }
      })
      .state('app.SignG', {
          url: '/SignG',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignG.html',
              }
          }
      })
      .state('app.SignH', {
          url: '/SignH',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignH.html',
              }
          }
      })
      .state('app.SignI', {
          url: '/SignI',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignI.html',
              }
          }
      })
      .state('app.SignJ', {
          url: '/SignJ',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignJ.html',
              }
          }
      })
      .state('app.SignK', {
          url: '/SignK',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignK.html',
              }
          }
      })
      .state('app.SignL', {
          url: '/SignL',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignL.html',
              }
          }
      })
      .state('app.SignM', {
          url: '/SignM',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignM.html',
              }
          }
      })
      .state('app.SignN', {
          url: '/SignN',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignN.html',
              }
          }
      })
      .state('app.SignO', {
          url: '/SignO',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignO.html',
              }
          }
      })
      .state('app.SignP', {
          url: '/SignP',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignP.html',
              }
          }
      })
      .state('app.SignQ', {
          url: '/SignQ',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignQ.html',
              }
          }
      })
      .state('app.SignR', {
          url: '/SignR',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignR.html',
              }
          }
      })
      .state('app.SignS', {
          url: '/SignS',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignS.html',
              }
          }
      })
      .state('app.SignT', {
          url: '/SignT',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignT.html',
              }
          }
      })
      .state('app.SignU', {
          url: '/SignU',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignU.html',
              }
          }
      })
      .state('app.SignV', {
          url: '/SignV',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignV.html',
              }
          }
      })
      .state('app.SignW', {
          url: '/SignW',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignW.html',
              }
          }
      })
      .state('app.SignX', {
          url: '/SignX',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignX.html',
              }
          }
      })
      .state('app.SignY', {
          url: '/SignY',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignY.html',
              }
          }
      })
      .state('app.SignZ', {
          url: '/SignZ',
          views: {
              'menuContent': {
                  templateUrl: 'templates/SignZ.html',
              }
          }
      })
      .state('app.1', {
          url: '/1',
          views: {
              'menuContent': {
                  templateUrl: 'templates/1.html',
              }
          }
      })
      .state('app.2', {
          url: '/2',
          views: {
              'menuContent': {
                  templateUrl: 'templates/2.html',
              }
          }
      })
      .state('app.3', {
          url: '/3',
          views: {
              'menuContent': {
                  templateUrl: 'templates/3.html',
              }
          }
      })
      .state('app.4', {
          url: '/4',
          views: {
              'menuContent': {
                  templateUrl: 'templates/4.html',
              }
          }
      })
      .state('app.5', {
          url: '/5',
          views: {
              'menuContent': {
                  templateUrl: 'templates/5.html',
              }
          }
      })
      .state('app.6', {
          url: '/6',
          views: {
              'menuContent': {
                  templateUrl: 'templates/6.html',
              }
          }
      })
      .state('app.7', {
          url: '/7',
          views: {
              'menuContent': {
                  templateUrl: 'templates/7.html',
              }
          }
      })
      .state('app.8', {
          url: '/8',
          views: {
              'menuContent': {
                  templateUrl: 'templates/8.html',
              }
          }
      })
      .state('app.9', {
          url: '/9',
          views: {
              'menuContent': {
                  templateUrl: 'templates/9.html',
              }
          }
      })
      .state('app.10', {
          url: '/10',
          views: {
              'menuContent': {
                  templateUrl: 'templates/10.html',
              }
          }
      })
      .state('app.hellobye', {
          url: '/hellobye',
          views: {
              'menuContent': {
                  templateUrl: 'templates/hellobye.html',
              }
          }
      }).state('app.thanksplease', {
          url: '/thanksplease',
          views: {
              'menuContent': {
                  templateUrl: 'templates/thanksplease.html',
              }
          }
      }).state('app.agree', {
          url: '/agree',
          views: {
              'menuContent': {
                  templateUrl: 'templates/agree.html',
              }
          }
      })
      .state('app.afternoon', {
          url: '/afternoon',
          views: {
              'menuContent': {
                  templateUrl: 'templates/afternoon.html',
              }
          }
      })
      .state('app.sorry', {
          url: '/sorry',
          views: {
              'menuContent': {
                  templateUrl: 'templates/sorry.html',
              }
          }
      })
      .state('app.morning', {
          url: '/morning',
          views: {
              'menuContent': {
                  templateUrl: 'templates/morning.html',
              }
          }
      })
      .state('app.night', {
          url: '/night',
          views: {
              'menuContent': {
                  templateUrl: 'templates/night.html',
              }
          }
      })
      .state('app.good', {
          url: '/good',
          views: {
              'menuContent': {
                  templateUrl: 'templates/good.html',
              }
          }
      })
      .state('app.howareyou', {
          url: '/howareyou',
          views: {
              'menuContent': {
                  templateUrl: 'templates/howareyou.html',
              }
          }
      })
      .state('app.sad', {
          url: '/sad',
          views: {
              'menuContent': {
                  templateUrl: 'templates/sad.html',
              }
          }
      })
      .state('app.welcome', {
          url: '/welcome',
          views: {
              'menuContent': {
                  templateUrl: 'templates/welcome.html',
              }
          }
      });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
});
