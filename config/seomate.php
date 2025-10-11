<?php

return [
    'cacheEnabled' => false,
    'defaultProfile' => 'standard',

    // Site-namen per site handle
    'siteName' => [
        'default' => 'Biosintrum',
        'cursusNatteTeelten' => 'Cursus natte teelten - Biosintrum',
    ],

    // Field profiles per site
    'fieldProfiles' => [
        'standard' => [
            'title' => ['seoContent.seoTitle', 'title'],
            'description' => ['seoContent.seoDescription', 'payoff', 'intro', 'richText', 'body'],
            'image' => ['seoContent.seoImage', 'image', 'headerImage']
        ],
        'cursusNatteTeelten' => [
            'title' => ['seoContent.seoTitle', 'title'],
            'description' => ['seoContent.seoDescription', 'payoff', 'intro', 'richText', 'body'],
            'image' => ['seoContent.seoImage', 'image', 'headerImage']
        ]
    ],

    // Koppel site handles aan fieldProfiles
    'profileMap' => [
        'default' => 'standard',
        'cursusNatteTeelten' => 'cursusNatteTeelten'
    ],

    // Sitemap settings
    'sitemapEnabled' => true,
    'sitemapLimit' => 100,
    'sitemapConfig' => [
        'elements' => [
            'homepage' => ['changefreq' => 'weekly', 'priority' => 1],
            'actueel' => ['changefreq' => 'weekly', 'priority' => 1],
            'agenda' => ['changefreq' => 'daily', 'priority' => 1],
            'projecten' => ['changefreq' => 'weekly', 'priority' => 0.8],
            'overOns' => ['changefreq' => 'monthly', 'priority' => 0.1],
            'paginas' => ['changefreq' => 'monthly', 'priority' => 0.1],
            'watWeDoen' => ['changefreq' => 'monthly', 'priority' => 0.6],
        ]
    ]
];