<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
        'endpoint' => env('MAILGUN_ENDPOINT', 'api.mailgun.net'),
    ],

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),

    ],
    'google' => [
        'client_id' => '642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com',
        'client_secret' => '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',

        // 'redirect' => 'https://57f9-2405-201-400e-d9-119a-6b7a-d6c8-a68a.ngrok.io/callback/google',
        // 'redirect' => 'https://gmail.in/callback/google',
        'redirect' => 'http://localhost:8000/callback/google'

      ],

];
