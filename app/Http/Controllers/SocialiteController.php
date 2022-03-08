<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class SocialiteController extends Controller
{
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
    //
    public function social()
    {
        $req = Request();
        // $auth = Socialite::driver($req->provider)->stateless()->user();
        // $email = $auth->getEmail();
        // $avatar = $auth->getAvatar();
        // return response()->json(compact('token', 'avatar'));
        return Socialite::driver('google')->scopes($this->scopes)->with(["access_type" => "offline", "prompt" => "consent select_account"])->redirect();

    }
    public function handleCallback()
    {
        # code...

        $user = Socialite::driver('google')->user();
        return $user;
    }
}
