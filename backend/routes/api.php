<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
	return $request->user();
});

Route::get('/users', function () {
	return [
		"data" => [
			"name" => "Ian",
			"age" => 25
		]
	];
});
