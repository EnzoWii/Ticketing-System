<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ArticleController;
use App\Http\Controllers\ImageController;

use App\Http\Controllers\TicketController;
use App\Http\Controllers\DashboardController;

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::post('/tickets', [TicketController::class, 'store'])->name('tickets.store');
Route::get('/', [ArticleController::class, 'getFive'])->name('welcome');

// routes/web.php

Route::post('/upload-image', [ImageController::class, 'upload'])->name('upload.image');


Route::get('/dashboard',  [DashboardController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

//test
Route::get('/faq', function () {
    return Inertia::render('FAQ');
})->middleware(['auth', 'verified'])->name('FAQ');

Route::get('/facilitator-tickets', function () {
    return Inertia::render('LabTickets');
})->middleware(['auth', 'verified', 'role:facilitators'])->name('LabTickets');

Route::get('/facilitator-faq', function () {
    return Inertia::render('LabFAQ');
})->middleware(['auth', 'verified', 'role:facilitators'])->name('LabFAQ');

Route::get('/facilitator-dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified', 'role:facilitators'])->name('LabDashboard');



Route::get('/admin-dashboard', function () {
    return Inertia::render('AdminDashboard');
})->middleware(['auth', 'verified', 'role:admin'])->name('AdminDashboard');

Route::get('/cms', [ArticleController::class, 'index'])->middleware(['auth', 'verified', 'role:facilitators'])->name('articles.index');

Route::post('/cms', [ArticleController::class, 'store'])->middleware(['auth', 'verified', 'role:facilitators'])->name('articles.store');
Route::put('/article/{id}', [ArticleController::class, 'update'])->middleware(['auth', 'verified', 'role:facilitators'])->name('articles.update');
Route::delete('/article/{id}', [ArticleController::class, 'destroy'])->middleware(['auth', 'verified', 'role:facilitators'])->name('article.destroy');

Route::get('/articles/{id}', [ArticleController::class, 'show'])->middleware(['auth', 'verified'])->name('article.show');


Route::get('/tickets', [TicketController::class, 'index'])->middleware(['auth', 'verified'])->name('Tickets');
Route::put('/tickets/{id}', [TicketController::class, 'updateColumn'])->middleware(['auth', 'verified'])->name('update.ticket.column');


Route::get('/ticket-show', function () {
    return Inertia::render('TicketShow');
})->middleware(['auth', 'verified'])->name('TicketShow');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
