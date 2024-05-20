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
    public function getFive()
    {
        $latestArticles = Article::orderBy('created_at', 'desc')->get();
        return Inertia::render('Welcome', [
            'latestArticle' => $latestArticles,
        ]);
    }
    public function getLatestArticles()
{
    $latestArticles = Article::orderBy('created_at', 'desc')->get();
    return Inertia::render('Welcome', [
        'latestArticles' => $latestArticles,
    ]);
}
    
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtext' => 'required',
            'content' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);
        $imageName = null;

        if ($request->hasFile('image')) {
            $imageName = time() . '' . $request->image->hashName();
            $request->image->storeAs('public/images', $imageName);
        }
        Article::create([
            'title' => $request->title,
            'subtext' => $request->subtext,
            'content' => $request->content,
            'image' => $imageName,
        ]);

        return redirect()->back()->with('success', 'Article created successfully.');
    }
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'subtext' => 'required',
            'content' => 'required'
        ]);

        $article = Article::findOrFail($id);

        $article->update([
            'title' => $request->title,
            'subtext' => $request->subtext,
            'content' => $request->content
        ]);

        return redirect()->back()->with('success', 'Article updated successfully.');
    }
    public function destroy($id)
    {
        $article = Article::findOrFail($id);


        $article->delete();

        return redirect()->back()->with('success', 'Articcle deleted successfully');
    }
}
