<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ImageController extends Controller
{
    public function upload(Request $request)
    {
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the validation rules as needed
        ]);

        $imagePath = $request->file('image')->store('images'); // Store the image in the 'images' directory

        return response()->json(['imageUrl' => asset('storage/' . $imagePath)]);
    }
}
