<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        return inertia('CMSPage', ['articles' => $articles]);
    }
    public function show($id)
    {
        $article = Article::findOrFail($id);

        return Inertia::render('Article', [
            'article' => $article,
        ]);
    }
    public function getFive(){
        $latestArticles = Article::orderBy('created_at', 'desc')->take(5)->get();
        return Inertia::render('Welcome', [
            'latestArticle' => $latestArticles,
        ]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtext' => 'required|string',
            'content' => 'required',
        ]);

        Article::create([
            'title' => $request->title,
            'subtext' => $request->subtext,
            'content' => $request->content,
        ]);

        return redirect()->back()->with('success', 'Article created successfully.');
    }
}
