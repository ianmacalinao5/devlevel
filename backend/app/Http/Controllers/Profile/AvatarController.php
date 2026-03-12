<?php

namespace App\Http\Controllers\Profile;

use App\Http\Controllers\Controller;
use App\Http\Requests\Profile\AvatarRequest;
use Illuminate\Support\Facades\Storage;

class AvatarController extends Controller
{
	public function update(AvatarRequest $request)
	{
		$user = $request->user();

		// delete old avatar if exists
		if ($user->avatar) {
			Storage::disk('public')->delete($user->avatar);
		}

		// store new avatar
		$path = $request->file('avatar')->store('avatars', 'public');

		$user->update([
			'avatar' => $path
		]);

		return response()->json([
			'avatar' => $path
		]);
	}
}
