<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserDashboard extends Controller
{
    public function index()
    {
        $latestArticles = Article::orderBy('created_at', 'desc')->take(3)->get();
        return Inertia::render('Welcome', [
            'latestArticle' => $latestArticles,
        ]);
    }
}
