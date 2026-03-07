<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Services\AuthService;
use Illuminate\Http\Request;

class LoginController extends Controller
{
	public function login(LoginRequest $request, AuthService $authService)
	{
		$data = $authService->login($request->validated());

		return response()->json([
			'message' => 'Login successful',
			'user' => $data['user'],
			'token' => $data['token'],
		]);
	}
}
