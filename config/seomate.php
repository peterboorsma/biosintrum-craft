<?php

return [
    'defaultProfile' => 'standard',
    'siteName' => 'Biosintrum',
    
    'fieldProfiles' => [
        'standard' => [
            'title' => ['seoTitle', 'title'],
            'description' => ['seoDescription', 'payoff', 'intro', 'richText', 'body'],
            'image' => ['seoImage', 'image', 'headerImage']
        ]
    ],

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