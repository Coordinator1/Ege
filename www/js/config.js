/**
 * Configuration
 * StateProvide (Routes)
 * httpProvider (Headers)
 */

 ege.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function ($stateProvider, $urlRouterProvider, $httpProvider) {
    // $httpProvider.defaults.headers.common['X-Authentication'] = '6WE8f0Nx3nDtn1UWmpV5kipBFXMDT2xx7VYMg8NL';
    $httpProvider.defaults.headers.get = { 'X-Authentication' : '6WE8f0Nx3nDtn1UWmpV5kipBFXMDT2xx7VYMg8NL' };

    $stateProvider

        .state('subjects', {
            cache: true,
            url: '/subjects',
            templateUrl: 'templates/subjects.html',
            controller: 'SubjectsCtrl'
        })
        .state('topics', {
            cache: true,
            url: '/topics/:subject_ID',
            templateUrl: 'templates/topics.html',
            controller: 'TopicsCtrl'
        })
        .state('materials', {
            cache: true,
            url: '/materials/:topic_ID',
            templateUrl: 'templates/materials.html',
            controller: 'MaterialsCtrl'
        })
        .state('material_date', {
            cache: true,
            url: '/material_date',
            templateUrl: 'templates/material_date.html',
            controller: 'Material_dateCtrl'
        })
        .state('material_html', {
            cache: true,
            url: '/material_html',
            templateUrl: 'templates/material_html.html',
            controller: 'Material_htmlCtrl'
        })
        .state('material_image', {
            cache: true,
            url: '/material_image',
            templateUrl: 'templates/material_image.html',
            controller: 'Material_imageCtrl'
        })
        .state('material_text', {
            cache: true,
            url: '/material_text',
            templateUrl: 'templates/material_text.html',
            controller: 'Material_textCtrl'
        })
        // if none of the above states are matched, use this as the fallback

    $urlRouterProvider.otherwise('/subjects');
}]);