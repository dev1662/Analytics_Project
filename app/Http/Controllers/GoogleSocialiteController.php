<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Google\Client;

use Google\Service\Analytics as GoogleAnalytics;

use Laravel\Socialite\Facades\Socialite;


class GoogleSocialiteController extends Controller
{

    public $properties = [];
    public $scopes = [
        "https://www.googleapis.com/auth/analytics",
        // "https://www.googleapis.com/auth/analytics.edit",
        // "https://www.googleapis.com/auth/analytics.manage.users",
        // "https://www.googleapis.com/auth/analytics.manage.users.readonly",
        // "https://www.googleapis.com/auth/analytics.provision",
        // "https://www.googleapis.com/auth/webmasters",
        // "https://www.googleapis.com/auth/webmasters.readonly",

        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/plus.login",
        "https://www.googleapis.com/auth/analytics.readonly",
        // "https://www.googleapis.com/auth/analytics.user.deletion"
    ];


    public function redirectToGoogle()
    {

        return Socialite::driver('google')->scopes($this->scopes)->with(["access_type" => "offline", "prompt" => "consent select_account"])->redirect();
    }
    public function handleCallback()
    {

        $user = Socialite::driver('google')->user();
        $google = new Client();
        // dd($user);
        $google->setClientId("642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com");
        $google->setApplicationName("Laravel");
        $google->setDeveloperKey('AIzaSyBL3-zFZMUSXqQJm8ZuaISFSDID1JBIewU');
        $google->setClientSecret("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");
        // $google->setRedirectUri("https://gmail.in/callback/google");

        $google->setAccessToken(json_encode(array('access_token' => $user->token)));
        $google->addScope($this->scopes);
        $google->fetchAccessTokenWithAuthCode($_GET['code']);


        // $analytics = new AnalyticsReporting($google);
        $analytics = new GoogleAnalytics($google);
        return $this->accountName($analytics, $google);

        return  response()->json([$analytics]);
    }
    public function getReport()
    {
        $req = Request();
        // dd($req->all());
        $account_id = $req->account_id;
        $google = new Client();
        // dd($user);
        $google->setClientId("642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com");
        $google->setApplicationName("Laravel");
        $google->setDeveloperKey('AIzaSyBL3-zFZMUSXqQJm8ZuaISFSDID1JBIewU');
        $google->setClientSecret("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");
        // $google->setRedirectUri("https://ebef-2405-201-400e-d9-b4ba-ef13-73fa-6ebc.ngrok.io/callback/google");

        $google->setAccessToken(json_encode(array('access_token' => $req->token)));
        $google->addScope($this->scopes);
        // $analytics = new AnalyticsReporting($google);

        $ana = new GoogleAnalytics($google);



        $uri = 'http://data.alexa.com/data?cli=10&dat=snbamz&url=';

        $uri .= 'www.brandshark.in';
        $xml = simplexml_load_file($uri);
        // dd($xml);
        $format = TRUE;
        if (isset($xml->SD[1]->POPULARITY)) {

            $global_rank = (int) $xml->SD[1]->POPULARITY->attributes()->TEXT;
            $localRank = (int) $xml->SD[1]->COUNTRY->attributes()->RANK;

            $data = [
                "new users" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:newUsers')->getRows()[0][0],
                "users" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:users')->getRows()[0][0],
                "number of keyword" => count($ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:sessions', ['dimensions' => 'ga:keyword', 'sort' => 'ga:sessions'])->getRows()),
                "referral" =>  $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:users', ['dimensions' => 'ga:source'])->getRows(),
                "bounceRate" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:bounceRate')->getRows()[0][0],

                "users from organic searches" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:users', ['dimensions' => 'ga:source', 'filters' => 'ga:medium==organic', 'metrics' => 'ga:users'])->totalsForAllResults['ga:users'],
                "social" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:socialInteractions, ga:uniqueSocialInteractions,ga:socialInteractionsPerSession')->getRows()[0][0],
                "clicks" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:adClicks')->getRows()[0][0],
                "Impressions" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:impressions')->totalsForAllResults['ga:impressions'],
                "paid search google" => $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-23', '2022-03-02', 'ga:users', ['dimensions' => 'ga:source', 'filters' => 'ga:medium==cpa,ga:medium==cpc,ga:medium==cpm,ga:medium==cpp,ga:medium==cpv,ga:medium==ppc'])->totalsForAllResults['ga:users'],
                "website Global Rank" => $global_rank,
                "webiste local Rank" => $localRank,
                // "backLinks" => $linksto
            ];

            dd($data);
            // } else {
            //     dd('No backlinks');
            // }
        }
    }




    public function accountName($analytics, $google)
    {

        $accounts = $analytics->management_accounts->listManagementAccounts();
        $items = $accounts->getItems();


        $token = $google->getAccessToken();
        $realToken = $token['access_token'];


        return view('accounts', compact('items', 'realToken'));
    }
    public function ajaxRequestPost(Request $req)
    {

        $google = new Client();
        // dd($user);
        $google->setClientId("642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com");
        $google->setApplicationName("Laravel");
        $google->setDeveloperKey('AIzaSyBL3-zFZMUSXqQJm8ZuaISFSDID1JBIewU');
        $google->setClientSecret("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");
        // $google->setRedirectUri("https://ebef-2405-201-400e-d9-b4ba-ef13-73fa-6ebc.ngrok.io/callback/google");

        $google->setAccessToken(json_encode(array('access_token' => $req->token)));
        $google->addScope($this->scopes);
        $analytics = new GoogleAnalytics($google);
        $properties = $analytics->management_webproperties->listManagementWebproperties($req->id)->getItems();
        // \Log::info($input);


        # code...
        return response()->json(['properties' => $properties]);
    }

    public function profiles(Request $req)
    {
        $google = new Client();
        // dd($user);
        $google->setClientId("642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com");
        $google->setApplicationName("Laravel");
        $google->setDeveloperKey('AIzaSyBL3-zFZMUSXqQJm8ZuaISFSDID1JBIewU');
        $google->setClientSecret("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");
        // $google->setRedirectUri("https://ebef-2405-201-400e-d9-b4ba-ef13-73fa-6ebc.ngrok.io/callback/google");

        $google->setAccessToken(json_encode(array('access_token' => $req->token)));
        $google->addScope($this->scopes);
        $analytics = new GoogleAnalytics($google);
        $profiles = $analytics->management_profiles->listManagementProfiles($req->account_id, $req->id)->getItems();
        // \Log::info($input);


        # code...
        return response()->json(['profiles' => $profiles]);
    }


    public function propertyDetails()
    {
        $req = Request();
        $google = new Client();
        // dd($user);
        $google->setClientId("642297796375-bfhrfa0pp3unfnqstio3k32uqvhqbn5v.apps.googleusercontent.com");
        $google->setApplicationName("Laravel");
        $google->setDeveloperKey('AIzaSyBL3-zFZMUSXqQJm8ZuaISFSDID1JBIewU');
        $google->setClientSecret("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");
        $google->setRedirectUri("https://gmail.in/callback/google");

        $google->setAccessToken(json_encode(array('access_token' => $req->token)));
        $google->addScope($this->scopes);
        $analytics = new GoogleAnalytics($google);


        $properties = $analytics->management_webproperties
            ->listManagementWebproperties($req->account_id);
        $propertyItems = $properties->getItems();
        foreach ($propertyItems as $items) {
            $id = $items->id;
            $profiles = $analytics->management_profiles
                ->listManagementProfiles($req->account_id, $id);
        }
        $profileItems = $profiles->getItems();

        $data = ['proeperty' => $propertyItems, 'profiles' => $profileItems];
        dd($data);
    }
}
