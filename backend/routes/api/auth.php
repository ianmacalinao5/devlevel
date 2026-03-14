<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\SignupController;
use App\Http\Controllers\Profile\AvatarController;
use App\Http\Controllers\Profile\NameEmailController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->group(function () {

	Route::get('/user', function (Request $request) {
		return $request->user();
	});

	Route::post('/logout', [LoginController::class, 'logout']);
	Route::post('/profile/avatar', [AvatarController::class, 'update']);
	Route::patch('profile/name', [NameEmailController::class, 'newName']);
});

Route::post('/signup', [SignupController::class, 'store']);
Route::post('/login', [LoginController::class, 'login']);
