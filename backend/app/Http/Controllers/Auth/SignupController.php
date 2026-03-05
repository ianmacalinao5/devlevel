<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\SignupRequest;
use App\Services\AuthService;

class SignupController extends Controller
{
	public function store(SignupRequest $request, AuthService $authService)
	{
		$authService->signup($request->validated());

		return response()->json([
			'message' => 'Account created successfully'
		], 201);
	}
}
