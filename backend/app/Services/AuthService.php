<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthService
{
	public function signup(array $data)
	{
		$data['password'] = Hash::make($data['password']);

		return User::create($data);
	}
}
