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


            $data =  $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-26', '2022-03-05', 'ga:newUsers,ga:users,ga:bounceRate,ga:adClicks,ga:impressions')->totalsForAllResults;
                $traffic_chanels = $ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-26', '2022-03-05', 'ga:users', ['dimensions'=> 'ga:channelGrouping', 'sort' => '-ga:users'])->getRows();
            $data2 = [

                "number of keyword" => count($ana->data_ga->get('ga:' . $req->profile_id . '', '2022-02-26', '2022-03-05', 'ga:sessions', ['dimensions' => 'ga:keyword', 'sort' => 'ga:sessions'])),
                "new Users" => (int) $data['ga:newUsers'],
                "users" => (int)$data['ga:users'],
                "bounceRate" => (int)$data['ga:bounceRate'],
                "clicks" => (int)$data['ga:adClicks'],
                "impressions" => (int)$data['ga:impressions'],
                "paid Search" => (int)$traffic_chanels[0][1],
                "Display Search" => (int)$traffic_chanels[1][1],
                "organic Search" => (int)$traffic_chanels[2][1],
                "Direct Users" => (int)$traffic_chanels[3][1],
                "Social Search" => (int)$traffic_chanels[4][1],
                "Referral " => (int)$traffic_chanels[5][1],
                "local Rank" => (int)$localRank,
                "global Rank" => (int)$global_rank



            ];

            dd($data2);
        
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
