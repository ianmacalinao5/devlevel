<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthService
{
	public function signup(array $data)
	{
		$data['password'] = Hash::make($data['password']);

		return User::create($data);
	}

	public function login(array $credentials)
	{
		$user = User::where('email', $credentials['email'])->first();

		if (!$user || !Hash::check($credentials['password'], $user->password)) {
			throw ValidationException::withMessages([
				'email' => ['Invalid email or password.'],
			]);
		}

		$remember = $credentials['remember'] ?? false;

		$expiresAt = $remember
			? now()->addDays(30)
			: now()->addHours(2);

		$token = $user->createToken(
			'auth_token',
			['*'],
			$expiresAt
		)->plainTextToken;

		return [
			'user' => $user,
			'token' => $token
		];
	}
}
