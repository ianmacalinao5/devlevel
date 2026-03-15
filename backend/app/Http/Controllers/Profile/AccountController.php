<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\NewNameRequest;
use Illuminate\Http\Request;

class AccountController extends Controller
{
	public function newName(NewNameRequest $request)
	{
		$user = $request->user();

		$user->update([
			'name' => $request->name,
		]);

		return response()->json([
			'message' => 'Name updated successfully',
			'user' => $user,
		]);
	}

	public function deleteAccount(Request $request)
	{
		$user = $request->user();

		$user->tokens()->delete();
		$user->delete();

		return response()->json([
			'message' => 'Account deleted successfully'
		]);
	}
}
